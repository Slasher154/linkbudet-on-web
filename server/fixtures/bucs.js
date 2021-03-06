/**
 * Created by Dome on 6/2/14 AD.
 */

Meteor.methods({
    'insert_bucs': function () {
        var standard_size = [1, 2, 4, 6, 8, 16];

        _.each(standard_size, function (num) {
            Bucs.insert({
                type: 'Standard',
                category: 'buc',
                size: num,
                name: num + "W",
                ifl: 0.3,
                obo: 0.5
            });
        });
    }
})
