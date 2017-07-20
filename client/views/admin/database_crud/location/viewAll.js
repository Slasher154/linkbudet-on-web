/**
 * Created by Dome on 6/26/14 AD.
 */

Template.locationViewAll.tableRows = function(){
    return ['Name','Country','City','Latitude','Longitude','Actions']
}

Template.locationViewAll.locations = function(){
    return Locations.find().fetch();
}


Template.locationViewAll.events({
    'click a.remove': function(e){
        e.preventDefault();
        if(confirm("Delete this location?")){
            var _id = $(e.currentTarget).attr('value');
            var name = Locations.findOne({_id:_id}).name;
            Locations.remove({_id:_id}, function(error){
                if(error){
                    Errors.throw(error.reason);
                }
                else{
                    alert(name + ' is successfully removed.');
                    Router.go('locationViewAll');
                }
            });
        }
    }
})