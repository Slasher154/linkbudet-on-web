/**
 * Created by Dome on 6/23/14 AD.
 */

Template.authen.rendered = function(){
    var oAuthServiceUrl = 'https://thcom2.thaicom.net/authservice/AuthenticationSystem.asmx?op=GetAuthen';

    Meteor.call('test_authen', function(error, data){
        if(error){
            console.log("Error:" + error.reason);
        }
        else{
            console.log("Response = " + data);
        }

    });
}