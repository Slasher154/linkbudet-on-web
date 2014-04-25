/**
 * Created by Dome on 4/25/14 AD.
 */
Template.findLocationByName.events({
    'change input': function(e){
        var loc = $(e.currentTarget).val();
        if(loc!==''){
            //
            if(Session.get('selectedLocations')) {
                var loc_arr = Session.get('selectedLocations');
                loc_arr.push(loc);
                Session.set('selectedLocations', loc_arr);
            }
            else{
                var loc_arr = [];
                loc_arr.push(loc);
                Session.set('selectedLocations',loc_arr);
            }
        }
    }
})