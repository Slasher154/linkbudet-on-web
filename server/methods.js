/**
 * Created by Dome on 5/26/14 AD.
 */

Meteor.methods({
    // Return four co-ordinates surrounding the given lat/lon
    get_rain_points: function (lat, lon) {
        // check if lat,lon is valid
        if (lat > 90 || lat < -90 || lon > 180 || lon < -180) {
            throw new Meteor.Error(422, 'Lat/Lon is not valid.');
        }
        // the database grid contains lat/lon at 1.5 degree step, so find the 2 lat and 2 lons which are closest to the given point
        var x_lat = Math.floor(lat / 1.5);
        var x_lon = Math.floor(lon / 1.5);
        var y1 = x_lat * 1.5;
        var y2 = (x_lat + 1) * 1.5;
        var x1 = x_lon * 1.5;
        var x2 = (x_lon + 1) * 1.5;
        console.log(y1 + " , " + y2 + " , " + x1 + " , " + x2);
        var f12 = RainData.findOne({lat: y2, lon: x1}).value;
        var f22 = RainData.findOne({lat: y2, lon: x2}).value;
        var f11 = RainData.findOne({lat: y1, lon: x1}).value;
        var f21 = RainData.findOne({lat: y1, lon: x2}).value;

        // Perform bi-linear interpolation
        // Source: http://en.wikipedia.org/wiki/Bilinear_interpolation

        // Linear interpolation in the x-axis for both y
        var fxy1 = linearInterpolation(lon, x1, x2, f11, f21);
        var fxy2 = linearInterpolation(lon, x1, x2, f12, f22);

        // Linear interpolation fxy1,fxy2 in the y-axis
        var rain = linearInterpolation(lat, y1, y2, fxy1, fxy2);

        console.log('topLeft = ' + f12 + ' topRight = ' + f22 + ' bottomLeft = ' + f11 + ' bottomRight = ' + f21);
        console.log('Rain 001 = ' + rain);
        return rain;
    }
})

function linearInterpolation(x, x1, x2, fx1, fx2){
    return ((fx2-fx1)/(x2-x1)) * (x - x1) + fx1;
}