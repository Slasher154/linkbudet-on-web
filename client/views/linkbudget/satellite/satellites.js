/**
 * Created by Dome on 4/21/14 AD.
 */
Template.satellites.satelliteList = function(){
    return {
        value: _.pluck(Satellites.find().fetch(),'name')
    }
}

Template.satellites.events({
        'click label': function(e){
            e.preventDefault();
            var sat_name = $(e.currentTarget).find('input').val();
            var satellite = Satellites.findOne({'name':sat_name});
            Session.set('isConventional', satellite.type==="Conventional");
            Session.set('isBroadband', satellite.type==="Broadband");
            Session.set('satellite', satellite);

        }
})