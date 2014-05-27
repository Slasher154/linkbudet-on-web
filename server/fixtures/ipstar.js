/**
 * Created by Dome on 5/27/14 AD.
 */

Meteor.methods({
    'insert_ipstar': function () {
        (function () {
            var fwd_data = [
                {"_id": "rYBQ4yfJdnhpZF6Jk", "name": "100", "satellite": "IPSTAR", "uplink_cf": 27.086, "downlink_cf": 12.286, "bandwidth": 171, "type": "forward", "uplink_beam": "1V", "gt_peak": 19.01, "uplink_pol": "V", "downlink_beam": "100", "saturated_eirp_peak": 59.23, "downlink_pol": "V", "transponder": "3310L1", "dynamic_range": 25, "mode": "ALC", "sfd": -62.89, "eirp_up_density": 71.74273412, "full_load_obo": [
                    {"type": "actual", "value": -6},
                    {"type": "contract", "value": -6}
                ], "country": "India", "contour_50": -2.5, "contour_eoc": -4.89, "default_gateway": "1V"},
                {"_id": "dPb4Zqb5nvGQGXnY8", "name": "101", "satellite": "IPSTAR", "uplink_cf": 27.465, "downlink_cf": 12.665, "bandwidth": 171, "type": "forward", "uplink_beam": "1V", "gt_peak": 19.01, "uplink_pol": "V", "downlink_beam": "101", "saturated_eirp_peak": 60.13, "downlink_pol": "V", "transponder": "3310L1", "dynamic_range": 25, "mode": "ALC", "sfd": -62.89, "eirp_up_density": 71.74273412, "full_load_obo": [
                    {"type": "actual", "value": -6},
                    {"type": "contract", "value": -6}
                ], "country": "India", "contour_50": -2.5, "contour_eoc": -4.95, "default_gateway": "1V"},
                {"_id": "WJqLgcCAgqkxAHx8D", "name": "102", "satellite": "IPSTAR", "uplink_cf": 27.086, "downlink_cf": 12.286, "bandwidth": 171, "type": "forward", "uplink_beam": "1H", "gt_peak": 18.87, "uplink_pol": "H", "downlink_beam": "102", "saturated_eirp_peak": 59.83, "downlink_pol": "V", "transponder": "3310N1", "dynamic_range": 25, "mode": "ALC", "sfd": -63, "eirp_up_density": 71.74273412, "full_load_obo": [
                    {"type": "actual", "value": -6},
                    {"type": "contract", "value": -6}
                ], "country": "India", "contour_50": -2.2, "contour_eoc": -4.42, "default_gateway": "1H"},
                {"_id": "dqd8WLwRehF2ReNSH", "name": "103", "satellite": "IPSTAR", "uplink_cf": 27.275, "downlink_cf": 12.475, "bandwidth": 171, "type": "forward", "uplink_beam": "1V", "gt_peak": 19.01, "uplink_pol": "V", "downlink_beam": "103", "saturated_eirp_peak": 59.63, "downlink_pol": "V", "transponder": "3310L1", "dynamic_range": 25, "mode": "ALC", "sfd": -62.89, "eirp_up_density": 71.74273412, "full_load_obo": [
                    {"type": "actual", "value": -6},
                    {"type": "contract", "value": -6}
                ], "country": "India", "contour_50": -2.4, "contour_eoc": -4.74, "default_gateway": "1V"},
                {"_id": "5qguYLLzvkqtYB4c9", "name": "104", "satellite": "IPSTAR", "uplink_cf": 29.965, "downlink_cf": 12.665, "bandwidth": 171, "type": "forward", "uplink_beam": "1V", "gt_peak": 19.01, "uplink_pol": "V", "downlink_beam": "104", "saturated_eirp_peak": 60.33, "downlink_pol": "V", "transponder": "3310L2", "dynamic_range": 25, "mode": "ALC", "sfd": -62.89, "eirp_up_density": 72.74273412, "full_load_obo": [
                    {"type": "actual", "value": -6},
                    {"type": "contract", "value": -6}
                ], "country": "India", "contour_50": -2.3, "contour_eoc": -4.64, "default_gateway": "1V"},
                {"_id": "NMSFQxhinX28HyKJa", "name": "105", "satellite": "IPSTAR", "uplink_cf": 29.775, "downlink_cf": 12.475, "bandwidth": 171, "type": "forward", "uplink_beam": "1V", "gt_peak": 19.01, "uplink_pol": "V", "downlink_beam": "105", "saturated_eirp_peak": 60.73, "downlink_pol": "V", "transponder": "3310L2", "dynamic_range": 25, "mode": "ALC", "sfd": -62.89, "eirp_up_density": 72.74273412, "full_load_obo": [
                    {"type": "actual", "value": -6},
                    {"type": "contract", "value": -6}
                ], "country": "India", "contour_50": -2.1, "contour_eoc": -4.44, "default_gateway": "1V"},
                {"_id": "BrPWJR3ChRnqSHNwu", "name": "106", "satellite": "IPSTAR", "uplink_cf": 27.275, "downlink_cf": 12.475, "bandwidth": 171, "type": "forward", "uplink_beam": "1H", "gt_peak": 18.87, "uplink_pol": "H", "downlink_beam": "106", "saturated_eirp_peak": 59.93, "downlink_pol": "V", "transponder": "3310N1", "dynamic_range": 25, "mode": "ALC", "sfd": -63, "eirp_up_density": 71.74273412, "full_load_obo": [
                    {"type": "actual", "value": -6},
                    {"type": "contract", "value": -6}
                ], "country": "India", "contour_50": -2.2, "contour_eoc": -4.4, "default_gateway": "1H"},
                {"_id": "jA2Jozcfj9z7RGB3j", "name": "107", "satellite": "IPSTAR", "uplink_cf": 29.965, "downlink_cf": 12.665, "bandwidth": 171, "type": "forward", "uplink_beam": "1H", "gt_peak": 18.87, "uplink_pol": "H", "downlink_beam": "107", "saturated_eirp_peak": 60.43, "downlink_pol": "V", "transponder": "3310N2", "dynamic_range": 25, "mode": "ALC", "sfd": -63, "eirp_up_density": 72.74273412, "full_load_obo": [
                    {"type": "actual", "value": -6},
                    {"type": "contract", "value": -6}
                ], "country": "India", "contour_50": -2.3, "contour_eoc": -4.65, "default_gateway": "1H"},
                {"_id": "ySCTvqZZR3tatkDkw", "name": "108", "satellite": "IPSTAR", "uplink_cf": 29.586, "downlink_cf": 12.286, "bandwidth": 171, "type": "forward", "uplink_beam": "1V", "gt_peak": 19.01, "uplink_pol": "V", "downlink_beam": "108", "saturated_eirp_peak": 59.93, "downlink_pol": "V", "transponder": "3310L2", "dynamic_range": 25, "mode": "ALC", "sfd": -62.89, "eirp_up_density": 72.74273412, "full_load_obo": [
                    {"type": "actual", "value": -6},
                    {"type": "contract", "value": -6}
                ], "country": "India", "contour_50": -2, "contour_eoc": -4.17, "default_gateway": "1V"},
                {"_id": "bfdxxQmPM8uQqxLpM", "name": "109", "satellite": "IPSTAR", "uplink_cf": 27.465, "downlink_cf": 12.665, "bandwidth": 171, "type": "forward", "uplink_beam": "1H", "gt_peak": 18.87, "uplink_pol": "H", "downlink_beam": "109", "saturated_eirp_peak": 60.03, "downlink_pol": "V", "transponder": "3310N1", "dynamic_range": 25, "mode": "ALC", "sfd": -63, "eirp_up_density": 71.74273412, "full_load_obo": [
                    {"type": "actual", "value": -6},
                    {"type": "contract", "value": -6}
                ], "country": "India", "contour_50": -2.2, "contour_eoc": -4.46, "default_gateway": "1H"},
                {"_id": "vArZRpCGh2KkFH7Qj", "name": "110", "satellite": "IPSTAR", "uplink_cf": 29.586, "downlink_cf": 12.286, "bandwidth": 171, "type": "forward", "uplink_beam": "1H", "gt_peak": 18.87, "uplink_pol": "H", "downlink_beam": "110", "saturated_eirp_peak": 59.73, "downlink_pol": "V", "transponder": "3310N2", "dynamic_range": 25, "mode": "ALC", "sfd": -63, "eirp_up_density": 72.74273412, "full_load_obo": [
                    {"type": "actual", "value": -6},
                    {"type": "contract", "value": -6}
                ], "country": "India", "contour_50": -1.9, "contour_eoc": -3.98, "default_gateway": "1H"},
                {"_id": "vTBQYcqPiTYBaLBWv", "name": "111", "satellite": "IPSTAR", "uplink_cf": 29.775, "downlink_cf": 12.475, "bandwidth": 171, "type": "forward", "uplink_beam": "1H", "gt_peak": 18.87, "uplink_pol": "H", "downlink_beam": "111", "saturated_eirp_peak": 60.13, "downlink_pol": "V", "transponder": "3310N2", "dynamic_range": 25, "mode": "ALC", "sfd": -63, "eirp_up_density": 72.74273412, "full_load_obo": [
                    {"type": "actual", "value": -6},
                    {"type": "contract", "value": -6}
                ], "country": "India", "contour_50": -2.1, "contour_eoc": -4.35, "default_gateway": "1H"},
                {"_id": "EDFut8m7dPDgMjBbj", "name": "112", "satellite": "IPSTAR", "uplink_cf": 29.775, "downlink_cf": 12.475, "bandwidth": 171, "type": "forward", "uplink_beam": "2V", "gt_peak": 19.08, "uplink_pol": "V", "downlink_beam": "112", "saturated_eirp_peak": 61.19, "downlink_pol": "V", "transponder": "32900", "dynamic_range": 25, "mode": "ALC", "sfd": -62.66, "eirp_up_density": 74.74273412, "full_load_obo": [
                    {"type": "actual", "value": -6},
                    {"type": "contract", "value": -6}
                ], "country": "India", "contour_50": -2.1, "contour_eoc": -4.33, "default_gateway": "2V"},
                {"_id": "ayDy6sqzL24vbY58W", "name": "113", "satellite": "IPSTAR", "uplink_cf": 27.465, "downlink_cf": 12.665, "bandwidth": 171, "type": "forward", "uplink_beam": "2V", "gt_peak": 19.08, "uplink_pol": "V", "downlink_beam": "113", "saturated_eirp_peak": 60.13, "downlink_pol": "V", "transponder": "3310P1", "dynamic_range": 25, "mode": "ALC", "sfd": -62.66, "eirp_up_density": 73.74273412, "full_load_obo": [
                    {"type": "actual", "value": -6},
                    {"type": "contract", "value": -6}
                ], "country": "India", "contour_50": -2.3, "contour_eoc": -4.66, "default_gateway": "2V"},
                {"_id": "mFHdFMe7y4cCuH83m", "name": "114", "satellite": "IPSTAR", "uplink_cf": 27.086, "downlink_cf": 12.286, "bandwidth": 171, "type": "forward", "uplink_beam": "2V", "gt_peak": 19.08, "uplink_pol": "V", "downlink_beam": "114", "saturated_eirp_peak": 59.83, "downlink_pol": "V", "transponder": "3310P1", "dynamic_range": 25, "mode": "ALC", "sfd": -62.66, "eirp_up_density": 73.74273412, "full_load_obo": [
                    {"type": "actual", "value": -6},
                    {"type": "contract", "value": -6}
                ], "country": "India", "contour_50": -1.8, "contour_eoc": -3.85, "default_gateway": "2V"},
                {"_id": "eD7Wxv2WqCZiLyn6H", "name": "115", "satellite": "IPSTAR", "uplink_cf": 27.275, "downlink_cf": 12.475, "bandwidth": 171, "type": "forward", "uplink_beam": "2V", "gt_peak": 19.08, "uplink_pol": "V", "downlink_beam": "115", "saturated_eirp_peak": 59.93, "downlink_pol": "V", "transponder": "3310P1", "dynamic_range": 25, "mode": "ALC", "sfd": -62.66, "eirp_up_density": 73.74273412, "full_load_obo": [
                    {"type": "actual", "value": -6},
                    {"type": "contract", "value": -6}
                ], "country": "India", "contour_50": -2.2, "contour_eoc": -4.32, "default_gateway": "2V"},
                {"_id": "8eHjA67oDRNtjmFLk", "name": "201", "satellite": "IPSTAR", "uplink_cf": 29.586, "downlink_cf": 12.286, "bandwidth": 171, "type": "forward", "uplink_beam": "17H", "gt_peak": 17.82, "uplink_pol": "H", "downlink_beam": "201", "saturated_eirp_peak": 59.83, "downlink_pol": "V", "transponder": "3310P2", "dynamic_range": 25, "mode": "ALC", "sfd": -65.75, "eirp_up_density": 77.74273412, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -7}
                ], "country": "Myanmar", "contour_50": -1.9, "contour_eoc": -3.98, "default_gateway": "17H"},
                {"_id": "JQJme3YtkQX8qxHHt", "name": "202", "satellite": "IPSTAR", "uplink_cf": 29.775, "downlink_cf": 12.475, "bandwidth": 171, "type": "forward", "uplink_beam": "17H", "gt_peak": 17.82, "uplink_pol": "H", "downlink_beam": "202", "saturated_eirp_peak": 60.13, "downlink_pol": "V", "transponder": "3310P2", "dynamic_range": 25, "mode": "ALC", "sfd": -65.75, "eirp_up_density": 77.74273412, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -7}
                ], "country": "Myanmar", "contour_50": -2.2, "contour_eoc": -4.62, "default_gateway": "17H"},
                {"_id": "m5J23kdSkBj9c7gHw", "name": "203", "satellite": "IPSTAR", "uplink_cf": 27.465, "downlink_cf": 12.665, "bandwidth": 171, "type": "forward", "uplink_beam": "3H", "gt_peak": 20.3, "uplink_pol": "H", "downlink_beam": "203", "saturated_eirp_peak": 59.93, "downlink_pol": "V", "transponder": "3310R2", "dynamic_range": 25, "mode": "ALC", "sfd": -62.27, "eirp_up_density": 73.74273412, "full_load_obo": [
                    {"type": "actual", "value": -4.9},
                    {"type": "contract", "value": -7}
                ], "country": "Thailand", "contour_50": -2.2, "contour_eoc": -4.51, "default_gateway": "3H"},
                {"_id": "8Mqb7zAfLzFf3sS9u", "name": "204", "satellite": "IPSTAR", "uplink_cf": 27.275, "downlink_cf": 12.475, "bandwidth": 171, "type": "forward", "uplink_beam": "3H", "gt_peak": 20.3, "uplink_pol": "H", "downlink_beam": "204", "saturated_eirp_peak": 59.53, "downlink_pol": "V", "transponder": "3310R2", "dynamic_range": 25, "mode": "ALC", "sfd": -62.27, "eirp_up_density": 73.74273412, "full_load_obo": [
                    {"type": "actual", "value": -4.9},
                    {"type": "contract", "value": -7}
                ], "country": "Thailand", "contour_50": -2.1, "contour_eoc": -4.43, "default_gateway": "3H"},
                {"_id": "vwgwoh8oxSHzhZ5vk", "name": "205", "satellite": "IPSTAR", "uplink_cf": 29.586, "downlink_cf": 12.286, "bandwidth": 171, "type": "forward", "uplink_beam": "15H", "gt_peak": 21.33, "uplink_pol": "H", "downlink_beam": "205", "saturated_eirp_peak": 59.13, "downlink_pol": "V", "transponder": "3310T1", "dynamic_range": 25, "mode": "ALC", "sfd": -61.07, "eirp_up_density": 73.74273412, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -7}
                ], "country": "Vietnam", "contour_50": -2.2, "contour_eoc": -4.38, "default_gateway": "15H"},
                {"_id": "z33tJQxytn2Zw2BQn", "name": "206", "satellite": "IPSTAR", "uplink_cf": 29.965, "downlink_cf": 12.665, "bandwidth": 171, "type": "forward", "uplink_beam": "15H", "gt_peak": 21.33, "uplink_pol": "H", "downlink_beam": "206", "saturated_eirp_peak": 59.63, "downlink_pol": "V", "transponder": "3310T1", "dynamic_range": 25, "mode": "ALC", "sfd": -61.07, "eirp_up_density": 73.74273412, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -7}
                ], "country": "Vietnam", "contour_50": -2.4, "contour_eoc": -4.75, "default_gateway": "15H"},
                {"_id": "JGpDvdfuzfpoYnG7Q", "name": "207", "satellite": "IPSTAR", "uplink_cf": 27.086, "downlink_cf": 12.286, "bandwidth": 171, "type": "forward", "uplink_beam": "3H", "gt_peak": 20.3, "uplink_pol": "H", "downlink_beam": "207", "saturated_eirp_peak": 59.13, "downlink_pol": "V", "transponder": "3310R2", "dynamic_range": 25, "mode": "ALC", "sfd": -62.27, "eirp_up_density": 73.74273412, "full_load_obo": [
                    {"type": "actual", "value": -4.9},
                    {"type": "contract", "value": -7}
                ], "country": "Thailand", "contour_50": -2.3, "contour_eoc": -4.5, "default_gateway": "3H"},
                {"_id": "5RRpbvYKM6wsWuXwW", "name": "208", "satellite": "IPSTAR", "uplink_cf": 29.965, "downlink_cf": 12.665, "bandwidth": 171, "type": "forward", "uplink_beam": "18H", "gt_peak": 18.96, "uplink_pol": "H", "downlink_beam": "208", "saturated_eirp_peak": 59.83, "downlink_pol": "V", "transponder": "3310P2", "dynamic_range": 25, "mode": "ALC", "sfd": -65.31, "eirp_up_density": 77.74273412, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "Cambodia", "contour_50": -2.4, "contour_eoc": -4.81, "default_gateway": "18H"},
                {"_id": "66uCAgmakwfDoajxS", "name": "209", "satellite": "IPSTAR", "uplink_cf": 29.775, "downlink_cf": 12.475, "bandwidth": 171, "type": "forward", "uplink_beam": "3V", "gt_peak": 22.72, "uplink_pol": "V", "downlink_beam": "209", "saturated_eirp_peak": 59.83, "downlink_pol": "V", "transponder": "3310T1", "dynamic_range": 25, "mode": "ALC", "sfd": -59.74, "eirp_up_density": 74.74273412, "full_load_obo": [
                    {"type": "actual", "value": -4.9},
                    {"type": "contract", "value": -7}
                ], "country": "Thailand", "contour_50": -2.4, "contour_eoc": -4.87, "default_gateway": "3V"},
                {"_id": "GoPyNCqu7dh5ksY45", "name": "210", "satellite": "IPSTAR", "uplink_cf": 27.086, "downlink_cf": 12.286, "bandwidth": 171, "type": "forward", "uplink_beam": "15H", "gt_peak": 21.33, "uplink_pol": "H", "downlink_beam": "210", "saturated_eirp_peak": 60.49, "downlink_pol": "V", "transponder": "3290G1", "dynamic_range": 25, "mode": "ALC", "sfd": -61.07, "eirp_up_density": 72.74273412, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -7}
                ], "country": "Vietnam", "contour_50": -2.3, "contour_eoc": -4.6, "default_gateway": "15H"},
                {"_id": "J2m6hLhryshho9Pvp", "name": "211", "satellite": "IPSTAR", "uplink_cf": 27.275, "downlink_cf": 12.475, "bandwidth": 171, "type": "forward", "uplink_beam": "15H", "gt_peak": 21.33, "uplink_pol": "H", "downlink_beam": "211", "saturated_eirp_peak": 60.69, "downlink_pol": "V", "transponder": "3290G1", "dynamic_range": 25, "mode": "ALC", "sfd": -61.07, "eirp_up_density": 72.74273412, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -7}
                ], "country": "Vietnam", "contour_50": -2.2, "contour_eoc": -4.53, "default_gateway": "15H"},
                {"_id": "jXnhuhhYWbukjaDys", "name": "213", "satellite": "IPSTAR", "uplink_cf": 27.275, "downlink_cf": 12.475, "bandwidth": 171, "type": "forward", "uplink_beam": "13H", "gt_peak": 21.22, "uplink_pol": "H", "downlink_beam": "213", "saturated_eirp_peak": 59.03, "downlink_pol": "V", "transponder": "3310R1", "dynamic_range": 25, "mode": "ALC", "sfd": -61.29, "eirp_up_density": 73.74273412, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "Malaysia", "contour_50": -2.5, "contour_eoc": -4.9, "default_gateway": "13H"},
                {"_id": "w8kCJnfuoqPPK9nyg", "name": "214", "satellite": "IPSTAR", "uplink_cf": 27.086, "downlink_cf": 12.286, "bandwidth": 171, "type": "forward", "uplink_beam": "13H", "gt_peak": 21.22, "uplink_pol": "H", "downlink_beam": "214", "saturated_eirp_peak": 59.23, "downlink_pol": "V", "transponder": "3310R1", "dynamic_range": 25, "mode": "ALC", "sfd": -61.29, "eirp_up_density": 73.74273412, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "Malaysia", "contour_50": -2.3, "contour_eoc": -4.47, "default_gateway": "13H"},
                {"_id": "byBQ2C6GKWhxWZHc5", "name": "215", "satellite": "IPSTAR", "uplink_cf": 29.586, "downlink_cf": 12.286, "bandwidth": 171, "type": "forward", "uplink_beam": "13H", "gt_peak": 21.22, "uplink_pol": "H", "downlink_beam": "215", "saturated_eirp_peak": 58.53, "downlink_pol": "V", "transponder": "3310T2", "dynamic_range": 25, "mode": "ALC", "sfd": -61.29, "eirp_up_density": 74.74273412, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "Malaysia", "contour_50": -2.1, "contour_eoc": -4.29, "default_gateway": "13H"},
                {"_id": "c89K8u6hN4rbucDHm", "name": "216", "satellite": "IPSTAR", "uplink_cf": 29.965, "downlink_cf": 12.665, "bandwidth": 171, "type": "forward", "uplink_beam": "13H", "gt_peak": 21.22, "uplink_pol": "H", "downlink_beam": "216", "saturated_eirp_peak": 58.93, "downlink_pol": "V", "transponder": "3310T2", "dynamic_range": 25, "mode": "ALC", "sfd": -61.29, "eirp_up_density": 74.74273412, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "Malaysia", "contour_50": -2.3, "contour_eoc": -4.64, "default_gateway": "13H"},
                {"_id": "cy84FxzC4P994E5dg", "name": "217", "satellite": "IPSTAR", "uplink_cf": 29.775, "downlink_cf": 12.475, "bandwidth": 171, "type": "forward", "uplink_beam": "13H", "gt_peak": 21.22, "uplink_pol": "H", "downlink_beam": "217", "saturated_eirp_peak": 58.53, "downlink_pol": "V", "transponder": "3310T2", "dynamic_range": 25, "mode": "ALC", "sfd": -61.29, "eirp_up_density": 74.74273412, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "Malaysia", "contour_50": -2.2, "contour_eoc": -4.35, "default_gateway": "13H"},
                {"_id": "rCTutTceR5AphHyA9", "name": "301", "satellite": "IPSTAR", "uplink_cf": 29.775, "downlink_cf": 12.475, "bandwidth": 171, "type": "forward", "uplink_beam": "4H", "gt_peak": 18.68, "uplink_pol": "H", "downlink_beam": "301", "saturated_eirp_peak": 59.53, "downlink_pol": "V", "transponder": "3310A1", "dynamic_range": 25, "mode": "ALC", "sfd": -63.7, "eirp_up_density": 74.74273412, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "China", "contour_50": -2.3, "contour_eoc": -4.52, "default_gateway": "4H"},
                {"_id": "WD7FmydARtNFWuwZj", "name": "302", "satellite": "IPSTAR", "uplink_cf": 29.965, "downlink_cf": 12.665, "bandwidth": 171, "type": "forward", "uplink_beam": "4H", "gt_peak": 18.68, "uplink_pol": "H", "downlink_beam": "302", "saturated_eirp_peak": 59.43, "downlink_pol": "V", "transponder": "3310A1", "dynamic_range": 25, "mode": "ALC", "sfd": -63.7, "eirp_up_density": 74.74273412, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "China", "contour_50": -2.4, "contour_eoc": -4.91, "default_gateway": "4H"},
                {"_id": "Shsi76k7DjrBrJyiL", "name": "303", "satellite": "IPSTAR", "uplink_cf": 29.586, "downlink_cf": 12.286, "bandwidth": 171, "type": "forward", "uplink_beam": "4H", "gt_peak": 18.68, "uplink_pol": "H", "downlink_beam": "303", "saturated_eirp_peak": 59.53, "downlink_pol": "V", "transponder": "3310A1", "dynamic_range": 25, "mode": "ALC", "sfd": -63.7, "eirp_up_density": 74.74273412, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "China", "contour_50": -2, "contour_eoc": -4.2, "default_gateway": "4H"},
                {"_id": "DQHp7HvAEAxCT592F", "name": "304", "satellite": "IPSTAR", "uplink_cf": 29.775, "downlink_cf": 12.475, "bandwidth": 171, "type": "forward", "uplink_beam": "4V", "gt_peak": 19.3, "uplink_pol": "V", "downlink_beam": "304", "saturated_eirp_peak": 59.73, "downlink_pol": "V", "transponder": "3310A2", "dynamic_range": 25, "mode": "ALC", "sfd": -63.64, "eirp_up_density": 74.74273412, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "China", "contour_50": -2.1, "contour_eoc": -4.45, "default_gateway": "4V"},
                {"_id": "Lq6RxrDeSri8EcnCo", "name": "305", "satellite": "IPSTAR", "uplink_cf": 29.965, "downlink_cf": 12.665, "bandwidth": 171, "type": "forward", "uplink_beam": "4V", "gt_peak": 19.3, "uplink_pol": "V", "downlink_beam": "305", "saturated_eirp_peak": 59.73, "downlink_pol": "V", "transponder": "3310A2", "dynamic_range": 25, "mode": "ALC", "sfd": -63.64, "eirp_up_density": 74.74273412, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "China", "contour_50": -2.3, "contour_eoc": -4.67, "default_gateway": "4V"},
                {"_id": "F6vgom3zKHkrq9ieF", "name": "306", "satellite": "IPSTAR", "uplink_cf": 27.275, "downlink_cf": 12.475, "bandwidth": 171, "type": "forward", "uplink_beam": "4H", "gt_peak": 18.68, "uplink_pol": "H", "downlink_beam": "306", "saturated_eirp_peak": 60.13, "downlink_pol": "V", "transponder": "3310B1", "dynamic_range": 25, "mode": "ALC", "sfd": -63.7, "eirp_up_density": 73.74273412, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "China", "contour_50": -2.3, "contour_eoc": -4.69, "default_gateway": "4H"},
                {"_id": "MaybsjoFNKtWZAMTW", "name": "307", "satellite": "IPSTAR", "uplink_cf": 27.465, "downlink_cf": 12.665, "bandwidth": 171, "type": "forward", "uplink_beam": "4H", "gt_peak": 18.68, "uplink_pol": "H", "downlink_beam": "307", "saturated_eirp_peak": 59.33, "downlink_pol": "V", "transponder": "3310B1", "dynamic_range": 25, "mode": "ALC", "sfd": -63.7, "eirp_up_density": 73.74273412, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "China", "contour_50": -2.3, "contour_eoc": -4.7, "default_gateway": "4H"},
                {"_id": "vNg9nQfyWt3KdbJfg", "name": "308", "satellite": "IPSTAR", "uplink_cf": 29.586, "downlink_cf": 12.286, "bandwidth": 171, "type": "forward", "uplink_beam": "4V", "gt_peak": 19.3, "uplink_pol": "V", "downlink_beam": "308", "saturated_eirp_peak": 59.33, "downlink_pol": "V", "transponder": "3310A2", "dynamic_range": 25, "mode": "ALC", "sfd": -63.64, "eirp_up_density": 74.74273412, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "China", "contour_50": -2.2, "contour_eoc": -4.47, "default_gateway": "4V"},
                {"_id": "5j8N4grffSmSXxevN", "name": "309", "satellite": "IPSTAR", "uplink_cf": 27.275, "downlink_cf": 12.475, "bandwidth": 171, "type": "forward", "uplink_beam": "5H", "gt_peak": 21.75, "uplink_pol": "H", "downlink_beam": "309", "saturated_eirp_peak": 59.93, "downlink_pol": "V", "transponder": "3310D2", "dynamic_range": 25, "mode": "ALC", "sfd": -60.81, "eirp_up_density": 70.74273412, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "China", "contour_50": -2.2, "contour_eoc": -4.52, "default_gateway": "5H"},
                {"_id": "wKWX8eDXAX6cfyhRu", "name": "310", "satellite": "IPSTAR", "uplink_cf": 29.965, "downlink_cf": 12.665, "bandwidth": 171, "type": "forward", "uplink_beam": "5V", "gt_peak": 21.68, "uplink_pol": "V", "downlink_beam": "310", "saturated_eirp_peak": 60.03, "downlink_pol": "V", "transponder": "3310C1", "dynamic_range": 25, "mode": "ALC", "sfd": -61.4, "eirp_up_density": 71.74273412, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "China", "contour_50": -2.6, "contour_eoc": -5.15, "default_gateway": "5V"},
                {"_id": "iKtRjhohtQwe4MzR3", "name": "311", "satellite": "IPSTAR", "uplink_cf": 27.086, "downlink_cf": 12.286, "bandwidth": 171, "type": "forward", "uplink_beam": "4H", "gt_peak": 18.68, "uplink_pol": "H", "downlink_beam": "311", "saturated_eirp_peak": 59.83, "downlink_pol": "V", "transponder": "3310B1", "dynamic_range": 25, "mode": "ALC", "sfd": -63.7, "eirp_up_density": 73.74273412, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "China", "contour_50": -2.1, "contour_eoc": -4.31, "default_gateway": "4H"},
                {"_id": "nmBWSeckDvrQAtGuE", "name": "312", "satellite": "IPSTAR", "uplink_cf": 27.275, "downlink_cf": 12.475, "bandwidth": 171, "type": "forward", "uplink_beam": "10V", "gt_peak": 20.8, "uplink_pol": "V", "downlink_beam": "312", "saturated_eirp_peak": 59.73, "downlink_pol": "V", "transponder": "3310B2", "dynamic_range": 25, "mode": "ALC", "sfd": -61.53, "eirp_up_density": 73.74273412, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "China", "contour_50": -2.2, "contour_eoc": -4.55, "default_gateway": "10V"},
                {"_id": "r87gy4L7wnDDhhBEw", "name": "313", "satellite": "IPSTAR", "uplink_cf": 27.465, "downlink_cf": 12.665, "bandwidth": 171, "type": "forward", "uplink_beam": "10V", "gt_peak": 20.8, "uplink_pol": "V", "downlink_beam": "313", "saturated_eirp_peak": 60.03, "downlink_pol": "V", "transponder": "3310B2", "dynamic_range": 25, "mode": "ALC", "sfd": -61.53, "eirp_up_density": 73.74273412, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "China", "contour_50": -2.4, "contour_eoc": -4.95, "default_gateway": "10V"},
                {"_id": "5q9HsKFEoCiaXbNGJ", "name": "314", "satellite": "IPSTAR", "uplink_cf": 27.465, "downlink_cf": 12.665, "bandwidth": 171, "type": "forward", "uplink_beam": "5H", "gt_peak": 21.75, "uplink_pol": "H", "downlink_beam": "314", "saturated_eirp_peak": 60.23, "downlink_pol": "V", "transponder": "3310D2", "dynamic_range": 25, "mode": "ALC", "sfd": -60.81, "eirp_up_density": 70.74273412, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "China", "contour_50": -2.3, "contour_eoc": -4.71, "default_gateway": "5H"},
                {"_id": "JfLWRyg8oNbwGKC7F", "name": "315", "satellite": "IPSTAR", "uplink_cf": 27.086, "downlink_cf": 12.286, "bandwidth": 171, "type": "forward", "uplink_beam": "5H", "gt_peak": 21.75, "uplink_pol": "H", "downlink_beam": "315", "saturated_eirp_peak": 59.93, "downlink_pol": "V", "transponder": "3310D2", "dynamic_range": 25, "mode": "ALC", "sfd": -60.81, "eirp_up_density": 70.74273412, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "China", "contour_50": -2, "contour_eoc": -4.12, "default_gateway": "5H"},
                {"_id": "2xcmDEizHDpHA9B4e", "name": "316", "satellite": "IPSTAR", "uplink_cf": 29.775, "downlink_cf": 12.475, "bandwidth": 171, "type": "forward", "uplink_beam": "5V", "gt_peak": 21.68, "uplink_pol": "V", "downlink_beam": "316", "saturated_eirp_peak": 60.13, "downlink_pol": "V", "transponder": "3310C1", "dynamic_range": 25, "mode": "ALC", "sfd": -61.4, "eirp_up_density": 71.74273412, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "China", "contour_50": -2.5, "contour_eoc": -4.94, "default_gateway": "5V"},
                {"_id": "jPGctjL8qzYQuvFDf", "name": "317", "satellite": "IPSTAR", "uplink_cf": 29.965, "downlink_cf": 12.665, "bandwidth": 171, "type": "forward", "uplink_beam": "10V", "gt_peak": 20.8, "uplink_pol": "V", "downlink_beam": "317", "saturated_eirp_peak": 60.53, "downlink_pol": "V", "transponder": "3310D1", "dynamic_range": 25, "mode": "ALC", "sfd": -61.53, "eirp_up_density": 74.74273412, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "China", "contour_50": -2.5, "contour_eoc": -4.97, "default_gateway": "10V"},
                {"_id": "GrBq9ZCfRA5Mbfx7i", "name": "318", "satellite": "IPSTAR", "uplink_cf": 29.586, "downlink_cf": 12.286, "bandwidth": 171, "type": "forward", "uplink_beam": "10V", "gt_peak": 20.8, "uplink_pol": "V", "downlink_beam": "318", "saturated_eirp_peak": 59.83, "downlink_pol": "V", "transponder": "3310D1", "dynamic_range": 25, "mode": "ALC", "sfd": -61.53, "eirp_up_density": 74.74273412, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "China", "contour_50": -2.2, "contour_eoc": -4.36, "default_gateway": "10V"},
                {"_id": "5CA3q3nJA5EXTT8TC", "name": "319", "satellite": "IPSTAR", "uplink_cf": 27.465, "downlink_cf": 12.665, "bandwidth": 171, "type": "forward", "uplink_beam": "5V", "gt_peak": 21.68, "uplink_pol": "V", "downlink_beam": "319", "saturated_eirp_peak": 60.39, "downlink_pol": "V", "transponder": "3290A1", "dynamic_range": 25, "mode": "ALC", "sfd": -61.4, "eirp_up_density": 70.74273412, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "China", "contour_50": -2.1, "contour_eoc": -4.43, "default_gateway": "5V"},
                {"_id": "erdiZectWQ4gJzeya", "name": "320", "satellite": "IPSTAR", "uplink_cf": 29.586, "downlink_cf": 12.286, "bandwidth": 171, "type": "forward", "uplink_beam": "5V", "gt_peak": 21.68, "uplink_pol": "V", "downlink_beam": "320", "saturated_eirp_peak": 59.53, "downlink_pol": "V", "transponder": "3310C1", "dynamic_range": 25, "mode": "ALC", "sfd": -61.4, "eirp_up_density": 71.74273412, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "China", "contour_50": -2.2, "contour_eoc": -4.4, "default_gateway": "5V"},
                {"_id": "ntSa3Fye78ajXWLYb", "name": "321", "satellite": "IPSTAR", "uplink_cf": 29.775, "downlink_cf": 12.475, "bandwidth": 171, "type": "forward", "uplink_beam": "10V", "gt_peak": 20.8, "uplink_pol": "V", "downlink_beam": "321", "saturated_eirp_peak": 60.13, "downlink_pol": "V", "transponder": "3310D1", "dynamic_range": 25, "mode": "ALC", "sfd": -61.53, "eirp_up_density": 74.74273412, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "China", "contour_50": -2.2, "contour_eoc": -4.48, "default_gateway": "10V"},
                {"_id": "iFgx3gTGr4aE9CF22", "name": "322", "satellite": "IPSTAR", "uplink_cf": 29.965, "downlink_cf": 12.665, "bandwidth": 171, "type": "forward", "uplink_beam": "14H", "gt_peak": 21.4, "uplink_pol": "H", "downlink_beam": "322", "saturated_eirp_peak": 60.39, "downlink_pol": "V", "transponder": "32900", "dynamic_range": 25, "mode": "ALC", "sfd": -61.24, "eirp_up_density": 74.74273412, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "Taiwan", "contour_50": -2.5, "contour_eoc": -5.11, "default_gateway": "14H"},
                {"_id": "9iwKxfevww8d6H5EJ", "name": "323", "satellite": "IPSTAR", "uplink_cf": 27.275, "downlink_cf": 12.475, "bandwidth": 171, "type": "forward", "uplink_beam": "5V", "gt_peak": 21.68, "uplink_pol": "V", "downlink_beam": "323", "saturated_eirp_peak": 60.39, "downlink_pol": "V", "transponder": "3290A1", "dynamic_range": 25, "mode": "ALC", "sfd": -61.4, "eirp_up_density": 70.74273412, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "China", "contour_50": -2.4, "contour_eoc": -4.75, "default_gateway": "5V"},
                {"_id": "TpcDbXx3QweqH8Nrs", "name": "328", "satellite": "IPSTAR", "uplink_cf": 28.475, "downlink_cf": 11.075, "bandwidth": 250, "type": "forward", "uplink_beam": "10V", "gt_peak": 20.8, "uplink_pol": "V", "downlink_beam": "328", "saturated_eirp_peak": 54.16, "downlink_pol": "H", "transponder": "3300A1", "dynamic_range": 25, "mode": "ALC", "sfd": -59.88, "eirp_up_density": 75.8921731, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -4}
                ], "country": "China", "contour_50": -1.3, "contour_eoc": -2.66, "default_gateway": "10V"},
                {"_id": "XhyC4SzjkBKfxEtXT", "name": "401", "satellite": "IPSTAR", "uplink_cf": 27.419, "downlink_cf": 12.619, "bandwidth": 262.5, "type": "forward", "uplink_beam": "7V", "gt_peak": 20.04, "uplink_pol": "V", "downlink_beam": "401", "saturated_eirp_peak": 60.79, "downlink_pol": "V", "transponder": "3310F1", "dynamic_range": 25, "mode": "ALC", "sfd": -60.69, "eirp_up_density": 75.60406609, "full_load_obo": [
                    {"type": "actual", "value": -4.5},
                    {"type": "contract", "value": -4.5}
                ], "country": "Japan", "contour_50": -2.5, "contour_eoc": -4.63, "default_gateway": "7V"},
                {"_id": "b4AeapuHgtfsBW9EP", "name": "402", "satellite": "IPSTAR", "uplink_cf": 29.631, "downlink_cf": 12.331, "bandwidth": 262.5, "type": "forward", "uplink_beam": "7V", "gt_peak": 20.04, "uplink_pol": "V", "downlink_beam": "402", "saturated_eirp_peak": 60.69, "downlink_pol": "V", "transponder": "331000", "dynamic_range": 25, "mode": "ALC", "sfd": -60.69, "eirp_up_density": 76.60406609, "full_load_obo": [
                    {"type": "actual", "value": -4.5},
                    {"type": "contract", "value": -4.5}
                ], "country": "Japan", "contour_50": -2.2, "contour_eoc": -4.31, "default_gateway": "7V"},
                {"_id": "FEk5PYeTWG58FcRLm", "name": "403", "satellite": "IPSTAR", "uplink_cf": 29.919, "downlink_cf": 12.619, "bandwidth": 262.5, "type": "forward", "uplink_beam": "7V", "gt_peak": 20.04, "uplink_pol": "V", "downlink_beam": "403", "saturated_eirp_peak": 63, "downlink_pol": "V", "transponder": "3290C1", "dynamic_range": 25, "mode": "ALC", "sfd": -60.69, "eirp_up_density": 76.60406609, "full_load_obo": [
                    {"type": "actual", "value": -6},
                    {"type": "contract", "value": -4.5}
                ], "country": "Japan", "contour_50": -2.4, "contour_eoc": -4.53, "default_gateway": "7V"},
                {"_id": "fLjehMeuvxwxbJSuR", "name": "404", "satellite": "IPSTAR", "uplink_cf": 27.131, "downlink_cf": 12.331, "bandwidth": 262.5, "type": "forward", "uplink_beam": "7V", "gt_peak": 20.04, "uplink_pol": "V", "downlink_beam": "404", "saturated_eirp_peak": 60.99, "downlink_pol": "V", "transponder": "3310F1", "dynamic_range": 25, "mode": "ALC", "sfd": -60.69, "eirp_up_density": 75.60406609, "full_load_obo": [
                    {"type": "actual", "value": -4.5},
                    {"type": "contract", "value": -4.5}
                ], "country": "Japan", "contour_50": -2.1, "contour_eoc": -4.24, "default_gateway": "7V"},
                {"_id": "hkqYFhRTvvjmQv5oj", "name": "405", "satellite": "IPSTAR", "uplink_cf": 29.919, "downlink_cf": 12.619, "bandwidth": 262.5, "type": "forward", "uplink_beam": "11H", "gt_peak": 20.4, "uplink_pol": "H", "downlink_beam": "405", "saturated_eirp_peak": 61.69, "downlink_pol": "V", "transponder": "331000", "dynamic_range": 25, "mode": "ALC", "sfd": -60.62, "eirp_up_density": 75.60406609, "full_load_obo": [
                    {"type": "actual", "value": -4.5},
                    {"type": "contract", "value": -4.5}
                ], "country": "South Korea", "contour_50": -2.7, "contour_eoc": -5.01, "default_gateway": "11H"},
                {"_id": "4BGs7duHSXzJRzAg9", "name": "406", "satellite": "IPSTAR", "uplink_cf": 27.086, "downlink_cf": 12.286, "bandwidth": 171, "type": "forward", "uplink_beam": "10V", "gt_peak": 20.8, "uplink_pol": "V", "downlink_beam": "406", "saturated_eirp_peak": 59.33, "downlink_pol": "V", "transponder": "3310B2", "dynamic_range": 25, "mode": "ALC", "sfd": -61.53, "eirp_up_density": 73.74273412, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "China", "contour_50": -2.4, "contour_eoc": -4.77, "default_gateway": "10V"},
                {"_id": "Fj8dYoeWbYi9B5cXt", "name": "501", "satellite": "IPSTAR", "uplink_cf": 29.919, "downlink_cf": 12.619, "bandwidth": 262.5, "type": "forward", "uplink_beam": "8V", "gt_peak": 18.54, "uplink_pol": "V", "downlink_beam": "501", "saturated_eirp_peak": 60.63, "downlink_pol": "V", "transponder": "3310F2", "dynamic_range": 25, "mode": "ALC", "sfd": -61.41, "eirp_up_density": 70.60406609, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "Australia", "contour_50": -2.5, "contour_eoc": -4.99, "default_gateway": "8V"},
                {"_id": "9NkNeh8GgPqX5qH4B", "name": "502", "satellite": "IPSTAR", "uplink_cf": 27.419, "downlink_cf": 12.619, "bandwidth": 262.5, "type": "forward", "uplink_beam": "8H", "gt_peak": 18.84, "uplink_pol": "H", "downlink_beam": "502", "saturated_eirp_peak": 60.82, "downlink_pol": "V", "transponder": "3310G1", "dynamic_range": 25, "mode": "ALC", "sfd": -61.31, "eirp_up_density": 69.60406609, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "Australia", "contour_50": -2.3, "contour_eoc": -4.44, "default_gateway": "8H"},
                {"_id": "36EEMmrPy5RY4QBZP", "name": "503", "satellite": "IPSTAR", "uplink_cf": 29.631, "downlink_cf": 12.331, "bandwidth": 262.5, "type": "forward", "uplink_beam": "8V", "gt_peak": 18.54, "uplink_pol": "V", "downlink_beam": "503", "saturated_eirp_peak": 61.18, "downlink_pol": "V", "transponder": "3310F2", "dynamic_range": 25, "mode": "ALC", "sfd": -61.41, "eirp_up_density": 70.60406609, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "Australia", "contour_50": -1.9, "contour_eoc": -3.99, "default_gateway": "8V"},
                {"_id": "2bkddXwn5zHkoKNxf", "name": "504", "satellite": "IPSTAR", "uplink_cf": 29.919, "downlink_cf": 12.619, "bandwidth": 262.5, "type": "forward", "uplink_beam": "8H", "gt_peak": 18.84, "uplink_pol": "H", "downlink_beam": "504", "saturated_eirp_peak": 61.16, "downlink_pol": "V", "transponder": "3310G2", "dynamic_range": 25, "mode": "ALC", "sfd": -61.31, "eirp_up_density": 70.60406609, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "Australia", "contour_50": -2.2, "contour_eoc": -4.52, "default_gateway": "8H"},
                {"_id": "h293aKjAk5vF2raZc", "name": "505", "satellite": "IPSTAR", "uplink_cf": 27.131, "downlink_cf": 12.331, "bandwidth": 262.5, "type": "forward", "uplink_beam": "8H", "gt_peak": 18.84, "uplink_pol": "H", "downlink_beam": "505", "saturated_eirp_peak": 61.35, "downlink_pol": "V", "transponder": "3310G1", "dynamic_range": 25, "mode": "ALC", "sfd": -61.31, "eirp_up_density": 69.60406609, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "Australia", "contour_50": -2.1, "contour_eoc": -4.32, "default_gateway": "8H"},
                {"_id": "2t7rdHrCf7rj2z6wQ", "name": "506", "satellite": "IPSTAR", "uplink_cf": 27.419, "downlink_cf": 12.619, "bandwidth": 262.5, "type": "forward", "uplink_beam": "9V", "gt_peak": 19.36, "uplink_pol": "V", "downlink_beam": "506", "saturated_eirp_peak": 61.58, "downlink_pol": "V", "transponder": "3310J1", "dynamic_range": 25, "mode": "ALC", "sfd": -62.74, "eirp_up_density": 71.60406609, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "Australia", "contour_50": -2.4, "contour_eoc": -4.95, "default_gateway": "9V"},
                {"_id": "FrGGnoQXTeRnE7oHi", "name": "507", "satellite": "IPSTAR", "uplink_cf": 29.631, "downlink_cf": 12.331, "bandwidth": 262.5, "type": "forward", "uplink_beam": "8H", "gt_peak": 18.84, "uplink_pol": "H", "downlink_beam": "507", "saturated_eirp_peak": 61.59, "downlink_pol": "V", "transponder": "3310G2", "dynamic_range": 25, "mode": "ALC", "sfd": -61.31, "eirp_up_density": 70.60406609, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "Australia", "contour_50": -2.2, "contour_eoc": -4.45, "default_gateway": "8H"},
                {"_id": "AjudaZHkbnzP6niaH", "name": "508", "satellite": "IPSTAR", "uplink_cf": 29.919, "downlink_cf": 12.619, "bandwidth": 262.5, "type": "forward", "uplink_beam": "9V", "gt_peak": 19.36, "uplink_pol": "V", "downlink_beam": "508", "saturated_eirp_peak": 61.53, "downlink_pol": "V", "transponder": "3310J2", "dynamic_range": 25, "mode": "ALC", "sfd": -62.74, "eirp_up_density": 72.60406609, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "Australia", "contour_50": -2.4, "contour_eoc": -4.92, "default_gateway": "9V"},
                {"_id": "kTsRioE6eL6cB8m8E", "name": "509", "satellite": "IPSTAR", "uplink_cf": 27.131, "downlink_cf": 12.331, "bandwidth": 262.5, "type": "forward", "uplink_beam": "9V", "gt_peak": 19.36, "uplink_pol": "V", "downlink_beam": "509", "saturated_eirp_peak": 61.34, "downlink_pol": "V", "transponder": "3310J1", "dynamic_range": 25, "mode": "ALC", "sfd": -62.74, "eirp_up_density": 71.60406609, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "Australia", "contour_50": -2.1, "contour_eoc": -4.27, "default_gateway": "9V"},
                {"_id": "3cuJgtXRGhnTWomwR", "name": "510", "satellite": "IPSTAR", "uplink_cf": 29.631, "downlink_cf": 12.331, "bandwidth": 262.5, "type": "forward", "uplink_beam": "9V", "gt_peak": 19.36, "uplink_pol": "V", "downlink_beam": "510", "saturated_eirp_peak": 60.5, "downlink_pol": "V", "transponder": "3310J2", "dynamic_range": 25, "mode": "ALC", "sfd": -62.74, "eirp_up_density": 72.60406609, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "Australia", "contour_50": -2.1, "contour_eoc": -4.28, "default_gateway": "9V"},
                {"_id": "WWLuSEkCEYvRtC55N", "name": "514", "satellite": "IPSTAR", "uplink_cf": 28.475, "downlink_cf": 11.075, "bandwidth": 250, "type": "forward", "uplink_beam": "8V", "gt_peak": 18.5, "uplink_pol": "V", "downlink_beam": "514", "saturated_eirp_peak": 54.13, "downlink_pol": "V", "transponder": "3320A1", "dynamic_range": 25, "mode": "ALC", "sfd": -61.66, "eirp_up_density": 74.8921731, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -4}
                ], "country": "Australia", "contour_50": -1.2, "contour_eoc": -2.53, "default_gateway": "8V"},
                {"_id": "AqXLRR9kbX2e6u3yN", "name": "601", "satellite": "IPSTAR", "uplink_cf": 27.275, "downlink_cf": 12.475, "bandwidth": 171, "type": "forward", "uplink_beam": "6V", "gt_peak": 21.72, "uplink_pol": "V", "downlink_beam": "601", "saturated_eirp_peak": 59.03, "downlink_pol": "V", "transponder": "3310V1", "dynamic_range": 25, "mode": "ALC", "sfd": -61.16, "eirp_up_density": 73.74273412, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "Indonesia", "contour_50": -2.3, "contour_eoc": -4.61, "default_gateway": "6V"},
                {"_id": "cyrt7332h3H2BjipR", "name": "602", "satellite": "IPSTAR", "uplink_cf": 27.465, "downlink_cf": 12.665, "bandwidth": 171, "type": "forward", "uplink_beam": "6V", "gt_peak": 21.72, "uplink_pol": "V", "downlink_beam": "602", "saturated_eirp_peak": 58.83, "downlink_pol": "V", "transponder": "3310V1", "dynamic_range": 25, "mode": "ALC", "sfd": -61.16, "eirp_up_density": 73.74273412, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "Indonesia", "contour_50": -2.3, "contour_eoc": -4.64, "default_gateway": "6V"},
                {"_id": "eixmCKZG9gxW6G7w2", "name": "603", "satellite": "IPSTAR", "uplink_cf": 27.086, "downlink_cf": 12.286, "bandwidth": 171, "type": "forward", "uplink_beam": "6V", "gt_peak": 21.72, "uplink_pol": "V", "downlink_beam": "603", "saturated_eirp_peak": 58.43, "downlink_pol": "V", "transponder": "3310V1", "dynamic_range": 25, "mode": "ALC", "sfd": -61.16, "eirp_up_density": 73.74273412, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "Indonesia", "contour_50": -2.2, "contour_eoc": -4.33, "default_gateway": "6V"},
                {"_id": "YAaufd3Y62RxpwCdd", "name": "604", "satellite": "IPSTAR", "uplink_cf": 29.775, "downlink_cf": 12.475, "bandwidth": 171, "type": "forward", "uplink_beam": "6V", "gt_peak": 21.72, "uplink_pol": "V", "downlink_beam": "604", "saturated_eirp_peak": 58.23, "downlink_pol": "V", "transponder": "3310V2", "dynamic_range": 25, "mode": "ALC", "sfd": -61.16, "eirp_up_density": 74.74273412, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "Indonesia", "contour_50": -2.2, "contour_eoc": -4.45, "default_gateway": "6V"},
                {"_id": "ddob79KK4kWriHSAH", "name": "605", "satellite": "IPSTAR", "uplink_cf": 29.965, "downlink_cf": 12.665, "bandwidth": 171, "type": "forward", "uplink_beam": "6V", "gt_peak": 21.72, "uplink_pol": "V", "downlink_beam": "605", "saturated_eirp_peak": 58.53, "downlink_pol": "V", "transponder": "3310V2", "dynamic_range": 25, "mode": "ALC", "sfd": -61.16, "eirp_up_density": 74.74273412, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "Indonesia", "contour_50": -2.3, "contour_eoc": -4.5, "default_gateway": "6V"},
                {"_id": "5hGiJwua35iXQSyMD", "name": "606", "satellite": "IPSTAR", "uplink_cf": 29.586, "downlink_cf": 12.286, "bandwidth": 171, "type": "forward", "uplink_beam": "6V", "gt_peak": 21.72, "uplink_pol": "V", "downlink_beam": "606", "saturated_eirp_peak": 57.53, "downlink_pol": "V", "transponder": "3310K1", "dynamic_range": 25, "mode": "ALC", "sfd": -61.16, "eirp_up_density": 77.74273412, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "Indonesia", "contour_50": -2.2, "contour_eoc": -4.31, "default_gateway": "6V"},
                {"_id": "ut4oAzpgQgWNGiz3h", "name": "608", "satellite": "IPSTAR", "uplink_cf": 28.475, "downlink_cf": 11.075, "bandwidth": 250, "type": "forward", "uplink_beam": "6V", "gt_peak": 21.72, "uplink_pol": "V", "downlink_beam": "608", "saturated_eirp_peak": 50.6, "downlink_pol": "H", "transponder": "3310K1", "dynamic_range": 25, "mode": "ALC", "sfd": -59.51, "eirp_up_density": 79.3921731, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -3.5}
                ], "country": "Indonesia", "contour_50": -1, "contour_eoc": -1.8, "default_gateway": "6V"},
                {"_id": "r2XHgaQgbv47cDx6H", "name": "701", "satellite": "IPSTAR", "uplink_cf": 27.275, "downlink_cf": 12.475, "bandwidth": 171, "type": "forward", "uplink_beam": "12V", "gt_peak": 21.97, "uplink_pol": "V", "downlink_beam": "701", "saturated_eirp_peak": 63.3, "downlink_pol": "V", "transponder": "3310K1", "dynamic_range": 25, "mode": "ALC", "sfd": -60.53, "eirp_up_density": 77.74273412, "full_load_obo": [
                    {"type": "actual", "value": -6},
                    {"type": "contract", "value": -6}
                ], "country": "Philippines", "contour_50": -2.5, "contour_eoc": -4.91, "default_gateway": "12V"},
                {"_id": "pfmyhrkCGKJngdwxL", "name": "702", "satellite": "IPSTAR", "uplink_cf": 27.465, "downlink_cf": 12.665, "bandwidth": 171, "type": "forward", "uplink_beam": "12V", "gt_peak": 21.97, "uplink_pol": "V", "downlink_beam": "702", "saturated_eirp_peak": 62.29, "downlink_pol": "V", "transponder": "3310K1", "dynamic_range": 25, "mode": "ALC", "sfd": -60.53, "eirp_up_density": 77.74273412, "full_load_obo": [
                    {"type": "actual", "value": -6},
                    {"type": "contract", "value": -6}
                ], "country": "Philippines", "contour_50": -2.6, "contour_eoc": -4.93, "default_gateway": "12V"},
                {"_id": "K5H7aq3EzFt8wmZ2L", "name": "703", "satellite": "IPSTAR", "uplink_cf": 27.086, "downlink_cf": 12.286, "bandwidth": 171, "type": "forward", "uplink_beam": "12V", "gt_peak": 21.97, "uplink_pol": "V", "downlink_beam": "703", "saturated_eirp_peak": 61.19, "downlink_pol": "V", "transponder": "3310K1", "dynamic_range": 25, "mode": "ALC", "sfd": -60.53, "eirp_up_density": 77.74273412, "full_load_obo": [
                    {"type": "actual", "value": -6},
                    {"type": "contract", "value": -6}
                ], "country": "Philippines", "contour_50": -2.1, "contour_eoc": -4.22, "default_gateway": "12V"},
                {"_id": "Eq763LWSQsoZe7LRk", "name": "112-2", "satellite": "IPSTAR", "uplink_cf": 28.475, "downlink_cf": 11.075, "bandwidth": 250, "type": "forward", "uplink_beam": "2V", "gt_peak": 19.08, "uplink_pol": "V", "downlink_beam": "112-2", "saturated_eirp_peak": 60.9, "downlink_pol": "V", "transponder": "3280K1", "dynamic_range": 25, "mode": "ALC", "sfd": -61.01, "eirp_up_density": 75.8921731, "full_load_obo": [
                    {"type": "actual", "value": -6},
                    {"type": "contract", "value": -6}
                ], "country": "India", "contour_50": -1.8, "contour_eoc": -3.58, "default_gateway": "2V"},
                {"_id": "nWWATYE9KvuSL5Hod", "name": "207-2", "satellite": "IPSTAR", "uplink_cf": 28.475, "downlink_cf": 11.075, "bandwidth": 250, "type": "forward", "uplink_beam": "3V", "gt_peak": 22.72, "uplink_pol": "V", "downlink_beam": "207-2", "saturated_eirp_peak": 61.6, "downlink_pol": "V", "transponder": "3280H1", "dynamic_range": 25, "mode": "ALC", "sfd": -58.09, "eirp_up_density": 75.8921731, "full_load_obo": [
                    {"type": "actual", "value": -4.4},
                    {"type": "contract", "value": -6}
                ], "country": "Thailand", "contour_50": -2, "contour_eoc": -3.86, "default_gateway": "3V"},
                {"_id": "hGcARw6474E96XRhG", "name": "212-13H", "satellite": "IPSTAR", "uplink_cf": 27.465, "downlink_cf": 12.665, "bandwidth": 171, "type": "forward", "uplink_beam": "13H", "gt_peak": 18.2, "uplink_pol": "H", "downlink_beam": "212-13H", "saturated_eirp_peak": 59.73, "downlink_pol": "V", "transponder": "3310R1", "dynamic_range": 25, "mode": "ALC", "sfd": -64.31, "eirp_up_density": 73.74273412, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "Malaysia", "contour_50": -2.8, "contour_eoc": -5.41, "default_gateway": "13H"},
                {"_id": "dqSYrQRj3nCRrAZ9x", "name": "212-3V", "satellite": "IPSTAR", "uplink_cf": 29.965, "downlink_cf": 12.665, "bandwidth": 171, "type": "forward", "uplink_beam": "3V", "gt_peak": 19.7, "uplink_pol": "V", "downlink_beam": "212-3V", "saturated_eirp_peak": 59.83, "downlink_pol": "V", "transponder": "3310R1", "dynamic_range": 25, "mode": "ALC", "sfd": -62.76, "eirp_up_density": 74.74273412, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "Thailand", "contour_50": -2.8, "contour_eoc": -5.41, "default_gateway": "3V"},
                {"_id": "jhst3dyXymy9Py7qb", "name": "214-2", "satellite": "IPSTAR", "uplink_cf": 28.475, "downlink_cf": 11.075, "bandwidth": 250, "type": "forward", "uplink_beam": "13H", "gt_peak": 21.22, "uplink_pol": "H", "downlink_beam": "214-2", "saturated_eirp_peak": 60.6, "downlink_pol": "V", "transponder": "32800", "dynamic_range": 25, "mode": "ALC", "sfd": -59.64, "eirp_up_density": 75.8921731, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "Malaysia", "contour_50": -1.7, "contour_eoc": -3.32, "default_gateway": "13H"},
                {"_id": "XGrnhp7TC9vMK8CBA", "name": "304-2", "satellite": "IPSTAR", "uplink_cf": 28.475, "downlink_cf": 11.075, "bandwidth": 250, "type": "forward", "uplink_beam": "4V", "gt_peak": 19.3, "uplink_pol": "V", "downlink_beam": "304-2", "saturated_eirp_peak": 60.6, "downlink_pol": "V", "transponder": "3280A1", "dynamic_range": 25, "mode": "ALC", "sfd": -61.99, "eirp_up_density": 75.8921731, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "China", "contour_50": -1.8, "contour_eoc": -3.5, "default_gateway": "4V"},
                {"_id": "zWqGRfqee49BQx7sW", "name": "320-2", "satellite": "IPSTAR", "uplink_cf": 28.475, "downlink_cf": 11.075, "bandwidth": 250, "type": "forward", "uplink_beam": "5V", "gt_peak": 21.68, "uplink_pol": "V", "downlink_beam": "320-2", "saturated_eirp_peak": 61.3, "downlink_pol": "V", "transponder": "3280C1", "dynamic_range": 25, "mode": "ALC", "sfd": -59.75, "eirp_up_density": 72.8921731, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "China", "contour_50": -2.1, "contour_eoc": -4.06, "default_gateway": "5V"},
                {"_id": "M3QRruoqDtRjXtyd2", "name": "322-2", "satellite": "IPSTAR", "uplink_cf": 28.475, "downlink_cf": 11.075, "bandwidth": 250, "type": "forward", "uplink_beam": "14H", "gt_peak": 21.4, "uplink_pol": "H", "downlink_beam": "322-2", "saturated_eirp_peak": 60.7, "downlink_pol": "V", "transponder": "3280D1", "dynamic_range": 25, "mode": "ALC", "sfd": -59.59, "eirp_up_density": 75.8921731, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "China", "contour_50": -1.7, "contour_eoc": -3.36, "default_gateway": "14H"},
                {"_id": "J5Fu9etyoT932fufJ", "name": "402-2", "satellite": "IPSTAR", "uplink_cf": 28.475, "downlink_cf": 11.075, "bandwidth": 250, "type": "forward", "uplink_beam": "7V", "gt_peak": 20.04, "uplink_pol": "V", "downlink_beam": "402-2", "saturated_eirp_peak": 59.8, "downlink_pol": "V", "transponder": "3280F1", "dynamic_range": 25, "mode": "ALC", "sfd": -60.9, "eirp_up_density": 75.8921731, "full_load_obo": [
                    {"type": "actual", "value": -4.5},
                    {"type": "contract", "value": -6}
                ], "country": "Japan", "contour_50": -1.7, "contour_eoc": -3.36, "default_gateway": "7V"},
                {"_id": "6fTcqBQMMz9whCPTN", "name": "405-2", "satellite": "IPSTAR", "uplink_cf": 28.475, "downlink_cf": 11.075, "bandwidth": 250, "type": "forward", "uplink_beam": "11H", "gt_peak": 20.4, "uplink_pol": "H", "downlink_beam": "405-2", "saturated_eirp_peak": 60.3, "downlink_pol": "V", "transponder": "3280G1", "dynamic_range": 25, "mode": "ALC", "sfd": -60.83, "eirp_up_density": 74.8921731, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "South Korea", "contour_50": -1.6, "contour_eoc": -3.25, "default_gateway": "11H"},
                {"_id": "bC3jS2CTA7eKmpaTj", "name": "511", "satellite": "IPSTAR", "uplink_cf": 27.0855, "downlink_cf": 12.2855, "bandwidth": 171, "type": "forward", "uplink_beam": "16V", "gt_peak": 18.01, "uplink_pol": "V", "downlink_beam": "511", "saturated_eirp_peak": 59.6, "downlink_pol": "V", "transponder": "3310J2", "dynamic_range": 25, "mode": "ALC", "sfd": -64.67, "eirp_up_density": 73.24273412, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "New Zealand", "contour_50": -2.5, "contour_eoc": -4.72, "default_gateway": "16V"},
                {"_id": "iMWhg2eebAAjGYbSF", "name": "512", "satellite": "IPSTAR", "uplink_cf": 27.275, "downlink_cf": 12.475, "bandwidth": 171, "type": "forward", "uplink_beam": "16V", "gt_peak": 18.01, "uplink_pol": "V", "downlink_beam": "512", "saturated_eirp_peak": 59.82, "downlink_pol": "V", "transponder": "3310J2", "dynamic_range": 25, "mode": "ALC", "sfd": -64.67, "eirp_up_density": 73.24273412, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "New Zealand", "contour_50": -2.3, "contour_eoc": -4.61, "default_gateway": "16V"},
                {"_id": "u3zsd7jBXYWELvYzK", "name": "513", "satellite": "IPSTAR", "uplink_cf": 27.4645, "downlink_cf": 12.6645, "bandwidth": 171, "type": "forward", "uplink_beam": "16V", "gt_peak": 18.01, "uplink_pol": "V", "downlink_beam": "513", "saturated_eirp_peak": 59.95, "downlink_pol": "V", "transponder": "3310J2", "dynamic_range": 25, "mode": "ALC", "sfd": -64.67, "eirp_up_density": 73.24273412, "full_load_obo": [
                    {"type": "actual", "value": -4},
                    {"type": "contract", "value": -6}
                ], "country": "New Zealand", "contour_50": -2.3, "contour_eoc": -4.76, "default_gateway": "16V"}
            ];
            _.each(fwd_data, function (x) {
                Channels.insert(x);
            })
            var rtn_data = [
                {"_id": "NgFgvYHzFDDsZx7g3", "name": "100", "satellite": "IPSTAR", "uplink_cf": 14.058, "downlink_cf": 18.358, "bandwidth": 116, "type": "return", "uplink_beam": "100", "gt_peak": 18.7, "uplink_pol": "H", "downlink_beam": "1V", "saturated_eirp_peak": 57.2, "downlink_pol": "V", "transponder": "3610C1", "dynamic_range": 25, "mode": "ALC", "sfd": -60.22, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "India", "contour_50": -3.18, "contour_eoc": -5.94, "default_gateway": "1V"},
                {"_id": "tE3mXjFQSvTJb4m5Y", "name": "101", "satellite": "IPSTAR", "uplink_cf": 14.317, "downlink_cf": 18.617, "bandwidth": 116, "type": "return", "uplink_beam": "101", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "1V", "saturated_eirp_peak": 57.2, "downlink_pol": "V", "transponder": "3610C1", "dynamic_range": 25, "mode": "ALC", "sfd": -59.07, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "India", "contour_50": -3.29, "contour_eoc": -6.49, "default_gateway": "1V"},
                {"_id": "aa689aQs4J9fHm7BS", "name": "102", "satellite": "IPSTAR", "uplink_cf": 14.058, "downlink_cf": 18.358, "bandwidth": 116, "type": "return", "uplink_beam": "102", "gt_peak": 18.9, "uplink_pol": "H", "downlink_beam": "1H", "saturated_eirp_peak": 56.3, "downlink_pol": "H", "transponder": "3610B1", "dynamic_range": 25, "mode": "ALC", "sfd": -60.06, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "India", "contour_50": -2.89, "contour_eoc": -5.9, "default_gateway": "1H"},
                {"_id": "3BxwaZ4Mys6r74CM5", "name": "103", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 18.4875, "bandwidth": 116, "type": "return", "uplink_beam": "103", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "1V", "saturated_eirp_peak": 57.2, "downlink_pol": "V", "transponder": "3610C1", "dynamic_range": 25, "mode": "ALC", "sfd": -59.71, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "India", "contour_50": -2.92, "contour_eoc": -5.85, "default_gateway": "1V"},
                {"_id": "geC3fuhMrQM4J2You", "name": "104", "satellite": "IPSTAR", "uplink_cf": 14.317, "downlink_cf": 20.017, "bandwidth": 116, "type": "return", "uplink_beam": "104", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "1V", "saturated_eirp_peak": 57.2, "downlink_pol": "V", "transponder": "3610C1", "dynamic_range": 25, "mode": "ALC", "sfd": -59.67, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "India", "contour_50": -2.8, "contour_eoc": -5.89, "default_gateway": "1V"},
                {"_id": "Jino8FkAaCQYp8aS5", "name": "105", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 19.8875, "bandwidth": 116, "type": "return", "uplink_beam": "105", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "1V", "saturated_eirp_peak": 57.2, "downlink_pol": "V", "transponder": "3610C1", "dynamic_range": 25, "mode": "ALC", "sfd": -59.87, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "India", "contour_50": -2.72, "contour_eoc": -5.69, "default_gateway": "1V"},
                {"_id": "49c6Z5bNgGdRAtTJM", "name": "106", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 18.4875, "bandwidth": 116, "type": "return", "uplink_beam": "106", "gt_peak": 19.2, "uplink_pol": "H", "downlink_beam": "1H", "saturated_eirp_peak": 56.3, "downlink_pol": "H", "transponder": "3610B1", "dynamic_range": 25, "mode": "ALC", "sfd": -59.93, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "India", "contour_50": -2.75, "contour_eoc": -5.73, "default_gateway": "1H"},
                {"_id": "T4oGNePfgutxH4vYt", "name": "107", "satellite": "IPSTAR", "uplink_cf": 14.317, "downlink_cf": 20.017, "bandwidth": 116, "type": "return", "uplink_beam": "107", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "1H", "saturated_eirp_peak": 56.3, "downlink_pol": "H", "transponder": "3610B1", "dynamic_range": 25, "mode": "ALC", "sfd": -59.8, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "India", "contour_50": -2.8, "contour_eoc": -5.76, "default_gateway": "1H"},
                {"_id": "uzn9GYsXMNBrfGDBi", "name": "108", "satellite": "IPSTAR", "uplink_cf": 14.058, "downlink_cf": 19.758, "bandwidth": 116, "type": "return", "uplink_beam": "108", "gt_peak": 19.1, "uplink_pol": "H", "downlink_beam": "1V", "saturated_eirp_peak": 57.2, "downlink_pol": "V", "transponder": "3610C1", "dynamic_range": 25, "mode": "ALC", "sfd": -60.24, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "India", "contour_50": -2.62, "contour_eoc": -5.52, "default_gateway": "1V"},
                {"_id": "g4SXnkip5TogdDxfH", "name": "109", "satellite": "IPSTAR", "uplink_cf": 14.317, "downlink_cf": 18.617, "bandwidth": 116, "type": "return", "uplink_beam": "109", "gt_peak": 19.2, "uplink_pol": "H", "downlink_beam": "1H", "saturated_eirp_peak": 56.3, "downlink_pol": "H", "transponder": "3610B1", "dynamic_range": 25, "mode": "ALC", "sfd": -59.86, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "India", "contour_50": -2.84, "contour_eoc": -5.8, "default_gateway": "1H"},
                {"_id": "5z8unk2KHfFxFCCSK", "name": "110", "satellite": "IPSTAR", "uplink_cf": 14.058, "downlink_cf": 19.758, "bandwidth": 116, "type": "return", "uplink_beam": "110", "gt_peak": 19.1, "uplink_pol": "H", "downlink_beam": "1H", "saturated_eirp_peak": 56.3, "downlink_pol": "H", "transponder": "3610B1", "dynamic_range": 25, "mode": "ALC", "sfd": -60.22, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "India", "contour_50": -2.62, "contour_eoc": -5.54, "default_gateway": "1H"},
                {"_id": "Akhtf2WphmWeioxRa", "name": "111", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 19.8875, "bandwidth": 116, "type": "return", "uplink_beam": "111", "gt_peak": 19.5, "uplink_pol": "H", "downlink_beam": "1H", "saturated_eirp_peak": 56.3, "downlink_pol": "H", "transponder": "3610B1", "dynamic_range": 25, "mode": "ALC", "sfd": -58.99, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "India", "contour_50": -3.05, "contour_eoc": -6.37, "default_gateway": "1H"},
                {"_id": "mM8D6jn9kB24P9sK6", "name": "112", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 19.8875, "bandwidth": 116, "type": "return", "uplink_beam": "112", "gt_peak": 19.4, "uplink_pol": "H", "downlink_beam": "2V", "saturated_eirp_peak": 57.8, "downlink_pol": "V", "transponder": "3610L1", "dynamic_range": 25, "mode": "ALC", "sfd": -59.15, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "India", "contour_50": -3.14, "contour_eoc": -6.31, "default_gateway": "2V"},
                {"_id": "iZjTXPN38PaJB2HS9", "name": "113", "satellite": "IPSTAR", "uplink_cf": 14.317, "downlink_cf": 18.617, "bandwidth": 116, "type": "return", "uplink_beam": "113", "gt_peak": 19.4, "uplink_pol": "H", "downlink_beam": "2V", "saturated_eirp_peak": 57.8, "downlink_pol": "V", "transponder": "3610L1", "dynamic_range": 25, "mode": "ALC", "sfd": -59.21, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "India", "contour_50": -2.97, "contour_eoc": -6.25, "default_gateway": "2V"},
                {"_id": "LAJNtKWcsbG28KqRP", "name": "114", "satellite": "IPSTAR", "uplink_cf": 14.058, "downlink_cf": 18.358, "bandwidth": 116, "type": "return", "uplink_beam": "114", "gt_peak": 18.9, "uplink_pol": "H", "downlink_beam": "2V", "saturated_eirp_peak": 57.8, "downlink_pol": "V", "transponder": "3610L1", "dynamic_range": 25, "mode": "ALC", "sfd": -60.47, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "India", "contour_50": -2.54, "contour_eoc": -5.49, "default_gateway": "2V"},
                {"_id": "sv7DW3su7zF6eKD3v", "name": "115", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 18.4875, "bandwidth": 116, "type": "return", "uplink_beam": "115", "gt_peak": 19, "uplink_pol": "H", "downlink_beam": "2V", "saturated_eirp_peak": 57.8, "downlink_pol": "V", "transponder": "3610L1", "dynamic_range": 25, "mode": "ALC", "sfd": -60.12, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "India", "contour_50": -2.75, "contour_eoc": -5.74, "default_gateway": "2V"},
                {"_id": "7zSxE6qGwWjxxEvsP", "name": "201", "satellite": "IPSTAR", "uplink_cf": 14.058, "downlink_cf": 19.758, "bandwidth": 116, "type": "return", "uplink_beam": "201", "gt_peak": 18.8, "uplink_pol": "H", "downlink_beam": "17H", "saturated_eirp_peak": 55.4, "downlink_pol": "H", "transponder": "3610J1", "dynamic_range": 25, "mode": "ALC", "sfd": -60.63, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "Myanmar", "contour_50": -2.49, "contour_eoc": -5.43, "default_gateway": "17H"},
                {"_id": "uzdfnhDQbfy4Suf58", "name": "202", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 19.8875, "bandwidth": 116, "type": "return", "uplink_beam": "202", "gt_peak": 19, "uplink_pol": "H", "downlink_beam": "17H", "saturated_eirp_peak": 55.4, "downlink_pol": "H", "transponder": "3610J1", "dynamic_range": 25, "mode": "ALC", "sfd": -59.9, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "Myanmar", "contour_50": -2.87, "contour_eoc": -5.96, "default_gateway": "17H"},
                {"_id": "DDiDdTAAGAHoxHTgc", "name": "203", "satellite": "IPSTAR", "uplink_cf": 14.317, "downlink_cf": 18.617, "bandwidth": 116, "type": "return", "uplink_beam": "203", "gt_peak": 19.2, "uplink_pol": "H", "downlink_beam": "3H", "saturated_eirp_peak": 58.4, "downlink_pol": "H", "transponder": "3610J1", "dynamic_range": 25, "mode": "ALC", "sfd": -59.66, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "Thailand", "contour_50": -2.85, "contour_eoc": -6, "default_gateway": "3H"},
                {"_id": "YaqP3xAhEq2HAgNPD", "name": "204", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 18.4875, "bandwidth": 116, "type": "return", "uplink_beam": "204", "gt_peak": 18.9, "uplink_pol": "H", "downlink_beam": "3H", "saturated_eirp_peak": 58.4, "downlink_pol": "H", "transponder": "3610J1", "dynamic_range": 25, "mode": "ALC", "sfd": -60.01, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "Thailand", "contour_50": -2.86, "contour_eoc": -5.95, "default_gateway": "3H"},
                {"_id": "vENySStdQarmr5Wes", "name": "205", "satellite": "IPSTAR", "uplink_cf": 14.058, "downlink_cf": 19.758, "bandwidth": 116, "type": "return", "uplink_beam": "205", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "15H", "saturated_eirp_peak": 61, "downlink_pol": "H", "transponder": "3610K1", "dynamic_range": 25, "mode": "ALC", "sfd": -60.08, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "Vietnam", "contour_50": -2.65, "contour_eoc": -5.48, "default_gateway": "15H"},
                {"_id": "ofguHTMmtfgJ6TAva", "name": "206", "satellite": "IPSTAR", "uplink_cf": 14.317, "downlink_cf": 20.017, "bandwidth": 116, "type": "return", "uplink_beam": "206", "gt_peak": 19.6, "uplink_pol": "H", "downlink_beam": "15H", "saturated_eirp_peak": 61, "downlink_pol": "H", "transponder": "3610K1", "dynamic_range": 25, "mode": "ALC", "sfd": -59.67, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "Vietnam", "contour_50": -2.66, "contour_eoc": -5.59, "default_gateway": "15H"},
                {"_id": "wPrCZDAsoitkQd7Tm", "name": "207", "satellite": "IPSTAR", "uplink_cf": 14.058, "downlink_cf": 19.758, "bandwidth": 116, "type": "return", "uplink_beam": "207", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "3H", "saturated_eirp_peak": 62, "downlink_pol": "V", "transponder": "3610H1", "dynamic_range": 25, "mode": "ALC", "sfd": -58.86, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "Thailand", "contour_50": -3.5, "contour_eoc": -6.7, "default_gateway": "3H"},
                {"_id": "y5DZhDNTpJXAeK9QS", "name": "208", "satellite": "IPSTAR", "uplink_cf": 14.317, "downlink_cf": 20.017, "bandwidth": 116, "type": "return", "uplink_beam": "208", "gt_peak": 18.9, "uplink_pol": "H", "downlink_beam": "18H", "saturated_eirp_peak": 57.4, "downlink_pol": "H", "transponder": "3610J1", "dynamic_range": 25, "mode": "ALC", "sfd": -60.07, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "Cambodia", "contour_50": -2.91, "contour_eoc": -5.89, "default_gateway": "18H"},
                {"_id": "SHefTZTEcNdYHnKFt", "name": "209", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 19.8875, "bandwidth": 116, "type": "return", "uplink_beam": "209", "gt_peak": 19.9, "uplink_pol": "H", "downlink_beam": "3V", "saturated_eirp_peak": 62, "downlink_pol": "V", "transponder": "3610H1", "dynamic_range": 25, "mode": "ALC", "sfd": -58.51, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "Thailand", "contour_50": -3.1, "contour_eoc": -6.45, "default_gateway": "3V"},
                {"_id": "kcEZK8oxk8xj7maaE", "name": "210", "satellite": "IPSTAR", "uplink_cf": 14.058, "downlink_cf": 18.358, "bandwidth": 116, "type": "return", "uplink_beam": "210", "gt_peak": 18.5, "uplink_pol": "H", "downlink_beam": "15H", "saturated_eirp_peak": 61, "downlink_pol": "H", "transponder": "3610K1", "dynamic_range": 25, "mode": "ALC", "sfd": -60.88, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "Vietnam", "contour_50": -2.76, "contour_eoc": -5.48, "default_gateway": "15H"},
                {"_id": "rxhiXqp9K72XpCaY5", "name": "211", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 18.4875, "bandwidth": 116, "type": "return", "uplink_beam": "211", "gt_peak": 18.7, "uplink_pol": "H", "downlink_beam": "15H", "saturated_eirp_peak": 61, "downlink_pol": "H", "transponder": "3610K1", "dynamic_range": 25, "mode": "ALC", "sfd": -60.4, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "Vietnam", "contour_50": -2.86, "contour_eoc": -5.76, "default_gateway": "15H"},
                {"_id": "mZRTyhmR3wsSiHrXT", "name": "213", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 19.8875, "bandwidth": 116, "type": "return", "uplink_beam": "213", "gt_peak": 19.6, "uplink_pol": "H", "downlink_beam": "13H", "saturated_eirp_peak": 61.6, "downlink_pol": "H", "transponder": "3610T1", "dynamic_range": 25, "mode": "ALC", "sfd": -58.65, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "Malaysia", "contour_50": -3.28, "contour_eoc": -6.61, "default_gateway": "13H"},
                {"_id": "bdbc9snnjZ6EziAfA", "name": "214", "satellite": "IPSTAR", "uplink_cf": 14.058, "downlink_cf": 19.758, "bandwidth": 116, "type": "return", "uplink_beam": "214", "gt_peak": 19.5, "uplink_pol": "H", "downlink_beam": "13H", "saturated_eirp_peak": 61.6, "downlink_pol": "H", "transponder": "3610T1", "dynamic_range": 25, "mode": "ALC", "sfd": -58.61, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "Malaysia", "contour_50": -3.52, "contour_eoc": -6.75, "default_gateway": "13H"},
                {"_id": "aKHedmgnrCqsCKcw9", "name": "215", "satellite": "IPSTAR", "uplink_cf": 14.058, "downlink_cf": 18.358, "bandwidth": 116, "type": "return", "uplink_beam": "215", "gt_peak": 18.1, "uplink_pol": "H", "downlink_beam": "13H", "saturated_eirp_peak": 62.8, "downlink_pol": "H", "transponder": "3610R1", "dynamic_range": 25, "mode": "ALC", "sfd": -61.62, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "Malaysia", "contour_50": -2.56, "contour_eoc": -5.14, "default_gateway": "13H"},
                {"_id": "qWvs53PEpDWASJ6Dh", "name": "216", "satellite": "IPSTAR", "uplink_cf": 14.317, "downlink_cf": 18.617, "bandwidth": 116, "type": "return", "uplink_beam": "216", "gt_peak": 18.3, "uplink_pol": "H", "downlink_beam": "13H", "saturated_eirp_peak": 62.8, "downlink_pol": "H", "transponder": "3610R1", "dynamic_range": 25, "mode": "ALC", "sfd": -61.17, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "Malaysia", "contour_50": -2.75, "contour_eoc": -5.39, "default_gateway": "13H"},
                {"_id": "gr64won5DpMtsThmu", "name": "217", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 18.4875, "bandwidth": 116, "type": "return", "uplink_beam": "217", "gt_peak": 18, "uplink_pol": "H", "downlink_beam": "13H", "saturated_eirp_peak": 62.8, "downlink_pol": "H", "transponder": "3610R1", "dynamic_range": 25, "mode": "ALC", "sfd": -61.01, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "Malaysia", "contour_50": -3.04, "contour_eoc": -5.85, "default_gateway": "13H"},
                {"_id": "eWjxjAXLKv7sBQiHW", "name": "301", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 19.8875, "bandwidth": 116, "type": "return", "uplink_beam": "301", "gt_peak": 18.7, "uplink_pol": "H", "downlink_beam": "4H", "saturated_eirp_peak": 55.6, "downlink_pol": "H", "transponder": "3620K1", "dynamic_range": 25, "mode": "ALC", "sfd": -59.81, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "China", "contour_50": -3.12, "contour_eoc": -6.35, "default_gateway": "4H"},
                {"_id": "dmuKAmGJYJ5aaCmtc", "name": "302", "satellite": "IPSTAR", "uplink_cf": 14.317, "downlink_cf": 20.017, "bandwidth": 116, "type": "return", "uplink_beam": "302", "gt_peak": 18.6, "uplink_pol": "H", "downlink_beam": "4H", "saturated_eirp_peak": 55.6, "downlink_pol": "H", "transponder": "3620K1", "dynamic_range": 25, "mode": "ALC", "sfd": -59.51, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "China", "contour_50": -3.44, "contour_eoc": -6.75, "default_gateway": "4H"},
                {"_id": "86iBqMszxT4S6xPTB", "name": "303", "satellite": "IPSTAR", "uplink_cf": 14.058, "downlink_cf": 19.758, "bandwidth": 116, "type": "return", "uplink_beam": "303", "gt_peak": 18.8, "uplink_pol": "H", "downlink_beam": "4H", "saturated_eirp_peak": 55.6, "downlink_pol": "H", "transponder": "3620K1", "dynamic_range": 25, "mode": "ALC", "sfd": -60.47, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "China", "contour_50": -2.66, "contour_eoc": -5.59, "default_gateway": "4H"},
                {"_id": "Tbp8Dss9vY6SMAGoK", "name": "304", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 19.8875, "bandwidth": 116, "type": "return", "uplink_beam": "304", "gt_peak": 19.7, "uplink_pol": "H", "downlink_beam": "4V", "saturated_eirp_peak": 58.3, "downlink_pol": "V", "transponder": "3620J1", "dynamic_range": 25, "mode": "ALC", "sfd": -59, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "China", "contour_50": -3.03, "contour_eoc": -6.16, "default_gateway": "4V"},
                {"_id": "uL2v9kmvhN9CzrdkM", "name": "305", "satellite": "IPSTAR", "uplink_cf": 14.317, "downlink_cf": 20.017, "bandwidth": 116, "type": "return", "uplink_beam": "305", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "4V", "saturated_eirp_peak": 58.3, "downlink_pol": "V", "transponder": "3620J1", "dynamic_range": 25, "mode": "ALC", "sfd": -59.19, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "China", "contour_50": -3.1, "contour_eoc": -6.37, "default_gateway": "4V"},
                {"_id": "RL4y5q9nweGSKWjyi", "name": "306", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 18.4875, "bandwidth": 116, "type": "return", "uplink_beam": "306", "gt_peak": 18.8, "uplink_pol": "H", "downlink_beam": "4H", "saturated_eirp_peak": 55.6, "downlink_pol": "H", "transponder": "3620K1", "dynamic_range": 25, "mode": "ALC", "sfd": -60.22, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "China", "contour_50": -2.81, "contour_eoc": -5.84, "default_gateway": "4H"},
                {"_id": "v2vMAo8oEX2TB8jjA", "name": "307", "satellite": "IPSTAR", "uplink_cf": 14.317, "downlink_cf": 18.617, "bandwidth": 116, "type": "return", "uplink_beam": "307", "gt_peak": 19.1, "uplink_pol": "H", "downlink_beam": "4H", "saturated_eirp_peak": 55.6, "downlink_pol": "H", "transponder": "3620K1", "dynamic_range": 25, "mode": "ALC", "sfd": -59.71, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "China", "contour_50": -2.89, "contour_eoc": -6.05, "default_gateway": "4H"},
                {"_id": "s6JfMFqAwtEczYdQH", "name": "308", "satellite": "IPSTAR", "uplink_cf": 14.058, "downlink_cf": 19.758, "bandwidth": 116, "type": "return", "uplink_beam": "308", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "4V", "saturated_eirp_peak": 58.3, "downlink_pol": "V", "transponder": "3620J1", "dynamic_range": 25, "mode": "ALC", "sfd": -59.74, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "China", "contour_50": -2.82, "contour_eoc": -5.82, "default_gateway": "4V"},
                {"_id": "cTEgjBawim2sHzygK", "name": "309", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 18.4875, "bandwidth": 116, "type": "return", "uplink_beam": "309", "gt_peak": 18.6, "uplink_pol": "H", "downlink_beam": "5H", "saturated_eirp_peak": 58.7, "downlink_pol": "H", "transponder": "3610F1", "dynamic_range": 25, "mode": "ALC", "sfd": -60.52, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "China", "contour_50": -2.78, "contour_eoc": -5.74, "default_gateway": "5H"},
                {"_id": "WWsSniMKYokzNZTTv", "name": "310", "satellite": "IPSTAR", "uplink_cf": 14.317, "downlink_cf": 20.017, "bandwidth": 116, "type": "return", "uplink_beam": "310", "gt_peak": 19.7, "uplink_pol": "H", "downlink_beam": "5V", "saturated_eirp_peak": 57.4, "downlink_pol": "V", "transponder": "3620A1", "dynamic_range": 25, "mode": "ALC", "sfd": -58.94, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "China", "contour_50": -3.07, "contour_eoc": -6.22, "default_gateway": "5V"},
                {"_id": "zEcKBcRG6DeHL3w49", "name": "311", "satellite": "IPSTAR", "uplink_cf": 14.058, "downlink_cf": 18.358, "bandwidth": 116, "type": "return", "uplink_beam": "311", "gt_peak": 18.7, "uplink_pol": "H", "downlink_beam": "4H", "saturated_eirp_peak": 55.6, "downlink_pol": "H", "transponder": "3620K1", "dynamic_range": 25, "mode": "ALC", "sfd": -60.59, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "China", "contour_50": -2.69, "contour_eoc": -5.57, "default_gateway": "4H"},
                {"_id": "EFCKv8ayrjvexaTRT", "name": "312", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 18.4875, "bandwidth": 116, "type": "return", "uplink_beam": "312", "gt_peak": 18.6, "uplink_pol": "H", "downlink_beam": "10V", "saturated_eirp_peak": 57.3, "downlink_pol": "V", "transponder": "36100", "dynamic_range": 25, "mode": "ALC", "sfd": -60.47, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "China", "contour_50": -2.74, "contour_eoc": -5.79, "default_gateway": "10V"},
                {"_id": "hcBXFAmbTS5JGh3Cg", "name": "313", "satellite": "IPSTAR", "uplink_cf": 14.317, "downlink_cf": 18.617, "bandwidth": 116, "type": "return", "uplink_beam": "313", "gt_peak": 19.2, "uplink_pol": "H", "downlink_beam": "10V", "saturated_eirp_peak": 57.3, "downlink_pol": "V", "transponder": "36100", "dynamic_range": 25, "mode": "ALC", "sfd": -59.4, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "China", "contour_50": -3.02, "contour_eoc": -6.26, "default_gateway": "10V"},
                {"_id": "c5ShSZMnemJacsgmM", "name": "314", "satellite": "IPSTAR", "uplink_cf": 14.317, "downlink_cf": 18.617, "bandwidth": 116, "type": "return", "uplink_beam": "314", "gt_peak": 18.8, "uplink_pol": "H", "downlink_beam": "5H", "saturated_eirp_peak": 58.7, "downlink_pol": "H", "transponder": "3610F1", "dynamic_range": 25, "mode": "ALC", "sfd": -59.76, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "China", "contour_50": -3.07, "contour_eoc": -6.3, "default_gateway": "5H"},
                {"_id": "Sexd2QTxut6mNLL8v", "name": "315", "satellite": "IPSTAR", "uplink_cf": 14.058, "downlink_cf": 18.358, "bandwidth": 116, "type": "return", "uplink_beam": "315", "gt_peak": 18.7, "uplink_pol": "H", "downlink_beam": "5H", "saturated_eirp_peak": 58.7, "downlink_pol": "H", "transponder": "3610F1", "dynamic_range": 25, "mode": "ALC", "sfd": -60.86, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "China", "contour_50": -2.48, "contour_eoc": -5.3, "default_gateway": "5H"},
                {"_id": "fCfKEAAaK5JyX94z3", "name": "316", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 19.8875, "bandwidth": 116, "type": "return", "uplink_beam": "316", "gt_peak": 19.7, "uplink_pol": "H", "downlink_beam": "5V", "saturated_eirp_peak": 57.4, "downlink_pol": "V", "transponder": "3620A1", "dynamic_range": 25, "mode": "ALC", "sfd": -58.82, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "China", "contour_50": -3.09, "contour_eoc": -6.34, "default_gateway": "5V"},
                {"_id": "3J97Q8ju5cv2d2DsX", "name": "317", "satellite": "IPSTAR", "uplink_cf": 14.317, "downlink_cf": 20.017, "bandwidth": 116, "type": "return", "uplink_beam": "317", "gt_peak": 19.5, "uplink_pol": "H", "downlink_beam": "10V", "saturated_eirp_peak": 57.3, "downlink_pol": "V", "transponder": "36100", "dynamic_range": 25, "mode": "ALC", "sfd": -58.59, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "China", "contour_50": -3.29, "contour_eoc": -6.77, "default_gateway": "10V"},
                {"_id": "52py35ArW87XsMFDr", "name": "318", "satellite": "IPSTAR", "uplink_cf": 14.058, "downlink_cf": 19.758, "bandwidth": 116, "type": "return", "uplink_beam": "318", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "10V", "saturated_eirp_peak": 57.3, "downlink_pol": "V", "transponder": "36100", "dynamic_range": 25, "mode": "ALC", "sfd": -59.73, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "China", "contour_50": -2.78, "contour_eoc": -5.83, "default_gateway": "10V"},
                {"_id": "X5RmXBJFiECtZpPZ9", "name": "319", "satellite": "IPSTAR", "uplink_cf": 14.317, "downlink_cf": 18.617, "bandwidth": 116, "type": "return", "uplink_beam": "319", "gt_peak": 19, "uplink_pol": "H", "downlink_beam": "5V", "saturated_eirp_peak": 57.4, "downlink_pol": "V", "transponder": "3620A1", "dynamic_range": 25, "mode": "ALC", "sfd": -60.1, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "China", "contour_50": -2.67, "contour_eoc": -5.76, "default_gateway": "5V"},
                {"_id": "g4xgHY3q23wZEvdqb", "name": "320", "satellite": "IPSTAR", "uplink_cf": 14.058, "downlink_cf": 19.758, "bandwidth": 116, "type": "return", "uplink_beam": "320", "gt_peak": 19.5, "uplink_pol": "H", "downlink_beam": "5V", "saturated_eirp_peak": 57.4, "downlink_pol": "V", "transponder": "3620A1", "dynamic_range": 25, "mode": "ALC", "sfd": -59.56, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "China", "contour_50": -3, "contour_eoc": -5.8, "default_gateway": "5V"},
                {"_id": "pntKAifFMPoHea3K6", "name": "321", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 19.8875, "bandwidth": 116, "type": "return", "uplink_beam": "321", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "10V", "saturated_eirp_peak": 57.3, "downlink_pol": "V", "transponder": "36100", "dynamic_range": 25, "mode": "ALC", "sfd": -59.17, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "China", "contour_50": -3.05, "contour_eoc": -6.39, "default_gateway": "10V"},
                {"_id": "axh87sDsn47nRNbez", "name": "322", "satellite": "IPSTAR", "uplink_cf": 14.317, "downlink_cf": 20.017, "bandwidth": 116, "type": "return", "uplink_beam": "322", "gt_peak": 19.6, "uplink_pol": "H", "downlink_beam": "14H", "saturated_eirp_peak": 59.6, "downlink_pol": "H", "transponder": "3610F1", "dynamic_range": 25, "mode": "ALC", "sfd": -58.93, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "Taiwan", "contour_50": -3.12, "contour_eoc": -6.33, "default_gateway": "14H"},
                {"_id": "3o8LNpYFQPKadyQXX", "name": "323", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 18.4875, "bandwidth": 116, "type": "return", "uplink_beam": "323", "gt_peak": 18.9, "uplink_pol": "H", "downlink_beam": "5V", "saturated_eirp_peak": 57.4, "downlink_pol": "V", "transponder": "3620A1", "dynamic_range": 25, "mode": "ALC", "sfd": -59.9, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "China", "contour_50": -2.99, "contour_eoc": -6.06, "default_gateway": "5V"},
                {"_id": "Si8uHekPhftuXPH8p", "name": "328", "satellite": "IPSTAR", "uplink_cf": 14.4443, "downlink_cf": 20.1443, "bandwidth": 111.5, "type": "return", "uplink_beam": "328", "gt_peak": 8, "uplink_pol": "V", "downlink_beam": "10V", "saturated_eirp_peak": 57.1, "downlink_pol": "V", "transponder": "36100", "dynamic_range": 25, "mode": "ALC", "sfd": -57.53, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "China", "contour_50": -1.7, "contour_eoc": -3.3, "default_gateway": "10V"},
                {"_id": "kJyZta2Hq3PyRXrSf", "name": "401", "satellite": "IPSTAR", "uplink_cf": 14.2855, "downlink_cf": 18.5855, "bandwidth": 179, "type": "return", "uplink_beam": "401", "gt_peak": 18, "uplink_pol": "H", "downlink_beam": "7V", "saturated_eirp_peak": 56.3, "downlink_pol": "V", "transponder": "3620B1", "dynamic_range": 25, "mode": "ALC", "sfd": -58.83, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "Japan", "contour_50": -3.19, "contour_eoc": -6.14, "default_gateway": "7V"},
                {"_id": "kNQkvJHaKQsppkRxF", "name": "402", "satellite": "IPSTAR", "uplink_cf": 14.0895, "downlink_cf": 19.7895, "bandwidth": 179, "type": "return", "uplink_beam": "402", "gt_peak": 18.6, "uplink_pol": "H", "downlink_beam": "7V", "saturated_eirp_peak": 56.3, "downlink_pol": "V", "transponder": "3620B1", "dynamic_range": 25, "mode": "ALC", "sfd": -58.44, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "Japan", "contour_50": -3.12, "contour_eoc": -5.93, "default_gateway": "7V"},
                {"_id": "nwGwiE5Wqbg8sd5nZ", "name": "403", "satellite": "IPSTAR", "uplink_cf": 14.2855, "downlink_cf": 19.9855, "bandwidth": 179, "type": "return", "uplink_beam": "403", "gt_peak": 19, "uplink_pol": "H", "downlink_beam": "7V", "saturated_eirp_peak": 56.3, "downlink_pol": "V", "transponder": "3620B1", "dynamic_range": 25, "mode": "ALC", "sfd": -57.84, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "Japan", "contour_50": -3.1, "contour_eoc": -6.13, "default_gateway": "7V"},
                {"_id": "L8An6JH3sGaKXc8yT", "name": "404", "satellite": "IPSTAR", "uplink_cf": 14.0895, "downlink_cf": 18.3895, "bandwidth": 179, "type": "return", "uplink_beam": "404", "gt_peak": 18.8, "uplink_pol": "H", "downlink_beam": "7V", "saturated_eirp_peak": 56.3, "downlink_pol": "V", "transponder": "3620B1", "dynamic_range": 25, "mode": "ALC", "sfd": -58.41, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "Japan", "contour_50": -2.88, "contour_eoc": -5.76, "default_gateway": "7V"},
                {"_id": "GfnGuSNk2BCP5JikK", "name": "405", "satellite": "IPSTAR", "uplink_cf": 14.2855, "downlink_cf": 19.9855, "bandwidth": 179, "type": "return", "uplink_beam": "405", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "11H", "saturated_eirp_peak": 60.2, "downlink_pol": "H", "transponder": "3610D1", "dynamic_range": 25, "mode": "ALC", "sfd": -57.12, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "South Korea", "contour_50": -3.44, "contour_eoc": -6.55, "default_gateway": "11H"},
                {"_id": "omPnJCPvJPTxwR2Jq", "name": "406", "satellite": "IPSTAR", "uplink_cf": 14.058, "downlink_cf": 18.358, "bandwidth": 116, "type": "return", "uplink_beam": "406", "gt_peak": 18.3, "uplink_pol": "H", "downlink_beam": "10V", "saturated_eirp_peak": 57.3, "downlink_pol": "V", "transponder": "36100", "dynamic_range": 25, "mode": "ALC", "sfd": -60.35, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "China", "contour_50": -3.12, "contour_eoc": -6.21, "default_gateway": "10V"},
                {"_id": "7itNk6fFigHLeN6um", "name": "501", "satellite": "IPSTAR", "uplink_cf": 14.2855, "downlink_cf": 19.9855, "bandwidth": 179, "type": "return", "uplink_beam": "501", "gt_peak": 18.1, "uplink_pol": "H", "downlink_beam": "8V", "saturated_eirp_peak": 55, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25, "mode": "ALC", "sfd": -58.76, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "Australia", "contour_50": -3.07, "contour_eoc": -6.11, "default_gateway": "8V"},
                {"_id": "FWZ77RtBQzgp5FzLZ", "name": "502", "satellite": "IPSTAR", "uplink_cf": 14.2855, "downlink_cf": 18.5855, "bandwidth": 179, "type": "return", "uplink_beam": "502", "gt_peak": 18.2, "uplink_pol": "H", "downlink_beam": "8H", "saturated_eirp_peak": 55.9, "downlink_pol": "H", "transponder": "3620D1", "dynamic_range": 25, "mode": "ALC", "sfd": -59.06, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "Australia", "contour_50": -2.97, "contour_eoc": -5.71, "default_gateway": "8H"},
                {"_id": "rQzC8RS4T3uBRfwHS", "name": "503", "satellite": "IPSTAR", "uplink_cf": 14.0895, "downlink_cf": 19.7895, "bandwidth": 179, "type": "return", "uplink_beam": "503", "gt_peak": 18.7, "uplink_pol": "H", "downlink_beam": "8V", "saturated_eirp_peak": 55, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25, "mode": "ALC", "sfd": -58.63, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "Australia", "contour_50": -2.72, "contour_eoc": -5.64, "default_gateway": "8V"},
                {"_id": "eoG98MfKxAMxaGEeE", "name": "504", "satellite": "IPSTAR", "uplink_cf": 14.2855, "downlink_cf": 19.9855, "bandwidth": 179, "type": "return", "uplink_beam": "504", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "8H", "saturated_eirp_peak": 55.9, "downlink_pol": "H", "transponder": "3620D1", "dynamic_range": 25, "mode": "ALC", "sfd": -57.8, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "Australia", "contour_50": -2.81, "contour_eoc": -5.87, "default_gateway": "8H"},
                {"_id": "p9kdYmgzfZdxQ9mmP", "name": "505", "satellite": "IPSTAR", "uplink_cf": 14.0895, "downlink_cf": 18.3895, "bandwidth": 179, "type": "return", "uplink_beam": "505", "gt_peak": 19.1, "uplink_pol": "H", "downlink_beam": "8H", "saturated_eirp_peak": 55.9, "downlink_pol": "H", "transponder": "3620D1", "dynamic_range": 25, "mode": "ALC", "sfd": -58.08, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "Australia", "contour_50": -2.78, "contour_eoc": -5.79, "default_gateway": "8H"},
                {"_id": "2YQypFFhyuALMHXyb", "name": "506", "satellite": "IPSTAR", "uplink_cf": 14.2855, "downlink_cf": 18.5855, "bandwidth": 179, "type": "return", "uplink_beam": "506", "gt_peak": 19, "uplink_pol": "H", "downlink_beam": "9V", "saturated_eirp_peak": 56.3, "downlink_pol": "V", "transponder": "3620F1", "dynamic_range": 25, "mode": "ALC", "sfd": -58.16, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "Australia", "contour_50": -2.73, "contour_eoc": -5.81, "default_gateway": "9V"},
                {"_id": "37uRXTsjdDY8rsZMP", "name": "507", "satellite": "IPSTAR", "uplink_cf": 14.0895, "downlink_cf": 19.7895, "bandwidth": 179, "type": "return", "uplink_beam": "507", "gt_peak": 19.9, "uplink_pol": "H", "downlink_beam": "8H", "saturated_eirp_peak": 55.9, "downlink_pol": "H", "transponder": "3620D1", "dynamic_range": 25, "mode": "ALC", "sfd": -57.39, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "Australia", "contour_50": -2.7, "contour_eoc": -5.68, "default_gateway": "8H"},
                {"_id": "pKtAfpv4RYXK6QnLw", "name": "508", "satellite": "IPSTAR", "uplink_cf": 14.2855, "downlink_cf": 19.9855, "bandwidth": 179, "type": "return", "uplink_beam": "508", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "9V", "saturated_eirp_peak": 56.3, "downlink_pol": "V", "transponder": "3620F1", "dynamic_range": 25, "mode": "ALC", "sfd": -57.72, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "Australia", "contour_50": -2.84, "contour_eoc": -5.95, "default_gateway": "9V"},
                {"_id": "HX5ehq3v6jPYmGEEd", "name": "509", "satellite": "IPSTAR", "uplink_cf": 14.0895, "downlink_cf": 18.3895, "bandwidth": 179, "type": "return", "uplink_beam": "509", "gt_peak": 19, "uplink_pol": "H", "downlink_beam": "9V", "saturated_eirp_peak": 56.3, "downlink_pol": "V", "transponder": "3620F1", "dynamic_range": 25, "mode": "ALC", "sfd": -58.48, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "Australia", "contour_50": -2.6, "contour_eoc": -5.49, "default_gateway": "9V"},
                {"_id": "6JiZBmp6LiQ6rPXes", "name": "510", "satellite": "IPSTAR", "uplink_cf": 14.0895, "downlink_cf": 19.7895, "bandwidth": 179, "type": "return", "uplink_beam": "510", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "9V", "saturated_eirp_peak": 56.3, "downlink_pol": "V", "transponder": "3620F1", "dynamic_range": 25, "mode": "ALC", "sfd": -57.83, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "Australia", "contour_50": -2.82, "contour_eoc": -5.84, "default_gateway": "9V"},
                {"_id": "DjzCrA8DsxDDt8CMT", "name": "514", "satellite": "IPSTAR", "uplink_cf": 14.4443, "downlink_cf": 20.1443, "bandwidth": 111.5, "type": "return", "uplink_beam": "514", "gt_peak": 4.9, "uplink_pol": "H", "downlink_beam": "8V", "saturated_eirp_peak": 52.9, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25, "mode": "ALC", "sfd": -61.59, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "Australia", "contour_50": -1.8, "contour_eoc": -3.94, "default_gateway": "8V"},
                {"_id": "92c39trqx9ag4WQQQ", "name": "601", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 18.4875, "bandwidth": 116, "type": "return", "uplink_beam": "601", "gt_peak": 19.1, "uplink_pol": "H", "downlink_beam": "6V", "saturated_eirp_peak": 62.9, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25, "mode": "ALC", "sfd": -59.61, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "Indonesia", "contour_50": -3.14, "contour_eoc": -6.15, "default_gateway": "6V"},
                {"_id": "sD9xG7c6WeAw75Egf", "name": "602", "satellite": "IPSTAR", "uplink_cf": 14.317, "downlink_cf": 18.617, "bandwidth": 116, "type": "return", "uplink_beam": "602", "gt_peak": 19, "uplink_pol": "H", "downlink_beam": "6V", "saturated_eirp_peak": 62.9, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25, "mode": "ALC", "sfd": -60.37, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "Indonesia", "contour_50": -2.72, "contour_eoc": -5.49, "default_gateway": "6V"},
                {"_id": "CASxwjmrD2Cdn38bF", "name": "603", "satellite": "IPSTAR", "uplink_cf": 14.058, "downlink_cf": 18.358, "bandwidth": 116, "type": "return", "uplink_beam": "603", "gt_peak": 18.3, "uplink_pol": "H", "downlink_beam": "6V", "saturated_eirp_peak": 62.9, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25, "mode": "ALC", "sfd": -60.9, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "Indonesia", "contour_50": -2.91, "contour_eoc": -5.66, "default_gateway": "6V"},
                {"_id": "6qcN5fDcqWiYWN5vo", "name": "604", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 19.8875, "bandwidth": 116, "type": "return", "uplink_beam": "604", "gt_peak": 18, "uplink_pol": "H", "downlink_beam": "6V", "saturated_eirp_peak": 61.7, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25, "mode": "ALC", "sfd": -61.18, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "Indonesia", "contour_50": -2.94, "contour_eoc": -5.68, "default_gateway": "6V"},
                {"_id": "tx6GXG5raKLsEcnN3", "name": "605", "satellite": "IPSTAR", "uplink_cf": 14.317, "downlink_cf": 20.017, "bandwidth": 116, "type": "return", "uplink_beam": "605", "gt_peak": 17.9, "uplink_pol": "H", "downlink_beam": "6V", "saturated_eirp_peak": 61.7, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25, "mode": "ALC", "sfd": -61.52, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "Indonesia", "contour_50": -2.86, "contour_eoc": -5.44, "default_gateway": "6V"},
                {"_id": "G7Q3g4fSAjR78ZLt6", "name": "606", "satellite": "IPSTAR", "uplink_cf": 14.058, "downlink_cf": 19.758, "bandwidth": 116, "type": "return", "uplink_beam": "606", "gt_peak": 17.4, "uplink_pol": "H", "downlink_beam": "6V", "saturated_eirp_peak": 61.7, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25, "mode": "ALC", "sfd": -61.95, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "Indonesia", "contour_50": -2.91, "contour_eoc": -5.51, "default_gateway": "6V"},
                {"_id": "CeqZ5ptWMCTjYcKoS", "name": "608", "satellite": "IPSTAR", "uplink_cf": 14.4443, "downlink_cf": 20.1443, "bandwidth": 111.5, "type": "return", "uplink_beam": "608", "gt_peak": 6.4, "uplink_pol": "V", "downlink_beam": "6V", "saturated_eirp_peak": 61.5, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25, "mode": "ALC", "sfd": -65.23, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "Indonesia", "contour_50": -2.2, "contour_eoc": -4.4, "default_gateway": "6V"},
                {"_id": "PZxgFMA5DQX7dwRSt", "name": "701", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 18.4875, "bandwidth": 116, "type": "return", "uplink_beam": "701", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "12V", "saturated_eirp_peak": 59.9, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25, "mode": "ALC", "sfd": -59.37, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "Philippines", "contour_50": -3.22, "contour_eoc": -6.19, "default_gateway": "12V"},
                {"_id": "i6Foqvcs3PC9xqED9", "name": "702", "satellite": "IPSTAR", "uplink_cf": 14.317, "downlink_cf": 18.617, "bandwidth": 116, "type": "return", "uplink_beam": "702", "gt_peak": 18.8, "uplink_pol": "H", "downlink_beam": "12V", "saturated_eirp_peak": 59.9, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25, "mode": "ALC", "sfd": -59.74, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "Philippines", "contour_50": -3.26, "contour_eoc": -6.32, "default_gateway": "12V"},
                {"_id": "FfzCMHgwm3qep6kic", "name": "703", "satellite": "IPSTAR", "uplink_cf": 14.058, "downlink_cf": 18.358, "bandwidth": 116, "type": "return", "uplink_beam": "703", "gt_peak": 18.1, "uplink_pol": "H", "downlink_beam": "12V", "saturated_eirp_peak": 59.9, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25, "mode": "ALC", "sfd": -61.17, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "Philippines", "contour_50": -2.8, "contour_eoc": -5.59, "default_gateway": "12V"},
                {"_id": "gujt84actMBNAkfHn", "name": "112-2", "satellite": "IPSTAR", "uplink_cf": 14.4443, "downlink_cf": 20.1443, "bandwidth": 111.5, "type": "return", "uplink_beam": "112-2", "gt_peak": 19.7, "uplink_pol": "H", "downlink_beam": "2V", "saturated_eirp_peak": 57.7, "downlink_pol": "V", "transponder": "3610L1", "dynamic_range": 25, "mode": "ALC", "sfd": -59.18, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "India", "contour_50": -2.98, "contour_eoc": -6.15, "default_gateway": "2V"},
                {"_id": "t36ciMiM4Pv7ftk8k", "name": "207-2", "satellite": "IPSTAR", "uplink_cf": 14.4443, "downlink_cf": 20.1443, "bandwidth": 111.5, "type": "return", "uplink_beam": "207-2", "gt_peak": 19.7, "uplink_pol": "H", "downlink_beam": "3V", "saturated_eirp_peak": 61.8, "downlink_pol": "V", "transponder": "3610H1", "dynamic_range": 25, "mode": "ALC", "sfd": -58.51, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "Thailand", "contour_50": -3.53, "contour_eoc": -6.82, "default_gateway": "3V"},
                {"_id": "SKsPey4bFiciLd4c8", "name": "212-13H", "satellite": "IPSTAR", "uplink_cf": 14.317, "downlink_cf": 20.017, "bandwidth": 116, "type": "return", "uplink_beam": "212-13H", "gt_peak": 20.1, "uplink_pol": "H", "downlink_beam": "13H", "saturated_eirp_peak": 61.6, "downlink_pol": "H", "transponder": "3610T1", "dynamic_range": 25, "mode": "ALC", "sfd": -57.29, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "Malaysia", "contour_50": -3.74, "contour_eoc": -7.47, "default_gateway": "13H"},
                {"_id": "cZq8wjmFbm9MkXiTf", "name": "212-3V", "satellite": "IPSTAR", "uplink_cf": 14.317, "downlink_cf": 20.017, "bandwidth": 116, "type": "return", "uplink_beam": "212-3V", "gt_peak": 20.1, "uplink_pol": "H", "downlink_beam": "3V", "saturated_eirp_peak": 62, "downlink_pol": "V", "transponder": "3610H1", "dynamic_range": 25, "mode": "ALC", "sfd": -57.29, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "Thailand", "contour_50": -3.74, "contour_eoc": -7.47, "default_gateway": "3V"},
                {"_id": "BqeJznRH9czHyL4NH", "name": "214-2", "satellite": "IPSTAR", "uplink_cf": 14.4443, "downlink_cf": 20.1443, "bandwidth": 111.5, "type": "return", "uplink_beam": "214-2", "gt_peak": 19.9, "uplink_pol": "H", "downlink_beam": "13H", "saturated_eirp_peak": 61.4, "downlink_pol": "H", "transponder": "3610T1", "dynamic_range": 25, "mode": "ALC", "sfd": -58.14, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "Malaysia", "contour_50": -3.72, "contour_eoc": -6.99, "default_gateway": "13H"},
                {"_id": "xDPY6FaXznz8xpK87", "name": "304-2", "satellite": "IPSTAR", "uplink_cf": 14.4443, "downlink_cf": 20.1443, "bandwidth": 111.5, "type": "return", "uplink_beam": "304-2", "gt_peak": 19.9, "uplink_pol": "H", "downlink_beam": "4V", "saturated_eirp_peak": 58.1, "downlink_pol": "V", "transponder": "3620J1", "dynamic_range": 25, "mode": "ALC", "sfd": -58.82, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "China", "contour_50": -3.21, "contour_eoc": -6.31, "default_gateway": "4V"},
                {"_id": "WTK9HeXjPjziYB6WG", "name": "320-2", "satellite": "IPSTAR", "uplink_cf": 14.4443, "downlink_cf": 20.1443, "bandwidth": 111.5, "type": "return", "uplink_beam": "320-2", "gt_peak": 19.8, "uplink_pol": "H", "downlink_beam": "5V", "saturated_eirp_peak": 57.3, "downlink_pol": "V", "transponder": "3620A1", "dynamic_range": 25, "mode": "ALC", "sfd": -59.19, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "China", "contour_50": -2.98, "contour_eoc": -6.04, "default_gateway": "5V"},
                {"_id": "x6tJ8HRudacoCMZX6", "name": "322-2", "satellite": "IPSTAR", "uplink_cf": 14.4443, "downlink_cf": 20.1443, "bandwidth": 111.5, "type": "return", "uplink_beam": "322-2", "gt_peak": 19.6, "uplink_pol": "H", "downlink_beam": "14H", "saturated_eirp_peak": 59.5, "downlink_pol": "H", "transponder": "3610F1", "dynamic_range": 25, "mode": "ALC", "sfd": -59.31, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "China", "contour_50": -2.96, "contour_eoc": -6.12, "default_gateway": "14H"},
                {"_id": "B7CtcgEhiX8BtjinX", "name": "402-2", "satellite": "IPSTAR", "uplink_cf": 14.4443, "downlink_cf": 20.1443, "bandwidth": 111.5, "type": "return", "uplink_beam": "402-2", "gt_peak": 18.9, "uplink_pol": "H", "downlink_beam": "7V", "saturated_eirp_peak": 54.2, "downlink_pol": "V", "transponder": "3620B1", "dynamic_range": 25, "mode": "ALC", "sfd": -60.11, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "Japan", "contour_50": -2.97, "contour_eoc": -6.02, "default_gateway": "7V"},
                {"_id": "X58bp7A9oTqo4Wvbs", "name": "405-2", "satellite": "IPSTAR", "uplink_cf": 14.4443, "downlink_cf": 20.1443, "bandwidth": 111.5, "type": "return", "uplink_beam": "405-2", "gt_peak": 19.5, "uplink_pol": "H", "downlink_beam": "11H", "saturated_eirp_peak": 58.6, "downlink_pol": "H", "transponder": "3610D1", "dynamic_range": 25, "mode": "ALC", "sfd": -59.33, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "South Korea", "contour_50": -3.08, "contour_eoc": -6.2, "default_gateway": "11H"},
                {"_id": "L7goWguwFG7BWh7hv", "name": "511", "satellite": "IPSTAR", "uplink_cf": 14.058, "downlink_cf": 18.358, "bandwidth": 116, "type": "return", "uplink_beam": "511", "gt_peak": 18.9, "uplink_pol": "H", "downlink_beam": "16V", "saturated_eirp_peak": 53.1, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25, "mode": "ALC", "sfd": -59.63, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "New Zealand", "contour_50": -3.22, "contour_eoc": -6.33, "default_gateway": "16V"},
                {"_id": "SBBE5oyn85DpjJYR6", "name": "512", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 18.4875, "bandwidth": 116, "type": "return", "uplink_beam": "512", "gt_peak": 18.8, "uplink_pol": "H", "downlink_beam": "16V", "saturated_eirp_peak": 53.1, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25, "mode": "ALC", "sfd": -60.2, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "New Zealand", "contour_50": -2.87, "contour_eoc": -5.86, "default_gateway": "16V"},
                {"_id": "xZ2tFitwyTe2DXjTX", "name": "513", "satellite": "IPSTAR", "uplink_cf": 14.317, "downlink_cf": 18.617, "bandwidth": 116, "type": "return", "uplink_beam": "513", "gt_peak": 18.6, "uplink_pol": "H", "downlink_beam": "16V", "saturated_eirp_peak": 53.1, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25, "mode": "ALC", "sfd": -60.15, "designed_deepin": -9, "full_load_obo": [
                    {"type": "actual", "value": -9.5},
                    {"type": "contract", "value": -9.5}
                ], "actual": -9.5, "country": "New Zealand", "contour_50": -2.94, "contour_eoc": -6.12, "default_gateway": "16V"}
            ];
            _.each(rtn_data, function (x) {
                Channels.insert(x);
            })


        })();
    }
})


