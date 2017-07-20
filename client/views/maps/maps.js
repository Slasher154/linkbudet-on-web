/**
 * Created by Dome on 4/23/14 AD.
 */

Template.maps.rendered = function(){

    // clear all session keys
    Session.keys = {};

    L.Icon.Default.imagePath = 'packages/leaflet/images'

    var map = new L.Map('map', {center: new L.LatLng(51.51, -0.11), zoom: 6});
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

}

Template.maps.satellites = function(){
    return _.pluck(Satellites.find().fetch(),'name');
}

Template.maps.beams = function(){
    // return all conventional beams if conventional satellite and path are selected
    if(Session.get('isConventional') && Session.get('path')){
        var beams = Channels.find({satellite:Session.get('satellite')})
    }
}

Template.maps.events({
    'change #satellitePicker': function(e){
        e.preventDefault();
        var sat_name = $(e.currentTarget).find('option:selected').val();
        if(sat_name!=='') {
            var satellite = Satellites.findOne({'name': sat_name});
            Session.set('isConventional', satellite.type === "Conventional");
            Session.set('isBroadband', satellite.type === "Broadband");
            Session.set('satellite', satellite);
        }
        else{
            delete Session.keys['isConventional'];
            delete Session.keys['isBroadband'];
            delete Session.keys['satellite'];
        }
    },
    'change #pathPicker' :function(e){
        e.preventDefault();
        var path = $(e.currentTarget).find('option:selected').val();
        if(path!==''){
            Session.set('path', path);
        }
    }

})