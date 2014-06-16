/**
 * Created by Dome on 4/21/14 AD.
 */
Template.satellites.satelliteList = function () {
    return {
        //value: _.pluck(Satellites.find().fetch(), 'name')
        value: ["Thaicom 5","Thaicom 6","Thaicom 7","IPSTAR"]
    }
}

Template.satellites.events({
    'click label': function (e) {
        e.preventDefault();
        var sat_name = $(e.currentTarget).find('input').val();
        var satellite = Satellites.findOne({'name': sat_name});
        Session.set('isConventional', satellite.type === "Conventional");
        Session.set('isBroadband', satellite.type === "Broadband");
        Session.set('satellite', satellite);

        // set default session values
        if(Session.get('isBroadband')){
            Session.set('findBestChannel', false);
            Session.set('findMaxContour', false);
            Session.set('recommendAntenna', false);
            Session.set('recommendBuc', false);
        }





    }
})