/**
 * Created by Dome on 4/25/14 AD.
 */
Template.selectedLocations.events({
    'click .removeLocation': function(e){
        e.preventDefault();
        var loc = $(e.currentTarget).siblings('span').text().trim();
        var new_loc_arr = _.filter(Session.get('selectedLocations'), function(item){
            return item !== loc;
        });
        Session.set('selectedLocations', new_loc_arr);

    }
})