/**
 * Created by thanatv on 7/03/14.
 */
//Fixture data
if (Satellites.find().count() === 0) {
    var thaicom5Id = Satellites.insert({
        name: "Thaicom 5",
        orbital_slot: 78.5,
        skb: 0.05,
        type: "Conventional"
    });
    var ipstarId = Satellites.insert({
        name: "IPSTAR",
        orbital_slot: 119.5,
        skb: 0.05,
        type: "Broadband"
    });
    var thaicom6Id = Satellites.insert({
        name: "Thaicom 6",
        orbital_slot: 78.5,
        skb: 0.05,
        type: "Conventional"
    });
    var thaicom7Id = Satellites.insert({
        name: "Thaicom 7",
        orbital_slot: 120,
        skb: 0.05,
        type: "Conventional"
    });
    var tc5 = Satellites.find(thaicom5Id);
    var ipstar = Satellites.find(ipstarId);
    var tc6 = Satellites.find(thaicom6Id);
    var tc7 = Satellites.find(thaicom7Id);

    // insert Thaicom satellite channels
    insert_ipstar_fwd_data(ipstarId);
    insert_ipstar_rtn_data(ipstarId);
    insert_thaicom5_data(thaicom5Id);

    var contours = [
        {
            satellite: "IPSTAR",
            beam: "603",
            type: "downlink",
            relative_value: -1,
            polygon: {
                "type": "LineString",
                "coordinates": [
                    [103.729, -1.696],
                    [104.232 , -1.925],
                    [104.463 , -2.207],
                    [104.560 , -2.719],
                    [104.354 , -3.233],
                    [104.210 , -3.380],
                    [103.668 , -3.618],
                    [103.130 , -3.526],
                    [102.796 , -3.237],
                    [102.603 , -2.762],
                    [102.594 , -2.724],
                    [102.605 , -2.671],
                    [102.744 , -2.211],
                    [103.158 , -1.818],
                    [103.645 , -1.696],
                    [103.698 , -1.688],
                    [103.729 , -1.696]
                ]
            }
        },
        {satellite: "IPSTAR",
            beam: "603",
            type: "downlink",
            relative_value: -2,
            polygon: {
                "type": "LineString",
                "coordinates": [
                    [104.589, -1.694],
                    [104.767, -1.917],
                    [104.912, -2.206],
                    [104.969, -2.718],
                    [104.834, -3.231],
                    [104.745, -3.371],
                    [104.383, -3.746],
                    [104.200, -3.868],
                    [103.658, -4.028],
                    [103.119, -3.981],
                    [102.683, -3.752],
                    [102.585, -3.668],
                    [102.312, -3.239],
                    [102.204, -2.726],
                    [102.297, -2.212],
                    [102.618, -1.698],
                    [102.619, -1.698],
                    [103.162, -1.396],
                    [103.702, -1.317],
                    [104.237, -1.449],
                    [104.589, -1.694]
                ]
            }
        }

    ]

    // insert sample contours
    _.each(contours, function (x) {
        Contours.insert(x);
    })

    // insert sample modem
    Modems.insert({
        name: "Standard DVB-S2",
        vendor: "",
        applications: [
            {
                name: "DVB-S2",
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
                roll_off_factor: [1.2],
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


    function insert_ipstar_fwd_data(ipstar_id) {
        var data = [
            {"name": "100", "satellite_id": ipstar_id, "uplink_cf": 27.086, "downlink_cf": 12.286, "bandwidth": 171.000, "type": "forward", "uplink_beam": "1V", "gt_peak": 19.01, "uplink_pol": "V", "downlink_beam": "100", "saturated_eirp_peak": 59.23, "downlink_pol": "V", "transponder": "3310L1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -62.89, "eirp_up_density": 71.74273412, "full_load_obo": [
                {type: 'actual', value: -6},
                {type: 'contract', value: -6}
            ], "country": "India"},
            {"name": "101", "satellite_id": ipstar_id, "uplink_cf": 27.465, "downlink_cf": 12.665, "bandwidth": 171.000, "type": "forward", "uplink_beam": "1V", "gt_peak": 19.01, "uplink_pol": "V", "downlink_beam": "101", "saturated_eirp_peak": 60.13, "downlink_pol": "V", "transponder": "3310L1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -62.89, "eirp_up_density": 71.74273412, "full_load_obo": [
                {type: 'actual', value: -6},
                {type: 'contract', value: -6}
            ], "country": "India"},
            {"name": "102", "satellite_id": ipstar_id, "uplink_cf": 27.086, "downlink_cf": 12.286, "bandwidth": 171.000, "type": "forward", "uplink_beam": "1H", "gt_peak": 18.87, "uplink_pol": "H", "downlink_beam": "102", "saturated_eirp_peak": 59.83, "downlink_pol": "V", "transponder": "3310N1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -63.00, "eirp_up_density": 71.74273412, "full_load_obo": [
                {type: 'actual', value: -6},
                {type: 'contract', value: -6}
            ], "country": "India"},
            {"name": "103", "satellite_id": ipstar_id, "uplink_cf": 27.275, "downlink_cf": 12.475, "bandwidth": 171.000, "type": "forward", "uplink_beam": "1V", "gt_peak": 19.01, "uplink_pol": "V", "downlink_beam": "103", "saturated_eirp_peak": 59.63, "downlink_pol": "V", "transponder": "3310L1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -62.89, "eirp_up_density": 71.74273412, "full_load_obo": [
                {type: 'actual', value: -6},
                {type: 'contract', value: -6}
            ], "country": "India"},
            {"name": "104", "satellite_id": ipstar_id, "uplink_cf": 29.965, "downlink_cf": 12.665, "bandwidth": 171.000, "type": "forward", "uplink_beam": "1V", "gt_peak": 19.01, "uplink_pol": "V", "downlink_beam": "104", "saturated_eirp_peak": 60.33, "downlink_pol": "V", "transponder": "3310L2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -62.89, "eirp_up_density": 72.74273412, "full_load_obo": [
                {type: 'actual', value: -6},
                {type: 'contract', value: -6}
            ], "country": "India"},
            {"name": "105", "satellite_id": ipstar_id, "uplink_cf": 29.775, "downlink_cf": 12.475, "bandwidth": 171.000, "type": "forward", "uplink_beam": "1V", "gt_peak": 19.01, "uplink_pol": "V", "downlink_beam": "105", "saturated_eirp_peak": 60.73, "downlink_pol": "V", "transponder": "3310L2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -62.89, "eirp_up_density": 72.74273412, "full_load_obo": [
                {type: 'actual', value: -6},
                {type: 'contract', value: -6}
            ], "country": "India"},
            {"name": "106", "satellite_id": ipstar_id, "uplink_cf": 27.275, "downlink_cf": 12.475, "bandwidth": 171.000, "type": "forward", "uplink_beam": "1H", "gt_peak": 18.87, "uplink_pol": "H", "downlink_beam": "106", "saturated_eirp_peak": 59.93, "downlink_pol": "V", "transponder": "3310N1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -63.00, "eirp_up_density": 71.74273412, "full_load_obo": [
                {type: 'actual', value: -6},
                {type: 'contract', value: -6}
            ], "country": "India"},
            {"name": "107", "satellite_id": ipstar_id, "uplink_cf": 29.965, "downlink_cf": 12.665, "bandwidth": 171.000, "type": "forward", "uplink_beam": "1H", "gt_peak": 18.87, "uplink_pol": "H", "downlink_beam": "107", "saturated_eirp_peak": 60.43, "downlink_pol": "V", "transponder": "3310N2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -63.00, "eirp_up_density": 72.74273412, "full_load_obo": [
                {type: 'actual', value: -6},
                {type: 'contract', value: -6}
            ], "country": "India"},
            {"name": "108", "satellite_id": ipstar_id, "uplink_cf": 29.586, "downlink_cf": 12.286, "bandwidth": 171.000, "type": "forward", "uplink_beam": "1V", "gt_peak": 19.01, "uplink_pol": "V", "downlink_beam": "108", "saturated_eirp_peak": 59.93, "downlink_pol": "V", "transponder": "3310L2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -62.89, "eirp_up_density": 72.74273412, "full_load_obo": [
                {type: 'actual', value: -6},
                {type: 'contract', value: -6}
            ], "country": "India"},
            {"name": "109", "satellite_id": ipstar_id, "uplink_cf": 27.465, "downlink_cf": 12.665, "bandwidth": 171.000, "type": "forward", "uplink_beam": "1H", "gt_peak": 18.87, "uplink_pol": "H", "downlink_beam": "109", "saturated_eirp_peak": 60.03, "downlink_pol": "V", "transponder": "3310N1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -63.00, "eirp_up_density": 71.74273412, "full_load_obo": [
                {type: 'actual', value: -6},
                {type: 'contract', value: -6}
            ], "country": "India"},
            {"name": "110", "satellite_id": ipstar_id, "uplink_cf": 29.586, "downlink_cf": 12.286, "bandwidth": 171.000, "type": "forward", "uplink_beam": "1H", "gt_peak": 18.87, "uplink_pol": "H", "downlink_beam": "110", "saturated_eirp_peak": 59.73, "downlink_pol": "V", "transponder": "3310N2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -63.00, "eirp_up_density": 72.74273412, "full_load_obo": [
                {type: 'actual', value: -6},
                {type: 'contract', value: -6}
            ], "country": "India"},
            {"name": "111", "satellite_id": ipstar_id, "uplink_cf": 29.775, "downlink_cf": 12.475, "bandwidth": 171.000, "type": "forward", "uplink_beam": "1H", "gt_peak": 18.87, "uplink_pol": "H", "downlink_beam": "111", "saturated_eirp_peak": 60.13, "downlink_pol": "V", "transponder": "3310N2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -63.00, "eirp_up_density": 72.74273412, "full_load_obo": [
                {type: 'actual', value: -6},
                {type: 'contract', value: -6}
            ], "country": "India"},
            {"name": "112", "satellite_id": ipstar_id, "uplink_cf": 29.775, "downlink_cf": 12.475, "bandwidth": 171.000, "type": "forward", "uplink_beam": "2V", "gt_peak": 19.08, "uplink_pol": "V", "downlink_beam": "112", "saturated_eirp_peak": 61.19, "downlink_pol": "V", "transponder": "32900", "dynamic_range": 25.0, "mode": "ALC", "sfd": -62.66, "eirp_up_density": 74.74273412, "full_load_obo": [
                {type: 'actual', value: -6},
                {type: 'contract', value: -6}
            ], "country": "India"},
            {"name": "113", "satellite_id": ipstar_id, "uplink_cf": 27.465, "downlink_cf": 12.665, "bandwidth": 171.000, "type": "forward", "uplink_beam": "2V", "gt_peak": 19.08, "uplink_pol": "V", "downlink_beam": "113", "saturated_eirp_peak": 60.13, "downlink_pol": "V", "transponder": "3310P1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -62.66, "eirp_up_density": 73.74273412, "full_load_obo": [
                {type: 'actual', value: -6},
                {type: 'contract', value: -6}
            ], "country": "India"},
            {"name": "114", "satellite_id": ipstar_id, "uplink_cf": 27.086, "downlink_cf": 12.286, "bandwidth": 171.000, "type": "forward", "uplink_beam": "2V", "gt_peak": 19.08, "uplink_pol": "V", "downlink_beam": "114", "saturated_eirp_peak": 59.83, "downlink_pol": "V", "transponder": "3310P1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -62.66, "eirp_up_density": 73.74273412, "full_load_obo": [
                {type: 'actual', value: -6},
                {type: 'contract', value: -6}
            ], "country": "India"},
            {"name": "115", "satellite_id": ipstar_id, "uplink_cf": 27.275, "downlink_cf": 12.475, "bandwidth": 171.000, "type": "forward", "uplink_beam": "2V", "gt_peak": 19.08, "uplink_pol": "V", "downlink_beam": "115", "saturated_eirp_peak": 59.93, "downlink_pol": "V", "transponder": "3310P1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -62.66, "eirp_up_density": 73.74273412, "full_load_obo": [
                {type: 'actual', value: -6},
                {type: 'contract', value: -6}
            ], "country": "India"},
            {"name": "201", "satellite_id": ipstar_id, "uplink_cf": 29.586, "downlink_cf": 12.286, "bandwidth": 171.000, "type": "forward", "uplink_beam": "17H", "gt_peak": 17.82, "uplink_pol": "H", "downlink_beam": "201", "saturated_eirp_peak": 59.83, "downlink_pol": "V", "transponder": "3310P2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -65.75, "eirp_up_density": 77.74273412, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -7}
            ], "country": "Myanmar"},
            {"name": "202", "satellite_id": ipstar_id, "uplink_cf": 29.775, "downlink_cf": 12.475, "bandwidth": 171.000, "type": "forward", "uplink_beam": "17H", "gt_peak": 17.82, "uplink_pol": "H", "downlink_beam": "202", "saturated_eirp_peak": 60.13, "downlink_pol": "V", "transponder": "3310P2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -65.75, "eirp_up_density": 77.74273412, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -7}
            ], "country": "Myanmar"},
            {"name": "203", "satellite_id": ipstar_id, "uplink_cf": 27.465, "downlink_cf": 12.665, "bandwidth": 171.000, "type": "forward", "uplink_beam": "3H", "gt_peak": 20.30, "uplink_pol": "H", "downlink_beam": "203", "saturated_eirp_peak": 59.93, "downlink_pol": "V", "transponder": "3310R2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -62.27, "eirp_up_density": 73.74273412, "full_load_obo": [
                {type: 'actual', value: -4.9},
                {type: 'contract', value: -7}
            ], "country": "Thailand"},
            {"name": "204", "satellite_id": ipstar_id, "uplink_cf": 27.275, "downlink_cf": 12.475, "bandwidth": 171.000, "type": "forward", "uplink_beam": "3H", "gt_peak": 20.30, "uplink_pol": "H", "downlink_beam": "204", "saturated_eirp_peak": 59.53, "downlink_pol": "V", "transponder": "3310R2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -62.27, "eirp_up_density": 73.74273412, "full_load_obo": [
                {type: 'actual', value: -4.9},
                {type: 'contract', value: -7}
            ], "country": "Thailand"},
            {"name": "205", "satellite_id": ipstar_id, "uplink_cf": 29.586, "downlink_cf": 12.286, "bandwidth": 171.000, "type": "forward", "uplink_beam": "15H", "gt_peak": 21.33, "uplink_pol": "H", "downlink_beam": "205", "saturated_eirp_peak": 59.13, "downlink_pol": "V", "transponder": "3310T1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.07, "eirp_up_density": 73.74273412, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -7}
            ], "country": "Vietnam"},
            {"name": "206", "satellite_id": ipstar_id, "uplink_cf": 29.965, "downlink_cf": 12.665, "bandwidth": 171.000, "type": "forward", "uplink_beam": "15H", "gt_peak": 21.33, "uplink_pol": "H", "downlink_beam": "206", "saturated_eirp_peak": 59.63, "downlink_pol": "V", "transponder": "3310T1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.07, "eirp_up_density": 73.74273412, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -7}
            ], "country": "Vietnam"},
            {"name": "207", "satellite_id": ipstar_id, "uplink_cf": 27.086, "downlink_cf": 12.286, "bandwidth": 171.000, "type": "forward", "uplink_beam": "3H", "gt_peak": 20.30, "uplink_pol": "H", "downlink_beam": "207", "saturated_eirp_peak": 59.13, "downlink_pol": "V", "transponder": "3310R2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -62.27, "eirp_up_density": 73.74273412, "full_load_obo": [
                {type: 'actual', value: -4.9},
                {type: 'contract', value: -7}
            ], "country": "Thailand"},
            {"name": "208", "satellite_id": ipstar_id, "uplink_cf": 29.965, "downlink_cf": 12.665, "bandwidth": 171.000, "type": "forward", "uplink_beam": "18H", "gt_peak": 18.96, "uplink_pol": "H", "downlink_beam": "208", "saturated_eirp_peak": 59.83, "downlink_pol": "V", "transponder": "3310P2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -65.31, "eirp_up_density": 77.74273412, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "Cambodia"},
            {"name": "209", "satellite_id": ipstar_id, "uplink_cf": 29.775, "downlink_cf": 12.475, "bandwidth": 171.000, "type": "forward", "uplink_beam": "3V", "gt_peak": 22.72, "uplink_pol": "V", "downlink_beam": "209", "saturated_eirp_peak": 59.83, "downlink_pol": "V", "transponder": "3310T1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.74, "eirp_up_density": 74.74273412, "full_load_obo": [
                {type: 'actual', value: -4.9},
                {type: 'contract', value: -7}
            ], "country": "Thailand"},
            {"name": "210", "satellite_id": ipstar_id, "uplink_cf": 27.086, "downlink_cf": 12.286, "bandwidth": 171.000, "type": "forward", "uplink_beam": "15H", "gt_peak": 21.33, "uplink_pol": "H", "downlink_beam": "210", "saturated_eirp_peak": 60.49, "downlink_pol": "V", "transponder": "3290G1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.07, "eirp_up_density": 72.74273412, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -7}
            ], "country": "Vietnam"},
            {"name": "211", "satellite_id": ipstar_id, "uplink_cf": 27.275, "downlink_cf": 12.475, "bandwidth": 171.000, "type": "forward", "uplink_beam": "15H", "gt_peak": 21.33, "uplink_pol": "H", "downlink_beam": "211", "saturated_eirp_peak": 60.69, "downlink_pol": "V", "transponder": "3290G1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.07, "eirp_up_density": 72.74273412, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -7}
            ], "country": "Vietnam"},
            {"name": "213", "satellite_id": ipstar_id, "uplink_cf": 27.275, "downlink_cf": 12.475, "bandwidth": 171.000, "type": "forward", "uplink_beam": "13H", "gt_peak": 21.22, "uplink_pol": "H", "downlink_beam": "213", "saturated_eirp_peak": 59.03, "downlink_pol": "V", "transponder": "3310R1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.29, "eirp_up_density": 73.74273412, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "Malaysia"},
            {"name": "214", "satellite_id": ipstar_id, "uplink_cf": 27.086, "downlink_cf": 12.286, "bandwidth": 171.000, "type": "forward", "uplink_beam": "13H", "gt_peak": 21.22, "uplink_pol": "H", "downlink_beam": "214", "saturated_eirp_peak": 59.23, "downlink_pol": "V", "transponder": "3310R1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.29, "eirp_up_density": 73.74273412, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "Malaysia"},
            {"name": "215", "satellite_id": ipstar_id, "uplink_cf": 29.586, "downlink_cf": 12.286, "bandwidth": 171.000, "type": "forward", "uplink_beam": "13H", "gt_peak": 21.22, "uplink_pol": "H", "downlink_beam": "215", "saturated_eirp_peak": 58.53, "downlink_pol": "V", "transponder": "3310T2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.29, "eirp_up_density": 74.74273412, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "Malaysia"},
            {"name": "216", "satellite_id": ipstar_id, "uplink_cf": 29.965, "downlink_cf": 12.665, "bandwidth": 171.000, "type": "forward", "uplink_beam": "13H", "gt_peak": 21.22, "uplink_pol": "H", "downlink_beam": "216", "saturated_eirp_peak": 58.93, "downlink_pol": "V", "transponder": "3310T2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.29, "eirp_up_density": 74.74273412, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "Malaysia"},
            {"name": "217", "satellite_id": ipstar_id, "uplink_cf": 29.775, "downlink_cf": 12.475, "bandwidth": 171.000, "type": "forward", "uplink_beam": "13H", "gt_peak": 21.22, "uplink_pol": "H", "downlink_beam": "217", "saturated_eirp_peak": 58.53, "downlink_pol": "V", "transponder": "3310T2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.29, "eirp_up_density": 74.74273412, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "Malaysia"},
            {"name": "301", "satellite_id": ipstar_id, "uplink_cf": 29.775, "downlink_cf": 12.475, "bandwidth": 171.000, "type": "forward", "uplink_beam": "4H", "gt_peak": 18.68, "uplink_pol": "H", "downlink_beam": "301", "saturated_eirp_peak": 59.53, "downlink_pol": "V", "transponder": "3310A1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -63.70, "eirp_up_density": 74.74273412, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "China"},
            {"name": "302", "satellite_id": ipstar_id, "uplink_cf": 29.965, "downlink_cf": 12.665, "bandwidth": 171.000, "type": "forward", "uplink_beam": "4H", "gt_peak": 18.68, "uplink_pol": "H", "downlink_beam": "302", "saturated_eirp_peak": 59.43, "downlink_pol": "V", "transponder": "3310A1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -63.70, "eirp_up_density": 74.74273412, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "China"},
            {"name": "303", "satellite_id": ipstar_id, "uplink_cf": 29.586, "downlink_cf": 12.286, "bandwidth": 171.000, "type": "forward", "uplink_beam": "4H", "gt_peak": 18.68, "uplink_pol": "H", "downlink_beam": "303", "saturated_eirp_peak": 59.53, "downlink_pol": "V", "transponder": "3310A1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -63.70, "eirp_up_density": 74.74273412, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "China"},
            {"name": "304", "satellite_id": ipstar_id, "uplink_cf": 29.775, "downlink_cf": 12.475, "bandwidth": 171.000, "type": "forward", "uplink_beam": "4V", "gt_peak": 19.30, "uplink_pol": "V", "downlink_beam": "304", "saturated_eirp_peak": 59.73, "downlink_pol": "V", "transponder": "3310A2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -63.64, "eirp_up_density": 74.74273412, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "China"},
            {"name": "305", "satellite_id": ipstar_id, "uplink_cf": 29.965, "downlink_cf": 12.665, "bandwidth": 171.000, "type": "forward", "uplink_beam": "4V", "gt_peak": 19.30, "uplink_pol": "V", "downlink_beam": "305", "saturated_eirp_peak": 59.73, "downlink_pol": "V", "transponder": "3310A2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -63.64, "eirp_up_density": 74.74273412, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "China"},
            {"name": "306", "satellite_id": ipstar_id, "uplink_cf": 27.275, "downlink_cf": 12.475, "bandwidth": 171.000, "type": "forward", "uplink_beam": "4H", "gt_peak": 18.68, "uplink_pol": "H", "downlink_beam": "306", "saturated_eirp_peak": 60.13, "downlink_pol": "V", "transponder": "3310B1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -63.70, "eirp_up_density": 73.74273412, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "China"},
            {"name": "307", "satellite_id": ipstar_id, "uplink_cf": 27.465, "downlink_cf": 12.665, "bandwidth": 171.000, "type": "forward", "uplink_beam": "4H", "gt_peak": 18.68, "uplink_pol": "H", "downlink_beam": "307", "saturated_eirp_peak": 59.33, "downlink_pol": "V", "transponder": "3310B1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -63.70, "eirp_up_density": 73.74273412, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "China"},
            {"name": "308", "satellite_id": ipstar_id, "uplink_cf": 29.586, "downlink_cf": 12.286, "bandwidth": 171.000, "type": "forward", "uplink_beam": "4V", "gt_peak": 19.30, "uplink_pol": "V", "downlink_beam": "308", "saturated_eirp_peak": 59.33, "downlink_pol": "V", "transponder": "3310A2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -63.64, "eirp_up_density": 74.74273412, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "China"},
            {"name": "309", "satellite_id": ipstar_id, "uplink_cf": 27.275, "downlink_cf": 12.475, "bandwidth": 171.000, "type": "forward", "uplink_beam": "5H", "gt_peak": 21.75, "uplink_pol": "H", "downlink_beam": "309", "saturated_eirp_peak": 59.93, "downlink_pol": "V", "transponder": "3310D2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.81, "eirp_up_density": 70.74273412, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "China"},
            {"name": "310", "satellite_id": ipstar_id, "uplink_cf": 29.965, "downlink_cf": 12.665, "bandwidth": 171.000, "type": "forward", "uplink_beam": "5V", "gt_peak": 21.68, "uplink_pol": "V", "downlink_beam": "310", "saturated_eirp_peak": 60.03, "downlink_pol": "V", "transponder": "3310C1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.40, "eirp_up_density": 71.74273412, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "China"},
            {"name": "311", "satellite_id": ipstar_id, "uplink_cf": 27.086, "downlink_cf": 12.286, "bandwidth": 171.000, "type": "forward", "uplink_beam": "4H", "gt_peak": 18.68, "uplink_pol": "H", "downlink_beam": "311", "saturated_eirp_peak": 59.83, "downlink_pol": "V", "transponder": "3310B1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -63.70, "eirp_up_density": 73.74273412, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "China"},
            {"name": "312", "satellite_id": ipstar_id, "uplink_cf": 27.275, "downlink_cf": 12.475, "bandwidth": 171.000, "type": "forward", "uplink_beam": "10V", "gt_peak": 20.80, "uplink_pol": "V", "downlink_beam": "312", "saturated_eirp_peak": 59.73, "downlink_pol": "V", "transponder": "3310B2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.53, "eirp_up_density": 73.74273412, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "China"},
            {"name": "313", "satellite_id": ipstar_id, "uplink_cf": 27.465, "downlink_cf": 12.665, "bandwidth": 171.000, "type": "forward", "uplink_beam": "10V", "gt_peak": 20.80, "uplink_pol": "V", "downlink_beam": "313", "saturated_eirp_peak": 60.03, "downlink_pol": "V", "transponder": "3310B2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.53, "eirp_up_density": 73.74273412, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "China"},
            {"name": "314", "satellite_id": ipstar_id, "uplink_cf": 27.465, "downlink_cf": 12.665, "bandwidth": 171.000, "type": "forward", "uplink_beam": "5H", "gt_peak": 21.75, "uplink_pol": "H", "downlink_beam": "314", "saturated_eirp_peak": 60.23, "downlink_pol": "V", "transponder": "3310D2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.81, "eirp_up_density": 70.74273412, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "China"},
            {"name": "315", "satellite_id": ipstar_id, "uplink_cf": 27.086, "downlink_cf": 12.286, "bandwidth": 171.000, "type": "forward", "uplink_beam": "5H", "gt_peak": 21.75, "uplink_pol": "H", "downlink_beam": "315", "saturated_eirp_peak": 59.93, "downlink_pol": "V", "transponder": "3310D2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.81, "eirp_up_density": 70.74273412, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "China"},
            {"name": "316", "satellite_id": ipstar_id, "uplink_cf": 29.775, "downlink_cf": 12.475, "bandwidth": 171.000, "type": "forward", "uplink_beam": "5V", "gt_peak": 21.68, "uplink_pol": "V", "downlink_beam": "316", "saturated_eirp_peak": 60.13, "downlink_pol": "V", "transponder": "3310C1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.40, "eirp_up_density": 71.74273412, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "China"},
            {"name": "317", "satellite_id": ipstar_id, "uplink_cf": 29.965, "downlink_cf": 12.665, "bandwidth": 171.000, "type": "forward", "uplink_beam": "10V", "gt_peak": 20.80, "uplink_pol": "V", "downlink_beam": "317", "saturated_eirp_peak": 60.53, "downlink_pol": "V", "transponder": "3310D1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.53, "eirp_up_density": 74.74273412, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "China"},
            {"name": "318", "satellite_id": ipstar_id, "uplink_cf": 29.586, "downlink_cf": 12.286, "bandwidth": 171.000, "type": "forward", "uplink_beam": "10V", "gt_peak": 20.80, "uplink_pol": "V", "downlink_beam": "318", "saturated_eirp_peak": 59.83, "downlink_pol": "V", "transponder": "3310D1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.53, "eirp_up_density": 74.74273412, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "China"},
            {"name": "319", "satellite_id": ipstar_id, "uplink_cf": 27.465, "downlink_cf": 12.665, "bandwidth": 171.000, "type": "forward", "uplink_beam": "5V", "gt_peak": 21.68, "uplink_pol": "V", "downlink_beam": "319", "saturated_eirp_peak": 60.39, "downlink_pol": "V", "transponder": "3290A1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.40, "eirp_up_density": 70.74273412, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "China"},
            {"name": "320", "satellite_id": ipstar_id, "uplink_cf": 29.586, "downlink_cf": 12.286, "bandwidth": 171.000, "type": "forward", "uplink_beam": "5V", "gt_peak": 21.68, "uplink_pol": "V", "downlink_beam": "320", "saturated_eirp_peak": 59.53, "downlink_pol": "V", "transponder": "3310C1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.40, "eirp_up_density": 71.74273412, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "China"},
            {"name": "321", "satellite_id": ipstar_id, "uplink_cf": 29.775, "downlink_cf": 12.475, "bandwidth": 171.000, "type": "forward", "uplink_beam": "10V", "gt_peak": 20.80, "uplink_pol": "V", "downlink_beam": "321", "saturated_eirp_peak": 60.13, "downlink_pol": "V", "transponder": "3310D1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.53, "eirp_up_density": 74.74273412, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "China"},
            {"name": "322", "satellite_id": ipstar_id, "uplink_cf": 29.965, "downlink_cf": 12.665, "bandwidth": 171.000, "type": "forward", "uplink_beam": "14H", "gt_peak": 21.40, "uplink_pol": "H", "downlink_beam": "322", "saturated_eirp_peak": 60.39, "downlink_pol": "V", "transponder": "32900", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.24, "eirp_up_density": 74.74273412, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "Taiwan"},
            {"name": "323", "satellite_id": ipstar_id, "uplink_cf": 27.275, "downlink_cf": 12.475, "bandwidth": 171.000, "type": "forward", "uplink_beam": "5V", "gt_peak": 21.68, "uplink_pol": "V", "downlink_beam": "323", "saturated_eirp_peak": 60.39, "downlink_pol": "V", "transponder": "3290A1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.40, "eirp_up_density": 70.74273412, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "China"},
            {"name": "328", "satellite_id": ipstar_id, "uplink_cf": 28.475, "downlink_cf": 11.075, "bandwidth": 250.000, "type": "forward", "uplink_beam": "10V", "gt_peak": 20.80, "uplink_pol": "V", "downlink_beam": "328", "saturated_eirp_peak": 54.16, "downlink_pol": "H", "transponder": "3300A1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.88, "eirp_up_density": 75.8921731, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -4}
            ], "country": "China"},
            {"name": "401", "satellite_id": ipstar_id, "uplink_cf": 27.419, "downlink_cf": 12.619, "bandwidth": 262.500, "type": "forward", "uplink_beam": "7V", "gt_peak": 20.04, "uplink_pol": "V", "downlink_beam": "401", "saturated_eirp_peak": 60.79, "downlink_pol": "V", "transponder": "3310F1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.69, "eirp_up_density": 75.60406609, "full_load_obo": [
                {type: 'actual', value: -4.5},
                {type: 'contract', value: -4.5}
            ], "country": "Japan"},
            {"name": "402", "satellite_id": ipstar_id, "uplink_cf": 29.631, "downlink_cf": 12.331, "bandwidth": 262.500, "type": "forward", "uplink_beam": "7V", "gt_peak": 20.04, "uplink_pol": "V", "downlink_beam": "402", "saturated_eirp_peak": 60.69, "downlink_pol": "V", "transponder": "331000", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.69, "eirp_up_density": 76.60406609, "full_load_obo": [
                {type: 'actual', value: -4.5},
                {type: 'contract', value: -4.5}
            ], "country": "Japan"},
            {"name": "403", "satellite_id": ipstar_id, "uplink_cf": 29.919, "downlink_cf": 12.619, "bandwidth": 262.500, "type": "forward", "uplink_beam": "7V", "gt_peak": 20.04, "uplink_pol": "V", "downlink_beam": "403", "saturated_eirp_peak": 63.00, "downlink_pol": "V", "transponder": "3290C1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.69, "eirp_up_density": 76.60406609, "full_load_obo": [
                {type: 'actual', value: -6},
                {type: 'contract', value: -4.5}
            ], "country": "Japan"},
            {"name": "404", "satellite_id": ipstar_id, "uplink_cf": 27.131, "downlink_cf": 12.331, "bandwidth": 262.500, "type": "forward", "uplink_beam": "7V", "gt_peak": 20.04, "uplink_pol": "V", "downlink_beam": "404", "saturated_eirp_peak": 60.99, "downlink_pol": "V", "transponder": "3310F1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.69, "eirp_up_density": 75.60406609, "full_load_obo": [
                {type: 'actual', value: -4.5},
                {type: 'contract', value: -4.5}
            ], "country": "Japan"},
            {"name": "405", "satellite_id": ipstar_id, "uplink_cf": 29.919, "downlink_cf": 12.619, "bandwidth": 262.500, "type": "forward", "uplink_beam": "11H", "gt_peak": 20.40, "uplink_pol": "H", "downlink_beam": "405", "saturated_eirp_peak": 61.69, "downlink_pol": "V", "transponder": "331000", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.62, "eirp_up_density": 75.60406609, "full_load_obo": [
                {type: 'actual', value: -4.5},
                {type: 'contract', value: -4.5}
            ], "country": "South Korea"},
            {"name": "406", "satellite_id": ipstar_id, "uplink_cf": 27.086, "downlink_cf": 12.286, "bandwidth": 171.000, "type": "forward", "uplink_beam": "10V", "gt_peak": 20.80, "uplink_pol": "V", "downlink_beam": "406", "saturated_eirp_peak": 59.33, "downlink_pol": "V", "transponder": "3310B2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.53, "eirp_up_density": 73.74273412, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "China"},
            {"name": "501", "satellite_id": ipstar_id, "uplink_cf": 29.919, "downlink_cf": 12.619, "bandwidth": 262.500, "type": "forward", "uplink_beam": "8V", "gt_peak": 18.54, "uplink_pol": "V", "downlink_beam": "501", "saturated_eirp_peak": 60.63, "downlink_pol": "V", "transponder": "3310F2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.41, "eirp_up_density": 70.60406609, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "Australia"},
            {"name": "502", "satellite_id": ipstar_id, "uplink_cf": 27.419, "downlink_cf": 12.619, "bandwidth": 262.500, "type": "forward", "uplink_beam": "8H", "gt_peak": 18.84, "uplink_pol": "H", "downlink_beam": "502", "saturated_eirp_peak": 60.82, "downlink_pol": "V", "transponder": "3310G1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.31, "eirp_up_density": 69.60406609, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "Australia"},
            {"name": "503", "satellite_id": ipstar_id, "uplink_cf": 29.631, "downlink_cf": 12.331, "bandwidth": 262.500, "type": "forward", "uplink_beam": "8V", "gt_peak": 18.54, "uplink_pol": "V", "downlink_beam": "503", "saturated_eirp_peak": 61.18, "downlink_pol": "V", "transponder": "3310F2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.41, "eirp_up_density": 70.60406609, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "Australia"},
            {"name": "504", "satellite_id": ipstar_id, "uplink_cf": 29.919, "downlink_cf": 12.619, "bandwidth": 262.500, "type": "forward", "uplink_beam": "8H", "gt_peak": 18.84, "uplink_pol": "H", "downlink_beam": "504", "saturated_eirp_peak": 61.16, "downlink_pol": "V", "transponder": "3310G2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.31, "eirp_up_density": 70.60406609, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "Australia"},
            {"name": "505", "satellite_id": ipstar_id, "uplink_cf": 27.131, "downlink_cf": 12.331, "bandwidth": 262.500, "type": "forward", "uplink_beam": "8H", "gt_peak": 18.84, "uplink_pol": "H", "downlink_beam": "505", "saturated_eirp_peak": 61.35, "downlink_pol": "V", "transponder": "3310G1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.31, "eirp_up_density": 69.60406609, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "Australia"},
            {"name": "506", "satellite_id": ipstar_id, "uplink_cf": 27.419, "downlink_cf": 12.619, "bandwidth": 262.500, "type": "forward", "uplink_beam": "9V", "gt_peak": 19.36, "uplink_pol": "V", "downlink_beam": "506", "saturated_eirp_peak": 61.58, "downlink_pol": "V", "transponder": "3310J1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -62.74, "eirp_up_density": 71.60406609, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "Australia"},
            {"name": "507", "satellite_id": ipstar_id, "uplink_cf": 29.631, "downlink_cf": 12.331, "bandwidth": 262.500, "type": "forward", "uplink_beam": "8H", "gt_peak": 18.84, "uplink_pol": "H", "downlink_beam": "507", "saturated_eirp_peak": 61.59, "downlink_pol": "V", "transponder": "3310G2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.31, "eirp_up_density": 70.60406609, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "Australia"},
            {"name": "508", "satellite_id": ipstar_id, "uplink_cf": 29.919, "downlink_cf": 12.619, "bandwidth": 262.500, "type": "forward", "uplink_beam": "9V", "gt_peak": 19.36, "uplink_pol": "V", "downlink_beam": "508", "saturated_eirp_peak": 61.53, "downlink_pol": "V", "transponder": "3310J2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -62.74, "eirp_up_density": 72.60406609, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "Australia"},
            {"name": "509", "satellite_id": ipstar_id, "uplink_cf": 27.131, "downlink_cf": 12.331, "bandwidth": 262.500, "type": "forward", "uplink_beam": "9V", "gt_peak": 19.36, "uplink_pol": "V", "downlink_beam": "509", "saturated_eirp_peak": 61.34, "downlink_pol": "V", "transponder": "3310J1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -62.74, "eirp_up_density": 71.60406609, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "Australia"},
            {"name": "510", "satellite_id": ipstar_id, "uplink_cf": 29.631, "downlink_cf": 12.331, "bandwidth": 262.500, "type": "forward", "uplink_beam": "9V", "gt_peak": 19.36, "uplink_pol": "V", "downlink_beam": "510", "saturated_eirp_peak": 60.50, "downlink_pol": "V", "transponder": "3310J2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -62.74, "eirp_up_density": 72.60406609, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "Australia"},
            {"name": "514", "satellite_id": ipstar_id, "uplink_cf": 28.475, "downlink_cf": 11.075, "bandwidth": 250.000, "type": "forward", "uplink_beam": "8V", "gt_peak": 18.50, "uplink_pol": "V", "downlink_beam": "514", "saturated_eirp_peak": 54.13, "downlink_pol": "V", "transponder": "3320A1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.66, "eirp_up_density": 74.8921731, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -4}
            ], "country": "Australia"},
            {"name": "601", "satellite_id": ipstar_id, "uplink_cf": 27.275, "downlink_cf": 12.475, "bandwidth": 171.000, "type": "forward", "uplink_beam": "6V", "gt_peak": 21.72, "uplink_pol": "V", "downlink_beam": "601", "saturated_eirp_peak": 59.03, "downlink_pol": "V", "transponder": "3310V1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.16, "eirp_up_density": 73.74273412, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "Indonesia"},
            {"name": "602", "satellite_id": ipstar_id, "uplink_cf": 27.465, "downlink_cf": 12.665, "bandwidth": 171.000, "type": "forward", "uplink_beam": "6V", "gt_peak": 21.72, "uplink_pol": "V", "downlink_beam": "602", "saturated_eirp_peak": 58.83, "downlink_pol": "V", "transponder": "3310V1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.16, "eirp_up_density": 73.74273412, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "Indonesia"},
            {"name": "603", "satellite_id": ipstar_id, "uplink_cf": 27.086, "downlink_cf": 12.286, "bandwidth": 171.000, "type": "forward", "uplink_beam": "6V", "gt_peak": 21.72, "uplink_pol": "V", "downlink_beam": "603", "saturated_eirp_peak": 58.43, "downlink_pol": "V", "transponder": "3310V1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.16, "eirp_up_density": 73.74273412, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "Indonesia"},
            {"name": "604", "satellite_id": ipstar_id, "uplink_cf": 29.775, "downlink_cf": 12.475, "bandwidth": 171.000, "type": "forward", "uplink_beam": "6V", "gt_peak": 21.72, "uplink_pol": "V", "downlink_beam": "604", "saturated_eirp_peak": 58.23, "downlink_pol": "V", "transponder": "3310V2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.16, "eirp_up_density": 74.74273412, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "Indonesia"},
            {"name": "605", "satellite_id": ipstar_id, "uplink_cf": 29.965, "downlink_cf": 12.665, "bandwidth": 171.000, "type": "forward", "uplink_beam": "6V", "gt_peak": 21.72, "uplink_pol": "V", "downlink_beam": "605", "saturated_eirp_peak": 58.53, "downlink_pol": "V", "transponder": "3310V2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.16, "eirp_up_density": 74.74273412, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "Indonesia"},
            {"name": "606", "satellite_id": ipstar_id, "uplink_cf": 29.586, "downlink_cf": 12.286, "bandwidth": 171.000, "type": "forward", "uplink_beam": "6V", "gt_peak": 21.72, "uplink_pol": "V", "downlink_beam": "606", "saturated_eirp_peak": 57.53, "downlink_pol": "V", "transponder": "3310K1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.16, "eirp_up_density": 77.74273412, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "Indonesia"},
            {"name": "608", "satellite_id": ipstar_id, "uplink_cf": 28.475, "downlink_cf": 11.075, "bandwidth": 250.000, "type": "forward", "uplink_beam": "6V", "gt_peak": 21.72, "uplink_pol": "V", "downlink_beam": "608", "saturated_eirp_peak": 50.60, "downlink_pol": "H", "transponder": "3310K1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.51, "eirp_up_density": 79.3921731, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -3.5}
            ], "country": "Indonesia"},
            {"name": "701", "satellite_id": ipstar_id, "uplink_cf": 27.275, "downlink_cf": 12.475, "bandwidth": 171.000, "type": "forward", "uplink_beam": "12V", "gt_peak": 21.97, "uplink_pol": "V", "downlink_beam": "701", "saturated_eirp_peak": 63.30, "downlink_pol": "V", "transponder": "3310K1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.53, "eirp_up_density": 77.74273412, "full_load_obo": [
                {type: 'actual', value: -6},
                {type: 'contract', value: -6}
            ], "country": "Philippines"},
            {"name": "702", "satellite_id": ipstar_id, "uplink_cf": 27.465, "downlink_cf": 12.665, "bandwidth": 171.000, "type": "forward", "uplink_beam": "12V", "gt_peak": 21.97, "uplink_pol": "V", "downlink_beam": "702", "saturated_eirp_peak": 62.29, "downlink_pol": "V", "transponder": "3310K1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.53, "eirp_up_density": 77.74273412, "full_load_obo": [
                {type: 'actual', value: -6},
                {type: 'contract', value: -6}
            ], "country": "Philippines"},
            {"name": "703", "satellite_id": ipstar_id, "uplink_cf": 27.086, "downlink_cf": 12.286, "bandwidth": 171.000, "type": "forward", "uplink_beam": "12V", "gt_peak": 21.97, "uplink_pol": "V", "downlink_beam": "703", "saturated_eirp_peak": 61.19, "downlink_pol": "V", "transponder": "3310K1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.53, "eirp_up_density": 77.74273412, "full_load_obo": [
                {type: 'actual', value: -6},
                {type: 'contract', value: -6}
            ], "country": "Philippines"},
            {"name": "112-2", "satellite_id": ipstar_id, "uplink_cf": 28.475, "downlink_cf": 11.075, "bandwidth": 250.000, "type": "forward", "uplink_beam": "2V", "gt_peak": 19.08, "uplink_pol": "V", "downlink_beam": "112-2", "saturated_eirp_peak": 60.90, "downlink_pol": "V", "transponder": "3280K1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.01, "eirp_up_density": 75.8921731, "full_load_obo": [
                {type: 'actual', value: -6},
                {type: 'contract', value: -6}
            ], "country": "India"},
            {"name": "207-2", "satellite_id": ipstar_id, "uplink_cf": 28.475, "downlink_cf": 11.075, "bandwidth": 250.000, "type": "forward", "uplink_beam": "3V", "gt_peak": 22.72, "uplink_pol": "V", "downlink_beam": "207-2", "saturated_eirp_peak": 61.60, "downlink_pol": "V", "transponder": "3280H1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -58.09, "eirp_up_density": 75.8921731, "full_load_obo": [
                {type: 'actual', value: -4.4},
                {type: 'contract', value: -6}
            ], "country": "Thailand"},
            {"name": "212-13H", "satellite_id": ipstar_id, "uplink_cf": 27.465, "downlink_cf": 12.665, "bandwidth": 171.000, "type": "forward", "uplink_beam": "13H", "gt_peak": 18.20, "uplink_pol": "H", "downlink_beam": "212-13H", "saturated_eirp_peak": 59.73, "downlink_pol": "V", "transponder": "3310R1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -64.31, "eirp_up_density": 73.74273412, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "Malaysia"},
            {"name": "212-3V", "satellite_id": ipstar_id, "uplink_cf": 29.965, "downlink_cf": 12.665, "bandwidth": 171.000, "type": "forward", "uplink_beam": "3V", "gt_peak": 19.70, "uplink_pol": "V", "downlink_beam": "212-3V", "saturated_eirp_peak": 59.83, "downlink_pol": "V", "transponder": "3310R1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -62.76, "eirp_up_density": 74.74273412, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "Thailand"},
            {"name": "214-2", "satellite_id": ipstar_id, "uplink_cf": 28.475, "downlink_cf": 11.075, "bandwidth": 250.000, "type": "forward", "uplink_beam": "13H", "gt_peak": 21.22, "uplink_pol": "H", "downlink_beam": "214-2", "saturated_eirp_peak": 60.60, "downlink_pol": "V", "transponder": "32800", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.64, "eirp_up_density": 75.8921731, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "Malaysia"},
            {"name": "304-2", "satellite_id": ipstar_id, "uplink_cf": 28.475, "downlink_cf": 11.075, "bandwidth": 250.000, "type": "forward", "uplink_beam": "4V", "gt_peak": 19.30, "uplink_pol": "V", "downlink_beam": "304-2", "saturated_eirp_peak": 60.60, "downlink_pol": "V", "transponder": "3280A1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.99, "eirp_up_density": 75.8921731, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "China"},
            {"name": "320-2", "satellite_id": ipstar_id, "uplink_cf": 28.475, "downlink_cf": 11.075, "bandwidth": 250.000, "type": "forward", "uplink_beam": "5V", "gt_peak": 21.68, "uplink_pol": "V", "downlink_beam": "320-2", "saturated_eirp_peak": 61.30, "downlink_pol": "V", "transponder": "3280C1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.75, "eirp_up_density": 72.8921731, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "China"},
            {"name": "322-2", "satellite_id": ipstar_id, "uplink_cf": 28.475, "downlink_cf": 11.075, "bandwidth": 250.000, "type": "forward", "uplink_beam": "14H", "gt_peak": 21.40, "uplink_pol": "H", "downlink_beam": "322-2", "saturated_eirp_peak": 60.70, "downlink_pol": "V", "transponder": "3280D1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.59, "eirp_up_density": 75.8921731, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "China"},
            {"name": "402-2", "satellite_id": ipstar_id, "uplink_cf": 28.475, "downlink_cf": 11.075, "bandwidth": 250.000, "type": "forward", "uplink_beam": "7V", "gt_peak": 20.04, "uplink_pol": "V", "downlink_beam": "402-2", "saturated_eirp_peak": 59.80, "downlink_pol": "V", "transponder": "3280F1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.90, "eirp_up_density": 75.8921731, "full_load_obo": [
                {type: 'actual', value: -4.5},
                {type: 'contract', value: -6}
            ], "country": "Japan"},
            {"name": "405-2", "satellite_id": ipstar_id, "uplink_cf": 28.475, "downlink_cf": 11.075, "bandwidth": 250.000, "type": "forward", "uplink_beam": "11H", "gt_peak": 20.40, "uplink_pol": "H", "downlink_beam": "405-2", "saturated_eirp_peak": 60.30, "downlink_pol": "V", "transponder": "3280G1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.83, "eirp_up_density": 74.8921731, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "South Korea"},
            {"name": "511", "satellite_id": ipstar_id, "uplink_cf": 27.0855, "downlink_cf": 12.2855, "bandwidth": 171.000, "type": "forward", "uplink_beam": "16V", "gt_peak": 18.01, "uplink_pol": "V", "downlink_beam": "511", "saturated_eirp_peak": 59.60, "downlink_pol": "V", "transponder": "3310J2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -64.67, "eirp_up_density": 73.24273412, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "New Zealand"},
            {"name": "512", "satellite_id": ipstar_id, "uplink_cf": 27.275, "downlink_cf": 12.475, "bandwidth": 171.000, "type": "forward", "uplink_beam": "16V", "gt_peak": 18.01, "uplink_pol": "V", "downlink_beam": "512", "saturated_eirp_peak": 59.82, "downlink_pol": "V", "transponder": "3310J2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -64.67, "eirp_up_density": 73.24273412, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "New Zealand"},
            {"name": "513", "satellite_id": ipstar_id, "uplink_cf": 27.4645, "downlink_cf": 12.6645, "bandwidth": 171.000, "type": "forward", "uplink_beam": "16V", "gt_peak": 18.01, "uplink_pol": "V", "downlink_beam": "513", "saturated_eirp_peak": 59.95, "downlink_pol": "V", "transponder": "3310J2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -64.67, "eirp_up_density": 73.24273412, "full_load_obo": [
                {type: 'actual', value: -4},
                {type: 'contract', value: -6}
            ], "country": "New Zealand"},
            {"name": "BC-100 (102)", "satellite_id": ipstar_id, "uplink_cf": 13.875, "downlink_cf": 11.65, "bandwidth": 200.000, "type": "broadcast", "uplink_beam": "BC-100 (102)", "gt_peak": 16.56, "uplink_pol": "H", "downlink_beam": "BC-100 (102)", "saturated_eirp_peak": 58.31, "downlink_pol": "V", "transponder": "3830A1", "dynamic_range": 20.0, "mode": "ALC", "sfd": -67.49, "eirp_up_density": 72.92307297, "full_load_obo": [
                {type: 'actual', value: -5},
                {type: 'contract', value: -5}
            ], "country": "India"},
            {"name": "BC-100 (112)", "satellite_id": ipstar_id, "uplink_cf": 13.875, "downlink_cf": 11.65, "bandwidth": 200.000, "type": "broadcast", "uplink_beam": "BC-100 (112)", "gt_peak": 16.07, "uplink_pol": "H", "downlink_beam": "BC-100 (112)", "saturated_eirp_peak": 58.31, "downlink_pol": "V", "transponder": "3830A1", "dynamic_range": 20.0, "mode": "ALC", "sfd": -67.79, "eirp_up_density": 72.92307297, "full_load_obo": [
                {type: 'actual', value: -5},
                {type: 'contract', value: -5}
            ], "country": "India"},
            {"name": "BC-200 (205)", "satellite_id": ipstar_id, "uplink_cf": 13.875, "downlink_cf": 11.65, "bandwidth": 200.000, "type": "broadcast", "uplink_beam": "BC-200 (205)", "gt_peak": 16.08, "uplink_pol": "H", "downlink_beam": "BC-200 (205)", "saturated_eirp_peak": 60.85, "downlink_pol": "V", "transponder": "3830C1", "dynamic_range": 20.0, "mode": "ALC", "sfd": -67.54, "eirp_up_density": 72.92307297, "full_load_obo": [
                {type: 'actual', value: -5},
                {type: 'contract', value: -5}
            ], "country": "Vietnam"},
            {"name": "BC-200 (207)", "satellite_id": ipstar_id, "uplink_cf": 13.875, "downlink_cf": 11.65, "bandwidth": 200.000, "type": "broadcast", "uplink_beam": "BC-200 (207)", "gt_peak": 16.37, "uplink_pol": "H", "downlink_beam": "BC-200 (207)", "saturated_eirp_peak": 60.81, "downlink_pol": "V", "transponder": "3830C1", "dynamic_range": 20.0, "mode": "ALC", "sfd": -67.94, "eirp_up_density": 72.92307297, "full_load_obo": [
                {type: 'actual', value: -4.9},
                {type: 'contract', value: -5}
            ], "country": "Thailand"},
            {"name": "BC-300 (304)", "satellite_id": ipstar_id, "uplink_cf": 13.875, "downlink_cf": 11.65, "bandwidth": 200.000, "type": "broadcast", "uplink_beam": "BC-300 (304)", "gt_peak": 12.37, "uplink_pol": "H", "downlink_beam": "BC-300 (304)", "saturated_eirp_peak": 57.04, "downlink_pol": "V", "transponder": "38300", "dynamic_range": 20.0, "mode": "ALC", "sfd": -68.40, "eirp_up_density": 72.92307297, "full_load_obo": [
                {type: 'actual', value: -5},
                {type: 'contract', value: -5}
            ], "country": "China"},
            {"name": "BC-300 (313)", "satellite_id": ipstar_id, "uplink_cf": 13.875, "downlink_cf": 11.65, "bandwidth": 200.000, "type": "broadcast", "uplink_beam": "BC-300 (313)", "gt_peak": 9.53, "uplink_pol": "H", "downlink_beam": "BC-300 (313)", "saturated_eirp_peak": 57.07, "downlink_pol": "V", "transponder": "38300", "dynamic_range": 20.0, "mode": "ALC", "sfd": -70.20, "eirp_up_density": 72.92307297, "full_load_obo": [
                {type: 'actual', value: -5},
                {type: 'contract', value: -5}
            ], "country": "China"},
            {"name": "BC-300 (320)", "satellite_id": ipstar_id, "uplink_cf": 13.875, "downlink_cf": 11.65, "bandwidth": 200.000, "type": "broadcast", "uplink_beam": "BC-300 (320)", "gt_peak": 12.79, "uplink_pol": "H", "downlink_beam": "BC-300 (320)", "saturated_eirp_peak": 57.04, "downlink_pol": "V", "transponder": "38300", "dynamic_range": 20.0, "mode": "ALC", "sfd": -67.90, "eirp_up_density": 72.92307297, "full_load_obo": [
                {type: 'actual', value: -5},
                {type: 'contract', value: -5}
            ], "country": "China"},
            {"name": "BC-300 (322)", "satellite_id": ipstar_id, "uplink_cf": 13.875, "downlink_cf": 11.65, "bandwidth": 200.000, "type": "broadcast", "uplink_beam": "BC-300 (322)", "gt_peak": 10.39, "uplink_pol": "H", "downlink_beam": "BC-300 (322)", "saturated_eirp_peak": 57.07, "downlink_pol": "V", "transponder": "38300", "dynamic_range": 20.0, "mode": "ALC", "sfd": -69.82, "eirp_up_density": 72.92307297, "full_load_obo": [
                {type: 'actual', value: -5},
                {type: 'contract', value: -5}
            ], "country": "Taiwan"},
            {"name": "BC-400 (402)", "satellite_id": ipstar_id, "uplink_cf": 13.875, "downlink_cf": 11.65, "bandwidth": 200.000, "type": "broadcast", "uplink_beam": "BC-400 (402)", "gt_peak": 19.58, "uplink_pol": "H", "downlink_beam": "BC-400 (402)", "saturated_eirp_peak": 60.64, "downlink_pol": "V", "transponder": "3820A", "dynamic_range": 20.0, "mode": "ALC", "sfd": -67.30, "eirp_up_density": 69.92307297, "full_load_obo": [
                {type: 'actual', value: -5},
                {type: 'contract', value: -5}
            ], "country": "Japan"},
            {"name": "BC-500 (507)", "satellite_id": ipstar_id, "uplink_cf": 13.875, "downlink_cf": 11.65, "bandwidth": 200.000, "type": "broadcast", "uplink_beam": "BC-500 (507)", "gt_peak": 20.48, "uplink_pol": "H", "downlink_beam": "BC-500 (507)", "saturated_eirp_peak": 57.67, "downlink_pol": "V", "transponder": "3830G1", "dynamic_range": 20.0, "mode": "ALC", "sfd": -66.20, "eirp_up_density": 69.92307297, "full_load_obo": [
                {type: 'actual', value: -5},
                {type: 'contract', value: -5}
            ], "country": "Australia"},
            {"name": "BC-500 (NZ)", "satellite_id": ipstar_id, "uplink_cf": 13.875, "downlink_cf": 11.65, "bandwidth": 200.000, "type": "broadcast", "uplink_beam": "BC-500 (NZ)", "gt_peak": 20.48, "uplink_pol": "H", "downlink_beam": "BC-500 (NZ)", "saturated_eirp_peak": 57.67, "downlink_pol": "V", "transponder": "3830G1", "dynamic_range": 20.0, "mode": "ALC", "sfd": -66.20, "eirp_up_density": 69.92307297, "full_load_obo": [
                {type: 'actual', value: -5},
                {type: 'contract', value: -5}
            ], "country": "New Zealand"},
            {"name": "BC-600 (214)", "satellite_id": ipstar_id, "uplink_cf": 13.875, "downlink_cf": 11.65, "bandwidth": 200.000, "type": "broadcast", "uplink_beam": "BC-600 (214)", "gt_peak": 16.76, "uplink_pol": "H", "downlink_beam": "BC-600 (214)", "saturated_eirp_peak": 58.12, "downlink_pol": "V", "transponder": "3830D1", "dynamic_range": 20.0, "mode": "ALC", "sfd": -67.60, "eirp_up_density": 75.42307297, "full_load_obo": [
                {type: 'actual', value: -5},
                {type: 'contract', value: -5}
            ], "country": "Malaysia"},
            {"name": "BC-600 (604)", "satellite_id": ipstar_id, "uplink_cf": 13.875, "downlink_cf": 11.65, "bandwidth": 200.000, "type": "broadcast", "uplink_beam": "BC-600 (604)", "gt_peak": 14.25, "uplink_pol": "H", "downlink_beam": "BC-600 (604)", "saturated_eirp_peak": 57.79, "downlink_pol": "V", "transponder": "3830D1", "dynamic_range": 20.0, "mode": "ALC", "sfd": -69.10, "eirp_up_density": 75.42307297, "full_load_obo": [
                {type: 'actual', value: -3},
                {type: 'contract', value: -5}
            ], "country": "Indonesia"},
            {"name": "BC-700 (701)", "satellite_id": ipstar_id, "uplink_cf": 13.875, "downlink_cf": 11.65, "bandwidth": 200.000, "type": "broadcast", "uplink_beam": "BC-700 (701)", "gt_peak": 20.16, "uplink_pol": "H", "downlink_beam": "BC-700 (701)", "saturated_eirp_peak": 60.11, "downlink_pol": "V", "transponder": "3820C", "dynamic_range": 20.0, "mode": "ALC", "sfd": -66.80, "eirp_up_density": 72.92307297, "full_load_obo": [
                {type: 'actual', value: -5},
                {type: 'contract', value: -5}
            ], "country": "Philippines"}
        ];
        _.each(data, function (x) {
            Channels.insert(x);
        })
    }

    function insert_ipstar_rtn_data(ipstar_id) {
        var data = [
            {"name": "100", "satellite_id": ipstar_id, "uplink_cf": 14.0580, "downlink_cf": 18.3580, "bandwidth": 116.000, "type": "return", "uplink_beam": "100", "gt_peak": 18.7, "uplink_pol": "H", "downlink_beam": "1V", "saturated_eirp_peak": 57.2, "downlink_pol": "V", "transponder": "3610C1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.22, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "India"},
            {"name": "101", "satellite_id": ipstar_id, "uplink_cf": 14.3170, "downlink_cf": 18.6170, "bandwidth": 116.000, "type": "return", "uplink_beam": "101", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "1V", "saturated_eirp_peak": 57.2, "downlink_pol": "V", "transponder": "3610C1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.07, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "India"},
            {"name": "102", "satellite_id": ipstar_id, "uplink_cf": 14.0580, "downlink_cf": 18.3580, "bandwidth": 116.000, "type": "return", "uplink_beam": "102", "gt_peak": 18.9, "uplink_pol": "H", "downlink_beam": "1H", "saturated_eirp_peak": 56.3, "downlink_pol": "H", "transponder": "3610B1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.06, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "India"},
            {"name": "103", "satellite_id": ipstar_id, "uplink_cf": 14.1875, "downlink_cf": 18.4875, "bandwidth": 116.000, "type": "return", "uplink_beam": "103", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "1V", "saturated_eirp_peak": 57.2, "downlink_pol": "V", "transponder": "3610C1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.71, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "India"},
            {"name": "104", "satellite_id": ipstar_id, "uplink_cf": 14.3170, "downlink_cf": 20.0170, "bandwidth": 116.000, "type": "return", "uplink_beam": "104", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "1V", "saturated_eirp_peak": 57.2, "downlink_pol": "V", "transponder": "3610C1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.67, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "India"},
            {"name": "105", "satellite_id": ipstar_id, "uplink_cf": 14.1875, "downlink_cf": 19.8875, "bandwidth": 116.000, "type": "return", "uplink_beam": "105", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "1V", "saturated_eirp_peak": 57.2, "downlink_pol": "V", "transponder": "3610C1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.87, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "India"},
            {"name": "106", "satellite_id": ipstar_id, "uplink_cf": 14.1875, "downlink_cf": 18.4875, "bandwidth": 116.000, "type": "return", "uplink_beam": "106", "gt_peak": 19.2, "uplink_pol": "H", "downlink_beam": "1H", "saturated_eirp_peak": 56.3, "downlink_pol": "H", "transponder": "3610B1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.93, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "India"},
            {"name": "107", "satellite_id": ipstar_id, "uplink_cf": 14.3170, "downlink_cf": 20.0170, "bandwidth": 116.000, "type": "return", "uplink_beam": "107", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "1H", "saturated_eirp_peak": 56.3, "downlink_pol": "H", "transponder": "3610B1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.80, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "India"},
            {"name": "108", "satellite_id": ipstar_id, "uplink_cf": 14.0580, "downlink_cf": 19.7580, "bandwidth": 116.000, "type": "return", "uplink_beam": "108", "gt_peak": 19.1, "uplink_pol": "H", "downlink_beam": "1V", "saturated_eirp_peak": 57.2, "downlink_pol": "V", "transponder": "3610C1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.24, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "India"},
            {"name": "109", "satellite_id": ipstar_id, "uplink_cf": 14.3170, "downlink_cf": 18.6170, "bandwidth": 116.000, "type": "return", "uplink_beam": "109", "gt_peak": 19.2, "uplink_pol": "H", "downlink_beam": "1H", "saturated_eirp_peak": 56.3, "downlink_pol": "H", "transponder": "3610B1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.86, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "India"},
            {"name": "110", "satellite_id": ipstar_id, "uplink_cf": 14.0580, "downlink_cf": 19.7580, "bandwidth": 116.000, "type": "return", "uplink_beam": "110", "gt_peak": 19.1, "uplink_pol": "H", "downlink_beam": "1H", "saturated_eirp_peak": 56.3, "downlink_pol": "H", "transponder": "3610B1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.22, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "India"},
            {"name": "111", "satellite_id": ipstar_id, "uplink_cf": 14.1875, "downlink_cf": 19.8875, "bandwidth": 116.000, "type": "return", "uplink_beam": "111", "gt_peak": 19.5, "uplink_pol": "H", "downlink_beam": "1H", "saturated_eirp_peak": 56.3, "downlink_pol": "H", "transponder": "3610B1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -58.99, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "India"},
            {"name": "112", "satellite_id": ipstar_id, "uplink_cf": 14.1875, "downlink_cf": 19.8875, "bandwidth": 116.000, "type": "return", "uplink_beam": "112", "gt_peak": 19.4, "uplink_pol": "H", "downlink_beam": "2V", "saturated_eirp_peak": 57.8, "downlink_pol": "V", "transponder": "3610L1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.15, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "India"},
            {"name": "113", "satellite_id": ipstar_id, "uplink_cf": 14.3170, "downlink_cf": 18.6170, "bandwidth": 116.000, "type": "return", "uplink_beam": "113", "gt_peak": 19.4, "uplink_pol": "H", "downlink_beam": "2V", "saturated_eirp_peak": 57.8, "downlink_pol": "V", "transponder": "3610L1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.21, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "India"},
            {"name": "114", "satellite_id": ipstar_id, "uplink_cf": 14.0580, "downlink_cf": 18.3580, "bandwidth": 116.000, "type": "return", "uplink_beam": "114", "gt_peak": 18.9, "uplink_pol": "H", "downlink_beam": "2V", "saturated_eirp_peak": 57.8, "downlink_pol": "V", "transponder": "3610L1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.47, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "India"},
            {"name": "115", "satellite_id": ipstar_id, "uplink_cf": 14.1875, "downlink_cf": 18.4875, "bandwidth": 116.000, "type": "return", "uplink_beam": "115", "gt_peak": 19.0, "uplink_pol": "H", "downlink_beam": "2V", "saturated_eirp_peak": 57.8, "downlink_pol": "V", "transponder": "3610L1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.12, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "India"},
            {"name": "201", "satellite_id": ipstar_id, "uplink_cf": 14.0580, "downlink_cf": 19.7580, "bandwidth": 116.000, "type": "return", "uplink_beam": "201", "gt_peak": 18.8, "uplink_pol": "H", "downlink_beam": "17H", "saturated_eirp_peak": 55.4, "downlink_pol": "H", "transponder": "3610J1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.63, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "Myanmar"},
            {"name": "202", "satellite_id": ipstar_id, "uplink_cf": 14.1875, "downlink_cf": 19.8875, "bandwidth": 116.000, "type": "return", "uplink_beam": "202", "gt_peak": 19.0, "uplink_pol": "H", "downlink_beam": "17H", "saturated_eirp_peak": 55.4, "downlink_pol": "H", "transponder": "3610J1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.90, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "Myanmar"},
            {"name": "203", "satellite_id": ipstar_id, "uplink_cf": 14.3170, "downlink_cf": 18.6170, "bandwidth": 116.000, "type": "return", "uplink_beam": "203", "gt_peak": 19.2, "uplink_pol": "H", "downlink_beam": "3H", "saturated_eirp_peak": 58.4, "downlink_pol": "H", "transponder": "3610J1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.66, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "Thailand"},
            {"name": "204", "satellite_id": ipstar_id, "uplink_cf": 14.1875, "downlink_cf": 18.4875, "bandwidth": 116.000, "type": "return", "uplink_beam": "204", "gt_peak": 18.9, "uplink_pol": "H", "downlink_beam": "3H", "saturated_eirp_peak": 58.4, "downlink_pol": "H", "transponder": "3610J1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.01, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "Thailand"},
            {"name": "205", "satellite_id": ipstar_id, "uplink_cf": 14.0580, "downlink_cf": 19.7580, "bandwidth": 116.000, "type": "return", "uplink_beam": "205", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "15H", "saturated_eirp_peak": 61.0, "downlink_pol": "H", "transponder": "3610K1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.08, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "Vietnam"},
            {"name": "206", "satellite_id": ipstar_id, "uplink_cf": 14.3170, "downlink_cf": 20.0170, "bandwidth": 116.000, "type": "return", "uplink_beam": "206", "gt_peak": 19.6, "uplink_pol": "H", "downlink_beam": "15H", "saturated_eirp_peak": 61.0, "downlink_pol": "H", "transponder": "3610K1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.67, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "Vietnam"},
            {"name": "207", "satellite_id": ipstar_id, "uplink_cf": 14.0580, "downlink_cf": 19.7580, "bandwidth": 116.000, "type": "return", "uplink_beam": "207", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "3H", "saturated_eirp_peak": 62.0, "downlink_pol": "V", "transponder": "3610H1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -58.86, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "Thailand"},
            {"name": "208", "satellite_id": ipstar_id, "uplink_cf": 14.3170, "downlink_cf": 20.0170, "bandwidth": 116.000, "type": "return", "uplink_beam": "208", "gt_peak": 18.9, "uplink_pol": "H", "downlink_beam": "18H", "saturated_eirp_peak": 57.4, "downlink_pol": "H", "transponder": "3610J1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.07, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "Cambodia"},
            {"name": "209", "satellite_id": ipstar_id, "uplink_cf": 14.1875, "downlink_cf": 19.8875, "bandwidth": 116.000, "type": "return", "uplink_beam": "209", "gt_peak": 19.9, "uplink_pol": "H", "downlink_beam": "3V", "saturated_eirp_peak": 62.0, "downlink_pol": "V", "transponder": "3610H1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -58.51, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "Thailand"},
            {"name": "210", "satellite_id": ipstar_id, "uplink_cf": 14.0580, "downlink_cf": 18.3580, "bandwidth": 116.000, "type": "return", "uplink_beam": "210", "gt_peak": 18.5, "uplink_pol": "H", "downlink_beam": "15H", "saturated_eirp_peak": 61.0, "downlink_pol": "H", "transponder": "3610K1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.88, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "Vietnam"},
            {"name": "211", "satellite_id": ipstar_id, "uplink_cf": 14.1875, "downlink_cf": 18.4875, "bandwidth": 116.000, "type": "return", "uplink_beam": "211", "gt_peak": 18.7, "uplink_pol": "H", "downlink_beam": "15H", "saturated_eirp_peak": 61.0, "downlink_pol": "H", "transponder": "3610K1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.40, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "Vietnam"},
            {"name": "213", "satellite_id": ipstar_id, "uplink_cf": 14.1875, "downlink_cf": 19.8875, "bandwidth": 116.000, "type": "return", "uplink_beam": "213", "gt_peak": 19.6, "uplink_pol": "H", "downlink_beam": "13H", "saturated_eirp_peak": 61.6, "downlink_pol": "H", "transponder": "3610T1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -58.65, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "Malaysia"},
            {"name": "214", "satellite_id": ipstar_id, "uplink_cf": 14.0580, "downlink_cf": 19.7580, "bandwidth": 116.000, "type": "return", "uplink_beam": "214", "gt_peak": 19.5, "uplink_pol": "H", "downlink_beam": "13H", "saturated_eirp_peak": 61.6, "downlink_pol": "H", "transponder": "3610T1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -58.61, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "Malaysia"},
            {"name": "215", "satellite_id": ipstar_id, "uplink_cf": 14.0580, "downlink_cf": 18.3580, "bandwidth": 116.000, "type": "return", "uplink_beam": "215", "gt_peak": 18.1, "uplink_pol": "H", "downlink_beam": "13H", "saturated_eirp_peak": 62.8, "downlink_pol": "H", "transponder": "3610R1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.62, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "Malaysia"},
            {"name": "216", "satellite_id": ipstar_id, "uplink_cf": 14.3170, "downlink_cf": 18.6170, "bandwidth": 116.000, "type": "return", "uplink_beam": "216", "gt_peak": 18.3, "uplink_pol": "H", "downlink_beam": "13H", "saturated_eirp_peak": 62.8, "downlink_pol": "H", "transponder": "3610R1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.17, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "Malaysia"},
            {"name": "217", "satellite_id": ipstar_id, "uplink_cf": 14.1875, "downlink_cf": 18.4875, "bandwidth": 116.000, "type": "return", "uplink_beam": "217", "gt_peak": 18.0, "uplink_pol": "H", "downlink_beam": "13H", "saturated_eirp_peak": 62.8, "downlink_pol": "H", "transponder": "3610R1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.01, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "Malaysia"},
            {"name": "301", "satellite_id": ipstar_id, "uplink_cf": 14.1875, "downlink_cf": 19.8875, "bandwidth": 116.000, "type": "return", "uplink_beam": "301", "gt_peak": 18.7, "uplink_pol": "H", "downlink_beam": "4H", "saturated_eirp_peak": 55.6, "downlink_pol": "H", "transponder": "3620K1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.81, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "China"},
            {"name": "302", "satellite_id": ipstar_id, "uplink_cf": 14.3170, "downlink_cf": 20.0170, "bandwidth": 116.000, "type": "return", "uplink_beam": "302", "gt_peak": 18.6, "uplink_pol": "H", "downlink_beam": "4H", "saturated_eirp_peak": 55.6, "downlink_pol": "H", "transponder": "3620K1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.51, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "China"},
            {"name": "303", "satellite_id": ipstar_id, "uplink_cf": 14.0580, "downlink_cf": 19.7580, "bandwidth": 116.000, "type": "return", "uplink_beam": "303", "gt_peak": 18.8, "uplink_pol": "H", "downlink_beam": "4H", "saturated_eirp_peak": 55.6, "downlink_pol": "H", "transponder": "3620K1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.47, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "China"},
            {"name": "304", "satellite_id": ipstar_id, "uplink_cf": 14.1875, "downlink_cf": 19.8875, "bandwidth": 116.000, "type": "return", "uplink_beam": "304", "gt_peak": 19.7, "uplink_pol": "H", "downlink_beam": "4V", "saturated_eirp_peak": 58.3, "downlink_pol": "V", "transponder": "3620J1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.00, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "China"},
            {"name": "305", "satellite_id": ipstar_id, "uplink_cf": 14.3170, "downlink_cf": 20.0170, "bandwidth": 116.000, "type": "return", "uplink_beam": "305", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "4V", "saturated_eirp_peak": 58.3, "downlink_pol": "V", "transponder": "3620J1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.19, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "China"},
            {"name": "306", "satellite_id": ipstar_id, "uplink_cf": 14.1875, "downlink_cf": 18.4875, "bandwidth": 116.000, "type": "return", "uplink_beam": "306", "gt_peak": 18.8, "uplink_pol": "H", "downlink_beam": "4H", "saturated_eirp_peak": 55.6, "downlink_pol": "H", "transponder": "3620K1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.22, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "China"},
            {"name": "307", "satellite_id": ipstar_id, "uplink_cf": 14.3170, "downlink_cf": 18.6170, "bandwidth": 116.000, "type": "return", "uplink_beam": "307", "gt_peak": 19.1, "uplink_pol": "H", "downlink_beam": "4H", "saturated_eirp_peak": 55.6, "downlink_pol": "H", "transponder": "3620K1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.71, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "China"},
            {"name": "308", "satellite_id": ipstar_id, "uplink_cf": 14.0580, "downlink_cf": 19.7580, "bandwidth": 116.000, "type": "return", "uplink_beam": "308", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "4V", "saturated_eirp_peak": 58.3, "downlink_pol": "V", "transponder": "3620J1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.74, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "China"},
            {"name": "309", "satellite_id": ipstar_id, "uplink_cf": 14.1875, "downlink_cf": 18.4875, "bandwidth": 116.000, "type": "return", "uplink_beam": "309", "gt_peak": 18.6, "uplink_pol": "H", "downlink_beam": "5H", "saturated_eirp_peak": 58.7, "downlink_pol": "H", "transponder": "3610F1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.52, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "China"},
            {"name": "310", "satellite_id": ipstar_id, "uplink_cf": 14.3170, "downlink_cf": 20.0170, "bandwidth": 116.000, "type": "return", "uplink_beam": "310", "gt_peak": 19.7, "uplink_pol": "H", "downlink_beam": "5V", "saturated_eirp_peak": 57.4, "downlink_pol": "V", "transponder": "3620A1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -58.94, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "China"},
            {"name": "311", "satellite_id": ipstar_id, "uplink_cf": 14.0580, "downlink_cf": 18.3580, "bandwidth": 116.000, "type": "return", "uplink_beam": "311", "gt_peak": 18.7, "uplink_pol": "H", "downlink_beam": "4H", "saturated_eirp_peak": 55.6, "downlink_pol": "H", "transponder": "3620K1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.59, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "China"},
            {"name": "312", "satellite_id": ipstar_id, "uplink_cf": 14.1875, "downlink_cf": 18.4875, "bandwidth": 116.000, "type": "return", "uplink_beam": "312", "gt_peak": 18.6, "uplink_pol": "H", "downlink_beam": "10V", "saturated_eirp_peak": 57.3, "downlink_pol": "V", "transponder": "36100", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.47, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "China"},
            {"name": "313", "satellite_id": ipstar_id, "uplink_cf": 14.3170, "downlink_cf": 18.6170, "bandwidth": 116.000, "type": "return", "uplink_beam": "313", "gt_peak": 19.2, "uplink_pol": "H", "downlink_beam": "10V", "saturated_eirp_peak": 57.3, "downlink_pol": "V", "transponder": "36100", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.40, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "China"},
            {"name": "314", "satellite_id": ipstar_id, "uplink_cf": 14.3170, "downlink_cf": 18.6170, "bandwidth": 116.000, "type": "return", "uplink_beam": "314", "gt_peak": 18.8, "uplink_pol": "H", "downlink_beam": "5H", "saturated_eirp_peak": 58.7, "downlink_pol": "H", "transponder": "3610F1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.76, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "China"},
            {"name": "315", "satellite_id": ipstar_id, "uplink_cf": 14.0580, "downlink_cf": 18.3580, "bandwidth": 116.000, "type": "return", "uplink_beam": "315", "gt_peak": 18.7, "uplink_pol": "H", "downlink_beam": "5H", "saturated_eirp_peak": 58.7, "downlink_pol": "H", "transponder": "3610F1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.86, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "China"},
            {"name": "316", "satellite_id": ipstar_id, "uplink_cf": 14.1875, "downlink_cf": 19.8875, "bandwidth": 116.000, "type": "return", "uplink_beam": "316", "gt_peak": 19.7, "uplink_pol": "H", "downlink_beam": "5V", "saturated_eirp_peak": 57.4, "downlink_pol": "V", "transponder": "3620A1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -58.82, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "China"},
            {"name": "317", "satellite_id": ipstar_id, "uplink_cf": 14.3170, "downlink_cf": 20.0170, "bandwidth": 116.000, "type": "return", "uplink_beam": "317", "gt_peak": 19.5, "uplink_pol": "H", "downlink_beam": "10V", "saturated_eirp_peak": 57.3, "downlink_pol": "V", "transponder": "36100", "dynamic_range": 25.0, "mode": "ALC", "sfd": -58.59, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "China"},
            {"name": "318", "satellite_id": ipstar_id, "uplink_cf": 14.0580, "downlink_cf": 19.7580, "bandwidth": 116.000, "type": "return", "uplink_beam": "318", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "10V", "saturated_eirp_peak": 57.3, "downlink_pol": "V", "transponder": "36100", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.73, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "China"},
            {"name": "319", "satellite_id": ipstar_id, "uplink_cf": 14.3170, "downlink_cf": 18.6170, "bandwidth": 116.000, "type": "return", "uplink_beam": "319", "gt_peak": 19.0, "uplink_pol": "H", "downlink_beam": "5V", "saturated_eirp_peak": 57.4, "downlink_pol": "V", "transponder": "3620A1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.10, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "China"},
            {"name": "320", "satellite_id": ipstar_id, "uplink_cf": 14.0580, "downlink_cf": 19.7580, "bandwidth": 116.000, "type": "return", "uplink_beam": "320", "gt_peak": 19.5, "uplink_pol": "H", "downlink_beam": "5V", "saturated_eirp_peak": 57.4, "downlink_pol": "V", "transponder": "3620A1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.56, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "China"},
            {"name": "321", "satellite_id": ipstar_id, "uplink_cf": 14.1875, "downlink_cf": 19.8875, "bandwidth": 116.000, "type": "return", "uplink_beam": "321", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "10V", "saturated_eirp_peak": 57.3, "downlink_pol": "V", "transponder": "36100", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.17, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "China"},
            {"name": "322", "satellite_id": ipstar_id, "uplink_cf": 14.3170, "downlink_cf": 20.0170, "bandwidth": 116.000, "type": "return", "uplink_beam": "322", "gt_peak": 19.6, "uplink_pol": "H", "downlink_beam": "14H", "saturated_eirp_peak": 59.6, "downlink_pol": "H", "transponder": "3610F1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -58.93, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "Taiwan"},
            {"name": "323", "satellite_id": ipstar_id, "uplink_cf": 14.1875, "downlink_cf": 18.4875, "bandwidth": 116.000, "type": "return", "uplink_beam": "323", "gt_peak": 18.9, "uplink_pol": "H", "downlink_beam": "5V", "saturated_eirp_peak": 57.4, "downlink_pol": "V", "transponder": "3620A1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.90, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "China"},
            {"name": "328", "satellite_id": ipstar_id, "uplink_cf": 14.4443, "downlink_cf": 20.1443, "bandwidth": 111.500, "type": "return", "uplink_beam": "328", "gt_peak": 8.0, "uplink_pol": "V", "downlink_beam": "10V", "saturated_eirp_peak": 57.1, "downlink_pol": "V", "transponder": "36100", "dynamic_range": 25.0, "mode": "ALC", "sfd": -57.53, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "China"},
            {"name": "401", "satellite_id": ipstar_id, "uplink_cf": 14.2855, "downlink_cf": 18.5855, "bandwidth": 179.000, "type": "return", "uplink_beam": "401", "gt_peak": 18.0, "uplink_pol": "H", "downlink_beam": "7V", "saturated_eirp_peak": 56.3, "downlink_pol": "V", "transponder": "3620B1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -58.83, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "Japan"},
            {"name": "402", "satellite_id": ipstar_id, "uplink_cf": 14.0895, "downlink_cf": 19.7895, "bandwidth": 179.000, "type": "return", "uplink_beam": "402", "gt_peak": 18.6, "uplink_pol": "H", "downlink_beam": "7V", "saturated_eirp_peak": 56.3, "downlink_pol": "V", "transponder": "3620B1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -58.44, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "Japan"},
            {"name": "403", "satellite_id": ipstar_id, "uplink_cf": 14.2855, "downlink_cf": 19.9855, "bandwidth": 179.000, "type": "return", "uplink_beam": "403", "gt_peak": 19.0, "uplink_pol": "H", "downlink_beam": "7V", "saturated_eirp_peak": 56.3, "downlink_pol": "V", "transponder": "3620B1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -57.84, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "Japan"},
            {"name": "404", "satellite_id": ipstar_id, "uplink_cf": 14.0895, "downlink_cf": 18.3895, "bandwidth": 179.000, "type": "return", "uplink_beam": "404", "gt_peak": 18.8, "uplink_pol": "H", "downlink_beam": "7V", "saturated_eirp_peak": 56.3, "downlink_pol": "V", "transponder": "3620B1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -58.41, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "Japan"},
            {"name": "405", "satellite_id": ipstar_id, "uplink_cf": 14.2855, "downlink_cf": 19.9855, "bandwidth": 179.000, "type": "return", "uplink_beam": "405", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "11H", "saturated_eirp_peak": 60.2, "downlink_pol": "H", "transponder": "3610D1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -57.12, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "South Korea"},
            {"name": "406", "satellite_id": ipstar_id, "uplink_cf": 14.0580, "downlink_cf": 18.3580, "bandwidth": 116.000, "type": "return", "uplink_beam": "406", "gt_peak": 18.3, "uplink_pol": "H", "downlink_beam": "10V", "saturated_eirp_peak": 57.3, "downlink_pol": "V", "transponder": "36100", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.35, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "China"},
            {"name": "501", "satellite_id": ipstar_id, "uplink_cf": 14.2855, "downlink_cf": 19.9855, "bandwidth": 179.000, "type": "return", "uplink_beam": "501", "gt_peak": 18.1, "uplink_pol": "H", "downlink_beam": "8V", "saturated_eirp_peak": 55.0, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25.0, "mode": "ALC", "sfd": -58.76, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "Australia"},
            {"name": "502", "satellite_id": ipstar_id, "uplink_cf": 14.2855, "downlink_cf": 18.5855, "bandwidth": 179.000, "type": "return", "uplink_beam": "502", "gt_peak": 18.2, "uplink_pol": "H", "downlink_beam": "8H", "saturated_eirp_peak": 55.9, "downlink_pol": "H", "transponder": "3620D1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.06, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "Australia"},
            {"name": "503", "satellite_id": ipstar_id, "uplink_cf": 14.0895, "downlink_cf": 19.7895, "bandwidth": 179.000, "type": "return", "uplink_beam": "503", "gt_peak": 18.7, "uplink_pol": "H", "downlink_beam": "8V", "saturated_eirp_peak": 55.0, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25.0, "mode": "ALC", "sfd": -58.63, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "Australia"},
            {"name": "504", "satellite_id": ipstar_id, "uplink_cf": 14.2855, "downlink_cf": 19.9855, "bandwidth": 179.000, "type": "return", "uplink_beam": "504", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "8H", "saturated_eirp_peak": 55.9, "downlink_pol": "H", "transponder": "3620D1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -57.80, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "Australia"},
            {"name": "505", "satellite_id": ipstar_id, "uplink_cf": 14.0895, "downlink_cf": 18.3895, "bandwidth": 179.000, "type": "return", "uplink_beam": "505", "gt_peak": 19.1, "uplink_pol": "H", "downlink_beam": "8H", "saturated_eirp_peak": 55.9, "downlink_pol": "H", "transponder": "3620D1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -58.08, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "Australia"},
            {"name": "506", "satellite_id": ipstar_id, "uplink_cf": 14.2855, "downlink_cf": 18.5855, "bandwidth": 179.000, "type": "return", "uplink_beam": "506", "gt_peak": 19.0, "uplink_pol": "H", "downlink_beam": "9V", "saturated_eirp_peak": 56.3, "downlink_pol": "V", "transponder": "3620F1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -58.16, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "Australia"},
            {"name": "507", "satellite_id": ipstar_id, "uplink_cf": 14.0895, "downlink_cf": 19.7895, "bandwidth": 179.000, "type": "return", "uplink_beam": "507", "gt_peak": 19.9, "uplink_pol": "H", "downlink_beam": "8H", "saturated_eirp_peak": 55.9, "downlink_pol": "H", "transponder": "3620D1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -57.39, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "Australia"},
            {"name": "508", "satellite_id": ipstar_id, "uplink_cf": 14.2855, "downlink_cf": 19.9855, "bandwidth": 179.000, "type": "return", "uplink_beam": "508", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "9V", "saturated_eirp_peak": 56.3, "downlink_pol": "V", "transponder": "3620F1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -57.72, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "Australia"},
            {"name": "509", "satellite_id": ipstar_id, "uplink_cf": 14.0895, "downlink_cf": 18.3895, "bandwidth": 179.000, "type": "return", "uplink_beam": "509", "gt_peak": 19.0, "uplink_pol": "H", "downlink_beam": "9V", "saturated_eirp_peak": 56.3, "downlink_pol": "V", "transponder": "3620F1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -58.48, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "Australia"},
            {"name": "510", "satellite_id": ipstar_id, "uplink_cf": 14.0895, "downlink_cf": 19.7895, "bandwidth": 179.000, "type": "return", "uplink_beam": "510", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "9V", "saturated_eirp_peak": 56.3, "downlink_pol": "V", "transponder": "3620F1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -57.83, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "Australia"},
            {"name": "514", "satellite_id": ipstar_id, "uplink_cf": 14.4443, "downlink_cf": 20.1443, "bandwidth": 111.500, "type": "return", "uplink_beam": "514", "gt_peak": 4.9, "uplink_pol": "H", "downlink_beam": "8V", "saturated_eirp_peak": 52.9, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.59, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "Australia"},
            {"name": "601", "satellite_id": ipstar_id, "uplink_cf": 14.1875, "downlink_cf": 18.4875, "bandwidth": 116.000, "type": "return", "uplink_beam": "601", "gt_peak": 19.1, "uplink_pol": "H", "downlink_beam": "6V", "saturated_eirp_peak": 62.9, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.61, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "Indonesia"},
            {"name": "602", "satellite_id": ipstar_id, "uplink_cf": 14.3170, "downlink_cf": 18.6170, "bandwidth": 116.000, "type": "return", "uplink_beam": "602", "gt_peak": 19.0, "uplink_pol": "H", "downlink_beam": "6V", "saturated_eirp_peak": 62.9, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.37, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "Indonesia"},
            {"name": "603", "satellite_id": ipstar_id, "uplink_cf": 14.0580, "downlink_cf": 18.3580, "bandwidth": 116.000, "type": "return", "uplink_beam": "603", "gt_peak": 18.3, "uplink_pol": "H", "downlink_beam": "6V", "saturated_eirp_peak": 62.9, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.90, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "Indonesia"},
            {"name": "604", "satellite_id": ipstar_id, "uplink_cf": 14.1875, "downlink_cf": 19.8875, "bandwidth": 116.000, "type": "return", "uplink_beam": "604", "gt_peak": 18.0, "uplink_pol": "H", "downlink_beam": "6V", "saturated_eirp_peak": 61.7, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.18, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "Indonesia"},
            {"name": "605", "satellite_id": ipstar_id, "uplink_cf": 14.3170, "downlink_cf": 20.0170, "bandwidth": 116.000, "type": "return", "uplink_beam": "605", "gt_peak": 17.9, "uplink_pol": "H", "downlink_beam": "6V", "saturated_eirp_peak": 61.7, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.52, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "Indonesia"},
            {"name": "606", "satellite_id": ipstar_id, "uplink_cf": 14.0580, "downlink_cf": 19.7580, "bandwidth": 116.000, "type": "return", "uplink_beam": "606", "gt_peak": 17.4, "uplink_pol": "H", "downlink_beam": "6V", "saturated_eirp_peak": 61.7, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.95, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "Indonesia"},
            {"name": "608", "satellite_id": ipstar_id, "uplink_cf": 14.4443, "downlink_cf": 20.1443, "bandwidth": 111.500, "type": "return", "uplink_beam": "608", "gt_peak": 6.4, "uplink_pol": "V", "downlink_beam": "6V", "saturated_eirp_peak": 61.5, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25.0, "mode": "ALC", "sfd": -65.23, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "Indonesia"},
            {"name": "701", "satellite_id": ipstar_id, "uplink_cf": 14.1875, "downlink_cf": 18.4875, "bandwidth": 116.000, "type": "return", "uplink_beam": "701", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "12V", "saturated_eirp_peak": 59.9, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.37, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "Philippines"},
            {"name": "702", "satellite_id": ipstar_id, "uplink_cf": 14.3170, "downlink_cf": 18.6170, "bandwidth": 116.000, "type": "return", "uplink_beam": "702", "gt_peak": 18.8, "uplink_pol": "H", "downlink_beam": "12V", "saturated_eirp_peak": 59.9, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.74, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "Philippines"},
            {"name": "703", "satellite_id": ipstar_id, "uplink_cf": 14.0580, "downlink_cf": 18.3580, "bandwidth": 116.000, "type": "return", "uplink_beam": "703", "gt_peak": 18.1, "uplink_pol": "H", "downlink_beam": "12V", "saturated_eirp_peak": 59.9, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.17, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "Philippines"},
            {"name": "112-2", "satellite_id": ipstar_id, "uplink_cf": 14.4443, "downlink_cf": 20.1443, "bandwidth": 111.500, "type": "return", "uplink_beam": "112-2", "gt_peak": 19.7, "uplink_pol": "H", "downlink_beam": "2V", "saturated_eirp_peak": 57.7, "downlink_pol": "V", "transponder": "3610L1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.18, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "India"},
            {"name": "207-2", "satellite_id": ipstar_id, "uplink_cf": 14.4443, "downlink_cf": 20.1443, "bandwidth": 111.500, "type": "return", "uplink_beam": "207-2", "gt_peak": 19.7, "uplink_pol": "H", "downlink_beam": "3V", "saturated_eirp_peak": 61.8, "downlink_pol": "V", "transponder": "3610H1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -58.51, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "Thailand"},
            {"name": "212-13H", "satellite_id": ipstar_id, "uplink_cf": 14.3170, "downlink_cf": 20.0170, "bandwidth": 116.000, "type": "return", "uplink_beam": "212-13H", "gt_peak": 20.1, "uplink_pol": "H", "downlink_beam": "13H", "saturated_eirp_peak": 61.6, "downlink_pol": "H", "transponder": "3610T1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -57.29, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "Malaysia"},
            {"name": "212-3V", "satellite_id": ipstar_id, "uplink_cf": 14.3170, "downlink_cf": 20.0170, "bandwidth": 116.000, "type": "return", "uplink_beam": "212-3V", "gt_peak": 20.1, "uplink_pol": "H", "downlink_beam": "3V", "saturated_eirp_peak": 62.0, "downlink_pol": "V", "transponder": "3610H1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -57.29, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "Thailand"},
            {"name": "214-2", "satellite_id": ipstar_id, "uplink_cf": 14.4443, "downlink_cf": 20.1443, "bandwidth": 111.500, "type": "return", "uplink_beam": "214-2", "gt_peak": 19.9, "uplink_pol": "H", "downlink_beam": "13H", "saturated_eirp_peak": 61.4, "downlink_pol": "H", "transponder": "3610T1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -58.14, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "Malaysia"},
            {"name": "304-2", "satellite_id": ipstar_id, "uplink_cf": 14.4443, "downlink_cf": 20.1443, "bandwidth": 111.500, "type": "return", "uplink_beam": "304-2", "gt_peak": 19.9, "uplink_pol": "H", "downlink_beam": "4V", "saturated_eirp_peak": 58.1, "downlink_pol": "V", "transponder": "3620J1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -58.82, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "China"},
            {"name": "320-2", "satellite_id": ipstar_id, "uplink_cf": 14.4443, "downlink_cf": 20.1443, "bandwidth": 111.500, "type": "return", "uplink_beam": "320-2", "gt_peak": 19.8, "uplink_pol": "H", "downlink_beam": "5V", "saturated_eirp_peak": 57.3, "downlink_pol": "V", "transponder": "3620A1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.19, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "China"},
            {"name": "322-2", "satellite_id": ipstar_id, "uplink_cf": 14.4443, "downlink_cf": 20.1443, "bandwidth": 111.500, "type": "return", "uplink_beam": "322-2", "gt_peak": 19.6, "uplink_pol": "H", "downlink_beam": "14H", "saturated_eirp_peak": 59.5, "downlink_pol": "H", "transponder": "3610F1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.31, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "China"},
            {"name": "402-2", "satellite_id": ipstar_id, "uplink_cf": 14.4443, "downlink_cf": 20.1443, "bandwidth": 111.500, "type": "return", "uplink_beam": "402-2", "gt_peak": 18.9, "uplink_pol": "H", "downlink_beam": "7V", "saturated_eirp_peak": 54.2, "downlink_pol": "V", "transponder": "3620B1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.11, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "Japan"},
            {"name": "405-2", "satellite_id": ipstar_id, "uplink_cf": 14.4443, "downlink_cf": 20.1443, "bandwidth": 111.500, "type": "return", "uplink_beam": "405-2", "gt_peak": 19.5, "uplink_pol": "H", "downlink_beam": "11H", "saturated_eirp_peak": 58.6, "downlink_pol": "H", "transponder": "3610D1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.33, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "South Korea"},
            {"name": "511", "satellite_id": ipstar_id, "uplink_cf": 14.0580, "downlink_cf": 18.3580, "bandwidth": 116.000, "type": "return", "uplink_beam": "511", "gt_peak": 18.9, "uplink_pol": "H", "downlink_beam": "16V", "saturated_eirp_peak": 53.1, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.63, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "New Zealand"},
            {"name": "512", "satellite_id": ipstar_id, "uplink_cf": 14.1875, "downlink_cf": 18.4875, "bandwidth": 116.000, "type": "return", "uplink_beam": "512", "gt_peak": 18.8, "uplink_pol": "H", "downlink_beam": "16V", "saturated_eirp_peak": 53.1, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.20, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "New Zealand"},
            {"name": "513", "satellite_id": ipstar_id, "uplink_cf": 14.3170, "downlink_cf": 18.6170, "bandwidth": 116.000, "type": "return", "uplink_beam": "513", "gt_peak": 18.6, "uplink_pol": "H", "downlink_beam": "16V", "saturated_eirp_peak": 53.1, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.15, "designed_deepin": -9, "full_load_obo": [
                {type: 'actual', value: -9.5},
                {type: 'contract', value: -9.5}
            ], "actual": -9.5, "country": "New Zealand"}
        ];
        _.each(data, function (x) {
            Channels.insert(x);
        })
    }

    function insert_thaicom5_data(thaicom5Id) {
        var data = [
            {"name": "1V", "satellite_id": thaicom5Id, "uplink_cf": 3, "downlink_cf": 4, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Standard C", "gt_peak": 20, "uplink_pol": "H", "downlink_beam": "Standard C", "saturated_eirp_peak": 54, "downlink_pol": "V", "transponder": "1V", "dynamic_range": 25, "mode": "FGM", "sfd": 88},
            {"name": "2V", "satellite_id": thaicom5Id, "uplink_cf": 3, "downlink_cf": 4, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Standard C", "gt_peak": 20, "uplink_pol": "H", "downlink_beam": "Standard C", "saturated_eirp_peak": 54, "downlink_pol": "V", "transponder": "2V", "dynamic_range": 25, "mode": "FGM", "sfd": 88},
            {"name": "3V", "satellite_id": thaicom5Id, "uplink_cf": 3, "downlink_cf": 4, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Standard C", "gt_peak": 20, "uplink_pol": "H", "downlink_beam": "Standard C", "saturated_eirp_peak": 54, "downlink_pol": "V", "transponder": "3V", "dynamic_range": 25, "mode": "FGM", "sfd": 88},
            {"name": "4V", "satellite_id": thaicom5Id, "uplink_cf": 3, "downlink_cf": 4, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Standard C", "gt_peak": 20, "uplink_pol": "H", "downlink_beam": "Standard C", "saturated_eirp_peak": 54, "downlink_pol": "V", "transponder": "4V", "dynamic_range": 25, "mode": "FGM", "sfd": 88},
            {"name": "5V", "satellite_id": thaicom5Id, "uplink_cf": 3, "downlink_cf": 4, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Standard C", "gt_peak": 20, "uplink_pol": "H", "downlink_beam": "Standard C", "saturated_eirp_peak": 54, "downlink_pol": "V", "transponder": "5V", "dynamic_range": 25, "mode": "FGM", "sfd": 88},
            {"name": "6V", "satellite_id": thaicom5Id, "uplink_cf": 3, "downlink_cf": 4, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Standard C", "gt_peak": 20, "uplink_pol": "H", "downlink_beam": "Standard C", "saturated_eirp_peak": 54, "downlink_pol": "V", "transponder": "6V", "dynamic_range": 25, "mode": "FGM", "sfd": 88},
            {"name": "7V", "satellite_id": thaicom5Id, "uplink_cf": 3, "downlink_cf": 4, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Standard C", "gt_peak": 20, "uplink_pol": "H", "downlink_beam": "Standard C", "saturated_eirp_peak": 54, "downlink_pol": "V", "transponder": "7V", "dynamic_range": 25, "mode": "FGM", "sfd": 88},
            {"name": "8V", "satellite_id": thaicom5Id, "uplink_cf": 3, "downlink_cf": 4, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Standard C", "gt_peak": 20, "uplink_pol": "H", "downlink_beam": "Standard C", "saturated_eirp_peak": 54, "downlink_pol": "V", "transponder": "8V", "dynamic_range": 25, "mode": "FGM", "sfd": 88},
            {"name": "9V", "satellite_id": thaicom5Id, "uplink_cf": 3, "downlink_cf": 4, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Standard C", "gt_peak": 20, "uplink_pol": "H", "downlink_beam": "Standard C", "saturated_eirp_peak": 54, "downlink_pol": "V", "transponder": "9V", "dynamic_range": 25, "mode": "FGM", "sfd": 88},
            {"name": "10V", "satellite_id": thaicom5Id, "uplink_cf": 3, "downlink_cf": 4, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Standard C", "gt_peak": 20, "uplink_pol": "H", "downlink_beam": "Standard C", "saturated_eirp_peak": 54, "downlink_pol": "V", "transponder": "10V", "dynamic_range": 25, "mode": "FGM", "sfd": 88},
            {"name": "11V", "satellite_id": thaicom5Id, "uplink_cf": 3, "downlink_cf": 4, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Standard C", "gt_peak": 20, "uplink_pol": "H", "downlink_beam": "Standard C", "saturated_eirp_peak": 54, "downlink_pol": "V", "transponder": "11V", "dynamic_range": 25, "mode": "FGM", "sfd": 88},
            {"name": "12V", "satellite_id": thaicom5Id, "uplink_cf": 3, "downlink_cf": 4, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Standard C", "gt_peak": 20, "uplink_pol": "H", "downlink_beam": "Standard C", "saturated_eirp_peak": 54, "downlink_pol": "V", "transponder": "12V", "dynamic_range": 25, "mode": "FGM", "sfd": 88},
            {"name": "1G", "satellite_id": thaicom5Id, "uplink_cf": 3, "downlink_cf": 4, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Global C", "gt_peak": 20, "uplink_pol": "V", "downlink_beam": "Global C", "saturated_eirp_peak": 54, "downlink_pol": "H", "transponder": "1G", "dynamic_range": 25, "mode": "FGM", "sfd": 88},
            {"name": "2G", "satellite_id": thaicom5Id, "uplink_cf": 3, "downlink_cf": 4, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Global C", "gt_peak": 20, "uplink_pol": "V", "downlink_beam": "Global C", "saturated_eirp_peak": 54, "downlink_pol": "H", "transponder": "2G", "dynamic_range": 25, "mode": "FGM", "sfd": 88},
            {"name": "3G", "satellite_id": thaicom5Id, "uplink_cf": 3, "downlink_cf": 4, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Global C", "gt_peak": 20, "uplink_pol": "V", "downlink_beam": "Global C", "saturated_eirp_peak": 54, "downlink_pol": "H", "transponder": "3G", "dynamic_range": 25, "mode": "FGM", "sfd": 88},
            {"name": "4G", "satellite_id": thaicom5Id, "uplink_cf": 3, "downlink_cf": 4, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Global C", "gt_peak": 20, "uplink_pol": "V", "downlink_beam": "Global C", "saturated_eirp_peak": 54, "downlink_pol": "H", "transponder": "4G", "dynamic_range": 25, "mode": "FGM", "sfd": 88},
            {"name": "5G", "satellite_id": thaicom5Id, "uplink_cf": 3, "downlink_cf": 4, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Global C", "gt_peak": 20, "uplink_pol": "V", "downlink_beam": "Global C", "saturated_eirp_peak": 54, "downlink_pol": "H", "transponder": "5G", "dynamic_range": 25, "mode": "FGM", "sfd": 88},
            {"name": "6G", "satellite_id": thaicom5Id, "uplink_cf": 3, "downlink_cf": 4, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Global C", "gt_peak": 20, "uplink_pol": "V", "downlink_beam": "Global C", "saturated_eirp_peak": 54, "downlink_pol": "H", "transponder": "6G", "dynamic_range": 25, "mode": "FGM", "sfd": 88},
            {"name": "7G", "satellite_id": thaicom5Id, "uplink_cf": 3, "downlink_cf": 4, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Global C", "gt_peak": 20, "uplink_pol": "V", "downlink_beam": "Global C", "saturated_eirp_peak": 54, "downlink_pol": "H", "transponder": "7G", "dynamic_range": 25, "mode": "FGM", "sfd": 88},
            {"name": "1E", "satellite_id": thaicom5Id, "uplink_cf": 3, "downlink_cf": 4, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Extended C", "gt_peak": 20, "uplink_pol": "H", "downlink_beam": "Extended C", "saturated_eirp_peak": 54, "downlink_pol": "V", "transponder": "1E", "dynamic_range": 25, "mode": "FGM", "sfd": 88},
            {"name": "2E", "satellite_id": thaicom5Id, "uplink_cf": 3, "downlink_cf": 4, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Extended C", "gt_peak": 20, "uplink_pol": "H", "downlink_beam": "Extended C", "saturated_eirp_peak": 54, "downlink_pol": "V", "transponder": "2E", "dynamic_range": 25, "mode": "FGM", "sfd": 88},
            {"name": "3E", "satellite_id": thaicom5Id, "uplink_cf": 3, "downlink_cf": 4, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Extended C", "gt_peak": 20, "uplink_pol": "H", "downlink_beam": "Extended C", "saturated_eirp_peak": 54, "downlink_pol": "V", "transponder": "3E", "dynamic_range": 25, "mode": "FGM", "sfd": 88},
            {"name": "4E", "satellite_id": thaicom5Id, "uplink_cf": 3, "downlink_cf": 4, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Extended C", "gt_peak": 20, "uplink_pol": "H", "downlink_beam": "Extended C", "saturated_eirp_peak": 54, "downlink_pol": "V", "transponder": "4E", "dynamic_range": 25, "mode": "FGM", "sfd": 88},
            {"name": "5E", "satellite_id": thaicom5Id, "uplink_cf": 3, "downlink_cf": 4, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Extended C", "gt_peak": 20, "uplink_pol": "H", "downlink_beam": "Extended C", "saturated_eirp_peak": 54, "downlink_pol": "V", "transponder": "5E", "dynamic_range": 25, "mode": "FGM", "sfd": 88},
            {"name": "6E", "satellite_id": thaicom5Id, "uplink_cf": 3, "downlink_cf": 4, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Extended C", "gt_peak": 20, "uplink_pol": "H", "downlink_beam": "Extended C", "saturated_eirp_peak": 54, "downlink_pol": "V", "transponder": "6E", "dynamic_range": 25, "mode": "FGM", "sfd": 88},
            {"name": "K1H", "satellite_id": thaicom5Id, "uplink_cf": 12, "downlink_cf": 12, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Thailand KU", "gt_peak": 20, "uplink_pol": "V", "downlink_beam": "Thailand KU", "saturated_eirp_peak": 54, "downlink_pol": "H", "transponder": "K1H", "dynamic_range": 25, "mode": "ALC", "sfd": 88, "designed_deepin": 10, "full_load_obo": 0},
            {"name": "K2H", "satellite_id": thaicom5Id, "uplink_cf": 12, "downlink_cf": 12, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Thailand KU", "gt_peak": 20, "uplink_pol": "V", "downlink_beam": "Thailand KU", "saturated_eirp_peak": 54, "downlink_pol": "H", "transponder": "K2H", "dynamic_range": 25, "mode": "ALC", "sfd": 88, "designed_deepin": 10, "full_load_obo": 0},
            {"name": "K3H", "satellite_id": thaicom5Id, "uplink_cf": 12, "downlink_cf": 12, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Thailand KU", "gt_peak": 20, "uplink_pol": "V", "downlink_beam": "Thailand KU", "saturated_eirp_peak": 54, "downlink_pol": "H", "transponder": "K3H", "dynamic_range": 25, "mode": "ALC", "sfd": 88, "designed_deepin": 10, "full_load_obo": 0},
            {"name": "K4H", "satellite_id": thaicom5Id, "uplink_cf": 12, "downlink_cf": 12, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Thailand KU", "gt_peak": 20, "uplink_pol": "V", "downlink_beam": "Thailand KU", "saturated_eirp_peak": 54, "downlink_pol": "H", "transponder": "K4H", "dynamic_range": 25, "mode": "ALC", "sfd": 88, "designed_deepin": 10, "full_load_obo": 0},
            {"name": "K5H", "satellite_id": thaicom5Id, "uplink_cf": 12, "downlink_cf": 12, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Thailand KU", "gt_peak": 20, "uplink_pol": "V", "downlink_beam": "Thailand KU", "saturated_eirp_peak": 54, "downlink_pol": "H", "transponder": "K5H", "dynamic_range": 25, "mode": "ALC", "sfd": 88, "designed_deepin": 10, "full_load_obo": 0},
            {"name": "K6H", "satellite_id": thaicom5Id, "uplink_cf": 12, "downlink_cf": 12, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Thailand KU", "gt_peak": 20, "uplink_pol": "V", "downlink_beam": "Thailand KU", "saturated_eirp_peak": 54, "downlink_pol": "H", "transponder": "K6H", "dynamic_range": 25, "mode": "ALC", "sfd": 88, "designed_deepin": 10, "full_load_obo": 0},
            {"name": "K7H", "satellite_id": thaicom5Id, "uplink_cf": 12, "downlink_cf": 12, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Thailand KU", "gt_peak": 20, "uplink_pol": "V", "downlink_beam": "Thailand KU", "saturated_eirp_peak": 54, "downlink_pol": "H", "transponder": "K7H", "dynamic_range": 25, "mode": "ALC", "sfd": 88, "designed_deepin": 10, "full_load_obo": 0},
            {"name": "K8H", "satellite_id": thaicom5Id, "uplink_cf": 12, "downlink_cf": 12, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Thailand KU", "gt_peak": 20, "uplink_pol": "V", "downlink_beam": "Thailand KU", "saturated_eirp_peak": 54, "downlink_pol": "H", "transponder": "K8H", "dynamic_range": 25, "mode": "ALC", "sfd": 88, "designed_deepin": 10, "full_load_obo": 0},
            {"name": "K8V", "satellite_id": thaicom5Id, "uplink_cf": 12, "downlink_cf": 12, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Steerable KU", "gt_peak": 20, "uplink_pol": "H", "downlink_beam": "Steerable KU", "saturated_eirp_peak": 54, "downlink_pol": "V", "transponder": "K8V", "dynamic_range": 25, "mode": "ALC", "sfd": 88, "designed_deepin": 10, "full_load_obo": 0},
            {"name": "K9H", "satellite_id": thaicom5Id, "uplink_cf": 12, "downlink_cf": 12, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Thailand KU", "gt_peak": 20, "uplink_pol": "V", "downlink_beam": "Thailand KU", "saturated_eirp_peak": 54, "downlink_pol": "H", "transponder": "K9H", "dynamic_range": 25, "mode": "ALC", "sfd": 88, "designed_deepin": 10, "full_load_obo": 0},
            {"name": "K9V", "satellite_id": thaicom5Id, "uplink_cf": 12, "downlink_cf": 12, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Steerable KU", "gt_peak": 20, "uplink_pol": "H", "downlink_beam": "Steerable KU", "saturated_eirp_peak": 54, "downlink_pol": "V", "transponder": "K9V", "dynamic_range": 25, "mode": "ALC", "sfd": 88, "designed_deepin": 10, "full_load_obo": 0},
            {"name": "K10H", "satellite_id": thaicom5Id, "uplink_cf": 12, "downlink_cf": 12, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Thailand KU", "gt_peak": 20, "uplink_pol": "V", "downlink_beam": "Thailand KU", "saturated_eirp_peak": 54, "downlink_pol": "H", "transponder": "K10H", "dynamic_range": 25, "mode": "ALC", "sfd": 88, "designed_deepin": 10, "full_load_obo": 0},
            {"name": "K10V", "satellite_id": thaicom5Id, "uplink_cf": 12, "downlink_cf": 12, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Steerable KU", "gt_peak": 20, "uplink_pol": "H", "downlink_beam": "Steerable KU", "saturated_eirp_peak": 54, "downlink_pol": "V", "transponder": "K10V", "dynamic_range": 25, "mode": "ALC", "sfd": 88, "designed_deepin": 10, "full_load_obo": 0},
            {"name": "K11H", "satellite_id": thaicom5Id, "uplink_cf": 12, "downlink_cf": 12, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Thailand KU", "gt_peak": 20, "uplink_pol": "V", "downlink_beam": "Thailand KU", "saturated_eirp_peak": 54, "downlink_pol": "H", "transponder": "K11H", "dynamic_range": 25, "mode": "ALC", "sfd": 88, "designed_deepin": 10, "full_load_obo": 0},
            {"name": "K11V", "satellite_id": thaicom5Id, "uplink_cf": 12, "downlink_cf": 12, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Steerable KU", "gt_peak": 20, "uplink_pol": "H", "downlink_beam": "Steerable KU", "saturated_eirp_peak": 54, "downlink_pol": "V", "transponder": "K11V", "dynamic_range": 25, "mode": "ALC", "sfd": 88, "designed_deepin": 10, "full_load_obo": 0},
            {"name": "K12V", "satellite_id": thaicom5Id, "uplink_cf": 12, "downlink_cf": 12, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Steerable KU", "gt_peak": 20, "uplink_pol": "H", "downlink_beam": "Steerable KU", "saturated_eirp_peak": 54, "downlink_pol": "V", "transponder": "K12V", "dynamic_range": 25, "mode": "ALC", "sfd": 88, "designed_deepin": 10, "full_load_obo": 0},
            {"name": "K13V", "satellite_id": thaicom5Id, "uplink_cf": 12, "downlink_cf": 12, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Steerable KU", "gt_peak": 20, "uplink_pol": "H", "downlink_beam": "Steerable KU", "saturated_eirp_peak": 54, "downlink_pol": "V", "transponder": "K13V", "dynamic_range": 25, "mode": "ALC", "sfd": 88, "designed_deepin": 10, "full_load_obo": 0},
            {"name": "K14V", "satellite_id": thaicom5Id, "uplink_cf": 12, "downlink_cf": 12, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Steerable KU", "gt_peak": 20, "uplink_pol": "H", "downlink_beam": "Steerable KU", "saturated_eirp_peak": 54, "downlink_pol": "V", "transponder": "K14V", "dynamic_range": 25, "mode": "ALC", "sfd": 88, "designed_deepin": 10, "full_load_obo": 0}
        ];
        _.each(data, function (x) {
            Channels.insert(x);
        })
    }

    var contours = [
        {
            satellite: "IPSTAR",
            beam: "603",
            type: "downlink",
            relative_value: -1,
            polygon: {
                "type": "Linestring",
                "coordinates": [
                    [103.729, -1.696],
                    [104.232 , -1.925],
                    [104.463 , -2.207],
                    [104.560 , -2.719],
                    [104.354 , -3.233],
                    [104.210 , -3.380],
                    [103.668 , -3.618],
                    [103.130 , -3.526],
                    [102.796 , -3.237],
                    [102.603 , -2.762],
                    [102.594 , -2.724],
                    [102.605 , -2.671],
                    [102.744 , -2.211],
                    [103.158 , -1.818],
                    [103.645 , -1.696],
                    [103.698 , -1.688],
                    [103.729 , -1.696]
                ]
            }
        }
    ]
}