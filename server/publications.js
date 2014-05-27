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
