Meteor.users.allow({
	update: function(userId, doc, fields, modifier){
        return IsAdmin(userId);
    },
})