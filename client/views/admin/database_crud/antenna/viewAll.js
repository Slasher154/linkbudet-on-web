/**
 * Created by Dome on 7/1/14 AD.
 */

Template.antennaViewAll.tableRows = function(){
    return ['Name','Vendor','Size (m)','Remarks','Action'];
}

Template.antennaViewAll.antennas = function(){
    return Antennas.find().fetch();
}


Template.antennaViewAll.events({
    'click a.remove': function(e){
        e.preventDefault();
        if(confirm("Delete this antenna?")){
            var _id = $(e.currentTarget).attr('value');
            var name = Antennas.findOne({_id:_id}).name;
            Antennas.remove({_id:_id}, function(error){
                if(error){
                    Errors.throw(error.reason);
                }
                else{
                    alert(name + ' is successfully removed.');
                    Router.go('antennaViewAll');
                }
            });
        }
    }
})