/**
 * Created by Dome on 4/22/14 AD.
 */

IsAdmin = function(userId){
    return Roles.userIsInRole(userId,['admin']);
}

ToTitleCase = function(str){
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}