/**
 * Created by Dome on 5/20/14 AD.
 */

Template.contact.rendered = function(){
    var contour_arr = [{"beam":"100","type":"forward","value_50":-2.5,"value_eoc":-4.89},
        {"beam":"101","type":"forward","value_50":-2.5,"value_eoc":-4.95},
        {"beam":"102","type":"forward","value_50":-2.2,"value_eoc":-4.42},
        {"beam":"103","type":"forward","value_50":-2.4,"value_eoc":-4.74},
        {"beam":"104","type":"forward","value_50":-2.3,"value_eoc":-4.64},
        {"beam":"105","type":"forward","value_50":-2.1,"value_eoc":-4.44},
        {"beam":"106","type":"forward","value_50":-2.2,"value_eoc":-4.4},
        {"beam":"107","type":"forward","value_50":-2.3,"value_eoc":-4.65},
        {"beam":"108","type":"forward","value_50":-2.0,"value_eoc":-4.17},
        {"beam":"109","type":"forward","value_50":-2.2,"value_eoc":-4.46},
        {"beam":"110","type":"forward","value_50":-1.9,"value_eoc":-3.98},
        {"beam":"111","type":"forward","value_50":-2.1,"value_eoc":-4.35},
        {"beam":"112","type":"forward","value_50":-2.1,"value_eoc":-4.33},
        {"beam":"113","type":"forward","value_50":-2.3,"value_eoc":-4.66},
        {"beam":"114","type":"forward","value_50":-1.8,"value_eoc":-3.85},
        {"beam":"115","type":"forward","value_50":-2.2,"value_eoc":-4.32},
        {"beam":"201","type":"forward","value_50":-1.9,"value_eoc":-3.98},
        {"beam":"202","type":"forward","value_50":-2.2,"value_eoc":-4.62},
        {"beam":"203","type":"forward","value_50":-2.2,"value_eoc":-4.51},
        {"beam":"204","type":"forward","value_50":-2.1,"value_eoc":-4.43},
        {"beam":"205","type":"forward","value_50":-2.2,"value_eoc":-4.38},
        {"beam":"206","type":"forward","value_50":-2.4,"value_eoc":-4.75},
        {"beam":"207","type":"forward","value_50":-2.3,"value_eoc":-4.5},
        {"beam":"208","type":"forward","value_50":-2.4,"value_eoc":-4.81},
        {"beam":"209","type":"forward","value_50":-2.4,"value_eoc":-4.87},
        {"beam":"210","type":"forward","value_50":-2.3,"value_eoc":-4.6},
        {"beam":"211","type":"forward","value_50":-2.2,"value_eoc":-4.53},
        {"beam":"213","type":"forward","value_50":-2.5,"value_eoc":-4.9},
        {"beam":"214","type":"forward","value_50":-2.3,"value_eoc":-4.47},
        {"beam":"215","type":"forward","value_50":-2.1,"value_eoc":-4.29},
        {"beam":"216","type":"forward","value_50":-2.3,"value_eoc":-4.64},
        {"beam":"217","type":"forward","value_50":-2.2,"value_eoc":-4.35},
        {"beam":"301","type":"forward","value_50":-2.3,"value_eoc":-4.52},
        {"beam":"302","type":"forward","value_50":-2.4,"value_eoc":-4.91},
        {"beam":"303","type":"forward","value_50":-2.0,"value_eoc":-4.2},
        {"beam":"304","type":"forward","value_50":-2.1,"value_eoc":-4.45},
        {"beam":"305","type":"forward","value_50":-2.3,"value_eoc":-4.67},
        {"beam":"306","type":"forward","value_50":-2.3,"value_eoc":-4.69},
        {"beam":"307","type":"forward","value_50":-2.3,"value_eoc":-4.7},
        {"beam":"308","type":"forward","value_50":-2.2,"value_eoc":-4.47},
        {"beam":"309","type":"forward","value_50":-2.2,"value_eoc":-4.52},
        {"beam":"310","type":"forward","value_50":-2.6,"value_eoc":-5.15},
        {"beam":"311","type":"forward","value_50":-2.1,"value_eoc":-4.31},
        {"beam":"312","type":"forward","value_50":-2.2,"value_eoc":-4.55},
        {"beam":"313","type":"forward","value_50":-2.4,"value_eoc":-4.95},
        {"beam":"314","type":"forward","value_50":-2.3,"value_eoc":-4.71},
        {"beam":"315","type":"forward","value_50":-2.0,"value_eoc":-4.12},
        {"beam":"316","type":"forward","value_50":-2.5,"value_eoc":-4.94},
        {"beam":"317","type":"forward","value_50":-2.5,"value_eoc":-4.97},
        {"beam":"318","type":"forward","value_50":-2.2,"value_eoc":-4.36},
        {"beam":"319","type":"forward","value_50":-2.1,"value_eoc":-4.43},
        {"beam":"320","type":"forward","value_50":-2.2,"value_eoc":-4.4},
        {"beam":"321","type":"forward","value_50":-2.2,"value_eoc":-4.48},
        {"beam":"322","type":"forward","value_50":-2.5,"value_eoc":-5.11},
        {"beam":"323","type":"forward","value_50":-2.4,"value_eoc":-4.75},
        {"beam":"328","type":"forward","value_50":-1.3,"value_eoc":-2.66},
        {"beam":"401","type":"forward","value_50":-2.5,"value_eoc":-4.63},
        {"beam":"402","type":"forward","value_50":-2.2,"value_eoc":-4.31},
        {"beam":"403","type":"forward","value_50":-2.4,"value_eoc":-4.53},
        {"beam":"404","type":"forward","value_50":-2.1,"value_eoc":-4.24},
        {"beam":"405","type":"forward","value_50":-2.7,"value_eoc":-5.01},
        {"beam":"406","type":"forward","value_50":-2.4,"value_eoc":-4.77},
        {"beam":"501","type":"forward","value_50":-2.5,"value_eoc":-4.99},
        {"beam":"502","type":"forward","value_50":-2.3,"value_eoc":-4.44},
        {"beam":"503","type":"forward","value_50":-1.9,"value_eoc":-3.99},
        {"beam":"504","type":"forward","value_50":-2.2,"value_eoc":-4.52},
        {"beam":"505","type":"forward","value_50":-2.1,"value_eoc":-4.32},
        {"beam":"506","type":"forward","value_50":-2.4,"value_eoc":-4.95},
        {"beam":"507","type":"forward","value_50":-2.2,"value_eoc":-4.45},
        {"beam":"508","type":"forward","value_50":-2.4,"value_eoc":-4.92},
        {"beam":"509","type":"forward","value_50":-2.1,"value_eoc":-4.27},
        {"beam":"510","type":"forward","value_50":-2.1,"value_eoc":-4.28},
        {"beam":"511","type":"forward","value_50":-2.5,"value_eoc":-4.72},
        {"beam":"512","type":"forward","value_50":-2.3,"value_eoc":-4.61},
        {"beam":"513","type":"forward","value_50":-2.3,"value_eoc":-4.76},
        {"beam":"514","type":"forward","value_50":-1.2,"value_eoc":-2.53},
        {"beam":"601","type":"forward","value_50":-2.3,"value_eoc":-4.61},
        {"beam":"602","type":"forward","value_50":-2.3,"value_eoc":-4.64},
        {"beam":"603","type":"forward","value_50":-2.2,"value_eoc":-4.33},
        {"beam":"604","type":"forward","value_50":-2.2,"value_eoc":-4.45},
        {"beam":"605","type":"forward","value_50":-2.3,"value_eoc":-4.5},
        {"beam":"606","type":"forward","value_50":-2.2,"value_eoc":-4.31},
        {"beam":"608","type":"forward","value_50":-1.0,"value_eoc":-1.8},
        {"beam":"701","type":"forward","value_50":-2.5,"value_eoc":-4.91},
        {"beam":"702","type":"forward","value_50":-2.6,"value_eoc":-4.93},
        {"beam":"703","type":"forward","value_50":-2.1,"value_eoc":-4.22},
        {"beam":"112-2","type":"forward","value_50":-1.8,"value_eoc":-3.58},
        {"beam":"207-2","type":"forward","value_50":-2.0,"value_eoc":-3.86},
        {"beam":"212-13H","type":"forward","value_50":-2.8,"value_eoc":-5.41},
        {"beam":"212-3V","type":"forward","value_50":-2.8,"value_eoc":-5.41},
        {"beam":"214-2","type":"forward","value_50":-1.7,"value_eoc":-3.32},
        {"beam":"304-2","type":"forward","value_50":-1.8,"value_eoc":-3.5},
        {"beam":"320-2","type":"forward","value_50":-2.1,"value_eoc":-4.06},
        {"beam":"322-2","type":"forward","value_50":-1.7,"value_eoc":-3.36},
        {"beam":"402-2","type":"forward","value_50":-1.7,"value_eoc":-3.36},
        {"beam":"405-2","type":"forward","value_50":-1.6,"value_eoc":-3.25},
        {"beam":"BC-100 (102)","type":"broadcast","value_50":-2.0,"value_eoc":-4},
        {"beam":"BC-100 (112)","type":"broadcast","value_50":-2.0,"value_eoc":-4},
        {"beam":"BC-200 (205)","type":"broadcast","value_50":-4.0,"value_eoc":-6},
        {"beam":"BC-200 (207)","type":"broadcast","value_50":-3.5,"value_eoc":-5.5},
        {"beam":"BC-300 (304)","type":"broadcast","value_50":-4.0,"value_eoc":-6},
        {"beam":"BC-300 (313)","type":"broadcast","value_50":-4.0,"value_eoc":-6},
        {"beam":"BC-300 (320)","type":"broadcast","value_50":-4.0,"value_eoc":-6},
        {"beam":"BC-300 (322)","type":"broadcast","value_50":-4.0,"value_eoc":-6},
        {"beam":"BC-400 (402)","type":"broadcast","value_50":-2.1,"value_eoc":-4.14},
        {"beam":"BC-500 (507)","type":"broadcast","value_50":-4.0,"value_eoc":-6},
        {"beam":"BC-500 (NZ)","type":"broadcast","value_50":-2.0,"value_eoc":-4},
        {"beam":"BC-600 (214)","type":"broadcast","value_50":-4.0,"value_eoc":-6},
        {"beam":"BC-600 (604)","type":"broadcast","value_50":-4.0,"value_eoc":-6},
        {"beam":"BC-700 (701)","type":"broadcast","value_50":-4.0,"value_eoc":-6},
        {"beam":"100","type":"return","value_50":-3.18,"value_eoc":-5.94},
        {"beam":"101","type":"return","value_50":-3.29,"value_eoc":-6.49},
        {"beam":"102","type":"return","value_50":-2.89,"value_eoc":-5.9},
        {"beam":"103","type":"return","value_50":-2.92,"value_eoc":-5.85},
        {"beam":"104","type":"return","value_50":-2.8,"value_eoc":-5.89},
        {"beam":"105","type":"return","value_50":-2.72,"value_eoc":-5.69},
        {"beam":"106","type":"return","value_50":-2.75,"value_eoc":-5.73},
        {"beam":"107","type":"return","value_50":-2.8,"value_eoc":-5.76},
        {"beam":"108","type":"return","value_50":-2.62,"value_eoc":-5.52},
        {"beam":"109","type":"return","value_50":-2.84,"value_eoc":-5.8},
        {"beam":"110","type":"return","value_50":-2.62,"value_eoc":-5.54},
        {"beam":"111","type":"return","value_50":-3.05,"value_eoc":-6.37},
        {"beam":"112","type":"return","value_50":-3.14,"value_eoc":-6.31},
        {"beam":"113","type":"return","value_50":-2.97,"value_eoc":-6.25},
        {"beam":"114","type":"return","value_50":-2.54,"value_eoc":-5.49},
        {"beam":"115","type":"return","value_50":-2.75,"value_eoc":-5.74},
        {"beam":"201","type":"return","value_50":-2.49,"value_eoc":-5.43},
        {"beam":"202","type":"return","value_50":-2.87,"value_eoc":-5.96},
        {"beam":"203","type":"return","value_50":-2.85,"value_eoc":-6},
        {"beam":"204","type":"return","value_50":-2.86,"value_eoc":-5.95},
        {"beam":"205","type":"return","value_50":-2.65,"value_eoc":-5.48},
        {"beam":"206","type":"return","value_50":-2.66,"value_eoc":-5.59},
        {"beam":"207","type":"return","value_50":-3.5,"value_eoc":-6.7},
        {"beam":"208","type":"return","value_50":-2.91,"value_eoc":-5.89},
        {"beam":"209","type":"return","value_50":-3.1,"value_eoc":-6.45},
        {"beam":"210","type":"return","value_50":-2.76,"value_eoc":-5.48},
        {"beam":"211","type":"return","value_50":-2.86,"value_eoc":-5.76},
        {"beam":"213","type":"return","value_50":-3.28,"value_eoc":-6.61},
        {"beam":"214","type":"return","value_50":-3.52,"value_eoc":-6.75},
        {"beam":"215","type":"return","value_50":-2.56,"value_eoc":-5.14},
        {"beam":"216","type":"return","value_50":-2.75,"value_eoc":-5.39},
        {"beam":"217","type":"return","value_50":-3.04,"value_eoc":-5.85},
        {"beam":"301","type":"return","value_50":-3.12,"value_eoc":-6.35},
        {"beam":"302","type":"return","value_50":-3.44,"value_eoc":-6.75},
        {"beam":"303","type":"return","value_50":-2.66,"value_eoc":-5.59},
        {"beam":"304","type":"return","value_50":-3.03,"value_eoc":-6.16},
        {"beam":"305","type":"return","value_50":-3.1,"value_eoc":-6.37},
        {"beam":"306","type":"return","value_50":-2.81,"value_eoc":-5.84},
        {"beam":"307","type":"return","value_50":-2.89,"value_eoc":-6.05},
        {"beam":"308","type":"return","value_50":-2.82,"value_eoc":-5.82},
        {"beam":"309","type":"return","value_50":-2.78,"value_eoc":-5.74},
        {"beam":"310","type":"return","value_50":-3.07,"value_eoc":-6.22},
        {"beam":"311","type":"return","value_50":-2.69,"value_eoc":-5.57},
        {"beam":"312","type":"return","value_50":-2.74,"value_eoc":-5.79},
        {"beam":"313","type":"return","value_50":-3.02,"value_eoc":-6.26},
        {"beam":"314","type":"return","value_50":-3.07,"value_eoc":-6.3},
        {"beam":"315","type":"return","value_50":-2.48,"value_eoc":-5.3},
        {"beam":"316","type":"return","value_50":-3.09,"value_eoc":-6.34},
        {"beam":"317","type":"return","value_50":-3.29,"value_eoc":-6.77},
        {"beam":"318","type":"return","value_50":-2.78,"value_eoc":-5.83},
        {"beam":"319","type":"return","value_50":-2.67,"value_eoc":-5.76},
        {"beam":"320","type":"return","value_50":-3,"value_eoc":-5.8},
        {"beam":"321","type":"return","value_50":-3.05,"value_eoc":-6.39},
        {"beam":"322","type":"return","value_50":-3.12,"value_eoc":-6.33},
        {"beam":"323","type":"return","value_50":-2.99,"value_eoc":-6.06},
        {"beam":"328","type":"return","value_50":-1.7,"value_eoc":-3.3},
        {"beam":"401","type":"return","value_50":-3.19,"value_eoc":-6.14},
        {"beam":"402","type":"return","value_50":-3.12,"value_eoc":-5.93},
        {"beam":"403","type":"return","value_50":-3.1,"value_eoc":-6.13},
        {"beam":"404","type":"return","value_50":-2.88,"value_eoc":-5.76},
        {"beam":"405","type":"return","value_50":-3.44,"value_eoc":-6.55},
        {"beam":"406","type":"return","value_50":-3.12,"value_eoc":-6.21},
        {"beam":"501","type":"return","value_50":-3.07,"value_eoc":-6.11},
        {"beam":"502","type":"return","value_50":-2.97,"value_eoc":-5.71},
        {"beam":"503","type":"return","value_50":-2.72,"value_eoc":-5.64},
        {"beam":"504","type":"return","value_50":-2.81,"value_eoc":-5.87},
        {"beam":"505","type":"return","value_50":-2.78,"value_eoc":-5.79},
        {"beam":"506","type":"return","value_50":-2.73,"value_eoc":-5.81},
        {"beam":"507","type":"return","value_50":-2.7,"value_eoc":-5.68},
        {"beam":"508","type":"return","value_50":-2.84,"value_eoc":-5.95},
        {"beam":"509","type":"return","value_50":-2.6,"value_eoc":-5.49},
        {"beam":"510","type":"return","value_50":-2.82,"value_eoc":-5.84},
        {"beam":"511","type":"return","value_50":-3.22,"value_eoc":-6.33},
        {"beam":"512","type":"return","value_50":-2.87,"value_eoc":-5.86},
        {"beam":"513","type":"return","value_50":-2.94,"value_eoc":-6.12},
        {"beam":"514","type":"return","value_50":-1.8,"value_eoc":-3.94},
        {"beam":"601","type":"return","value_50":-3.14,"value_eoc":-6.15},
        {"beam":"602","type":"return","value_50":-2.72,"value_eoc":-5.49},
        {"beam":"603","type":"return","value_50":-2.91,"value_eoc":-5.66},
        {"beam":"604","type":"return","value_50":-2.94,"value_eoc":-5.68},
        {"beam":"605","type":"return","value_50":-2.86,"value_eoc":-5.44},
        {"beam":"606","type":"return","value_50":-2.91,"value_eoc":-5.51},
        {"beam":"608","type":"return","value_50":-2.2,"value_eoc":-4.4},
        {"beam":"701","type":"return","value_50":-3.22,"value_eoc":-6.19},
        {"beam":"702","type":"return","value_50":-3.26,"value_eoc":-6.32},
        {"beam":"703","type":"return","value_50":-2.8,"value_eoc":-5.59},
        {"beam":"112-2","type":"return","value_50":-2.98,"value_eoc":-6.15},
        {"beam":"207-2","type":"return","value_50":-3.53,"value_eoc":-6.82},
        {"beam":"212-13H","type":"return","value_50":-3.74,"value_eoc":-7.47},
        {"beam":"212-3V","type":"return","value_50":-3.74,"value_eoc":-7.47},
        {"beam":"214-2","type":"return","value_50":-3.72,"value_eoc":-6.99},
        {"beam":"304-2","type":"return","value_50":-3.21,"value_eoc":-6.31},
        {"beam":"320-2","type":"return","value_50":-2.98,"value_eoc":-6.04},
        {"beam":"322-2","type":"return","value_50":-2.96,"value_eoc":-6.12},
        {"beam":"402-2","type":"return","value_50":-2.97,"value_eoc":-6.02},
        {"beam":"405-2","type":"return","value_50":-3.08,"value_eoc":-6.2}];
    var fwd_data = [
        {"name": "100", "satellite": "IPSTAR", "uplink_cf": 27.086, "downlink_cf": 12.286, "bandwidth": 171.000, "type": "forward", "uplink_beam": "1V", "gt_peak": 19.01, "uplink_pol": "V", "downlink_beam": "100", "saturated_eirp_peak": 59.23, "downlink_pol": "V", "transponder": "3310L1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -62.89, "eirp_up_density": 71.74273412, "full_load_obo": [
            {type: 'actual', value: -6},
            {type: 'contract', value: -6}
        ], "country": "India"},
        {"name": "101", "satellite": "IPSTAR", "uplink_cf": 27.465, "downlink_cf": 12.665, "bandwidth": 171.000, "type": "forward", "uplink_beam": "1V", "gt_peak": 19.01, "uplink_pol": "V", "downlink_beam": "101", "saturated_eirp_peak": 60.13, "downlink_pol": "V", "transponder": "3310L1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -62.89, "eirp_up_density": 71.74273412, "full_load_obo": [
            {type: 'actual', value: -6},
            {type: 'contract', value: -6}
        ], "country": "India"},
        {"name": "102", "satellite": "IPSTAR", "uplink_cf": 27.086, "downlink_cf": 12.286, "bandwidth": 171.000, "type": "forward", "uplink_beam": "1H", "gt_peak": 18.87, "uplink_pol": "H", "downlink_beam": "102", "saturated_eirp_peak": 59.83, "downlink_pol": "V", "transponder": "3310N1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -63.00, "eirp_up_density": 71.74273412, "full_load_obo": [
            {type: 'actual', value: -6},
            {type: 'contract', value: -6}
        ], "country": "India"},
        {"name": "103", "satellite": "IPSTAR", "uplink_cf": 27.275, "downlink_cf": 12.475, "bandwidth": 171.000, "type": "forward", "uplink_beam": "1V", "gt_peak": 19.01, "uplink_pol": "V", "downlink_beam": "103", "saturated_eirp_peak": 59.63, "downlink_pol": "V", "transponder": "3310L1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -62.89, "eirp_up_density": 71.74273412, "full_load_obo": [
            {type: 'actual', value: -6},
            {type: 'contract', value: -6}
        ], "country": "India"},
        {"name": "104", "satellite": "IPSTAR", "uplink_cf": 29.965, "downlink_cf": 12.665, "bandwidth": 171.000, "type": "forward", "uplink_beam": "1V", "gt_peak": 19.01, "uplink_pol": "V", "downlink_beam": "104", "saturated_eirp_peak": 60.33, "downlink_pol": "V", "transponder": "3310L2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -62.89, "eirp_up_density": 72.74273412, "full_load_obo": [
            {type: 'actual', value: -6},
            {type: 'contract', value: -6}
        ], "country": "India"},
        {"name": "105", "satellite": "IPSTAR", "uplink_cf": 29.775, "downlink_cf": 12.475, "bandwidth": 171.000, "type": "forward", "uplink_beam": "1V", "gt_peak": 19.01, "uplink_pol": "V", "downlink_beam": "105", "saturated_eirp_peak": 60.73, "downlink_pol": "V", "transponder": "3310L2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -62.89, "eirp_up_density": 72.74273412, "full_load_obo": [
            {type: 'actual', value: -6},
            {type: 'contract', value: -6}
        ], "country": "India"},
        {"name": "106", "satellite": "IPSTAR", "uplink_cf": 27.275, "downlink_cf": 12.475, "bandwidth": 171.000, "type": "forward", "uplink_beam": "1H", "gt_peak": 18.87, "uplink_pol": "H", "downlink_beam": "106", "saturated_eirp_peak": 59.93, "downlink_pol": "V", "transponder": "3310N1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -63.00, "eirp_up_density": 71.74273412, "full_load_obo": [
            {type: 'actual', value: -6},
            {type: 'contract', value: -6}
        ], "country": "India"},
        {"name": "107", "satellite": "IPSTAR", "uplink_cf": 29.965, "downlink_cf": 12.665, "bandwidth": 171.000, "type": "forward", "uplink_beam": "1H", "gt_peak": 18.87, "uplink_pol": "H", "downlink_beam": "107", "saturated_eirp_peak": 60.43, "downlink_pol": "V", "transponder": "3310N2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -63.00, "eirp_up_density": 72.74273412, "full_load_obo": [
            {type: 'actual', value: -6},
            {type: 'contract', value: -6}
        ], "country": "India"},
        {"name": "108", "satellite": "IPSTAR", "uplink_cf": 29.586, "downlink_cf": 12.286, "bandwidth": 171.000, "type": "forward", "uplink_beam": "1V", "gt_peak": 19.01, "uplink_pol": "V", "downlink_beam": "108", "saturated_eirp_peak": 59.93, "downlink_pol": "V", "transponder": "3310L2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -62.89, "eirp_up_density": 72.74273412, "full_load_obo": [
            {type: 'actual', value: -6},
            {type: 'contract', value: -6}
        ], "country": "India"},
        {"name": "109", "satellite": "IPSTAR", "uplink_cf": 27.465, "downlink_cf": 12.665, "bandwidth": 171.000, "type": "forward", "uplink_beam": "1H", "gt_peak": 18.87, "uplink_pol": "H", "downlink_beam": "109", "saturated_eirp_peak": 60.03, "downlink_pol": "V", "transponder": "3310N1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -63.00, "eirp_up_density": 71.74273412, "full_load_obo": [
            {type: 'actual', value: -6},
            {type: 'contract', value: -6}
        ], "country": "India"},
        {"name": "110", "satellite": "IPSTAR", "uplink_cf": 29.586, "downlink_cf": 12.286, "bandwidth": 171.000, "type": "forward", "uplink_beam": "1H", "gt_peak": 18.87, "uplink_pol": "H", "downlink_beam": "110", "saturated_eirp_peak": 59.73, "downlink_pol": "V", "transponder": "3310N2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -63.00, "eirp_up_density": 72.74273412, "full_load_obo": [
            {type: 'actual', value: -6},
            {type: 'contract', value: -6}
        ], "country": "India"},
        {"name": "111", "satellite": "IPSTAR", "uplink_cf": 29.775, "downlink_cf": 12.475, "bandwidth": 171.000, "type": "forward", "uplink_beam": "1H", "gt_peak": 18.87, "uplink_pol": "H", "downlink_beam": "111", "saturated_eirp_peak": 60.13, "downlink_pol": "V", "transponder": "3310N2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -63.00, "eirp_up_density": 72.74273412, "full_load_obo": [
            {type: 'actual', value: -6},
            {type: 'contract', value: -6}
        ], "country": "India"},
        {"name": "112", "satellite": "IPSTAR", "uplink_cf": 29.775, "downlink_cf": 12.475, "bandwidth": 171.000, "type": "forward", "uplink_beam": "2V", "gt_peak": 19.08, "uplink_pol": "V", "downlink_beam": "112", "saturated_eirp_peak": 61.19, "downlink_pol": "V", "transponder": "32900", "dynamic_range": 25.0, "mode": "ALC", "sfd": -62.66, "eirp_up_density": 74.74273412, "full_load_obo": [
            {type: 'actual', value: -6},
            {type: 'contract', value: -6}
        ], "country": "India"},
        {"name": "113", "satellite": "IPSTAR", "uplink_cf": 27.465, "downlink_cf": 12.665, "bandwidth": 171.000, "type": "forward", "uplink_beam": "2V", "gt_peak": 19.08, "uplink_pol": "V", "downlink_beam": "113", "saturated_eirp_peak": 60.13, "downlink_pol": "V", "transponder": "3310P1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -62.66, "eirp_up_density": 73.74273412, "full_load_obo": [
            {type: 'actual', value: -6},
            {type: 'contract', value: -6}
        ], "country": "India"},
        {"name": "114", "satellite": "IPSTAR", "uplink_cf": 27.086, "downlink_cf": 12.286, "bandwidth": 171.000, "type": "forward", "uplink_beam": "2V", "gt_peak": 19.08, "uplink_pol": "V", "downlink_beam": "114", "saturated_eirp_peak": 59.83, "downlink_pol": "V", "transponder": "3310P1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -62.66, "eirp_up_density": 73.74273412, "full_load_obo": [
            {type: 'actual', value: -6},
            {type: 'contract', value: -6}
        ], "country": "India"},
        {"name": "115", "satellite": "IPSTAR", "uplink_cf": 27.275, "downlink_cf": 12.475, "bandwidth": 171.000, "type": "forward", "uplink_beam": "2V", "gt_peak": 19.08, "uplink_pol": "V", "downlink_beam": "115", "saturated_eirp_peak": 59.93, "downlink_pol": "V", "transponder": "3310P1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -62.66, "eirp_up_density": 73.74273412, "full_load_obo": [
            {type: 'actual', value: -6},
            {type: 'contract', value: -6}
        ], "country": "India"},
        {"name": "201", "satellite": "IPSTAR", "uplink_cf": 29.586, "downlink_cf": 12.286, "bandwidth": 171.000, "type": "forward", "uplink_beam": "17H", "gt_peak": 17.82, "uplink_pol": "H", "downlink_beam": "201", "saturated_eirp_peak": 59.83, "downlink_pol": "V", "transponder": "3310P2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -65.75, "eirp_up_density": 77.74273412, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -7}
        ], "country": "Myanmar"},
        {"name": "202", "satellite": "IPSTAR", "uplink_cf": 29.775, "downlink_cf": 12.475, "bandwidth": 171.000, "type": "forward", "uplink_beam": "17H", "gt_peak": 17.82, "uplink_pol": "H", "downlink_beam": "202", "saturated_eirp_peak": 60.13, "downlink_pol": "V", "transponder": "3310P2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -65.75, "eirp_up_density": 77.74273412, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -7}
        ], "country": "Myanmar"},
        {"name": "203", "satellite": "IPSTAR", "uplink_cf": 27.465, "downlink_cf": 12.665, "bandwidth": 171.000, "type": "forward", "uplink_beam": "3H", "gt_peak": 20.30, "uplink_pol": "H", "downlink_beam": "203", "saturated_eirp_peak": 59.93, "downlink_pol": "V", "transponder": "3310R2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -62.27, "eirp_up_density": 73.74273412, "full_load_obo": [
            {type: 'actual', value: -4.9},
            {type: 'contract', value: -7}
        ], "country": "Thailand"},
        {"name": "204", "satellite": "IPSTAR", "uplink_cf": 27.275, "downlink_cf": 12.475, "bandwidth": 171.000, "type": "forward", "uplink_beam": "3H", "gt_peak": 20.30, "uplink_pol": "H", "downlink_beam": "204", "saturated_eirp_peak": 59.53, "downlink_pol": "V", "transponder": "3310R2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -62.27, "eirp_up_density": 73.74273412, "full_load_obo": [
            {type: 'actual', value: -4.9},
            {type: 'contract', value: -7}
        ], "country": "Thailand"},
        {"name": "205", "satellite": "IPSTAR", "uplink_cf": 29.586, "downlink_cf": 12.286, "bandwidth": 171.000, "type": "forward", "uplink_beam": "15H", "gt_peak": 21.33, "uplink_pol": "H", "downlink_beam": "205", "saturated_eirp_peak": 59.13, "downlink_pol": "V", "transponder": "3310T1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.07, "eirp_up_density": 73.74273412, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -7}
        ], "country": "Vietnam"},
        {"name": "206", "satellite": "IPSTAR", "uplink_cf": 29.965, "downlink_cf": 12.665, "bandwidth": 171.000, "type": "forward", "uplink_beam": "15H", "gt_peak": 21.33, "uplink_pol": "H", "downlink_beam": "206", "saturated_eirp_peak": 59.63, "downlink_pol": "V", "transponder": "3310T1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.07, "eirp_up_density": 73.74273412, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -7}
        ], "country": "Vietnam"},
        {"name": "207", "satellite": "IPSTAR", "uplink_cf": 27.086, "downlink_cf": 12.286, "bandwidth": 171.000, "type": "forward", "uplink_beam": "3H", "gt_peak": 20.30, "uplink_pol": "H", "downlink_beam": "207", "saturated_eirp_peak": 59.13, "downlink_pol": "V", "transponder": "3310R2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -62.27, "eirp_up_density": 73.74273412, "full_load_obo": [
            {type: 'actual', value: -4.9},
            {type: 'contract', value: -7}
        ], "country": "Thailand"},
        {"name": "208", "satellite": "IPSTAR", "uplink_cf": 29.965, "downlink_cf": 12.665, "bandwidth": 171.000, "type": "forward", "uplink_beam": "18H", "gt_peak": 18.96, "uplink_pol": "H", "downlink_beam": "208", "saturated_eirp_peak": 59.83, "downlink_pol": "V", "transponder": "3310P2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -65.31, "eirp_up_density": 77.74273412, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "Cambodia"},
        {"name": "209", "satellite": "IPSTAR", "uplink_cf": 29.775, "downlink_cf": 12.475, "bandwidth": 171.000, "type": "forward", "uplink_beam": "3V", "gt_peak": 22.72, "uplink_pol": "V", "downlink_beam": "209", "saturated_eirp_peak": 59.83, "downlink_pol": "V", "transponder": "3310T1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.74, "eirp_up_density": 74.74273412, "full_load_obo": [
            {type: 'actual', value: -4.9},
            {type: 'contract', value: -7}
        ], "country": "Thailand"},
        {"name": "210", "satellite": "IPSTAR", "uplink_cf": 27.086, "downlink_cf": 12.286, "bandwidth": 171.000, "type": "forward", "uplink_beam": "15H", "gt_peak": 21.33, "uplink_pol": "H", "downlink_beam": "210", "saturated_eirp_peak": 60.49, "downlink_pol": "V", "transponder": "3290G1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.07, "eirp_up_density": 72.74273412, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -7}
        ], "country": "Vietnam"},
        {"name": "211", "satellite": "IPSTAR", "uplink_cf": 27.275, "downlink_cf": 12.475, "bandwidth": 171.000, "type": "forward", "uplink_beam": "15H", "gt_peak": 21.33, "uplink_pol": "H", "downlink_beam": "211", "saturated_eirp_peak": 60.69, "downlink_pol": "V", "transponder": "3290G1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.07, "eirp_up_density": 72.74273412, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -7}
        ], "country": "Vietnam"},
        {"name": "213", "satellite": "IPSTAR", "uplink_cf": 27.275, "downlink_cf": 12.475, "bandwidth": 171.000, "type": "forward", "uplink_beam": "13H", "gt_peak": 21.22, "uplink_pol": "H", "downlink_beam": "213", "saturated_eirp_peak": 59.03, "downlink_pol": "V", "transponder": "3310R1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.29, "eirp_up_density": 73.74273412, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "Malaysia"},
        {"name": "214", "satellite": "IPSTAR", "uplink_cf": 27.086, "downlink_cf": 12.286, "bandwidth": 171.000, "type": "forward", "uplink_beam": "13H", "gt_peak": 21.22, "uplink_pol": "H", "downlink_beam": "214", "saturated_eirp_peak": 59.23, "downlink_pol": "V", "transponder": "3310R1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.29, "eirp_up_density": 73.74273412, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "Malaysia"},
        {"name": "215", "satellite": "IPSTAR", "uplink_cf": 29.586, "downlink_cf": 12.286, "bandwidth": 171.000, "type": "forward", "uplink_beam": "13H", "gt_peak": 21.22, "uplink_pol": "H", "downlink_beam": "215", "saturated_eirp_peak": 58.53, "downlink_pol": "V", "transponder": "3310T2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.29, "eirp_up_density": 74.74273412, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "Malaysia"},
        {"name": "216", "satellite": "IPSTAR", "uplink_cf": 29.965, "downlink_cf": 12.665, "bandwidth": 171.000, "type": "forward", "uplink_beam": "13H", "gt_peak": 21.22, "uplink_pol": "H", "downlink_beam": "216", "saturated_eirp_peak": 58.93, "downlink_pol": "V", "transponder": "3310T2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.29, "eirp_up_density": 74.74273412, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "Malaysia"},
        {"name": "217", "satellite": "IPSTAR", "uplink_cf": 29.775, "downlink_cf": 12.475, "bandwidth": 171.000, "type": "forward", "uplink_beam": "13H", "gt_peak": 21.22, "uplink_pol": "H", "downlink_beam": "217", "saturated_eirp_peak": 58.53, "downlink_pol": "V", "transponder": "3310T2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.29, "eirp_up_density": 74.74273412, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "Malaysia"},
        {"name": "301", "satellite": "IPSTAR", "uplink_cf": 29.775, "downlink_cf": 12.475, "bandwidth": 171.000, "type": "forward", "uplink_beam": "4H", "gt_peak": 18.68, "uplink_pol": "H", "downlink_beam": "301", "saturated_eirp_peak": 59.53, "downlink_pol": "V", "transponder": "3310A1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -63.70, "eirp_up_density": 74.74273412, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "China"},
        {"name": "302", "satellite": "IPSTAR", "uplink_cf": 29.965, "downlink_cf": 12.665, "bandwidth": 171.000, "type": "forward", "uplink_beam": "4H", "gt_peak": 18.68, "uplink_pol": "H", "downlink_beam": "302", "saturated_eirp_peak": 59.43, "downlink_pol": "V", "transponder": "3310A1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -63.70, "eirp_up_density": 74.74273412, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "China"},
        {"name": "303", "satellite": "IPSTAR", "uplink_cf": 29.586, "downlink_cf": 12.286, "bandwidth": 171.000, "type": "forward", "uplink_beam": "4H", "gt_peak": 18.68, "uplink_pol": "H", "downlink_beam": "303", "saturated_eirp_peak": 59.53, "downlink_pol": "V", "transponder": "3310A1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -63.70, "eirp_up_density": 74.74273412, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "China"},
        {"name": "304", "satellite": "IPSTAR", "uplink_cf": 29.775, "downlink_cf": 12.475, "bandwidth": 171.000, "type": "forward", "uplink_beam": "4V", "gt_peak": 19.30, "uplink_pol": "V", "downlink_beam": "304", "saturated_eirp_peak": 59.73, "downlink_pol": "V", "transponder": "3310A2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -63.64, "eirp_up_density": 74.74273412, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "China"},
        {"name": "305", "satellite": "IPSTAR", "uplink_cf": 29.965, "downlink_cf": 12.665, "bandwidth": 171.000, "type": "forward", "uplink_beam": "4V", "gt_peak": 19.30, "uplink_pol": "V", "downlink_beam": "305", "saturated_eirp_peak": 59.73, "downlink_pol": "V", "transponder": "3310A2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -63.64, "eirp_up_density": 74.74273412, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "China"},
        {"name": "306", "satellite": "IPSTAR", "uplink_cf": 27.275, "downlink_cf": 12.475, "bandwidth": 171.000, "type": "forward", "uplink_beam": "4H", "gt_peak": 18.68, "uplink_pol": "H", "downlink_beam": "306", "saturated_eirp_peak": 60.13, "downlink_pol": "V", "transponder": "3310B1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -63.70, "eirp_up_density": 73.74273412, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "China"},
        {"name": "307", "satellite": "IPSTAR", "uplink_cf": 27.465, "downlink_cf": 12.665, "bandwidth": 171.000, "type": "forward", "uplink_beam": "4H", "gt_peak": 18.68, "uplink_pol": "H", "downlink_beam": "307", "saturated_eirp_peak": 59.33, "downlink_pol": "V", "transponder": "3310B1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -63.70, "eirp_up_density": 73.74273412, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "China"},
        {"name": "308", "satellite": "IPSTAR", "uplink_cf": 29.586, "downlink_cf": 12.286, "bandwidth": 171.000, "type": "forward", "uplink_beam": "4V", "gt_peak": 19.30, "uplink_pol": "V", "downlink_beam": "308", "saturated_eirp_peak": 59.33, "downlink_pol": "V", "transponder": "3310A2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -63.64, "eirp_up_density": 74.74273412, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "China"},
        {"name": "309", "satellite": "IPSTAR", "uplink_cf": 27.275, "downlink_cf": 12.475, "bandwidth": 171.000, "type": "forward", "uplink_beam": "5H", "gt_peak": 21.75, "uplink_pol": "H", "downlink_beam": "309", "saturated_eirp_peak": 59.93, "downlink_pol": "V", "transponder": "3310D2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.81, "eirp_up_density": 70.74273412, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "China"},
        {"name": "310", "satellite": "IPSTAR", "uplink_cf": 29.965, "downlink_cf": 12.665, "bandwidth": 171.000, "type": "forward", "uplink_beam": "5V", "gt_peak": 21.68, "uplink_pol": "V", "downlink_beam": "310", "saturated_eirp_peak": 60.03, "downlink_pol": "V", "transponder": "3310C1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.40, "eirp_up_density": 71.74273412, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "China"},
        {"name": "311", "satellite": "IPSTAR", "uplink_cf": 27.086, "downlink_cf": 12.286, "bandwidth": 171.000, "type": "forward", "uplink_beam": "4H", "gt_peak": 18.68, "uplink_pol": "H", "downlink_beam": "311", "saturated_eirp_peak": 59.83, "downlink_pol": "V", "transponder": "3310B1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -63.70, "eirp_up_density": 73.74273412, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "China"},
        {"name": "312", "satellite": "IPSTAR", "uplink_cf": 27.275, "downlink_cf": 12.475, "bandwidth": 171.000, "type": "forward", "uplink_beam": "10V", "gt_peak": 20.80, "uplink_pol": "V", "downlink_beam": "312", "saturated_eirp_peak": 59.73, "downlink_pol": "V", "transponder": "3310B2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.53, "eirp_up_density": 73.74273412, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "China"},
        {"name": "313", "satellite": "IPSTAR", "uplink_cf": 27.465, "downlink_cf": 12.665, "bandwidth": 171.000, "type": "forward", "uplink_beam": "10V", "gt_peak": 20.80, "uplink_pol": "V", "downlink_beam": "313", "saturated_eirp_peak": 60.03, "downlink_pol": "V", "transponder": "3310B2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.53, "eirp_up_density": 73.74273412, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "China"},
        {"name": "314", "satellite": "IPSTAR", "uplink_cf": 27.465, "downlink_cf": 12.665, "bandwidth": 171.000, "type": "forward", "uplink_beam": "5H", "gt_peak": 21.75, "uplink_pol": "H", "downlink_beam": "314", "saturated_eirp_peak": 60.23, "downlink_pol": "V", "transponder": "3310D2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.81, "eirp_up_density": 70.74273412, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "China"},
        {"name": "315", "satellite": "IPSTAR", "uplink_cf": 27.086, "downlink_cf": 12.286, "bandwidth": 171.000, "type": "forward", "uplink_beam": "5H", "gt_peak": 21.75, "uplink_pol": "H", "downlink_beam": "315", "saturated_eirp_peak": 59.93, "downlink_pol": "V", "transponder": "3310D2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.81, "eirp_up_density": 70.74273412, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "China"},
        {"name": "316", "satellite": "IPSTAR", "uplink_cf": 29.775, "downlink_cf": 12.475, "bandwidth": 171.000, "type": "forward", "uplink_beam": "5V", "gt_peak": 21.68, "uplink_pol": "V", "downlink_beam": "316", "saturated_eirp_peak": 60.13, "downlink_pol": "V", "transponder": "3310C1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.40, "eirp_up_density": 71.74273412, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "China"},
        {"name": "317", "satellite": "IPSTAR", "uplink_cf": 29.965, "downlink_cf": 12.665, "bandwidth": 171.000, "type": "forward", "uplink_beam": "10V", "gt_peak": 20.80, "uplink_pol": "V", "downlink_beam": "317", "saturated_eirp_peak": 60.53, "downlink_pol": "V", "transponder": "3310D1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.53, "eirp_up_density": 74.74273412, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "China"},
        {"name": "318", "satellite": "IPSTAR", "uplink_cf": 29.586, "downlink_cf": 12.286, "bandwidth": 171.000, "type": "forward", "uplink_beam": "10V", "gt_peak": 20.80, "uplink_pol": "V", "downlink_beam": "318", "saturated_eirp_peak": 59.83, "downlink_pol": "V", "transponder": "3310D1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.53, "eirp_up_density": 74.74273412, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "China"},
        {"name": "319", "satellite": "IPSTAR", "uplink_cf": 27.465, "downlink_cf": 12.665, "bandwidth": 171.000, "type": "forward", "uplink_beam": "5V", "gt_peak": 21.68, "uplink_pol": "V", "downlink_beam": "319", "saturated_eirp_peak": 60.39, "downlink_pol": "V", "transponder": "3290A1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.40, "eirp_up_density": 70.74273412, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "China"},
        {"name": "320", "satellite": "IPSTAR", "uplink_cf": 29.586, "downlink_cf": 12.286, "bandwidth": 171.000, "type": "forward", "uplink_beam": "5V", "gt_peak": 21.68, "uplink_pol": "V", "downlink_beam": "320", "saturated_eirp_peak": 59.53, "downlink_pol": "V", "transponder": "3310C1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.40, "eirp_up_density": 71.74273412, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "China"},
        {"name": "321", "satellite": "IPSTAR", "uplink_cf": 29.775, "downlink_cf": 12.475, "bandwidth": 171.000, "type": "forward", "uplink_beam": "10V", "gt_peak": 20.80, "uplink_pol": "V", "downlink_beam": "321", "saturated_eirp_peak": 60.13, "downlink_pol": "V", "transponder": "3310D1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.53, "eirp_up_density": 74.74273412, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "China"},
        {"name": "322", "satellite": "IPSTAR", "uplink_cf": 29.965, "downlink_cf": 12.665, "bandwidth": 171.000, "type": "forward", "uplink_beam": "14H", "gt_peak": 21.40, "uplink_pol": "H", "downlink_beam": "322", "saturated_eirp_peak": 60.39, "downlink_pol": "V", "transponder": "32900", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.24, "eirp_up_density": 74.74273412, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "Taiwan"},
        {"name": "323", "satellite": "IPSTAR", "uplink_cf": 27.275, "downlink_cf": 12.475, "bandwidth": 171.000, "type": "forward", "uplink_beam": "5V", "gt_peak": 21.68, "uplink_pol": "V", "downlink_beam": "323", "saturated_eirp_peak": 60.39, "downlink_pol": "V", "transponder": "3290A1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.40, "eirp_up_density": 70.74273412, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "China"},
        {"name": "328", "satellite": "IPSTAR", "uplink_cf": 28.475, "downlink_cf": 11.075, "bandwidth": 250.000, "type": "forward", "uplink_beam": "10V", "gt_peak": 20.80, "uplink_pol": "V", "downlink_beam": "328", "saturated_eirp_peak": 54.16, "downlink_pol": "H", "transponder": "3300A1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.88, "eirp_up_density": 75.8921731, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -4}
        ], "country": "China"},
        {"name": "401", "satellite": "IPSTAR", "uplink_cf": 27.419, "downlink_cf": 12.619, "bandwidth": 262.500, "type": "forward", "uplink_beam": "7V", "gt_peak": 20.04, "uplink_pol": "V", "downlink_beam": "401", "saturated_eirp_peak": 60.79, "downlink_pol": "V", "transponder": "3310F1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.69, "eirp_up_density": 75.60406609, "full_load_obo": [
            {type: 'actual', value: -4.5},
            {type: 'contract', value: -4.5}
        ], "country": "Japan"},
        {"name": "402", "satellite": "IPSTAR", "uplink_cf": 29.631, "downlink_cf": 12.331, "bandwidth": 262.500, "type": "forward", "uplink_beam": "7V", "gt_peak": 20.04, "uplink_pol": "V", "downlink_beam": "402", "saturated_eirp_peak": 60.69, "downlink_pol": "V", "transponder": "331000", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.69, "eirp_up_density": 76.60406609, "full_load_obo": [
            {type: 'actual', value: -4.5},
            {type: 'contract', value: -4.5}
        ], "country": "Japan"},
        {"name": "403", "satellite": "IPSTAR", "uplink_cf": 29.919, "downlink_cf": 12.619, "bandwidth": 262.500, "type": "forward", "uplink_beam": "7V", "gt_peak": 20.04, "uplink_pol": "V", "downlink_beam": "403", "saturated_eirp_peak": 63.00, "downlink_pol": "V", "transponder": "3290C1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.69, "eirp_up_density": 76.60406609, "full_load_obo": [
            {type: 'actual', value: -6},
            {type: 'contract', value: -4.5}
        ], "country": "Japan"},
        {"name": "404", "satellite": "IPSTAR", "uplink_cf": 27.131, "downlink_cf": 12.331, "bandwidth": 262.500, "type": "forward", "uplink_beam": "7V", "gt_peak": 20.04, "uplink_pol": "V", "downlink_beam": "404", "saturated_eirp_peak": 60.99, "downlink_pol": "V", "transponder": "3310F1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.69, "eirp_up_density": 75.60406609, "full_load_obo": [
            {type: 'actual', value: -4.5},
            {type: 'contract', value: -4.5}
        ], "country": "Japan"},
        {"name": "405", "satellite": "IPSTAR", "uplink_cf": 29.919, "downlink_cf": 12.619, "bandwidth": 262.500, "type": "forward", "uplink_beam": "11H", "gt_peak": 20.40, "uplink_pol": "H", "downlink_beam": "405", "saturated_eirp_peak": 61.69, "downlink_pol": "V", "transponder": "331000", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.62, "eirp_up_density": 75.60406609, "full_load_obo": [
            {type: 'actual', value: -4.5},
            {type: 'contract', value: -4.5}
        ], "country": "South Korea"},
        {"name": "406", "satellite": "IPSTAR", "uplink_cf": 27.086, "downlink_cf": 12.286, "bandwidth": 171.000, "type": "forward", "uplink_beam": "10V", "gt_peak": 20.80, "uplink_pol": "V", "downlink_beam": "406", "saturated_eirp_peak": 59.33, "downlink_pol": "V", "transponder": "3310B2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.53, "eirp_up_density": 73.74273412, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "China"},
        {"name": "501", "satellite": "IPSTAR", "uplink_cf": 29.919, "downlink_cf": 12.619, "bandwidth": 262.500, "type": "forward", "uplink_beam": "8V", "gt_peak": 18.54, "uplink_pol": "V", "downlink_beam": "501", "saturated_eirp_peak": 60.63, "downlink_pol": "V", "transponder": "3310F2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.41, "eirp_up_density": 70.60406609, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "Australia"},
        {"name": "502", "satellite": "IPSTAR", "uplink_cf": 27.419, "downlink_cf": 12.619, "bandwidth": 262.500, "type": "forward", "uplink_beam": "8H", "gt_peak": 18.84, "uplink_pol": "H", "downlink_beam": "502", "saturated_eirp_peak": 60.82, "downlink_pol": "V", "transponder": "3310G1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.31, "eirp_up_density": 69.60406609, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "Australia"},
        {"name": "503", "satellite": "IPSTAR", "uplink_cf": 29.631, "downlink_cf": 12.331, "bandwidth": 262.500, "type": "forward", "uplink_beam": "8V", "gt_peak": 18.54, "uplink_pol": "V", "downlink_beam": "503", "saturated_eirp_peak": 61.18, "downlink_pol": "V", "transponder": "3310F2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.41, "eirp_up_density": 70.60406609, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "Australia"},
        {"name": "504", "satellite": "IPSTAR", "uplink_cf": 29.919, "downlink_cf": 12.619, "bandwidth": 262.500, "type": "forward", "uplink_beam": "8H", "gt_peak": 18.84, "uplink_pol": "H", "downlink_beam": "504", "saturated_eirp_peak": 61.16, "downlink_pol": "V", "transponder": "3310G2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.31, "eirp_up_density": 70.60406609, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "Australia"},
        {"name": "505", "satellite": "IPSTAR", "uplink_cf": 27.131, "downlink_cf": 12.331, "bandwidth": 262.500, "type": "forward", "uplink_beam": "8H", "gt_peak": 18.84, "uplink_pol": "H", "downlink_beam": "505", "saturated_eirp_peak": 61.35, "downlink_pol": "V", "transponder": "3310G1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.31, "eirp_up_density": 69.60406609, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "Australia"},
        {"name": "506", "satellite": "IPSTAR", "uplink_cf": 27.419, "downlink_cf": 12.619, "bandwidth": 262.500, "type": "forward", "uplink_beam": "9V", "gt_peak": 19.36, "uplink_pol": "V", "downlink_beam": "506", "saturated_eirp_peak": 61.58, "downlink_pol": "V", "transponder": "3310J1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -62.74, "eirp_up_density": 71.60406609, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "Australia"},
        {"name": "507", "satellite": "IPSTAR", "uplink_cf": 29.631, "downlink_cf": 12.331, "bandwidth": 262.500, "type": "forward", "uplink_beam": "8H", "gt_peak": 18.84, "uplink_pol": "H", "downlink_beam": "507", "saturated_eirp_peak": 61.59, "downlink_pol": "V", "transponder": "3310G2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.31, "eirp_up_density": 70.60406609, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "Australia"},
        {"name": "508", "satellite": "IPSTAR", "uplink_cf": 29.919, "downlink_cf": 12.619, "bandwidth": 262.500, "type": "forward", "uplink_beam": "9V", "gt_peak": 19.36, "uplink_pol": "V", "downlink_beam": "508", "saturated_eirp_peak": 61.53, "downlink_pol": "V", "transponder": "3310J2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -62.74, "eirp_up_density": 72.60406609, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "Australia"},
        {"name": "509", "satellite": "IPSTAR", "uplink_cf": 27.131, "downlink_cf": 12.331, "bandwidth": 262.500, "type": "forward", "uplink_beam": "9V", "gt_peak": 19.36, "uplink_pol": "V", "downlink_beam": "509", "saturated_eirp_peak": 61.34, "downlink_pol": "V", "transponder": "3310J1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -62.74, "eirp_up_density": 71.60406609, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "Australia"},
        {"name": "510", "satellite": "IPSTAR", "uplink_cf": 29.631, "downlink_cf": 12.331, "bandwidth": 262.500, "type": "forward", "uplink_beam": "9V", "gt_peak": 19.36, "uplink_pol": "V", "downlink_beam": "510", "saturated_eirp_peak": 60.50, "downlink_pol": "V", "transponder": "3310J2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -62.74, "eirp_up_density": 72.60406609, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "Australia"},
        {"name": "514", "satellite": "IPSTAR", "uplink_cf": 28.475, "downlink_cf": 11.075, "bandwidth": 250.000, "type": "forward", "uplink_beam": "8V", "gt_peak": 18.50, "uplink_pol": "V", "downlink_beam": "514", "saturated_eirp_peak": 54.13, "downlink_pol": "V", "transponder": "3320A1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.66, "eirp_up_density": 74.8921731, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -4}
        ], "country": "Australia"},
        {"name": "601", "satellite": "IPSTAR", "uplink_cf": 27.275, "downlink_cf": 12.475, "bandwidth": 171.000, "type": "forward", "uplink_beam": "6V", "gt_peak": 21.72, "uplink_pol": "V", "downlink_beam": "601", "saturated_eirp_peak": 59.03, "downlink_pol": "V", "transponder": "3310V1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.16, "eirp_up_density": 73.74273412, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "Indonesia"},
        {"name": "602", "satellite": "IPSTAR", "uplink_cf": 27.465, "downlink_cf": 12.665, "bandwidth": 171.000, "type": "forward", "uplink_beam": "6V", "gt_peak": 21.72, "uplink_pol": "V", "downlink_beam": "602", "saturated_eirp_peak": 58.83, "downlink_pol": "V", "transponder": "3310V1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.16, "eirp_up_density": 73.74273412, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "Indonesia"},
        {"name": "603", "satellite": "IPSTAR", "uplink_cf": 27.086, "downlink_cf": 12.286, "bandwidth": 171.000, "type": "forward", "uplink_beam": "6V", "gt_peak": 21.72, "uplink_pol": "V", "downlink_beam": "603", "saturated_eirp_peak": 58.43, "downlink_pol": "V", "transponder": "3310V1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.16, "eirp_up_density": 73.74273412, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "Indonesia"},
        {"name": "604", "satellite": "IPSTAR", "uplink_cf": 29.775, "downlink_cf": 12.475, "bandwidth": 171.000, "type": "forward", "uplink_beam": "6V", "gt_peak": 21.72, "uplink_pol": "V", "downlink_beam": "604", "saturated_eirp_peak": 58.23, "downlink_pol": "V", "transponder": "3310V2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.16, "eirp_up_density": 74.74273412, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "Indonesia"},
        {"name": "605", "satellite": "IPSTAR", "uplink_cf": 29.965, "downlink_cf": 12.665, "bandwidth": 171.000, "type": "forward", "uplink_beam": "6V", "gt_peak": 21.72, "uplink_pol": "V", "downlink_beam": "605", "saturated_eirp_peak": 58.53, "downlink_pol": "V", "transponder": "3310V2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.16, "eirp_up_density": 74.74273412, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "Indonesia"},
        {"name": "606", "satellite": "IPSTAR", "uplink_cf": 29.586, "downlink_cf": 12.286, "bandwidth": 171.000, "type": "forward", "uplink_beam": "6V", "gt_peak": 21.72, "uplink_pol": "V", "downlink_beam": "606", "saturated_eirp_peak": 57.53, "downlink_pol": "V", "transponder": "3310K1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.16, "eirp_up_density": 77.74273412, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "Indonesia"},
        {"name": "608", "satellite": "IPSTAR", "uplink_cf": 28.475, "downlink_cf": 11.075, "bandwidth": 250.000, "type": "forward", "uplink_beam": "6V", "gt_peak": 21.72, "uplink_pol": "V", "downlink_beam": "608", "saturated_eirp_peak": 50.60, "downlink_pol": "H", "transponder": "3310K1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.51, "eirp_up_density": 79.3921731, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -3.5}
        ], "country": "Indonesia"},
        {"name": "701", "satellite": "IPSTAR", "uplink_cf": 27.275, "downlink_cf": 12.475, "bandwidth": 171.000, "type": "forward", "uplink_beam": "12V", "gt_peak": 21.97, "uplink_pol": "V", "downlink_beam": "701", "saturated_eirp_peak": 63.30, "downlink_pol": "V", "transponder": "3310K1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.53, "eirp_up_density": 77.74273412, "full_load_obo": [
            {type: 'actual', value: -6},
            {type: 'contract', value: -6}
        ], "country": "Philippines"},
        {"name": "702", "satellite": "IPSTAR", "uplink_cf": 27.465, "downlink_cf": 12.665, "bandwidth": 171.000, "type": "forward", "uplink_beam": "12V", "gt_peak": 21.97, "uplink_pol": "V", "downlink_beam": "702", "saturated_eirp_peak": 62.29, "downlink_pol": "V", "transponder": "3310K1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.53, "eirp_up_density": 77.74273412, "full_load_obo": [
            {type: 'actual', value: -6},
            {type: 'contract', value: -6}
        ], "country": "Philippines"},
        {"name": "703", "satellite": "IPSTAR", "uplink_cf": 27.086, "downlink_cf": 12.286, "bandwidth": 171.000, "type": "forward", "uplink_beam": "12V", "gt_peak": 21.97, "uplink_pol": "V", "downlink_beam": "703", "saturated_eirp_peak": 61.19, "downlink_pol": "V", "transponder": "3310K1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.53, "eirp_up_density": 77.74273412, "full_load_obo": [
            {type: 'actual', value: -6},
            {type: 'contract', value: -6}
        ], "country": "Philippines"},
        {"name": "112-2", "satellite": "IPSTAR", "uplink_cf": 28.475, "downlink_cf": 11.075, "bandwidth": 250.000, "type": "forward", "uplink_beam": "2V", "gt_peak": 19.08, "uplink_pol": "V", "downlink_beam": "112-2", "saturated_eirp_peak": 60.90, "downlink_pol": "V", "transponder": "3280K1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.01, "eirp_up_density": 75.8921731, "full_load_obo": [
            {type: 'actual', value: -6},
            {type: 'contract', value: -6}
        ], "country": "India"},
        {"name": "207-2", "satellite": "IPSTAR", "uplink_cf": 28.475, "downlink_cf": 11.075, "bandwidth": 250.000, "type": "forward", "uplink_beam": "3V", "gt_peak": 22.72, "uplink_pol": "V", "downlink_beam": "207-2", "saturated_eirp_peak": 61.60, "downlink_pol": "V", "transponder": "3280H1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -58.09, "eirp_up_density": 75.8921731, "full_load_obo": [
            {type: 'actual', value: -4.4},
            {type: 'contract', value: -6}
        ], "country": "Thailand"},
        {"name": "212-13H", "satellite": "IPSTAR", "uplink_cf": 27.465, "downlink_cf": 12.665, "bandwidth": 171.000, "type": "forward", "uplink_beam": "13H", "gt_peak": 18.20, "uplink_pol": "H", "downlink_beam": "212-13H", "saturated_eirp_peak": 59.73, "downlink_pol": "V", "transponder": "3310R1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -64.31, "eirp_up_density": 73.74273412, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "Malaysia"},
        {"name": "212-3V", "satellite": "IPSTAR", "uplink_cf": 29.965, "downlink_cf": 12.665, "bandwidth": 171.000, "type": "forward", "uplink_beam": "3V", "gt_peak": 19.70, "uplink_pol": "V", "downlink_beam": "212-3V", "saturated_eirp_peak": 59.83, "downlink_pol": "V", "transponder": "3310R1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -62.76, "eirp_up_density": 74.74273412, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "Thailand"},
        {"name": "214-2", "satellite": "IPSTAR", "uplink_cf": 28.475, "downlink_cf": 11.075, "bandwidth": 250.000, "type": "forward", "uplink_beam": "13H", "gt_peak": 21.22, "uplink_pol": "H", "downlink_beam": "214-2", "saturated_eirp_peak": 60.60, "downlink_pol": "V", "transponder": "32800", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.64, "eirp_up_density": 75.8921731, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "Malaysia"},
        {"name": "304-2", "satellite": "IPSTAR", "uplink_cf": 28.475, "downlink_cf": 11.075, "bandwidth": 250.000, "type": "forward", "uplink_beam": "4V", "gt_peak": 19.30, "uplink_pol": "V", "downlink_beam": "304-2", "saturated_eirp_peak": 60.60, "downlink_pol": "V", "transponder": "3280A1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.99, "eirp_up_density": 75.8921731, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "China"},
        {"name": "320-2", "satellite": "IPSTAR", "uplink_cf": 28.475, "downlink_cf": 11.075, "bandwidth": 250.000, "type": "forward", "uplink_beam": "5V", "gt_peak": 21.68, "uplink_pol": "V", "downlink_beam": "320-2", "saturated_eirp_peak": 61.30, "downlink_pol": "V", "transponder": "3280C1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.75, "eirp_up_density": 72.8921731, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "China"},
        {"name": "322-2", "satellite": "IPSTAR", "uplink_cf": 28.475, "downlink_cf": 11.075, "bandwidth": 250.000, "type": "forward", "uplink_beam": "14H", "gt_peak": 21.40, "uplink_pol": "H", "downlink_beam": "322-2", "saturated_eirp_peak": 60.70, "downlink_pol": "V", "transponder": "3280D1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.59, "eirp_up_density": 75.8921731, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "China"},
        {"name": "402-2", "satellite": "IPSTAR", "uplink_cf": 28.475, "downlink_cf": 11.075, "bandwidth": 250.000, "type": "forward", "uplink_beam": "7V", "gt_peak": 20.04, "uplink_pol": "V", "downlink_beam": "402-2", "saturated_eirp_peak": 59.80, "downlink_pol": "V", "transponder": "3280F1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.90, "eirp_up_density": 75.8921731, "full_load_obo": [
            {type: 'actual', value: -4.5},
            {type: 'contract', value: -6}
        ], "country": "Japan"},
        {"name": "405-2", "satellite": "IPSTAR", "uplink_cf": 28.475, "downlink_cf": 11.075, "bandwidth": 250.000, "type": "forward", "uplink_beam": "11H", "gt_peak": 20.40, "uplink_pol": "H", "downlink_beam": "405-2", "saturated_eirp_peak": 60.30, "downlink_pol": "V", "transponder": "3280G1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.83, "eirp_up_density": 74.8921731, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "South Korea"},
        {"name": "511", "satellite": "IPSTAR", "uplink_cf": 27.0855, "downlink_cf": 12.2855, "bandwidth": 171.000, "type": "forward", "uplink_beam": "16V", "gt_peak": 18.01, "uplink_pol": "V", "downlink_beam": "511", "saturated_eirp_peak": 59.60, "downlink_pol": "V", "transponder": "3310J2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -64.67, "eirp_up_density": 73.24273412, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "New Zealand"},
        {"name": "512", "satellite": "IPSTAR", "uplink_cf": 27.275, "downlink_cf": 12.475, "bandwidth": 171.000, "type": "forward", "uplink_beam": "16V", "gt_peak": 18.01, "uplink_pol": "V", "downlink_beam": "512", "saturated_eirp_peak": 59.82, "downlink_pol": "V", "transponder": "3310J2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -64.67, "eirp_up_density": 73.24273412, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "New Zealand"},
        {"name": "513", "satellite": "IPSTAR", "uplink_cf": 27.4645, "downlink_cf": 12.6645, "bandwidth": 171.000, "type": "forward", "uplink_beam": "16V", "gt_peak": 18.01, "uplink_pol": "V", "downlink_beam": "513", "saturated_eirp_peak": 59.95, "downlink_pol": "V", "transponder": "3310J2", "dynamic_range": 25.0, "mode": "ALC", "sfd": -64.67, "eirp_up_density": 73.24273412, "full_load_obo": [
            {type: 'actual', value: -4},
            {type: 'contract', value: -6}
        ], "country": "New Zealand"},
        {"name": "BC-100 (102)", "satellite": "IPSTAR", "uplink_cf": 13.875, "downlink_cf": 11.65, "bandwidth": 200.000, "type": "broadcast", "uplink_beam": "BC-100 (102)", "gt_peak": 16.56, "uplink_pol": "H", "downlink_beam": "BC-100 (102)", "saturated_eirp_peak": 58.31, "downlink_pol": "V", "transponder": "3830A1", "dynamic_range": 20.0, "mode": "ALC", "sfd": -67.49, "eirp_up_density": 72.92307297, "full_load_obo": [
            {type: 'actual', value: -5},
            {type: 'contract', value: -5}
        ], "country": "India"},
        {"name": "BC-100 (112)", "satellite": "IPSTAR", "uplink_cf": 13.875, "downlink_cf": 11.65, "bandwidth": 200.000, "type": "broadcast", "uplink_beam": "BC-100 (112)", "gt_peak": 16.07, "uplink_pol": "H", "downlink_beam": "BC-100 (112)", "saturated_eirp_peak": 58.31, "downlink_pol": "V", "transponder": "3830A1", "dynamic_range": 20.0, "mode": "ALC", "sfd": -67.79, "eirp_up_density": 72.92307297, "full_load_obo": [
            {type: 'actual', value: -5},
            {type: 'contract', value: -5}
        ], "country": "India"},
        {"name": "BC-200 (205)", "satellite": "IPSTAR", "uplink_cf": 13.875, "downlink_cf": 11.65, "bandwidth": 200.000, "type": "broadcast", "uplink_beam": "BC-200 (205)", "gt_peak": 16.08, "uplink_pol": "H", "downlink_beam": "BC-200 (205)", "saturated_eirp_peak": 60.85, "downlink_pol": "V", "transponder": "3830C1", "dynamic_range": 20.0, "mode": "ALC", "sfd": -67.54, "eirp_up_density": 72.92307297, "full_load_obo": [
            {type: 'actual', value: -5},
            {type: 'contract', value: -5}
        ], "country": "Vietnam"},
        {"name": "BC-200 (207)", "satellite": "IPSTAR", "uplink_cf": 13.875, "downlink_cf": 11.65, "bandwidth": 200.000, "type": "broadcast", "uplink_beam": "BC-200 (207)", "gt_peak": 16.37, "uplink_pol": "H", "downlink_beam": "BC-200 (207)", "saturated_eirp_peak": 60.81, "downlink_pol": "V", "transponder": "3830C1", "dynamic_range": 20.0, "mode": "ALC", "sfd": -67.94, "eirp_up_density": 72.92307297, "full_load_obo": [
            {type: 'actual', value: -4.9},
            {type: 'contract', value: -5}
        ], "country": "Thailand"},
        {"name": "BC-300 (304)", "satellite": "IPSTAR", "uplink_cf": 13.875, "downlink_cf": 11.65, "bandwidth": 200.000, "type": "broadcast", "uplink_beam": "BC-300 (304)", "gt_peak": 12.37, "uplink_pol": "H", "downlink_beam": "BC-300 (304)", "saturated_eirp_peak": 57.04, "downlink_pol": "V", "transponder": "38300", "dynamic_range": 20.0, "mode": "ALC", "sfd": -68.40, "eirp_up_density": 72.92307297, "full_load_obo": [
            {type: 'actual', value: -5},
            {type: 'contract', value: -5}
        ], "country": "China"},
        {"name": "BC-300 (313)", "satellite": "IPSTAR", "uplink_cf": 13.875, "downlink_cf": 11.65, "bandwidth": 200.000, "type": "broadcast", "uplink_beam": "BC-300 (313)", "gt_peak": 9.53, "uplink_pol": "H", "downlink_beam": "BC-300 (313)", "saturated_eirp_peak": 57.07, "downlink_pol": "V", "transponder": "38300", "dynamic_range": 20.0, "mode": "ALC", "sfd": -70.20, "eirp_up_density": 72.92307297, "full_load_obo": [
            {type: 'actual', value: -5},
            {type: 'contract', value: -5}
        ], "country": "China"},
        {"name": "BC-300 (320)", "satellite": "IPSTAR", "uplink_cf": 13.875, "downlink_cf": 11.65, "bandwidth": 200.000, "type": "broadcast", "uplink_beam": "BC-300 (320)", "gt_peak": 12.79, "uplink_pol": "H", "downlink_beam": "BC-300 (320)", "saturated_eirp_peak": 57.04, "downlink_pol": "V", "transponder": "38300", "dynamic_range": 20.0, "mode": "ALC", "sfd": -67.90, "eirp_up_density": 72.92307297, "full_load_obo": [
            {type: 'actual', value: -5},
            {type: 'contract', value: -5}
        ], "country": "China"},
        {"name": "BC-300 (322)", "satellite": "IPSTAR", "uplink_cf": 13.875, "downlink_cf": 11.65, "bandwidth": 200.000, "type": "broadcast", "uplink_beam": "BC-300 (322)", "gt_peak": 10.39, "uplink_pol": "H", "downlink_beam": "BC-300 (322)", "saturated_eirp_peak": 57.07, "downlink_pol": "V", "transponder": "38300", "dynamic_range": 20.0, "mode": "ALC", "sfd": -69.82, "eirp_up_density": 72.92307297, "full_load_obo": [
            {type: 'actual', value: -5},
            {type: 'contract', value: -5}
        ], "country": "Taiwan"},
        {"name": "BC-400 (402)", "satellite": "IPSTAR", "uplink_cf": 13.875, "downlink_cf": 11.65, "bandwidth": 200.000, "type": "broadcast", "uplink_beam": "BC-400 (402)", "gt_peak": 19.58, "uplink_pol": "H", "downlink_beam": "BC-400 (402)", "saturated_eirp_peak": 60.64, "downlink_pol": "V", "transponder": "3820A", "dynamic_range": 20.0, "mode": "ALC", "sfd": -67.30, "eirp_up_density": 69.92307297, "full_load_obo": [
            {type: 'actual', value: -5},
            {type: 'contract', value: -5}
        ], "country": "Japan"},
        {"name": "BC-500 (507)", "satellite": "IPSTAR", "uplink_cf": 13.875, "downlink_cf": 11.65, "bandwidth": 200.000, "type": "broadcast", "uplink_beam": "BC-500 (507)", "gt_peak": 20.48, "uplink_pol": "H", "downlink_beam": "BC-500 (507)", "saturated_eirp_peak": 57.67, "downlink_pol": "V", "transponder": "3830G1", "dynamic_range": 20.0, "mode": "ALC", "sfd": -66.20, "eirp_up_density": 69.92307297, "full_load_obo": [
            {type: 'actual', value: -5},
            {type: 'contract', value: -5}
        ], "country": "Australia"},
        {"name": "BC-500 (NZ)", "satellite": "IPSTAR", "uplink_cf": 13.875, "downlink_cf": 11.65, "bandwidth": 200.000, "type": "broadcast", "uplink_beam": "BC-500 (NZ)", "gt_peak": 20.48, "uplink_pol": "H", "downlink_beam": "BC-500 (NZ)", "saturated_eirp_peak": 57.67, "downlink_pol": "V", "transponder": "3830G1", "dynamic_range": 20.0, "mode": "ALC", "sfd": -66.20, "eirp_up_density": 69.92307297, "full_load_obo": [
            {type: 'actual', value: -5},
            {type: 'contract', value: -5}
        ], "country": "New Zealand"},
        {"name": "BC-600 (214)", "satellite": "IPSTAR", "uplink_cf": 13.875, "downlink_cf": 11.65, "bandwidth": 200.000, "type": "broadcast", "uplink_beam": "BC-600 (214)", "gt_peak": 16.76, "uplink_pol": "H", "downlink_beam": "BC-600 (214)", "saturated_eirp_peak": 58.12, "downlink_pol": "V", "transponder": "3830D1", "dynamic_range": 20.0, "mode": "ALC", "sfd": -67.60, "eirp_up_density": 75.42307297, "full_load_obo": [
            {type: 'actual', value: -5},
            {type: 'contract', value: -5}
        ], "country": "Malaysia"},
        {"name": "BC-600 (604)", "satellite": "IPSTAR", "uplink_cf": 13.875, "downlink_cf": 11.65, "bandwidth": 200.000, "type": "broadcast", "uplink_beam": "BC-600 (604)", "gt_peak": 14.25, "uplink_pol": "H", "downlink_beam": "BC-600 (604)", "saturated_eirp_peak": 57.79, "downlink_pol": "V", "transponder": "3830D1", "dynamic_range": 20.0, "mode": "ALC", "sfd": -69.10, "eirp_up_density": 75.42307297, "full_load_obo": [
            {type: 'actual', value: -3},
            {type: 'contract', value: -5}
        ], "country": "Indonesia"},
        {"name": "BC-700 (701)", "satellite": "IPSTAR", "uplink_cf": 13.875, "downlink_cf": 11.65, "bandwidth": 200.000, "type": "broadcast", "uplink_beam": "BC-700 (701)", "gt_peak": 20.16, "uplink_pol": "H", "downlink_beam": "BC-700 (701)", "saturated_eirp_peak": 60.11, "downlink_pol": "V", "transponder": "3820C", "dynamic_range": 20.0, "mode": "ALC", "sfd": -66.80, "eirp_up_density": 72.92307297, "full_load_obo": [
            {type: 'actual', value: -5},
            {type: 'contract', value: -5}
        ], "country": "Philippines"}
    ];
/*
    _.each(fwd_data, function (x) {
        var doc = _.where(contour_arr,{"beam": x.name,"type": x.type})[0];
        _.extend(x,{"contour_50":doc.value_50,"contour_eoc":doc.value_eoc});

    })
*/
    var rtn_data = [
        {"name": "100", "satellite": "IPSTAR", "uplink_cf": 14.0580, "downlink_cf": 18.3580, "bandwidth": 116.000, "type": "return", "uplink_beam": "100", "gt_peak": 18.7, "uplink_pol": "H", "downlink_beam": "1V", "saturated_eirp_peak": 57.2, "downlink_pol": "V", "transponder": "3610C1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.22, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "India"},
        {"name": "101", "satellite": "IPSTAR", "uplink_cf": 14.3170, "downlink_cf": 18.6170, "bandwidth": 116.000, "type": "return", "uplink_beam": "101", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "1V", "saturated_eirp_peak": 57.2, "downlink_pol": "V", "transponder": "3610C1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.07, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "India"},
        {"name": "102", "satellite": "IPSTAR", "uplink_cf": 14.0580, "downlink_cf": 18.3580, "bandwidth": 116.000, "type": "return", "uplink_beam": "102", "gt_peak": 18.9, "uplink_pol": "H", "downlink_beam": "1H", "saturated_eirp_peak": 56.3, "downlink_pol": "H", "transponder": "3610B1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.06, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "India"},
        {"name": "103", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 18.4875, "bandwidth": 116.000, "type": "return", "uplink_beam": "103", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "1V", "saturated_eirp_peak": 57.2, "downlink_pol": "V", "transponder": "3610C1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.71, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "India"},
        {"name": "104", "satellite": "IPSTAR", "uplink_cf": 14.3170, "downlink_cf": 20.0170, "bandwidth": 116.000, "type": "return", "uplink_beam": "104", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "1V", "saturated_eirp_peak": 57.2, "downlink_pol": "V", "transponder": "3610C1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.67, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "India"},
        {"name": "105", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 19.8875, "bandwidth": 116.000, "type": "return", "uplink_beam": "105", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "1V", "saturated_eirp_peak": 57.2, "downlink_pol": "V", "transponder": "3610C1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.87, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "India"},
        {"name": "106", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 18.4875, "bandwidth": 116.000, "type": "return", "uplink_beam": "106", "gt_peak": 19.2, "uplink_pol": "H", "downlink_beam": "1H", "saturated_eirp_peak": 56.3, "downlink_pol": "H", "transponder": "3610B1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.93, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "India"},
        {"name": "107", "satellite": "IPSTAR", "uplink_cf": 14.3170, "downlink_cf": 20.0170, "bandwidth": 116.000, "type": "return", "uplink_beam": "107", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "1H", "saturated_eirp_peak": 56.3, "downlink_pol": "H", "transponder": "3610B1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.80, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "India"},
        {"name": "108", "satellite": "IPSTAR", "uplink_cf": 14.0580, "downlink_cf": 19.7580, "bandwidth": 116.000, "type": "return", "uplink_beam": "108", "gt_peak": 19.1, "uplink_pol": "H", "downlink_beam": "1V", "saturated_eirp_peak": 57.2, "downlink_pol": "V", "transponder": "3610C1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.24, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "India"},
        {"name": "109", "satellite": "IPSTAR", "uplink_cf": 14.3170, "downlink_cf": 18.6170, "bandwidth": 116.000, "type": "return", "uplink_beam": "109", "gt_peak": 19.2, "uplink_pol": "H", "downlink_beam": "1H", "saturated_eirp_peak": 56.3, "downlink_pol": "H", "transponder": "3610B1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.86, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "India"},
        {"name": "110", "satellite": "IPSTAR", "uplink_cf": 14.0580, "downlink_cf": 19.7580, "bandwidth": 116.000, "type": "return", "uplink_beam": "110", "gt_peak": 19.1, "uplink_pol": "H", "downlink_beam": "1H", "saturated_eirp_peak": 56.3, "downlink_pol": "H", "transponder": "3610B1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.22, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "India"},
        {"name": "111", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 19.8875, "bandwidth": 116.000, "type": "return", "uplink_beam": "111", "gt_peak": 19.5, "uplink_pol": "H", "downlink_beam": "1H", "saturated_eirp_peak": 56.3, "downlink_pol": "H", "transponder": "3610B1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -58.99, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "India"},
        {"name": "112", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 19.8875, "bandwidth": 116.000, "type": "return", "uplink_beam": "112", "gt_peak": 19.4, "uplink_pol": "H", "downlink_beam": "2V", "saturated_eirp_peak": 57.8, "downlink_pol": "V", "transponder": "3610L1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.15, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "India"},
        {"name": "113", "satellite": "IPSTAR", "uplink_cf": 14.3170, "downlink_cf": 18.6170, "bandwidth": 116.000, "type": "return", "uplink_beam": "113", "gt_peak": 19.4, "uplink_pol": "H", "downlink_beam": "2V", "saturated_eirp_peak": 57.8, "downlink_pol": "V", "transponder": "3610L1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.21, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "India"},
        {"name": "114", "satellite": "IPSTAR", "uplink_cf": 14.0580, "downlink_cf": 18.3580, "bandwidth": 116.000, "type": "return", "uplink_beam": "114", "gt_peak": 18.9, "uplink_pol": "H", "downlink_beam": "2V", "saturated_eirp_peak": 57.8, "downlink_pol": "V", "transponder": "3610L1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.47, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "India"},
        {"name": "115", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 18.4875, "bandwidth": 116.000, "type": "return", "uplink_beam": "115", "gt_peak": 19.0, "uplink_pol": "H", "downlink_beam": "2V", "saturated_eirp_peak": 57.8, "downlink_pol": "V", "transponder": "3610L1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.12, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "India"},
        {"name": "201", "satellite": "IPSTAR", "uplink_cf": 14.0580, "downlink_cf": 19.7580, "bandwidth": 116.000, "type": "return", "uplink_beam": "201", "gt_peak": 18.8, "uplink_pol": "H", "downlink_beam": "17H", "saturated_eirp_peak": 55.4, "downlink_pol": "H", "transponder": "3610J1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.63, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "Myanmar"},
        {"name": "202", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 19.8875, "bandwidth": 116.000, "type": "return", "uplink_beam": "202", "gt_peak": 19.0, "uplink_pol": "H", "downlink_beam": "17H", "saturated_eirp_peak": 55.4, "downlink_pol": "H", "transponder": "3610J1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.90, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "Myanmar"},
        {"name": "203", "satellite": "IPSTAR", "uplink_cf": 14.3170, "downlink_cf": 18.6170, "bandwidth": 116.000, "type": "return", "uplink_beam": "203", "gt_peak": 19.2, "uplink_pol": "H", "downlink_beam": "3H", "saturated_eirp_peak": 58.4, "downlink_pol": "H", "transponder": "3610J1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.66, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "Thailand"},
        {"name": "204", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 18.4875, "bandwidth": 116.000, "type": "return", "uplink_beam": "204", "gt_peak": 18.9, "uplink_pol": "H", "downlink_beam": "3H", "saturated_eirp_peak": 58.4, "downlink_pol": "H", "transponder": "3610J1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.01, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "Thailand"},
        {"name": "205", "satellite": "IPSTAR", "uplink_cf": 14.0580, "downlink_cf": 19.7580, "bandwidth": 116.000, "type": "return", "uplink_beam": "205", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "15H", "saturated_eirp_peak": 61.0, "downlink_pol": "H", "transponder": "3610K1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.08, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "Vietnam"},
        {"name": "206", "satellite": "IPSTAR", "uplink_cf": 14.3170, "downlink_cf": 20.0170, "bandwidth": 116.000, "type": "return", "uplink_beam": "206", "gt_peak": 19.6, "uplink_pol": "H", "downlink_beam": "15H", "saturated_eirp_peak": 61.0, "downlink_pol": "H", "transponder": "3610K1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.67, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "Vietnam"},
        {"name": "207", "satellite": "IPSTAR", "uplink_cf": 14.0580, "downlink_cf": 19.7580, "bandwidth": 116.000, "type": "return", "uplink_beam": "207", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "3H", "saturated_eirp_peak": 62.0, "downlink_pol": "V", "transponder": "3610H1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -58.86, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "Thailand"},
        {"name": "208", "satellite": "IPSTAR", "uplink_cf": 14.3170, "downlink_cf": 20.0170, "bandwidth": 116.000, "type": "return", "uplink_beam": "208", "gt_peak": 18.9, "uplink_pol": "H", "downlink_beam": "18H", "saturated_eirp_peak": 57.4, "downlink_pol": "H", "transponder": "3610J1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.07, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "Cambodia"},
        {"name": "209", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 19.8875, "bandwidth": 116.000, "type": "return", "uplink_beam": "209", "gt_peak": 19.9, "uplink_pol": "H", "downlink_beam": "3V", "saturated_eirp_peak": 62.0, "downlink_pol": "V", "transponder": "3610H1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -58.51, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "Thailand"},
        {"name": "210", "satellite": "IPSTAR", "uplink_cf": 14.0580, "downlink_cf": 18.3580, "bandwidth": 116.000, "type": "return", "uplink_beam": "210", "gt_peak": 18.5, "uplink_pol": "H", "downlink_beam": "15H", "saturated_eirp_peak": 61.0, "downlink_pol": "H", "transponder": "3610K1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.88, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "Vietnam"},
        {"name": "211", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 18.4875, "bandwidth": 116.000, "type": "return", "uplink_beam": "211", "gt_peak": 18.7, "uplink_pol": "H", "downlink_beam": "15H", "saturated_eirp_peak": 61.0, "downlink_pol": "H", "transponder": "3610K1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.40, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "Vietnam"},
        {"name": "213", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 19.8875, "bandwidth": 116.000, "type": "return", "uplink_beam": "213", "gt_peak": 19.6, "uplink_pol": "H", "downlink_beam": "13H", "saturated_eirp_peak": 61.6, "downlink_pol": "H", "transponder": "3610T1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -58.65, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "Malaysia"},
        {"name": "214", "satellite": "IPSTAR", "uplink_cf": 14.0580, "downlink_cf": 19.7580, "bandwidth": 116.000, "type": "return", "uplink_beam": "214", "gt_peak": 19.5, "uplink_pol": "H", "downlink_beam": "13H", "saturated_eirp_peak": 61.6, "downlink_pol": "H", "transponder": "3610T1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -58.61, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "Malaysia"},
        {"name": "215", "satellite": "IPSTAR", "uplink_cf": 14.0580, "downlink_cf": 18.3580, "bandwidth": 116.000, "type": "return", "uplink_beam": "215", "gt_peak": 18.1, "uplink_pol": "H", "downlink_beam": "13H", "saturated_eirp_peak": 62.8, "downlink_pol": "H", "transponder": "3610R1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.62, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "Malaysia"},
        {"name": "216", "satellite": "IPSTAR", "uplink_cf": 14.3170, "downlink_cf": 18.6170, "bandwidth": 116.000, "type": "return", "uplink_beam": "216", "gt_peak": 18.3, "uplink_pol": "H", "downlink_beam": "13H", "saturated_eirp_peak": 62.8, "downlink_pol": "H", "transponder": "3610R1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.17, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "Malaysia"},
        {"name": "217", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 18.4875, "bandwidth": 116.000, "type": "return", "uplink_beam": "217", "gt_peak": 18.0, "uplink_pol": "H", "downlink_beam": "13H", "saturated_eirp_peak": 62.8, "downlink_pol": "H", "transponder": "3610R1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.01, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "Malaysia"},
        {"name": "301", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 19.8875, "bandwidth": 116.000, "type": "return", "uplink_beam": "301", "gt_peak": 18.7, "uplink_pol": "H", "downlink_beam": "4H", "saturated_eirp_peak": 55.6, "downlink_pol": "H", "transponder": "3620K1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.81, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "China"},
        {"name": "302", "satellite": "IPSTAR", "uplink_cf": 14.3170, "downlink_cf": 20.0170, "bandwidth": 116.000, "type": "return", "uplink_beam": "302", "gt_peak": 18.6, "uplink_pol": "H", "downlink_beam": "4H", "saturated_eirp_peak": 55.6, "downlink_pol": "H", "transponder": "3620K1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.51, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "China"},
        {"name": "303", "satellite": "IPSTAR", "uplink_cf": 14.0580, "downlink_cf": 19.7580, "bandwidth": 116.000, "type": "return", "uplink_beam": "303", "gt_peak": 18.8, "uplink_pol": "H", "downlink_beam": "4H", "saturated_eirp_peak": 55.6, "downlink_pol": "H", "transponder": "3620K1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.47, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "China"},
        {"name": "304", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 19.8875, "bandwidth": 116.000, "type": "return", "uplink_beam": "304", "gt_peak": 19.7, "uplink_pol": "H", "downlink_beam": "4V", "saturated_eirp_peak": 58.3, "downlink_pol": "V", "transponder": "3620J1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.00, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "China"},
        {"name": "305", "satellite": "IPSTAR", "uplink_cf": 14.3170, "downlink_cf": 20.0170, "bandwidth": 116.000, "type": "return", "uplink_beam": "305", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "4V", "saturated_eirp_peak": 58.3, "downlink_pol": "V", "transponder": "3620J1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.19, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "China"},
        {"name": "306", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 18.4875, "bandwidth": 116.000, "type": "return", "uplink_beam": "306", "gt_peak": 18.8, "uplink_pol": "H", "downlink_beam": "4H", "saturated_eirp_peak": 55.6, "downlink_pol": "H", "transponder": "3620K1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.22, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "China"},
        {"name": "307", "satellite": "IPSTAR", "uplink_cf": 14.3170, "downlink_cf": 18.6170, "bandwidth": 116.000, "type": "return", "uplink_beam": "307", "gt_peak": 19.1, "uplink_pol": "H", "downlink_beam": "4H", "saturated_eirp_peak": 55.6, "downlink_pol": "H", "transponder": "3620K1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.71, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "China"},
        {"name": "308", "satellite": "IPSTAR", "uplink_cf": 14.0580, "downlink_cf": 19.7580, "bandwidth": 116.000, "type": "return", "uplink_beam": "308", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "4V", "saturated_eirp_peak": 58.3, "downlink_pol": "V", "transponder": "3620J1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.74, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "China"},
        {"name": "309", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 18.4875, "bandwidth": 116.000, "type": "return", "uplink_beam": "309", "gt_peak": 18.6, "uplink_pol": "H", "downlink_beam": "5H", "saturated_eirp_peak": 58.7, "downlink_pol": "H", "transponder": "3610F1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.52, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "China"},
        {"name": "310", "satellite": "IPSTAR", "uplink_cf": 14.3170, "downlink_cf": 20.0170, "bandwidth": 116.000, "type": "return", "uplink_beam": "310", "gt_peak": 19.7, "uplink_pol": "H", "downlink_beam": "5V", "saturated_eirp_peak": 57.4, "downlink_pol": "V", "transponder": "3620A1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -58.94, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "China"},
        {"name": "311", "satellite": "IPSTAR", "uplink_cf": 14.0580, "downlink_cf": 18.3580, "bandwidth": 116.000, "type": "return", "uplink_beam": "311", "gt_peak": 18.7, "uplink_pol": "H", "downlink_beam": "4H", "saturated_eirp_peak": 55.6, "downlink_pol": "H", "transponder": "3620K1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.59, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "China"},
        {"name": "312", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 18.4875, "bandwidth": 116.000, "type": "return", "uplink_beam": "312", "gt_peak": 18.6, "uplink_pol": "H", "downlink_beam": "10V", "saturated_eirp_peak": 57.3, "downlink_pol": "V", "transponder": "36100", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.47, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "China"},
        {"name": "313", "satellite": "IPSTAR", "uplink_cf": 14.3170, "downlink_cf": 18.6170, "bandwidth": 116.000, "type": "return", "uplink_beam": "313", "gt_peak": 19.2, "uplink_pol": "H", "downlink_beam": "10V", "saturated_eirp_peak": 57.3, "downlink_pol": "V", "transponder": "36100", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.40, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "China"},
        {"name": "314", "satellite": "IPSTAR", "uplink_cf": 14.3170, "downlink_cf": 18.6170, "bandwidth": 116.000, "type": "return", "uplink_beam": "314", "gt_peak": 18.8, "uplink_pol": "H", "downlink_beam": "5H", "saturated_eirp_peak": 58.7, "downlink_pol": "H", "transponder": "3610F1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.76, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "China"},
        {"name": "315", "satellite": "IPSTAR", "uplink_cf": 14.0580, "downlink_cf": 18.3580, "bandwidth": 116.000, "type": "return", "uplink_beam": "315", "gt_peak": 18.7, "uplink_pol": "H", "downlink_beam": "5H", "saturated_eirp_peak": 58.7, "downlink_pol": "H", "transponder": "3610F1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.86, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "China"},
        {"name": "316", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 19.8875, "bandwidth": 116.000, "type": "return", "uplink_beam": "316", "gt_peak": 19.7, "uplink_pol": "H", "downlink_beam": "5V", "saturated_eirp_peak": 57.4, "downlink_pol": "V", "transponder": "3620A1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -58.82, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "China"},
        {"name": "317", "satellite": "IPSTAR", "uplink_cf": 14.3170, "downlink_cf": 20.0170, "bandwidth": 116.000, "type": "return", "uplink_beam": "317", "gt_peak": 19.5, "uplink_pol": "H", "downlink_beam": "10V", "saturated_eirp_peak": 57.3, "downlink_pol": "V", "transponder": "36100", "dynamic_range": 25.0, "mode": "ALC", "sfd": -58.59, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "China"},
        {"name": "318", "satellite": "IPSTAR", "uplink_cf": 14.0580, "downlink_cf": 19.7580, "bandwidth": 116.000, "type": "return", "uplink_beam": "318", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "10V", "saturated_eirp_peak": 57.3, "downlink_pol": "V", "transponder": "36100", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.73, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "China"},
        {"name": "319", "satellite": "IPSTAR", "uplink_cf": 14.3170, "downlink_cf": 18.6170, "bandwidth": 116.000, "type": "return", "uplink_beam": "319", "gt_peak": 19.0, "uplink_pol": "H", "downlink_beam": "5V", "saturated_eirp_peak": 57.4, "downlink_pol": "V", "transponder": "3620A1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.10, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "China"},
        {"name": "320", "satellite": "IPSTAR", "uplink_cf": 14.0580, "downlink_cf": 19.7580, "bandwidth": 116.000, "type": "return", "uplink_beam": "320", "gt_peak": 19.5, "uplink_pol": "H", "downlink_beam": "5V", "saturated_eirp_peak": 57.4, "downlink_pol": "V", "transponder": "3620A1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.56, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "China"},
        {"name": "321", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 19.8875, "bandwidth": 116.000, "type": "return", "uplink_beam": "321", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "10V", "saturated_eirp_peak": 57.3, "downlink_pol": "V", "transponder": "36100", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.17, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "China"},
        {"name": "322", "satellite": "IPSTAR", "uplink_cf": 14.3170, "downlink_cf": 20.0170, "bandwidth": 116.000, "type": "return", "uplink_beam": "322", "gt_peak": 19.6, "uplink_pol": "H", "downlink_beam": "14H", "saturated_eirp_peak": 59.6, "downlink_pol": "H", "transponder": "3610F1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -58.93, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "Taiwan"},
        {"name": "323", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 18.4875, "bandwidth": 116.000, "type": "return", "uplink_beam": "323", "gt_peak": 18.9, "uplink_pol": "H", "downlink_beam": "5V", "saturated_eirp_peak": 57.4, "downlink_pol": "V", "transponder": "3620A1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.90, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "China"},
        {"name": "328", "satellite": "IPSTAR", "uplink_cf": 14.4443, "downlink_cf": 20.1443, "bandwidth": 111.500, "type": "return", "uplink_beam": "328", "gt_peak": 8.0, "uplink_pol": "V", "downlink_beam": "10V", "saturated_eirp_peak": 57.1, "downlink_pol": "V", "transponder": "36100", "dynamic_range": 25.0, "mode": "ALC", "sfd": -57.53, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "China"},
        {"name": "401", "satellite": "IPSTAR", "uplink_cf": 14.2855, "downlink_cf": 18.5855, "bandwidth": 179.000, "type": "return", "uplink_beam": "401", "gt_peak": 18.0, "uplink_pol": "H", "downlink_beam": "7V", "saturated_eirp_peak": 56.3, "downlink_pol": "V", "transponder": "3620B1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -58.83, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "Japan"},
        {"name": "402", "satellite": "IPSTAR", "uplink_cf": 14.0895, "downlink_cf": 19.7895, "bandwidth": 179.000, "type": "return", "uplink_beam": "402", "gt_peak": 18.6, "uplink_pol": "H", "downlink_beam": "7V", "saturated_eirp_peak": 56.3, "downlink_pol": "V", "transponder": "3620B1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -58.44, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "Japan"},
        {"name": "403", "satellite": "IPSTAR", "uplink_cf": 14.2855, "downlink_cf": 19.9855, "bandwidth": 179.000, "type": "return", "uplink_beam": "403", "gt_peak": 19.0, "uplink_pol": "H", "downlink_beam": "7V", "saturated_eirp_peak": 56.3, "downlink_pol": "V", "transponder": "3620B1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -57.84, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "Japan"},
        {"name": "404", "satellite": "IPSTAR", "uplink_cf": 14.0895, "downlink_cf": 18.3895, "bandwidth": 179.000, "type": "return", "uplink_beam": "404", "gt_peak": 18.8, "uplink_pol": "H", "downlink_beam": "7V", "saturated_eirp_peak": 56.3, "downlink_pol": "V", "transponder": "3620B1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -58.41, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "Japan"},
        {"name": "405", "satellite": "IPSTAR", "uplink_cf": 14.2855, "downlink_cf": 19.9855, "bandwidth": 179.000, "type": "return", "uplink_beam": "405", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "11H", "saturated_eirp_peak": 60.2, "downlink_pol": "H", "transponder": "3610D1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -57.12, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "South Korea"},
        {"name": "406", "satellite": "IPSTAR", "uplink_cf": 14.0580, "downlink_cf": 18.3580, "bandwidth": 116.000, "type": "return", "uplink_beam": "406", "gt_peak": 18.3, "uplink_pol": "H", "downlink_beam": "10V", "saturated_eirp_peak": 57.3, "downlink_pol": "V", "transponder": "36100", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.35, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "China"},
        {"name": "501", "satellite": "IPSTAR", "uplink_cf": 14.2855, "downlink_cf": 19.9855, "bandwidth": 179.000, "type": "return", "uplink_beam": "501", "gt_peak": 18.1, "uplink_pol": "H", "downlink_beam": "8V", "saturated_eirp_peak": 55.0, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25.0, "mode": "ALC", "sfd": -58.76, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "Australia"},
        {"name": "502", "satellite": "IPSTAR", "uplink_cf": 14.2855, "downlink_cf": 18.5855, "bandwidth": 179.000, "type": "return", "uplink_beam": "502", "gt_peak": 18.2, "uplink_pol": "H", "downlink_beam": "8H", "saturated_eirp_peak": 55.9, "downlink_pol": "H", "transponder": "3620D1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.06, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "Australia"},
        {"name": "503", "satellite": "IPSTAR", "uplink_cf": 14.0895, "downlink_cf": 19.7895, "bandwidth": 179.000, "type": "return", "uplink_beam": "503", "gt_peak": 18.7, "uplink_pol": "H", "downlink_beam": "8V", "saturated_eirp_peak": 55.0, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25.0, "mode": "ALC", "sfd": -58.63, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "Australia"},
        {"name": "504", "satellite": "IPSTAR", "uplink_cf": 14.2855, "downlink_cf": 19.9855, "bandwidth": 179.000, "type": "return", "uplink_beam": "504", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "8H", "saturated_eirp_peak": 55.9, "downlink_pol": "H", "transponder": "3620D1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -57.80, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "Australia"},
        {"name": "505", "satellite": "IPSTAR", "uplink_cf": 14.0895, "downlink_cf": 18.3895, "bandwidth": 179.000, "type": "return", "uplink_beam": "505", "gt_peak": 19.1, "uplink_pol": "H", "downlink_beam": "8H", "saturated_eirp_peak": 55.9, "downlink_pol": "H", "transponder": "3620D1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -58.08, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "Australia"},
        {"name": "506", "satellite": "IPSTAR", "uplink_cf": 14.2855, "downlink_cf": 18.5855, "bandwidth": 179.000, "type": "return", "uplink_beam": "506", "gt_peak": 19.0, "uplink_pol": "H", "downlink_beam": "9V", "saturated_eirp_peak": 56.3, "downlink_pol": "V", "transponder": "3620F1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -58.16, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "Australia"},
        {"name": "507", "satellite": "IPSTAR", "uplink_cf": 14.0895, "downlink_cf": 19.7895, "bandwidth": 179.000, "type": "return", "uplink_beam": "507", "gt_peak": 19.9, "uplink_pol": "H", "downlink_beam": "8H", "saturated_eirp_peak": 55.9, "downlink_pol": "H", "transponder": "3620D1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -57.39, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "Australia"},
        {"name": "508", "satellite": "IPSTAR", "uplink_cf": 14.2855, "downlink_cf": 19.9855, "bandwidth": 179.000, "type": "return", "uplink_beam": "508", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "9V", "saturated_eirp_peak": 56.3, "downlink_pol": "V", "transponder": "3620F1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -57.72, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "Australia"},
        {"name": "509", "satellite": "IPSTAR", "uplink_cf": 14.0895, "downlink_cf": 18.3895, "bandwidth": 179.000, "type": "return", "uplink_beam": "509", "gt_peak": 19.0, "uplink_pol": "H", "downlink_beam": "9V", "saturated_eirp_peak": 56.3, "downlink_pol": "V", "transponder": "3620F1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -58.48, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "Australia"},
        {"name": "510", "satellite": "IPSTAR", "uplink_cf": 14.0895, "downlink_cf": 19.7895, "bandwidth": 179.000, "type": "return", "uplink_beam": "510", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "9V", "saturated_eirp_peak": 56.3, "downlink_pol": "V", "transponder": "3620F1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -57.83, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "Australia"},
        {"name": "514", "satellite": "IPSTAR", "uplink_cf": 14.4443, "downlink_cf": 20.1443, "bandwidth": 111.500, "type": "return", "uplink_beam": "514", "gt_peak": 4.9, "uplink_pol": "H", "downlink_beam": "8V", "saturated_eirp_peak": 52.9, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.59, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "Australia"},
        {"name": "601", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 18.4875, "bandwidth": 116.000, "type": "return", "uplink_beam": "601", "gt_peak": 19.1, "uplink_pol": "H", "downlink_beam": "6V", "saturated_eirp_peak": 62.9, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.61, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "Indonesia"},
        {"name": "602", "satellite": "IPSTAR", "uplink_cf": 14.3170, "downlink_cf": 18.6170, "bandwidth": 116.000, "type": "return", "uplink_beam": "602", "gt_peak": 19.0, "uplink_pol": "H", "downlink_beam": "6V", "saturated_eirp_peak": 62.9, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.37, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "Indonesia"},
        {"name": "603", "satellite": "IPSTAR", "uplink_cf": 14.0580, "downlink_cf": 18.3580, "bandwidth": 116.000, "type": "return", "uplink_beam": "603", "gt_peak": 18.3, "uplink_pol": "H", "downlink_beam": "6V", "saturated_eirp_peak": 62.9, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.90, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "Indonesia"},
        {"name": "604", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 19.8875, "bandwidth": 116.000, "type": "return", "uplink_beam": "604", "gt_peak": 18.0, "uplink_pol": "H", "downlink_beam": "6V", "saturated_eirp_peak": 61.7, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.18, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "Indonesia"},
        {"name": "605", "satellite": "IPSTAR", "uplink_cf": 14.3170, "downlink_cf": 20.0170, "bandwidth": 116.000, "type": "return", "uplink_beam": "605", "gt_peak": 17.9, "uplink_pol": "H", "downlink_beam": "6V", "saturated_eirp_peak": 61.7, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.52, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "Indonesia"},
        {"name": "606", "satellite": "IPSTAR", "uplink_cf": 14.0580, "downlink_cf": 19.7580, "bandwidth": 116.000, "type": "return", "uplink_beam": "606", "gt_peak": 17.4, "uplink_pol": "H", "downlink_beam": "6V", "saturated_eirp_peak": 61.7, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.95, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "Indonesia"},
        {"name": "608", "satellite": "IPSTAR", "uplink_cf": 14.4443, "downlink_cf": 20.1443, "bandwidth": 111.500, "type": "return", "uplink_beam": "608", "gt_peak": 6.4, "uplink_pol": "V", "downlink_beam": "6V", "saturated_eirp_peak": 61.5, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25.0, "mode": "ALC", "sfd": -65.23, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "Indonesia"},
        {"name": "701", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 18.4875, "bandwidth": 116.000, "type": "return", "uplink_beam": "701", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "12V", "saturated_eirp_peak": 59.9, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.37, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "Philippines"},
        {"name": "702", "satellite": "IPSTAR", "uplink_cf": 14.3170, "downlink_cf": 18.6170, "bandwidth": 116.000, "type": "return", "uplink_beam": "702", "gt_peak": 18.8, "uplink_pol": "H", "downlink_beam": "12V", "saturated_eirp_peak": 59.9, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.74, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "Philippines"},
        {"name": "703", "satellite": "IPSTAR", "uplink_cf": 14.0580, "downlink_cf": 18.3580, "bandwidth": 116.000, "type": "return", "uplink_beam": "703", "gt_peak": 18.1, "uplink_pol": "H", "downlink_beam": "12V", "saturated_eirp_peak": 59.9, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25.0, "mode": "ALC", "sfd": -61.17, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "Philippines"},
        {"name": "112-2", "satellite": "IPSTAR", "uplink_cf": 14.4443, "downlink_cf": 20.1443, "bandwidth": 111.500, "type": "return", "uplink_beam": "112-2", "gt_peak": 19.7, "uplink_pol": "H", "downlink_beam": "2V", "saturated_eirp_peak": 57.7, "downlink_pol": "V", "transponder": "3610L1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.18, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "India"},
        {"name": "207-2", "satellite": "IPSTAR", "uplink_cf": 14.4443, "downlink_cf": 20.1443, "bandwidth": 111.500, "type": "return", "uplink_beam": "207-2", "gt_peak": 19.7, "uplink_pol": "H", "downlink_beam": "3V", "saturated_eirp_peak": 61.8, "downlink_pol": "V", "transponder": "3610H1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -58.51, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "Thailand"},
        {"name": "212-13H", "satellite": "IPSTAR", "uplink_cf": 14.3170, "downlink_cf": 20.0170, "bandwidth": 116.000, "type": "return", "uplink_beam": "212-13H", "gt_peak": 20.1, "uplink_pol": "H", "downlink_beam": "13H", "saturated_eirp_peak": 61.6, "downlink_pol": "H", "transponder": "3610T1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -57.29, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "Malaysia"},
        {"name": "212-3V", "satellite": "IPSTAR", "uplink_cf": 14.3170, "downlink_cf": 20.0170, "bandwidth": 116.000, "type": "return", "uplink_beam": "212-3V", "gt_peak": 20.1, "uplink_pol": "H", "downlink_beam": "3V", "saturated_eirp_peak": 62.0, "downlink_pol": "V", "transponder": "3610H1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -57.29, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "Thailand"},
        {"name": "214-2", "satellite": "IPSTAR", "uplink_cf": 14.4443, "downlink_cf": 20.1443, "bandwidth": 111.500, "type": "return", "uplink_beam": "214-2", "gt_peak": 19.9, "uplink_pol": "H", "downlink_beam": "13H", "saturated_eirp_peak": 61.4, "downlink_pol": "H", "transponder": "3610T1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -58.14, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "Malaysia"},
        {"name": "304-2", "satellite": "IPSTAR", "uplink_cf": 14.4443, "downlink_cf": 20.1443, "bandwidth": 111.500, "type": "return", "uplink_beam": "304-2", "gt_peak": 19.9, "uplink_pol": "H", "downlink_beam": "4V", "saturated_eirp_peak": 58.1, "downlink_pol": "V", "transponder": "3620J1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -58.82, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "China"},
        {"name": "320-2", "satellite": "IPSTAR", "uplink_cf": 14.4443, "downlink_cf": 20.1443, "bandwidth": 111.500, "type": "return", "uplink_beam": "320-2", "gt_peak": 19.8, "uplink_pol": "H", "downlink_beam": "5V", "saturated_eirp_peak": 57.3, "downlink_pol": "V", "transponder": "3620A1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.19, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "China"},
        {"name": "322-2", "satellite": "IPSTAR", "uplink_cf": 14.4443, "downlink_cf": 20.1443, "bandwidth": 111.500, "type": "return", "uplink_beam": "322-2", "gt_peak": 19.6, "uplink_pol": "H", "downlink_beam": "14H", "saturated_eirp_peak": 59.5, "downlink_pol": "H", "transponder": "3610F1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.31, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "China"},
        {"name": "402-2", "satellite": "IPSTAR", "uplink_cf": 14.4443, "downlink_cf": 20.1443, "bandwidth": 111.500, "type": "return", "uplink_beam": "402-2", "gt_peak": 18.9, "uplink_pol": "H", "downlink_beam": "7V", "saturated_eirp_peak": 54.2, "downlink_pol": "V", "transponder": "3620B1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.11, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "Japan"},
        {"name": "405-2", "satellite": "IPSTAR", "uplink_cf": 14.4443, "downlink_cf": 20.1443, "bandwidth": 111.500, "type": "return", "uplink_beam": "405-2", "gt_peak": 19.5, "uplink_pol": "H", "downlink_beam": "11H", "saturated_eirp_peak": 58.6, "downlink_pol": "H", "transponder": "3610D1", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.33, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "South Korea"},
        {"name": "511", "satellite": "IPSTAR", "uplink_cf": 14.0580, "downlink_cf": 18.3580, "bandwidth": 116.000, "type": "return", "uplink_beam": "511", "gt_peak": 18.9, "uplink_pol": "H", "downlink_beam": "16V", "saturated_eirp_peak": 53.1, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25.0, "mode": "ALC", "sfd": -59.63, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "New Zealand"},
        {"name": "512", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 18.4875, "bandwidth": 116.000, "type": "return", "uplink_beam": "512", "gt_peak": 18.8, "uplink_pol": "H", "downlink_beam": "16V", "saturated_eirp_peak": 53.1, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.20, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "New Zealand"},
        {"name": "513", "satellite": "IPSTAR", "uplink_cf": 14.3170, "downlink_cf": 18.6170, "bandwidth": 116.000, "type": "return", "uplink_beam": "513", "gt_peak": 18.6, "uplink_pol": "H", "downlink_beam": "16V", "saturated_eirp_peak": 53.1, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25.0, "mode": "ALC", "sfd": -60.15, "designed_deepin": -9, "full_load_obo": [
            {type: 'actual', value: -9.5},
            {type: 'contract', value: -9.5}
        ], "actual": -9.5, "country": "New Zealand"}
    ];

    _.each(rtn_data, function (x) {
        var doc = _.where(contour_arr,{"beam": x.name,"type": x.type})[0];
        _.extend(x,{"contour_50":doc.value_50,"contour_eoc":doc.value_eoc});

    })

    console.log(JSON.stringify(rtn_data));
}