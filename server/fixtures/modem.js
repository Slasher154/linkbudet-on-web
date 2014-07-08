/**
 * Created by Dome on 5/27/14 AD.
 */

Meteor.methods({
    'insert_modem': function () {
        (function () {
            var modems = [
                {"_id": "9TvHJi2XFf9RhduQg", "applications": [
                    {"name": "DVB-S2", "type": "Broadcast", "acm": false, "link_margin": "2", "minimum_symbol_rate": "1000", "maximum_symbol_rate": "121500", "symbol_rates": [], "roll_off_factor": "", "mcgs": [
                        {"name": "QPSK 1/2", "spectral_efficiency": "1", "es_no": "2.29"},
                        {"name": "QPSK 3/5", "spectral_efficiency": "1.2", "es_no": "3.69"},
                        {"name": "QPSK 2/3", "spectral_efficiency": "1.33", "es_no": "4.39"},
                        {"name": "QPSK 3/4", "spectral_efficiency": "1.5", "es_no": "5.29"},
                        {"name": "QPSK 4/5", "spectral_efficiency": "1.6", "es_no": "6.18"},
                        {"name": "QPSK 5/6", "spectral_efficiency": "1.67", "es_no": "6.49"},
                        {"name": "QPSK 8/9", "spectral_efficiency": "1.78", "es_no": "7.70"},
                        {"name": "QPSK 9/10", "spectral_efficiency": "1.80", "es_no": "7.91"},
                        {"name": "8PSK 3/5", "spectral_efficiency": "1.8", "es_no": "6.99"},
                        {"name": "8PSK 2/3", "spectral_efficiency": "2", "es_no": "7.89"},
                        {"name": "8PSK 3/4", "spectral_efficiency": "2.25", "es_no": "9.41"},
                        {"name": "8PSK 5/6", "spectral_efficiency": "2.5", "es_no": "10.85"},
                        {"name": "8PSK 8/9", "spectral_efficiency": "2.67", "es_no": "12.19"},
                        {"name": "8PSK 9/10", "spectral_efficiency": "2.7", "es_no": "12.47"}
                    ]}
                ], "name": "Standard DVB-S2", "vendor": "Standard"},
                {"_id": "kz5g7cr8hPdPMvNrC", "name": "Gilat SE-IIC Aries", "vendor": "Gilat", "applications": [
                    {"name": "Outbound DVB-S2 ACM Normal Frames", "type": "forward", "acm": true, "dynamic_channels": false, "link_margin": 1, "minimum_symbol_rate": 300, "maximum_symbol_rate": 60000, "symbol_rates": [], "roll_off_factor": 1.2, "mcgs": [
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
                    ]},
                    {"name": "Inbound DVB-RCS", "type": "return", "acm": true, "dynamic_channels": false, "link_margin": 2, "minimum_symbol_rate": 128, "maximum_symbol_rate": 2560, "symbol_rates": [128, 256, 512, 1024, 1536, 2048, 2560], "roll_off_factor": 1.2, "mcgs": [
                        {"name": "QPSK 1/2", "spectral_efficiency": 1, "es_no": 4.9},
                        {"name": "QPSK 2/3", "spectral_efficiency": 1.334, "es_no": 5},
                        {"name": "QPSK 3/4", "spectral_efficiency": 1.5, "es_no": 6},
                        {"name": "QPSK 4/5", "spectral_efficiency": 1.6, "es_no": 6.9},
                        {"name": "QPSK 6/7", "spectral_efficiency": 1.714, "es_no": 8.2},
                        {"name": "8PSK 2/3", "spectral_efficiency": 1.875, "es_no": 10.2},
                        {"name": "8PSK 3/4", "spectral_efficiency": 2.109, "es_no": 11.6},
                        {"name": "8PSK 4/5", "spectral_efficiency": 2.25, "es_no": 12.4},
                        {"name": "8PSK 6/7", "spectral_efficiency": 2.412, "es_no": 13.2}
                    ]}
                ]},
                {"_id": "ftSFCiip2k7qA6fMY", "name": "Comtech CDM750 ", "vendor": "Comtech", "applications": [
                    {"name": "SCPC", "type": "SCPC", "acm": true, "link_margin": "2", "minimum_symbol_rate": "1", "maximum_symbol_rate": "63", "symbol_rates": [], "roll_off_factor": "1.2", "mcgs": [
                        {"name": "QPSK 1/2", "spectral_efficiency": "1", "es_no": "1.4"},
                        {"name": "QPSK 3/5", "spectral_efficiency": "1.2", "es_no": "2.7"},
                        {"name": "QPSK 2/3", "spectral_efficiency": "1.33", "es_no": "3.4"},
                        {"name": "QPSK 3/4", "spectral_efficiency": "1.5", "es_no": "4.6"},
                        {"name": "QPSK 4/5", "spectral_efficiency": "1.6", "es_no": "5.1"},
                        {"name": "QPSK 5/6", "spectral_efficiency": "1.67", "es_no": "5.6"},
                        {"name": "QPSK 8/9", "spectral_efficiency": "1.78", "es_no": "6.7"},
                        {"name": "QPSK 9/10", "spectral_efficiency": "1.8", "es_no": "6.8"},
                        {"name": "8 PSK 2/3", "spectral_efficiency": "2", "es_no": "7.4"},
                        {"name": "8 PSK 3/4", "spectral_efficiency": "2.25", "es_no": "8.5"},
                        {"name": "16 APSK 2/3", "spectral_efficiency": "2.67", "es_no": "9.9"},
                        {"name": "16 APSK 3/4", "spectral_efficiency": "3", "es_no": "11.2"},
                        {"name": "16 APSK 4/5", "spectral_efficiency": "3.2", "es_no": "12"},
                        {"name": "16 APSK 5/6", "spectral_efficiency": "3.33", "es_no": "12.4"},
                        {"name": "16 APSK 8/9", "spectral_efficiency": "3.56", "es_no": "13.8"},
                        {"name": "16 APSK 9/10", "spectral_efficiency": "3.6", "es_no": "14"}
                    ]}
                ]},
                {"_id": "GdJfdNtJEYDhWQury", "applications": [
                    {"name": "SCPC", "type": "SCPC", "acm": true, "link_margin": "2", "minimum_symbol_rate": "300", "maximum_symbol_rate": "30000", "symbol_rates": [], "roll_off_factor": "1.25", "mcgs": [
                        {"name": "QPSK 1/2 LDPC", "spectral_efficiency": "1", "es_no": "2.15"},
                        {"name": "QPSK 2/3 LDPC", "spectral_efficiency": "1.33", "es_no": "3.75"},
                        {"name": "QPSK 3/4 LDPC", "spectral_efficiency": "1.5", "es_no": "4.91"},
                        {"name": "8 QAM 3/4 LDPC", "spectral_efficiency": "2", "es_no": "7.81"},
                        {"name": "8 PSK 2/3 LDPC", "spectral_efficiency": "2", "es_no": "8.71"},
                        {"name": "8 PSK 3/4 LDPC", "spectral_efficiency": "2.25", "es_no": "8.92"},
                        {"name": "16 QSM 3/4 LDPC", "spectral_efficiency": "3", "es_no": "11.72"}
                    ]}
                ], "name": "Comtech CDM 625 LDPC", "vendor": "Comtech"},
                {"_id": "F8Q7B99TNPpCA7ooB", "name": "Linksys DVB-S2", "vendor": "Standard", "applications": [
                    {"name": "SCPC", "type": "SCPC", "acm": true, "link_margin": "2", "minimum_symbol_rate": "300", "maximum_symbol_rate": "30000", "symbol_rates": [], "roll_off_factor": "1.17", "mcgs": [
                        {"name": "QPSK 1/2 LDPC", "spectral_efficiency": "1", "es_no": "2"},
                        {"name": "QPSK 3/5 LDPC", "spectral_efficiency": "1.2", "es_no": "3.2"},
                        {"name": "QPSK 2/3 LDPC", "spectral_efficiency": "1.33", "es_no": "4.1"},
                        {"name": "QPSK 3/4 LDPC", "spectral_efficiency": "1.5", "es_no": "5"},
                        {"name": "QPSK 4/5 LDPC", "spectral_efficiency": "1.6", "es_no": "5.7"},
                        {"name": "QPSK 5/6 LDPC", "spectral_efficiency": "1.67", "es_no": "6.2"},
                        {"name": "QPSK 8/9 LDPC", "spectral_efficiency": "1.78", "es_no": "7.2"},
                        {"name": "QPSK 9/10 LDPC", "spectral_efficiency": "1.8", "es_no": "7.4"},
                        {"name": "8 PSK 2/3 LDPC", "spectral_efficiency": "2", "es_no": "7.6"},
                        {"name": "8 PSK 3/4 LDPC", "spectral_efficiency": "2.25", "es_no": "8.9"},
                        {"name": "8 PSK 5/6 LDPC", "spectral_efficiency": "2.5", "es_no": "10.4"},
                        {"name": "8 PSK 8/9 LDPC", "spectral_efficiency": "2.67", "es_no": "11.7"},
                        {"name": "8 PSK 9/10 LDPC", "spectral_efficiency": "2.7", "es_no": "12.2"}
                    ]}
                ]},
                {"_id": "yisxz3n89ZDij7Tk2", "applications": [
                    {"name": "DVB-S2", "type": "Broadcast", "acm": false, "link_margin": "1000", "minimum_symbol_rate": "1000", "maximum_symbol_rate": "121500", "symbol_rates": [], "roll_off_factor": "1.2", "mcgs": [
                        {"name": "QPSK 1/2", "spectral_efficiency": "1", "es_no": "2.29"},
                        {"name": "QPSK 3/5", "spectral_efficiency": "1.2", "es_no": "3.69"},
                        {"name": "QPSK 2/3", "spectral_efficiency": "1.34", "es_no": "4.39"},
                        {"name": "QPSK 3/4", "spectral_efficiency": "1.5", "es_no": "5.29"},
                        {"name": "QPSK 4/5", "spectral_efficiency": "1.6", "es_no": "6.178"},
                        {"name": "QPSK 5/6", "spectral_efficiency": "1.67", "es_no": "6.49"},
                        {"name": "QPSK 8/9", "spectral_efficiency": "1.78", "es_no": "7.70"},
                        {"name": "QPSK 9/10", "spectral_efficiency": "1.8", "es_no": "7.91"},
                        {"name": "8PSPK 3/5", "spectral_efficiency": "1.8", "es_no": "6.99"},
                        {"name": "8PSPK 2/3", "spectral_efficiency": "2", "es_no": "7.89"},
                        {"name": "8PSPK 3/4", "spectral_efficiency": "2.25", "es_no": "9.41"},
                        {"name": "8PSPK 5/6", "spectral_efficiency": "2.5", "es_no": "10.85"},
                        {"name": "8PSPK 8/9", "spectral_efficiency": "2.67", "es_no": "12.19"},
                        {"name": "8PSPK 9/10", "spectral_efficiency": "2.7", "es_no": "12.47"}
                    ]}
                ], "name": "Standard DVB-S2 (Rx8200)", "vendor": "Standard"},
                {"_id": "Dknh4XGh7H7sEcMzt", "applications": [
                    {"name": "DVB-S1", "type": "Broadcast", "acm": false, "link_margin": "1000", "minimum_symbol_rate": "1000", "maximum_symbol_rate": "121500", "symbol_rates": [], "roll_off_factor": "1.2", "mcgs": [
                    ]}
                ], "name": "Standard DVB-S1", "vendor": "Standard"},
                {"_id": "Dn2XzsvQLT8ZkHRTK", "name": "Idirect X3/X5", "vendor": "IDirect", "applications": [
                    {"name": "Forward", "type": "forward", "acm": false, "link_margin": "2", "minimum_symbol_rate": "300", "maximum_symbol_rate": "30000", "symbol_rates": [], "roll_off_factor": "1.2", "mcgs": [
                        {"name": "QPSK 1/4", "spectral_efficiency": "0.35", "es_no": "-1.71"},
                        {"name": "QPSK 1/3", "spectral_efficiency": "0.61", "es_no": "-0.73"},
                        {"name": "QPSK 2/5", "spectral_efficiency": "0.74", "es_no": "0.1"},
                        {"name": "QPSK 1/2", "spectral_efficiency": "0.83", "es_no": "0.97"},
                        {"name": "QPSK 3/5", "spectral_efficiency": "1.13", "es_no": "2.52"},
                        {"name": "QPSK 2/3", "spectral_efficiency": "1.26", "es_no": "3.29"},
                        {"name": "QPSK 3/4", "spectral_efficiency": "1.39", "es_no": "4.32"},
                        {"name": "QPSK 4/5", "spectral_efficiency": "1.47", "es_no": "4.88"},
                        {"name": "QPSK 5/6", "spectral_efficiency": "1.56", "es_no": "5.53"},
                        {"name": "8 PSK 3/5", "spectral_efficiency": "1.69", "es_no": "6.27"},
                        {"name": "QPSK 8/9", "spectral_efficiency": "1.69", "es_no": "6.57"},
                        {"name": "8 PSK 2/3", "spectral_efficiency": "1.88", "es_no": "7.44"},
                        {"name": "8 PSK 3/4", "spectral_efficiency": "2.07", "es_no": "8.46"},
                        {"name": "8 PSK 5/6", "spectral_efficiency": "2.33", "es_no": "9.57"},
                        {"name": "16 APSK 2/3", "spectral_efficiency": "2.5", "es_no": "9.78"},
                        {"name": "8 PSK 8/9", "spectral_efficiency": "2.52", "es_no": "10.82"},
                        {"name": "16 APSK 3/4", "spectral_efficiency": "2.75", "es_no": "11.2"},
                        {"name": "16 APSK 4/5", "spectral_efficiency": "2.92", "es_no": "11.86"},
                        {"name": "16 APSK 5/6", "spectral_efficiency": "3.1", "es_no": "12.81"},
                        {"name": "16 APSK 8/9", "spectral_efficiency": "3.35", "es_no": "13.75"}
                    ]},
                    {"name": "MF-TDMA", "type": "return", "acm": false, "link_margin": "2", "minimum_symbol_rate": "1", "maximum_symbol_rate": "7500", "symbol_rates": [], "roll_off_factor": "1.2", "mcgs": [
                        {"name": "QPSK-2D16S-170B-1/2", "spectral_efficiency": "0.972", "es_no": "3.6"},
                        {"name": "QPSK-2D16S-438B-2/3", "spectral_efficiency": "1.308", "es_no": "5"},
                        {"name": "QPSK-2D16S-170B-3/4", "spectral_efficiency": "144", "es_no": "5.9"},
                        {"name": "QPSK-2D16S-438B-4/5", "spectral_efficiency": "1.572", "es_no": "6.6"},
                        {"name": "QPSK-2D16S-438B-6/7", "spectral_efficiency": "1.68", "es_no": "7.5"},
                        {"name": "QPSK-2D16S-100B-2/3", "spectral_efficiency": "1.692", "es_no": "9.3"},
                        {"name": "8PSK-2D16S-170B-4/5", "spectral_efficiency": "2.124", "es_no": "11.7"},
                        {"name": "8PSK-TPC-4K-0.793", "spectral_efficiency": "2.256", "es_no": "12.7"}
                    ]}
                ]}
            ];
            _.each(modems, function(item){
                Modems.insert(item);
            });
        })();
    },

    // return MCG for standard DVB-S1 or DVB-S2 for select fix mcg for conventional satellite
    'get_dvb_mcg': function (dvb) {
        var platform = Modems.findOne({name: "Standard " + dvb});
        if (platform) {
            return _.pluck(platform.applications[0].mcgs, 'name');
        }
        else {
            throw new Meteor.Error(422, 'No MCGs found for this platform.');
        }
    }
})