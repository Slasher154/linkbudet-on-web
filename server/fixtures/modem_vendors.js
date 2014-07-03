/**
 * Created by Dome on 7/1/14 AD.
 */

Meteor.methods({
    'insert_modem_vendors': function(){
        (function(){
            var vendors = [
              'Gilat','Hughes','Comtech','IPSTAR','IDirect','Romantis','Newtec','Novelsat','Paradise','Advantech','SatExpander','Standard'
            ];
            _.each(vendors,function(item){
                ModemVendors.insert({
                    name: item
                });
            })
        })();
    }
})