/**
 * Created by Dome on 7/29/14 AD.
 */

Template.modemVendorViewAll.tableRows = function(){
    return ["Name","Actions"];
}

Template.modemVendorViewAll.modem_vendors = function(){
    return ModemVendors.find().fetch();
}

Template.modemVendorViewAll.events({
    'click a.remove': function(e){
        e.preventDefault();
        if(confirm("Delete this modem vendor?")){
            var _id = $(e.currentTarget).attr('value');
            var name = ModemVendors.findOne({_id:_id}).name;
            ModemVendors.remove({_id:_id}, function(error){
                if(error){
                    Errors.throw(error.reason);
                }
                else{
                    alert(name + ' is successfully removed.');
                    Router.go('modemVendorViewAll');
                }
            });
        }
    }
})