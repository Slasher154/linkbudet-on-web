/**
 * Created by Dome on 6/2/14 AD.
 */

Meteor.methods({
    'insert_antennas': function(){
        var standard_size = [0.84,1,1.2,1.8,2.4,3.8,4.5];

        _.each(standard_size, function(num){
            Antennas.insert({
                name: num + " m",
                type: 'Standard',
                size: num
            });
        });
    }
})