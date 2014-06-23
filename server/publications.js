/**
 * Created by thanatv on 7/03/14.
 */
Meteor.publish('satellites', function(){
    return Satellites.find();
});

Meteor.publish('channels',function(options){
    return Channels.find({}, options);
});

Meteor.publish('modems', function(options){
    return Modems.find({}, options);
})

Meteor.publish('contours', function(){
    return Contours.find();
})

Meteor.publish('locations', function(){
    return Locations.find();
})

Meteor.publish('constants', function(){
    return Constants.find();
})

Meteor.publish('antennas', function(){
    return Antennas.find();
})

Meteor.publish('bucs', function(){
    return Bucs.find();
})

Meteor.publish('intf', function(){
    return Intf.find();
})

Meteor.publish('pdfs', function(){
    return Pdfs.find();
})

Meteor.publish('link_requests', function(){
    return LinkRequests.find();
})

Meteor.publish('singleRequest', function(id){
    return LinkRequests.find({_id:id});
})

Meteor.publish('requestsBySatellite', function(sat){
    //var sat = Satellites.findOne({_id:id});
    return LinkRequests.find({'assumptions.satellite':sat});
})
