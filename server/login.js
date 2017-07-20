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
    // var api_key = "A42994C48598F2A278D892F2AB1CB5F8231CFF55"; // api key for development machine (for ip 202.183.220.14)
    //var api_key = "C081C92D1F0D9A646DA00A40A85C7424C4DAF820"; // api key for development machine (for ip 202.183.220.245)
    var api_key = "0A832333-E52D-43EF-89E3-B64AD2C77621"; // api key for development machine (for ip 172.18.200.73)
    console.log('Path = ' + my_path);
    if (my_path.substring(0,12) == '/home/thanat') {
        console.log('This is development machine!!');
        sys_name = "FRQP"
    }
    if (my_path.substring(0, 12) !== '/home/thanat') {
        //api_key = "2A94C4ADCCDCC29242B18ED6C13E4D7B8382F2AB"; // api key for production server (for ip 172.18.6.99)
        //api_key = "EDD523C7A6365F7F322B44989881843438D6C994"; // api key for production server (for ip 203.192.35.61)
        api_key = "CD2C40930750D340A87E70973C09DC23A7C97A9B" // api key for production server (for ip 172.18.20.113)
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
                emp_profile = authen_result.EmpProfile;
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

    // comment this in real usage
    /*
    if(username=="37090"){
        authentication.authenticated = true;
    }
    // authentication.authenticated = true;
    */

    if(authentication.authenticated){
        var userId = null;
        var user = Meteor.users.findOne({username: username});
        // if user is not found in our Meteor database, add this user along with other data except password
        if (!user) {

            var emp = authentication.emp_profile;

            // check roles for this new user by department name
            var roles = [];

            // grants admin roles for CSD and CND
            if(emp.Dp == "DP-CS" || emp.Dp == "DP-CN"){
                roles.push("admin");
            }

            // create a new user with username, name, department and roles
            userId = Meteor.users.insert({
                username: username,
                bu: emp.Bu,
                dp: emp.Dp,
                email: emp.Email,
                gender: emp.Gender,
                firstname: emp.FirstName,
                lastname: emp.LastName,
                fullname: emp.FirstName + " " + emp.LastName,
                position: emp.Position,
                roles:roles
            });

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
        throw new Meteor.Error(403,authentication.msg);
    }



})

function beginAuthen(username, password) {

}

