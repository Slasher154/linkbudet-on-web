/**
 * Created by Dome on 4/23/14 AD.
 */
Template.modemSelector.modems = function(){
    return _.pluck(Modems.find().fetch(),'name');
}