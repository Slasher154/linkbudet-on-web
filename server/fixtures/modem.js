/**
 * Created by Dome on 5/27/14 AD.
 */

Meteor.methods({
    'insert_modem' : function(){
        (function(){
            Modems.insert({
                name: "Standard DVB-S1",
                vendor: "Standard",
                applications: [
                    {
                        name: "DVB-S1",
                        acm: false,
                        type: 'Broadcast',
                        minimum_symbol_rate: 1000,
                        maximum_symbol_rate: 30000,
                        roll_off_factor: 1.2,
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
                            }
                        ]
                    }
                ]
            });
            Modems.insert({
                name: "Standard DVB-S2",
                vendor: "Standard",
                applications: [
                    {
                        name: "DVB-S2",
                        acm: false,
                        type: 'Broadcast',
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
                    }
                ]
            })
            Modems.insert({
                name: "Gilat SE-IIC Aries",
                vendor: "Gilat",
                applications: [
                    {
                        name: "Outbound DVB-S2 ACM Normal Frames",
                        type: "forward",
                        acm: true,
                        default: true,
                        link_margin: 1,
                        minimum_symbol_rate: 300,
                        maximum_symbol_rate: 60000,
                        roll_off_factor: 1.2,
                        mcgs: [
                            {"name": "QPSK 1/4", "spectral_efficiency": 0.48, "es_no": -2},
                            {"name": "QPSK 1/3", "spectral_efficiency": 0.64, "es_no": -1.1},
                            {"name": "QPSK 2/5", "spectral_efficiency": 0.77, "es_no": 0.1},
                            {"name": "QPSK 1/2", "spectral_efficiency": 0.97, "es_no": 1.3},
                            {"name": "QPSK 3/5", "spectral_efficiency": 1.16, "es_no": 2.4},
                            {"name": "QPSK 2/3", "spectral_efficiency": 1.29, "es_no": 3.2},
                            {"name": "QPSK 3/4", "spectral_efficiency": 1.45, "es_no": 4.2},
                            {"name": "QPSK 4/5", "spectral_efficiency": 1.55, "es_no": 4.9},
                            {"name": "QPSK 5/6", "spectral_efficiency": 1.62, "es_no": 5.2},
                            {"name": "8PSK 3/5", "spectral_efficiency": 1.74, "es_no": 5.8},
                            {"name": "8PSK 2/3", "spectral_efficiency": 1.94, "es_no": 6.8},
                            {"name": "8PSK 3/4", "spectral_efficiency": 2.18, "es_no": 8},
                            {"name": "8PSK 5/6", "spectral_efficiency": 2.42, "es_no": 9.6},
                            {"name": "16APSK 2/3", "spectral_efficiency": 2.57, "es_no": 9.6},
                            {"name": "16APSK 3/4", "spectral_efficiency": 2.9, "es_no": 10.5},
                            {"name": "16APSK 4/5", "spectral_efficiency": 3.09, "es_no": 11.3},
                            {"name": "16APSK 5/6", "spectral_efficiency": 3.22, "es_no": 11.9},
                            {"name": "16APSK 8/9", "spectral_efficiency": 3.44, "es_no": 13.5},
                            {"name": "32APSK 3/4", "spectral_efficiency": 3.62, "es_no": 14.3},
                            {"name": "32APSK 4/5", "spectral_efficiency": 3.87, "es_no": 15.5},
                            {"name": "32APSK 5/6", "spectral_efficiency": 4.03, "es_no": 16.5},
                            {"name": "32APSK 8/9", "spectral_efficiency": 4.3, "es_no": 18.5},
                            {"name": "32APSK 9/10", "spectral_efficiency": 4.36, "es_no": 18.9}
                        ]
                    },
                    {
                        name: "Inbound DVB-RCS",
                        type: "return",
                        acm: true,
                        default: true,
                        link_margin: 2,
                        minimum_symbol_rate: 128,
                        maximum_symbol_rate: 2560,
                        symbol_rates: [128, 256, 512, 1024, 1536, 2048, 2560],
                        roll_off_factor: 1.2,
                        mcgs: [
                            {"name": "QPSK 1/2", "spectral_efficiency": 1, "es_no": 4.9},
                            {"name": "QPSK 2/3", "spectral_efficiency": 1.334, "es_no": 5},
                            {"name": "QPSK 3/4", "spectral_efficiency": 1.5, "es_no": 6},
                            {"name": "QPSK 4/5", "spectral_efficiency": 1.6, "es_no": 6.9},
                            {"name": "QPSK 6/7", "spectral_efficiency": 1.714, "es_no": 8.2},
                            {"name": "8PSK 2/3", "spectral_efficiency": 1.875, "es_no": 10.2},
                            {"name": "8PSK 3/4", "spectral_efficiency": 2.109, "es_no": 11.6},
                            {"name": "8PSK 4/5", "spectral_efficiency": 2.25, "es_no": 12.4},
                            {"name": "8PSK 6/7", "spectral_efficiency": 2.412, "es_no": 13.2}
                        ]
                    }
                ]
            })
        })();
    },

    // return MCG for standard DVB-S1 or DVB-S2 for select fix mcg for conventional satellite
    'get_dvb_mcg': function(dvb){
        var platform = Modems.findOne({name:"Standard " + dvb});
        if(platform){
            return _.pluck(platform.applications[0].mcgs,'name');
        }
        else{
            throw new Meteor.Error(422, 'No MCGs found for this platform.');
        }
    }
})