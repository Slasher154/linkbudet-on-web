/**
 * Created by Dome on 7/24/14 AD.
 */

Meteor.methods({
    'insert_gain_improvements': function(){
        (function(){

            var data = [
                {
                    size: 0.84,
                    data: [
                        {degrees:2.7, value: 0},
                        {degrees:3.5, value: 6.4},
                        {degrees:4.5, value: 7.7}
                    ]
                },
                {
                    size: 1,
                    data: [
                        {degrees:2.7, value: 3},
                        {degrees:3.5, value: 2.1},
                        {degrees:4.5, value: 2.1}
                    ]
                },
                {
                    size: 1.2,
                    data: [
                        {degrees:2.7, value: 5.9},
                        {degrees:3.5, value: 7.6},
                        {degrees:4.5, value: 8.2}
                    ]
                },
                {
                    size: 1.8,
                    data: [
                        {degrees:2.7, value:5.4},
                        {degrees:3.5, value:7.1},
                        {degrees:4.5, value:6.6}
                    ]
                },
                {
                    size: 2.4,
                    data: [
                        {degrees:2.7, value:1.9},
                        {degrees:3.5, value:3.1},
                        {degrees:4.5, value:2.4}
                    ]
                }

            ]

            _.each(data, function(item){
                GainImprovements.insert(item);
            })

        })();
    }
})