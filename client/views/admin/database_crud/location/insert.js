/**
 * Created by Dome on 6/25/14 AD.
 */

Template.locationInsert.events({
    'submit form': function(e){
        e.preventDefault();

        // validate input
        var name = $('#name').val();
        var country = $('#country').val();
        var city = $('#city').val();
        var lat = Number($('#lat').val());
        var lon = Number($('#lon').val());
        var loc_data = [];
        var loc_data_form_groups = $('.data-form');
        _.each(loc_data_form_groups, function(item){
            var satellite = $(item).find('.satellite option:selected').val();
            var beam = $(item).find('.beam option:selected').val();
            var type = $(item).find('.type option:selected').val();
            var value = Number($(item).find('.value').val());
            loc_data.push({
                satellite: satellite,
                beam: beam,
                type: type,
                value: value
            })
            console.log('Sat = ' + satellite + ' beam = ' + beam + ' type = ' + type + ' value = ' + value);
        })

        if(name === '' || country === '' || city === ''){
            Errors.throw('Please fill in all the fields.');
            return false;
        }
        else if(lon < -180 || lon > 180 || lat < -90 || lon > 90){
            Errors.throw('Lat or Lon not valid');
            return false;
        }
        else{
            Locations.insert({
                name: name,
                country: country,
                city: city,
                lat: lat,
                lon: lon,
                data: loc_data
            }, function(error, _id){
                if(error){
                    Errors.throw(error.reason);
                }
                else{
                    Router.go('locationView',{_id: _id});
                }

            });
        }

    }
})