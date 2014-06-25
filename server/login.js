/**
 * Created by Dome on 6/24/14 AD.
 */

var Accounts = Package['accounts-base'].Accounts;

Accounts.registerLoginHandler(function(loginRequest){

    // authenticate with Thaicom open authentication server

    // put code here


    var userId = null;
    var user = Meteor.users.findOne({username: 'admin'});
    if(!user) {
        userId = Meteor.users.insert({username: 'admin'});
    } else {
        userId = user._id;
    }

    //send loggedin user's user id
    return {userId: userId};
})

function beginAuthen(username, password){

}