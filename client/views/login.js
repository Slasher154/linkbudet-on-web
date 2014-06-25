/**
 * Created by Dome on 6/24/14 AD.
 */

var Accounts = Package['accounts-base'].Accounts;

Template.login.events({
    "submit #login-form": function(event, template) {
        event.preventDefault();
        console.log('Form submitted');
        var loginRequest = {username: template.find('#username').value, password: template.find("#password").value};

        //send the login request
        Accounts.callLoginMethod({
            methodArguments: [loginRequest],
            userCallback: function(error){
                //console.log(error.message);
            }
        });
    }
});