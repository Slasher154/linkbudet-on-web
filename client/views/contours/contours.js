/**
 * Created by Dome on 7/21/14 AD.
 */

// Declare map parameter
var map;
var defaultViewOptions = {center: new L.LatLng(9, 100), zoom: 3};
var contourStyle = function (feature) {
    return {
        color: "red",
        weight: 2,
        fill: false
    }
}

var contourFilter = function (feature, layer) {
    return feature.properties && feature.properties.isVisible;
}
var onMapClick = function(e){
    AddMarker(e.latlng.lat, e.latlng.lng);
}
var selectedContours = L.geoJson({}, {
    style: contourStyle,
    filter: contourFilter,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
            icon: L.divIcon({
                html: '<strong>' + feature.properties.beam + '</strong>',
                className: 'beam-label-div'
            })
        });
    }
});
var selectedPoints = L.geoJson();

var contours = [];
var markers = [];


Template.contours.rendered = function () {

    L.Icon.Default.imagePath = 'packages/leaflet/images'

    map = new L.Map('map', defaultViewOptions);
    /*L.tileLayer('http://{s}.tile.cloudmade.com/4311251117574E11ABB040C5E6BB4489/997/256/{z}/{x}/{y}.png', {
     attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
     maxZoom: 18
     }).addTo(map);*/
    var attributionText = 'Tiles Courtesy of <a href="http://www.mapquest.com/" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png">'
    attributionText = attributionText + ' data © <a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'
    var baseTileLayer = new L.tileLayer('http://otile1.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.jpg', {
        maxZoom: 16,
        attribution: attributionText

    })

    baseTileLayer.addTo(map);

    // bind the map click event
    map.on('click', onMapClick);

}

Template.contours.events({

    'change #satellitePicker': function (e, t) {
        e.preventDefault();

        // reset the map when satellite is changed
        ResetMap();

        var sat_name = $(e.target).val();
        var satellite = Satellites.findOne({'name': sat_name});
        if (satellite.type === "Conventional") {
            var beam_data = {
                beams: _.uniq(_.pluck(Channels.find({satellite: satellite.name}).fetch(), 'uplink_beam'))
            }
            $('.beam-country').remove();
            UI.insert(UI.renderWithData(Template.conventionalContourPanel, beam_data), $('#beam-selection').get(0));
        }
        else if (satellite.type === "Broadband") {
            var country_data = {
                countries: _.uniq(_.pluck(Channels.find({satellite: satellite.name}, {fields: {country: 1}, sort: {country: 1}}).fetch(), 'country'))
            }
            $('.beam-country').remove();
            UI.insert(UI.renderWithData(Template.broadbandContourPanel, country_data), $('#beam-selection').get(0));
        }
        else {
        }
    }

})

Template.conventionalContourPanel.events({
    'change select': function (e) {
        e.preventDefault();
        var beam_name = $(e.target).val();

    }
})

Template.broadbandContourPanel.events({
    'change select': function (e) {
        e.preventDefault();
        var sat_name = $(e.target).parents('#beam-selection').find('#satellitePicker option:selected').val();
        var path = $(e.target).parents('#beam-selection').find('#typePicker option:selected').val();
        var country = $(e.target).val();
        var beam_type = path == "downlink" ? "forward" : "return";
        var beams = Channels.find({satellite: sat_name, country: country, type: beam_type}).fetch();
        var beam_data = {
            beams: _.map(beams, function (item) {
                return {
                    name: item[path + '_beam'],
                    selected: true
                }
            })
        }

        // Remove old beam list if country is changed
        $('.beam-list').remove();

        UI.insert(UI.renderWithData(Template.beamList, beam_data), $('#beam-selection').get(0));

        // Add the beam contours to the map

        // Create the request object in the form of 
        /*
         [
         {beam: "203", type:"downlink", satellite: "IPSTAR", interested_contours: [-1,-2,-3]},
         {beam: "204", type:"downlink", satellite: "IPSTAR", interested_contours: [-1,-2,-3]},
         {beam: "207", type:"downlink", satellite: "IPSTAR", interested_contours: [-1,-2,-3]},
         {beam: "209", type:"downlink", satellite: "IPSTAR", interested_contours: [-1,-2,-3]},
         {beam: "212", type:"downlink", satellite: "IPSTAR", interested_contours: [-1,-2,-3]},
         ]
         */
        // The interested_contours here would be EOC contour only
        var requested_object = _.map(beams, function (item) {
            return {
                beam: item[path + '_beam'],
                type: path,
                satellite: sat_name,
                interested_contours: [RoundHalf(item.contour_eoc)] // Round off to nearest 0.5 as the contour data in our database is kept in 0.5 steps
            };
        });

        Meteor.call('get_contour_objects', requested_object, function (error, data) {
            if (error) {
                Errors.throw(error.reason);
            }
            else {
                contours = [];
                selectedContours.clearLayers(); // Clear layers when country is changed
                _.each(data, function (item) {
                    _.each(item.geoJsonObj, function (item2) {
                        _.extend(item2.properties, {isVisible: true, beam: item.beam})
                        contours.push(item2); // Keep it in array for reference to add it later after remove
                        selectedContours.addData(item2);

                        // create a point geojson feature to add as a beam label in the map (for IPSTAR only)
                        if (IsBroadband(sat_name)) {
                           AddBeamLabel(item.beam);
                        }


                    })
                })
            }

            selectedContours.addTo(map);
            map.fitBounds(selectedContours.getBounds());
        })

    }
})

Template.beamList.events({
    // checkbox for beam is clicked, we change the visible status of that beam in the Geojson layers
    'click input': function (e) {
        var checked = $(e.currentTarget).is(':checked');
        var beam_name = $(e.currentTarget).attr('name');
        // if user ticks off the beam, remove the layer
        if (!checked) {
            RemoveBeamFromMap(beam_name);
        }
        // if user checks the beam, add the layer back
        else {
            var featured = _.filter(contours, function (item) {
                return item.properties.beam == beam_name;
            })
            selectedContours.addData(featured[0]);
            AddBeamLabel(beam_name);
        }

    }
})

Template.addMarker.events({
    'click .add-marker': function(e){
        e.preventDefault();
        var lat = $('.lat').val();
        var lon = $('.lon').val();

        // validate lat lon
        if(lat > 90 || lat < -90 || lon > 180 || lon < -180){
            alert('Lat/lon is not valid.');
        }
        else{
            AddMarker(lat,lon);
        }

    },
    'click .clear-markers': function(e){
        e.preventDefault();
        _.each(markers, function(marker){
            map.removeLayer(marker);
        });
        markers = [];
    }
})

function AddBeamLabel(beam_name){
    var sat_name = $('#satellitePicker option:selected').val();
    var path = $('#typePicker option:selected').val();
    var query = {};
    query[path + '_beam'] = beam_name; // if path = downlink, find beam name from downlink beam (forward beams), else, find beam name from uplink beam (return beams)
    query.satellite = sat_name;
    var beam = Channels.findOne(query);

    // add point of beam lat,lon (likely to be beam center) as a point to show beam label
    // the points will be automatically converted to marker, which we set to simple div icon
    // (see selectedContorus options on the top)
    selectedContours.addData(CreatePointFeature(beam_name, beam.lat, beam.lon));
}

function RemoveBeamFromMap(beam) {
    selectedContours.eachLayer(function (layer) {
        if (beam == layer.feature.properties.beam) {
            selectedContours.removeLayer(layer);
        }
    });
}

function AddMarker(lat,lon){
    var marker = L.marker([lat,lon]);
    markers.push(marker);
    map.addLayer(marker);
}

function CreatePointFeature(beam_name, lat, lon) {
    return {
        type: "Feature",
        properties: {
            beam: beam_name,
            isVisible: true
        },
        geometry: {
            type: "Point",
            coordinates: [lon, lat]
        }
    }
}





Template.contours.satellites = function () {
    return _.pluck(Satellites.find({isThaicom: true, isActive: true}).fetch(), 'name');
}

Template.contours.countries = function () {
    var sat = this.sat;
    if (sat) {
        var countries = Channels.find({satellite: sat.name}, {fields: {country: 1}, sort: {country: 1}}).fetch();
        return _.uniq(_.pluck(countries, 'country'));
    }
}

function RoundHalf(num) {
    num = Math.round(num * 2) / 2;
    return num;
}

function IsBroadband(sat) {
    return Satellites.findOne({name: sat}).type === "Broadband";
}

function ResetMap(){
    map.setView(defaultViewOptions.center, defaultViewOptions.zoom);
    contours = [];
    markers = [];
    selectedContours.clearLayers();

}