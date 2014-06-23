/**
 * Created by Dome on 5/27/14 AD.
 */

Meteor.methods({
    'insert_constants': function(){
        (function(){
            Constants.insert({title:"Boltzmann's Constant",value:-228.6, name:"k"});
            Constants.insert({title:"Speed of Light",value:300000000, name:"c_light"});
            Constants.insert({title:"Equatorial Earth Radius",value:6378.14, name:"earth_radius"});
            Constants.insert({title:"Loss between feed and LNA/B", value:0.3, name:"ifl"});
            Constants.insert({title:"Uplink IFL Loss", value: 2, name: "uplink_ifl"});
            Constants.insert({title:"Uplink HPA Obo", value: 4, name:"hpa_obo"})
            Constants.insert({title:"LNA/B Noise Temperature", value:50, name:"lna_noise"});
            Constants.insert({title:"C-Band Uplink Default Link Availability", value:99.99, name:"c_band_uplink_availability"})
            Constants.insert({title:"C-Band Downlink Default Link Availability", value:99.99, name:"c_band_downlink_availability"})
            Constants.insert({title:"Ku-Band Uplink Default Link Availability", value:99.98, name:"ku_band_uplink_availability"})
            Constants.insert({title:"Ku-Band Downlink Default Link Availability", value:99.96, name:"ku_band_downlink_availability"})
        })();
    }
})