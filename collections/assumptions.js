/**
 * Created by Dome on 5/7/14 AD.
 */

Assumptions = new Meteor.Collection('assumptions');

Meteor.methods({
    add_assumption: function(assumption){
        return Assumptions.insert(assumption);
    },
    run_assumption: function(assumption){
        return "";
    }

})

