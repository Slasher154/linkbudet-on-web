/**
 * Created by Dome on 4/22/14 AD.
 */

IsAdmin = function(userId){
    return Roles.userIsInRole(userId,['admin']);
}