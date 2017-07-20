/**
 * Created by Dome on 7/29/14 AD.
 */

Meteor.methods({
    'insert_antenna_vendors': function(){
        (function(){
            var vendors = [
                'Advantech','Advent','Andrew','Anhui Sun Create Electronics','AVL Technologies','Chinasat','Cobham','Comsat','Elbit Systems','EM Solutions','GD Satcom','Gilat','Intellian','KNS','Patriot','Probecom','Raysat','SatOne','Satview','Skyware','Thinkom','Triax','Truesat','Viasat','Standard'
            ];
            _.each(vendors,function(item){
                AntennaVendors.insert({
                    name: item
                });
            })
        })();
    }
})