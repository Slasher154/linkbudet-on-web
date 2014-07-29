/**
 * Created by Dome on 7/29/14 AD.
 */

Template.antennaVendorViewAll.tableRows = function(){
    return ["Name","Actions"];
}

Template.antennaVendorViewAll.antenna_vendors = function(){
    return AntennaVendors.find().fetch();
}

Template.antennaVendorViewAll.events({
    'click a.remove': function(e){
        e.preventDefault();
        if(confirm("Delete this antenna vendor?")){
            var _id = $(e.currentTarget).attr('value');
            var name = AntennaVendors.findOne({_id:_id}).name;
            AntennaVendors.remove({_id:_id}, function(error){
                if(error){
                    Errors.throw(error.reason);
                }
                else{
                    alert(name + ' is successfully removed.');
                    Router.go('antennaVendorViewAll');
                }
            });
        }
    }
})