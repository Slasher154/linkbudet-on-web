/**
 * Created by Dome on 5/19/14 AD.
 */

// Detail link class

link = new Link();

var antenna1 = {size:8}
var antenna2 = {size:1.2,rx_gain: {value:41.6, freq:12}}
var channel1 = Channels.findOne({name:"1E"});
var ul_location = {name:"Bangkok",contour:-1};
var dl_location = {name:"Bangkok",contour:-1};
var hpa = {size:500,obo:-0.5, intermod:30};
var bandwidth = 30;
var app = {
    name: "DVB-S2",
    acm: false,
    minimum_symbol_rate: 1000,
    maximum_symbol_rate: 30000,
    roll_off_factor: [1.2, 1.35],
    link_margin: 2,
    default: true, // indicates that this application is a default for this modem
    mcgs: [
        {
            name: "QPSK 1/3",
            spectral_efficiency: 0.67,
            es_no: -0.5
        },
        {
            name: "QPSK 2/5",
            spectral_efficiency: 0.8,
            es_no: 0.5
        },
        {
            name: "QPSK 1/2",
            spectral_efficiency: 1,
            es_no: 1.8
        },
        {
            name: "QPSK 3/5",
            spectral_efficiency: 1.2,
            es_no: 3
        },
        {
            name: "QPSK 2/3",
            spectral_efficiency: 1.33,
            es_no: 3.9
        },
        {
            name: "QPSK 3/4",
            spectral_efficiency: 1.5,
            es_no: 4.8
        },
        {
            name: "QPSK 4/5",
            spectral_efficiency: 1.6,
            es_no: 5.5
        },
        {
            name: "QPSK 5/6",
            spectral_efficiency: 1.67,
            es_no: 6
        },
        {
            name: "8PSK 3/5",
            spectral_efficiency: 1.8,
            es_no: 6.5
        },
        {
            name: "8PSK 2/3",
            spectral_efficiency: 2,
            es_no: 7.6
        },
        {
            name: "8PSK 3/4",
            spectral_efficiency: 2.25,
            es_no: 8.9
        },
        {
            name: "8PSK 5/6",
            spectral_efficiency: 2.5,
            es_no: 10.4
        },
        {
            name: "8PSK 8/9",
            spectral_efficiency: 2.67,
            es_no: 11.7
        },
        {
            name: "8PSK 9/10",
            spectral_efficiency: 2.7,
            es_no: 12.2
        }
    ]
};
var mcg = {
    name: "QPSK 1/2",
    spectral_efficiency: 1,
    es_no: 1.8
};
var clear_sky = {uplink:"clear",downlink:"clear"};
var rain = {uplink:"rain",downlink:"rain"};

link.setUplinkAntenna(antenna1);
link.setUplinkHpa(hpa);
link.setUplinkLocation(ul_location);
link.setDownlinkAntenna(antenna2);
link.setDownlinkLocation(dl_location);
link.setApplication(app);
link.setChannel(channel1);
link.setMcgClearSky(mcg);
link.setBandwidth(20);
link.setCondition(clear_sky);


function Link(){

    // --------------- Instantiations -----------------------
    var uplink_station = new UplinkStation();
    var downlink_station = new DownlinkStation();
    var channel = {};
    var application = {};
    var bandwidth = 0;
    var mcg_clear_sky = {};
    var roll_off_factor = 1.2;
    var condition = {uplink:"clear",downlink:"clear"}
    this.errorMessage = "";

    // -------------- Class Properties ----------------------
    var isRainCase = condition.uplink === "clear" && condition.downlink === "clear";
    var hasAcm = _.has(application,'acm') || application.acm;
    var hasDynamicChannels = _.has(application,'dynamic_channels') || application.dynamic_channels;
    var isFgm = channel.mode === "FGM";
    var isAlc = channel.mode === "ALC";

    // ---------------- Run Program --------------------------

    this.run = function(){

        // check if this is rain fade case
        if(isRainCase){
            // if the application has ACM mode, the rain fade condition loops through MCG lower than MCG at clear sky
            // and calculates the link
            if(hasAcm){
                var lowerMcgs = getLowerMcgThanClearSky();
                // there is any MCG lower than clear sky
                if(lowerMcgs.length >0){
                    _.each(getLowerMcgThanClearSky(),function(mcg){
                        mcg_clear_sky = mcg;
                        calculate();
                        // TODO: Filter the result to only 1 at rain fade
                    })
                }
                // the MCG at clear sky is already the minimum one
                else{
                    calculate();
                }

            }
            // if the application has dynamic channels (or adaptive-TDMA or whatever technology which allows the return
            // link to change both MCG and bandwidth, loop through MCG and symbol rates available to find the best
            else if(hasDynamicChannels){
                var lowerMcgs = getLowerMcgThanClearSky();
                var lowerBw = getLowerBandwidth();
                _.each(lowerMcgs, function(mcg){
                    _.each(lowerBw, function(bw){
                        mcg_clear_sky = mcg;
                        bandwidth = bw;
                        calculate();
                        // TODO: Filter the result to only 1 at rain fade
                    })
                })
            }
            else{
                calculate();
            }
        }

    }

    // ----------------- Function to calculate the link budget ------------

    var calculate = function(){

        // If channel is FGM, find operating PFD at 100% utilization
        if(isFgm){

        }

    }




    // -------------- Utility functions ---------------------

    // Return array of MCG which is lower than the MCG at clear sky
    function getLowerMcgThanClearSky(){
        // Assume the MCG in the application is sorted from lowest to highest efficiency
        return _.filter(application.mcgs, function(mcg){
            return mcg.spectral_efficiency < mcg_clear_sky.spectral_efficiency;
        })
    }

    // Return array of Bandwidth which is lower than the current bandwidth
    function getLowerBandwidth(){
        // Check the the application has array of available symbol rates
        if(!_.has(application, 'symbol_rates')){
            logError("Cannot find list of available symbol rates.")
            return false;
        }
        var sr = _.filter(application.symbol_rates, function(sr){
            return sr < bandwidth / roll_off_factor;
        })
        // Return array of bandwidth from symbol rate
        return _.map(sr,function(item){
            return item * roll_off_factor;
        })

    }






    function logError(message){
        console.log(message);
        this.errorMessage = message;
    }













    // --------------- Setter functions ----------------------
    this.setUplinkAntenna = function(antenna){
        uplink_station.antenna = antenna;
    }
    this.setUplinkHpa = function(hpa){
        uplink_station.hpa = hpa;
    }
    this.setUplinkLocation = function(location){
        uplink_station.location = location;
    }
    this.setDownlinkAntenna = function(antenna){
        downlink_station.antenna = antenna;
    }
    this.setDownlinkLocation = function(location){
        downlink_station.location = location;
    }
    this.setChannel = function(data){
        channel = data;
    }
    this.setApplication = function(app){
        application = app;
    }
    this.setBandwidth = function(bw){
        bandwidth = bw;
    }
    this.setRollOff = function(bt){
        roll_off_factor = bt;
    }
    this.setMcgClearSky = function(mcg){
        mcg_clear_sky = mcg;
    }
    this.setCondition = function(cond){
        condition = cond;
    }
}



// -------------------------- Uplink Station --------------------------

function UplinkStation(){}

UplinkStation.prototype = {
    antenna: {},
    hpa: {},
    location: {}
}

// -------------------------- Downlink Station --------------------------

function DownlinkStation(){}

DownlinkStation.prototype = {
    antenna: {},
    location: {}
}



