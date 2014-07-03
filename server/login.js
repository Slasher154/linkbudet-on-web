/**
 * Created by Dome on 6/24/14 AD.
 */

var Accounts = Package['accounts-base'].Accounts;

Accounts.registerLoginHandler(function (loginRequest) {

    // authenticate with Thaicom open authentication server

    var path = Meteor.require('path');
    var my_path = path.resolve(".");
    var Future = Meteor.require('fibers/future');

    var sys_name = "LNCL";
    var ip_address = headers.methodClientIP(this);

    var username = loginRequest.username;
    var password = loginRequest.password;

    // if my_path starts with '/Users' >> development machine (MAC)
    // else, it is production server
    var api_key = "A42994C48598F2A278D892F2AB1CB5F8231CFF55"; // api key for development machine
    if (my_path.substring(0, 6) !== '/Users') {
        api_key = "2A94C4ADCCDCC29242B18ED6C13E4D7B8382F2AB"; // api key for production server
    }

    // xml data for authentication. API Key, IP Address (of server, not related to ip address field, and system name must be matched with MIS database)
    // contact P'O+ (Teera R.) for more info
    var soap = Meteor.require('soap');
    var url = 'https://thcom2.thaicom.net/authservice/AuthenticationSystem.asmx?wsdl';
    var args = { param: {
        UserName: username,
        Password: password,
        System: sys_name,
        IP_Address: ip_address,
        APIKey: api_key
    }
    };
    var authenticated = false;
    var emp_profile = {};
    var msg = "";

    // we need to let this async call finish first before execute other mongodb operations

    // Set up a future
    var future = new Future();

    // call MIS open authen services
    soap.createClient(url, function (err, client) {
        client.GetAuthen(args, function (err, result) {
            if (!err) {
                var authen_result = result.GetAuthenResult;
                authenticated = authen_result.IsSuccess;
                msg = authen_result.Message;
                console.log('Success = ' + authen_result.IsSuccess);
                console.log('Message = ' + authen_result.Message);
                if(_.has(authen_result,'EmpProfile')){
                    emp_profile = authen_result.EmpProfile;
                    console.log('Id = ' + authen_result.EmpProfile.EmpId);
                }
                else{
                    console.log('There is no Emp Profile.');
                }
            }
            else {
                throw new Meteor.Error(403,err.message);
            }

            // return the authenticated status and the message from the server
            future.return({
                authenticated: authenticated,
                msg: msg,
                emp_profile: emp_profile
            })

        });
    });

    var authentication = future.wait();

    // my account can always login
    if(username=="37090") { authentication.authenticated = true; }

    if(authentication.authenticated){
        var userId = null;
        var user = Meteor.users.findOne({username: username});
        // if user is not found in our Meteor database, add this user along with other data except password
        if (!user) {

            // check roles for this new user by department name
            var roles = ['admin'];

            // create a new user with username, name, department and roles
            // TODO: Wait for EmpProfile
            userId = Meteor.users.insert({username: username, roles:roles});

            if(roles.length > 0){
                Roles.addUsersToRoles(userId, roles);
            }

        } else {
            userId = user._id;
        }

        //send logged in user's user id
        return {userId: userId};
    }
    else{
        throw new Meteor.Error(403,"Invalid username/password");
    }



})

function beginAuthen(username, password) {

}

