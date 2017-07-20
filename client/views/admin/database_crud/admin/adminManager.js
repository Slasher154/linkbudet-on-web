Template.adminManager.tableRows = function(){
    return ['Name','Department','Role'];
}

Template.adminManager.users = function(){
    return Meteor.users.find({},{sort:{name:1}}).fetch();
}

Template.adminManager.isUserAdmin = function(userId) {
    return Roles.userIsInRole(userId, 'admin');
}


Template.adminManager.events({
    'click a.promote': function(e){
        e.preventDefault();
        var _id = $(e.currentTarget).attr('value');
        console.log(_id);
        var user = Meteor.users.findOne({_id: _id});
        
        if(confirm("Promote " + user.fullname + " to admin?")){       
            
            Meteor.call('promote_to_admin', _id, function(error, result){
                if(error){
                    Errors.throw(error.reason);
                }
                else{
                    alert(user.fullname + ' is successfully prmoted to admin.');
                    Router.go('adminManager');
                }
            });
            
        }        
    },
    'click a.demote': function(e){
        e.preventDefault();
        var _id = $(e.currentTarget).attr('value');
        console.log(_id);
        var user = Meteor.users.findOne({_id: _id});
        
        if(confirm("Remove " + user.fullname + " from admin?")){       
            
            Meteor.call('demote_from_admin', _id, function(error, result){
                if(error){
                    Errors.throw(error.reason);
                }
                else{
                    alert(user.fullname + ' is successfully removed from admin.');
                    Router.go('adminManager');
                }
            });
            
        }        
    }
})
