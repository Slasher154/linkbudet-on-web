/**
 * Created by Dome on 5/27/14 AD.
 */

Meteor.methods({
    'insert_ipstar': function () {
        (function () {
            var fwd_data = [
                {"_id": "rYBQ4yfJdnhpZF6Jk", "name": "100", "satellite": "IPSTAR", "uplink_cf": 27.086, "downlink_cf": 12.286, "bandwidth": 171, "type": "forward", "uplink_beam": "1V", "gt_peak": 19.01, "uplink_pol": "V", "downlink_beam": "100", "saturated_eirp_peak": 59.23, "downlink_pol": "V", "transponder": "3310L1", "dynamic_range": 25, "mode": "ALC", "sfd": -62.89, "eirp_up_channel": 71.74273412, "country": "India", "contour_50": -2.5, "contour_eoc": -4.89, "default_gateway": "1V", "lat": 36.24, "lon": 77.02, "ci_downlink_adj_cell_50": 22.5, "ci_downlink_adj_cell_eoc": 19.79, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 29.77, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -6, "intermod": 20}
                ]},
                {"_id": "dPb4Zqb5nvGQGXnY8", "name": "101", "satellite": "IPSTAR", "uplink_cf": 27.465, "downlink_cf": 12.665, "bandwidth": 171, "type": "forward", "uplink_beam": "1V", "gt_peak": 19.01, "uplink_pol": "V", "downlink_beam": "101", "saturated_eirp_peak": 60.13, "downlink_pol": "V", "transponder": "3310L1", "dynamic_range": 25, "mode": "ALC", "sfd": -62.89, "eirp_up_channel": 71.74273412, "country": "India", "contour_50": -2.5, "contour_eoc": -4.95, "default_gateway": "1V", "lat": 31.75, "lon": 77.35, "ci_downlink_adj_cell_50": 21.5, "ci_downlink_adj_cell_eoc": 15.35, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 29.77, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -6, "intermod": 20}
                ]},
                {"_id": "WJqLgcCAgqkxAHx8D", "name": "102", "satellite": "IPSTAR", "uplink_cf": 27.086, "downlink_cf": 12.286, "bandwidth": 171, "type": "forward", "uplink_beam": "1H", "gt_peak": 18.87, "uplink_pol": "H", "downlink_beam": "102", "saturated_eirp_peak": 59.83, "downlink_pol": "V", "transponder": "3310N1", "dynamic_range": 25, "mode": "ALC", "sfd": -63, "eirp_up_channel": 71.74273412, "country": "India", "contour_50": -2.2, "contour_eoc": -4.42, "default_gateway": "1H", "lat": 27.79, "lon": 76.2, "ci_downlink_adj_cell_50": 17.6, "ci_downlink_adj_cell_eoc": 15.45, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 32.26, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -6, "intermod": 20}
                ]},
                {"_id": "dqd8WLwRehF2ReNSH", "name": "103", "satellite": "IPSTAR", "uplink_cf": 27.275, "downlink_cf": 12.475, "bandwidth": 171, "type": "forward", "uplink_beam": "1V", "gt_peak": 19.01, "uplink_pol": "V", "downlink_beam": "103", "saturated_eirp_peak": 59.63, "downlink_pol": "V", "transponder": "3310L1", "dynamic_range": 25, "mode": "ALC", "sfd": -62.89, "eirp_up_channel": 71.74273412, "country": "India", "contour_50": -2.4, "contour_eoc": -4.74, "default_gateway": "1V", "lat": 26.39, "lon": 83.2, "ci_downlink_adj_cell_50": 18.3, "ci_downlink_adj_cell_eoc": 15.46, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 29.77, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -6, "intermod": 20}
                ]},
                {"_id": "5qguYLLzvkqtYB4c9", "name": "104", "satellite": "IPSTAR", "uplink_cf": 29.965, "downlink_cf": 12.665, "bandwidth": 171, "type": "forward", "uplink_beam": "1V", "gt_peak": 19.01, "uplink_pol": "V", "downlink_beam": "104", "saturated_eirp_peak": 60.33, "downlink_pol": "V", "transponder": "3310L2", "dynamic_range": 25, "mode": "ALC", "sfd": -62.89, "eirp_up_channel": 72.74273412, "country": "India", "contour_50": -2.3, "contour_eoc": -4.64, "default_gateway": "1V", "lat": 24.45, "lon": 90, "ci_downlink_adj_cell_50": 19, "ci_downlink_adj_cell_eoc": 15.35, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 29.77, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -6, "intermod": 20}
                ]},
                {"_id": "NMSFQxhinX28HyKJa", "name": "105", "satellite": "IPSTAR", "uplink_cf": 29.775, "downlink_cf": 12.475, "bandwidth": 171, "type": "forward", "uplink_beam": "1V", "gt_peak": 19.01, "uplink_pol": "V", "downlink_beam": "105", "saturated_eirp_peak": 60.73, "downlink_pol": "V", "transponder": "3310L2", "dynamic_range": 25, "mode": "ALC", "sfd": -62.89, "eirp_up_channel": 72.74273412, "country": "India", "contour_50": -2.1, "contour_eoc": -4.44, "default_gateway": "1V", "lat": 26.57, "lon": 94.09, "ci_downlink_adj_cell_50": 19.1, "ci_downlink_adj_cell_eoc": 16.52, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 29.77, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -6, "intermod": 20}
                ]},
                {"_id": "BrPWJR3ChRnqSHNwu", "name": "106", "satellite": "IPSTAR", "uplink_cf": 27.275, "downlink_cf": 12.475, "bandwidth": 171, "type": "forward", "uplink_beam": "1H", "gt_peak": 18.87, "uplink_pol": "H", "downlink_beam": "106", "saturated_eirp_peak": 59.93, "downlink_pol": "V", "transponder": "3310N1", "dynamic_range": 25, "mode": "ALC", "sfd": -63, "eirp_up_channel": 71.74273412, "country": "India", "contour_50": -2.2, "contour_eoc": -4.4, "default_gateway": "1H", "lat": 24.62, "lon": 73.2, "ci_downlink_adj_cell_50": 18.1, "ci_downlink_adj_cell_eoc": 15.23, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 32.26, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -6, "intermod": 20}
                ]},
                {"_id": "jA2Jozcfj9z7RGB3j", "name": "107", "satellite": "IPSTAR", "uplink_cf": 29.965, "downlink_cf": 12.665, "bandwidth": 171, "type": "forward", "uplink_beam": "1H", "gt_peak": 18.87, "uplink_pol": "H", "downlink_beam": "107", "saturated_eirp_peak": 60.43, "downlink_pol": "V", "transponder": "3310N2", "dynamic_range": 25, "mode": "ALC", "sfd": -63, "eirp_up_channel": 72.74273412, "country": "India", "contour_50": -2.3, "contour_eoc": -4.65, "default_gateway": "1H", "lat": 23.24, "lon": 80.5, "ci_downlink_adj_cell_50": 17.2, "ci_downlink_adj_cell_eoc": 14.99, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 32.26, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -6, "intermod": 20}
                ]},
                {"_id": "ySCTvqZZR3tatkDkw", "name": "108", "satellite": "IPSTAR", "uplink_cf": 29.586, "downlink_cf": 12.286, "bandwidth": 171, "type": "forward", "uplink_beam": "1V", "gt_peak": 19.01, "uplink_pol": "V", "downlink_beam": "108", "saturated_eirp_peak": 59.93, "downlink_pol": "V", "transponder": "3310L2", "dynamic_range": 25, "mode": "ALC", "sfd": -62.89, "eirp_up_channel": 72.74273412, "country": "India", "contour_50": -2, "contour_eoc": -4.17, "default_gateway": "1V", "lat": 21.97, "lon": 86.5, "ci_downlink_adj_cell_50": 17.1, "ci_downlink_adj_cell_eoc": 15.47, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 29.77, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -6, "intermod": 20}
                ]},
                {"_id": "bfdxxQmPM8uQqxLpM", "name": "109", "satellite": "IPSTAR", "uplink_cf": 27.465, "downlink_cf": 12.665, "bandwidth": 171, "type": "forward", "uplink_beam": "1H", "gt_peak": 18.87, "uplink_pol": "H", "downlink_beam": "109", "saturated_eirp_peak": 60.03, "downlink_pol": "V", "transponder": "3310N1", "dynamic_range": 25, "mode": "ALC", "sfd": -63, "eirp_up_channel": 71.74273412, "country": "India", "contour_50": -2.2, "contour_eoc": -4.46, "default_gateway": "1H", "lat": 21.71, "lon": 69.76, "ci_downlink_adj_cell_50": 20.6, "ci_downlink_adj_cell_eoc": 14.85, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 32.26, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -6, "intermod": 20}
                ]},
                {"_id": "vArZRpCGh2KkFH7Qj", "name": "110", "satellite": "IPSTAR", "uplink_cf": 29.586, "downlink_cf": 12.286, "bandwidth": 171, "type": "forward", "uplink_beam": "1H", "gt_peak": 18.87, "uplink_pol": "H", "downlink_beam": "110", "saturated_eirp_peak": 59.73, "downlink_pol": "V", "transponder": "3310N2", "dynamic_range": 25, "mode": "ALC", "sfd": -63, "eirp_up_channel": 72.74273412, "country": "India", "contour_50": -1.9, "contour_eoc": -3.98, "default_gateway": "1H", "lat": 20.28, "lon": 77.6, "ci_downlink_adj_cell_50": 17.1, "ci_downlink_adj_cell_eoc": 15.49, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 32.26, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -6, "intermod": 20}
                ]},
                {"_id": "vTBQYcqPiTYBaLBWv", "name": "111", "satellite": "IPSTAR", "uplink_cf": 29.775, "downlink_cf": 12.475, "bandwidth": 171, "type": "forward", "uplink_beam": "1H", "gt_peak": 18.87, "uplink_pol": "H", "downlink_beam": "111", "saturated_eirp_peak": 60.13, "downlink_pol": "V", "transponder": "3310N2", "dynamic_range": 25, "mode": "ALC", "sfd": -63, "eirp_up_channel": 72.74273412, "country": "India", "contour_50": -2.1, "contour_eoc": -4.35, "default_gateway": "1H", "lat": 18.86, "lon": 83.8, "ci_downlink_adj_cell_50": 17, "ci_downlink_adj_cell_eoc": 15.1, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 32.26, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -6, "intermod": 20}
                ]},
                {"_id": "EDFut8m7dPDgMjBbj", "name": "112", "satellite": "IPSTAR", "uplink_cf": 29.775, "downlink_cf": 12.475, "bandwidth": 171, "type": "forward", "uplink_beam": "2V", "gt_peak": 19.08, "uplink_pol": "V", "downlink_beam": "112", "saturated_eirp_peak": 61.19, "downlink_pol": "V", "transponder": "32900", "dynamic_range": 25, "mode": "ALC", "sfd": -62.66, "eirp_up_channel": 74.74273412, "country": "India", "contour_50": -2.1, "contour_eoc": -4.33, "default_gateway": "2V", "lat": 17.38, "lon": 74.15, "ci_downlink_adj_cell_50": 18.5, "ci_downlink_adj_cell_eoc": 13.45, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 30.39, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -6, "intermod": 20}
                ]},
                {"_id": "ayDy6sqzL24vbY58W", "name": "113", "satellite": "IPSTAR", "uplink_cf": 27.465, "downlink_cf": 12.665, "bandwidth": 171, "type": "forward", "uplink_beam": "2V", "gt_peak": 19.08, "uplink_pol": "V", "downlink_beam": "113", "saturated_eirp_peak": 60.13, "downlink_pol": "V", "transponder": "3310P1", "dynamic_range": 25, "mode": "ALC", "sfd": -62.66, "eirp_up_channel": 73.74273412, "country": "India", "contour_50": -2.3, "contour_eoc": -4.66, "default_gateway": "2V", "lat": 16.06, "lon": 80.63, "ci_downlink_adj_cell_50": 20.7, "ci_downlink_adj_cell_eoc": 14.23, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 30.39, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -6, "intermod": 20}
                ]},
                {"_id": "mFHdFMe7y4cCuH83m", "name": "114", "satellite": "IPSTAR", "uplink_cf": 27.086, "downlink_cf": 12.286, "bandwidth": 171, "type": "forward", "uplink_beam": "2V", "gt_peak": 19.08, "uplink_pol": "V", "downlink_beam": "114", "saturated_eirp_peak": 59.83, "downlink_pol": "V", "transponder": "3310P1", "dynamic_range": 25, "mode": "ALC", "sfd": -62.66, "eirp_up_channel": 73.74273412, "country": "India", "contour_50": -1.8, "contour_eoc": -3.85, "default_gateway": "2V", "lat": 13.1, "lon": 77.43, "ci_downlink_adj_cell_50": 22.7, "ci_downlink_adj_cell_eoc": 15.66, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 30.39, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -6, "intermod": 20}
                ]},
                {"_id": "eD7Wxv2WqCZiLyn6H", "name": "115", "satellite": "IPSTAR", "uplink_cf": 27.275, "downlink_cf": 12.475, "bandwidth": 171, "type": "forward", "uplink_beam": "2V", "gt_peak": 19.08, "uplink_pol": "V", "downlink_beam": "115", "saturated_eirp_peak": 59.93, "downlink_pol": "V", "transponder": "3310P1", "dynamic_range": 25, "mode": "ALC", "sfd": -62.66, "eirp_up_channel": 73.74273412, "country": "India", "contour_50": -2.2, "contour_eoc": -4.32, "default_gateway": "2V", "lat": 9.08, "lon": 78.42, "ci_downlink_adj_cell_50": 23.7, "ci_downlink_adj_cell_eoc": 19.2, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 30.39, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -6, "intermod": 20}
                ]},
                {"_id": "8eHjA67oDRNtjmFLk", "name": "201", "satellite": "IPSTAR", "uplink_cf": 29.586, "downlink_cf": 12.286, "bandwidth": 171, "type": "forward", "uplink_beam": "17H", "gt_peak": 17.82, "uplink_pol": "H", "downlink_beam": "201", "saturated_eirp_peak": 59.83, "downlink_pol": "V", "transponder": "3310P2", "dynamic_range": 25, "mode": "ALC", "sfd": -65.75, "eirp_up_channel": 77.74273412, "country": "Myanmar", "contour_50": -1.9, "contour_eoc": -3.98, "default_gateway": "17H", "lat": 21.56, "lon": 95.9, "ci_downlink_adj_cell_50": 18.4, "ci_downlink_adj_cell_eoc": 14.46, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 26.3, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "JQJme3YtkQX8qxHHt", "name": "202", "satellite": "IPSTAR", "uplink_cf": 29.775, "downlink_cf": 12.475, "bandwidth": 171, "type": "forward", "uplink_beam": "17H", "gt_peak": 17.82, "uplink_pol": "H", "downlink_beam": "202", "saturated_eirp_peak": 60.13, "downlink_pol": "V", "transponder": "3310P2", "dynamic_range": 25, "mode": "ALC", "sfd": -65.75, "eirp_up_channel": 77.74273412, "country": "Myanmar", "contour_50": -2.2, "contour_eoc": -4.62, "default_gateway": "17H", "lat": 17.22, "lon": 95.5, "ci_downlink_adj_cell_50": 17.2, "ci_downlink_adj_cell_eoc": 15.62, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 26.3, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "m5J23kdSkBj9c7gHw", "name": "203", "satellite": "IPSTAR", "uplink_cf": 27.465, "downlink_cf": 12.665, "bandwidth": 171, "type": "forward", "uplink_beam": "3H", "gt_peak": 20.3, "uplink_pol": "H", "downlink_beam": "203", "saturated_eirp_peak": 59.93, "downlink_pol": "V", "transponder": "3310R2", "dynamic_range": 25, "mode": "ALC", "sfd": -62.27, "eirp_up_channel": 73.74273412, "country": "Thailand", "contour_50": -2.2, "contour_eoc": -4.51, "default_gateway": "3H", "lat": 17.98, "lon": 99.73, "ci_downlink_adj_cell_50": 17.6, "ci_downlink_adj_cell_eoc": 15.98, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 25.69, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4.9, "intermod": 20}
                ]},
                {"_id": "8Mqb7zAfLzFf3sS9u", "name": "204", "satellite": "IPSTAR", "uplink_cf": 27.275, "downlink_cf": 12.475, "bandwidth": 171, "type": "forward", "uplink_beam": "3H", "gt_peak": 20.3, "uplink_pol": "H", "downlink_beam": "204", "saturated_eirp_peak": 59.53, "downlink_pol": "V", "transponder": "3310R2", "dynamic_range": 25, "mode": "ALC", "sfd": -62.27, "eirp_up_channel": 73.74273412, "country": "Thailand", "contour_50": -2.1, "contour_eoc": -4.43, "default_gateway": "3H", "lat": 16.15, "lon": 103.66, "ci_downlink_adj_cell_50": 17.5, "ci_downlink_adj_cell_eoc": 15.83, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 25.69, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4.9, "intermod": 20}
                ]},
                {"_id": "vwgwoh8oxSHzhZ5vk", "name": "205", "satellite": "IPSTAR", "uplink_cf": 29.586, "downlink_cf": 12.286, "bandwidth": 171, "type": "forward", "uplink_beam": "15H", "gt_peak": 21.33, "uplink_pol": "H", "downlink_beam": "205", "saturated_eirp_peak": 59.13, "downlink_pol": "V", "transponder": "3310T1", "dynamic_range": 25, "mode": "ALC", "sfd": -61.07, "eirp_up_channel": 73.74273412, "country": "Vietnam", "contour_50": -2.2, "contour_eoc": -4.38, "default_gateway": "15H", "lat": 21, "lon": 105.2, "ci_downlink_adj_cell_50": 17.2, "ci_downlink_adj_cell_eoc": 14.49, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 31.13, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "z33tJQxytn2Zw2BQn", "name": "206", "satellite": "IPSTAR", "uplink_cf": 29.965, "downlink_cf": 12.665, "bandwidth": 171, "type": "forward", "uplink_beam": "15H", "gt_peak": 21.33, "uplink_pol": "H", "downlink_beam": "206", "saturated_eirp_peak": 59.63, "downlink_pol": "V", "transponder": "3310T1", "dynamic_range": 25, "mode": "ALC", "sfd": -61.07, "eirp_up_channel": 73.74273412, "country": "Vietnam", "contour_50": -2.4, "contour_eoc": -4.75, "default_gateway": "15H", "lat": 17.2, "lon": 107.5, "ci_downlink_adj_cell_50": 16.5, "ci_downlink_adj_cell_eoc": 11.69, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 31.13, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "JGpDvdfuzfpoYnG7Q", "name": "207", "satellite": "IPSTAR", "uplink_cf": 27.086, "downlink_cf": 12.286, "bandwidth": 171, "type": "forward", "uplink_beam": "3H", "gt_peak": 20.3, "uplink_pol": "H", "downlink_beam": "207", "saturated_eirp_peak": 59.13, "downlink_pol": "V", "transponder": "3310R2", "dynamic_range": 25, "mode": "ALC", "sfd": -62.27, "eirp_up_channel": 73.74273412, "country": "Thailand", "contour_50": -2.3, "contour_eoc": -4.5, "default_gateway": "3H", "lat": 14, "lon": 100.4, "ci_downlink_adj_cell_50": 18.8, "ci_downlink_adj_cell_eoc": 18.14, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 25.69, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4.9, "intermod": 20}
                ]},
                {"_id": "5RRpbvYKM6wsWuXwW", "name": "208", "satellite": "IPSTAR", "uplink_cf": 29.965, "downlink_cf": 12.665, "bandwidth": 171, "type": "forward", "uplink_beam": "18H", "gt_peak": 18.96, "uplink_pol": "H", "downlink_beam": "208", "saturated_eirp_peak": 59.83, "downlink_pol": "V", "transponder": "3310P2", "dynamic_range": 25, "mode": "ALC", "sfd": -65.31, "eirp_up_channel": 77.74273412, "country": "Cambodia", "contour_50": -2.4, "contour_eoc": -4.81, "default_gateway": "18H", "lat": 12.27, "lon": 104.33, "ci_downlink_adj_cell_50": 17.1, "ci_downlink_adj_cell_eoc": 15.51, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 29.87, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "66uCAgmakwfDoajxS", "name": "209", "satellite": "IPSTAR", "uplink_cf": 29.775, "downlink_cf": 12.475, "bandwidth": 171, "type": "forward", "uplink_beam": "3V", "gt_peak": 22.72, "uplink_pol": "V", "downlink_beam": "209", "saturated_eirp_peak": 59.83, "downlink_pol": "V", "transponder": "3310T1", "dynamic_range": 25, "mode": "ALC", "sfd": -59.74, "eirp_up_channel": 74.74273412, "country": "Thailand", "contour_50": -2.4, "contour_eoc": -4.87, "default_gateway": "3V", "lat": 10.75, "lon": 98.6, "ci_downlink_adj_cell_50": 17.9, "ci_downlink_adj_cell_eoc": 14.22, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 25.14, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4.9, "intermod": 20}
                ]},
                {"_id": "GoPyNCqu7dh5ksY45", "name": "210", "satellite": "IPSTAR", "uplink_cf": 27.086, "downlink_cf": 12.286, "bandwidth": 171, "type": "forward", "uplink_beam": "15H", "gt_peak": 21.33, "uplink_pol": "H", "downlink_beam": "210", "saturated_eirp_peak": 60.49, "downlink_pol": "V", "transponder": "3290G1", "dynamic_range": 25, "mode": "ALC", "sfd": -61.07, "eirp_up_channel": 72.74273412, "country": "Vietnam", "contour_50": -2.3, "contour_eoc": -4.6, "default_gateway": "15H", "lat": 13.2, "lon": 108.3, "ci_downlink_adj_cell_50": 19.6, "ci_downlink_adj_cell_eoc": 16.45, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 31.13, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "J2m6hLhryshho9Pvp", "name": "211", "satellite": "IPSTAR", "uplink_cf": 27.275, "downlink_cf": 12.475, "bandwidth": 171, "type": "forward", "uplink_beam": "15H", "gt_peak": 21.33, "uplink_pol": "H", "downlink_beam": "211", "saturated_eirp_peak": 60.69, "downlink_pol": "V", "transponder": "3290G1", "dynamic_range": 25, "mode": "ALC", "sfd": -61.07, "eirp_up_channel": 72.74273412, "country": "Vietnam", "contour_50": -2.2, "contour_eoc": -4.53, "default_gateway": "15H", "lat": 9.57, "lon": 107.16, "ci_downlink_adj_cell_50": 19, "ci_downlink_adj_cell_eoc": 15.7, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 31.13, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "jXnhuhhYWbukjaDys", "name": "213", "satellite": "IPSTAR", "uplink_cf": 27.275, "downlink_cf": 12.475, "bandwidth": 171, "type": "forward", "uplink_beam": "13H", "gt_peak": 21.22, "uplink_pol": "H", "downlink_beam": "213", "saturated_eirp_peak": 59.03, "downlink_pol": "V", "transponder": "3310R1", "dynamic_range": 25, "mode": "ALC", "sfd": -61.29, "eirp_up_channel": 73.74273412, "country": "Malaysia", "contour_50": -2.5, "contour_eoc": -4.9, "default_gateway": "13H", "lat": 1.17, "lon": 104.5, "ci_downlink_adj_cell_50": 18.5, "ci_downlink_adj_cell_eoc": 13.73, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 33.28, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "w8kCJnfuoqPPK9nyg", "name": "214", "satellite": "IPSTAR", "uplink_cf": 27.086, "downlink_cf": 12.286, "bandwidth": 171, "type": "forward", "uplink_beam": "13H", "gt_peak": 21.22, "uplink_pol": "H", "downlink_beam": "214", "saturated_eirp_peak": 59.23, "downlink_pol": "V", "transponder": "3310R1", "dynamic_range": 25, "mode": "ALC", "sfd": -61.29, "eirp_up_channel": 73.74273412, "country": "Malaysia", "contour_50": -2.3, "contour_eoc": -4.47, "default_gateway": "13H", "lat": 3.95, "lon": 102.05, "ci_downlink_adj_cell_50": 19.1, "ci_downlink_adj_cell_eoc": 14.47, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 33.28, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "byBQ2C6GKWhxWZHc5", "name": "215", "satellite": "IPSTAR", "uplink_cf": 29.586, "downlink_cf": 12.286, "bandwidth": 171, "type": "forward", "uplink_beam": "13H", "gt_peak": 21.22, "uplink_pol": "H", "downlink_beam": "215", "saturated_eirp_peak": 58.53, "downlink_pol": "V", "transponder": "3310T2", "dynamic_range": 25, "mode": "ALC", "sfd": -61.29, "eirp_up_channel": 74.74273412, "country": "Malaysia", "contour_50": -2.1, "contour_eoc": -4.29, "default_gateway": "13H", "lat": 1.57, "lon": 111.48, "ci_downlink_adj_cell_50": 20.7, "ci_downlink_adj_cell_eoc": 17.2, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 33.28, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "c89K8u6hN4rbucDHm", "name": "216", "satellite": "IPSTAR", "uplink_cf": 29.965, "downlink_cf": 12.665, "bandwidth": 171, "type": "forward", "uplink_beam": "13H", "gt_peak": 21.22, "uplink_pol": "H", "downlink_beam": "216", "saturated_eirp_peak": 58.93, "downlink_pol": "V", "transponder": "3310T2", "dynamic_range": 25, "mode": "ALC", "sfd": -61.29, "eirp_up_channel": 74.74273412, "country": "Malaysia", "contour_50": -2.3, "contour_eoc": -4.64, "default_gateway": "13H", "lat": 3.78, "lon": 114.32, "ci_downlink_adj_cell_50": 22.9, "ci_downlink_adj_cell_eoc": 18.73, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 33.28, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "cy84FxzC4P994E5dg", "name": "217", "satellite": "IPSTAR", "uplink_cf": 29.775, "downlink_cf": 12.475, "bandwidth": 171, "type": "forward", "uplink_beam": "13H", "gt_peak": 21.22, "uplink_pol": "H", "downlink_beam": "217", "saturated_eirp_peak": 58.53, "downlink_pol": "V", "transponder": "3310T2", "dynamic_range": 25, "mode": "ALC", "sfd": -61.29, "eirp_up_channel": 74.74273412, "country": "Malaysia", "contour_50": -2.2, "contour_eoc": -4.35, "default_gateway": "13H", "lat": 5.84, "lon": 117.43, "ci_downlink_adj_cell_50": 22.9, "ci_downlink_adj_cell_eoc": 19.78, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 33.28, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "rCTutTceR5AphHyA9", "name": "301", "satellite": "IPSTAR", "uplink_cf": 29.775, "downlink_cf": 12.475, "bandwidth": 171, "type": "forward", "uplink_beam": "4H", "gt_peak": 18.68, "uplink_pol": "H", "downlink_beam": "301", "saturated_eirp_peak": 59.53, "downlink_pol": "V", "transponder": "3310A1", "dynamic_range": 25, "mode": "ALC", "sfd": -63.7, "eirp_up_channel": 74.74273412, "country": "China", "contour_50": -2.3, "contour_eoc": -4.52, "default_gateway": "4H", "lat": 44.87, "lon": 124.12, "ci_downlink_adj_cell_50": 20.6, "ci_downlink_adj_cell_eoc": 14.91, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 24.19, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "WD7FmydARtNFWuwZj", "name": "302", "satellite": "IPSTAR", "uplink_cf": 29.965, "downlink_cf": 12.665, "bandwidth": 171, "type": "forward", "uplink_beam": "4H", "gt_peak": 18.68, "uplink_pol": "H", "downlink_beam": "302", "saturated_eirp_peak": 59.43, "downlink_pol": "V", "transponder": "3310A1", "dynamic_range": 25, "mode": "ALC", "sfd": -63.7, "eirp_up_channel": 74.74273412, "country": "China", "contour_50": -2.4, "contour_eoc": -4.91, "default_gateway": "4H", "lat": 46.41, "lon": 129.73, "ci_downlink_adj_cell_50": 19.1, "ci_downlink_adj_cell_eoc": 12.29, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 24.19, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "Shsi76k7DjrBrJyiL", "name": "303", "satellite": "IPSTAR", "uplink_cf": 29.586, "downlink_cf": 12.286, "bandwidth": 171, "type": "forward", "uplink_beam": "4H", "gt_peak": 18.68, "uplink_pol": "H", "downlink_beam": "303", "saturated_eirp_peak": 59.53, "downlink_pol": "V", "transponder": "3310A1", "dynamic_range": 25, "mode": "ALC", "sfd": -63.7, "eirp_up_channel": 74.74273412, "country": "China", "contour_50": -2, "contour_eoc": -4.2, "default_gateway": "4H", "lat": 39.76, "lon": 111.63, "ci_downlink_adj_cell_50": 18.3, "ci_downlink_adj_cell_eoc": 12.38, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 24.19, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "DQHp7HvAEAxCT592F", "name": "304", "satellite": "IPSTAR", "uplink_cf": 29.775, "downlink_cf": 12.475, "bandwidth": 171, "type": "forward", "uplink_beam": "4V", "gt_peak": 19.3, "uplink_pol": "V", "downlink_beam": "304", "saturated_eirp_peak": 59.73, "downlink_pol": "V", "transponder": "3310A2", "dynamic_range": 25, "mode": "ALC", "sfd": -63.64, "eirp_up_channel": 74.74273412, "country": "China", "contour_50": -2.1, "contour_eoc": -4.45, "default_gateway": "4V", "lat": 39.69, "lon": 116.6, "ci_downlink_adj_cell_50": 16.3, "ci_downlink_adj_cell_eoc": 12.45, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 30.16, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "Lq6RxrDeSri8EcnCo", "name": "305", "satellite": "IPSTAR", "uplink_cf": 29.965, "downlink_cf": 12.665, "bandwidth": 171, "type": "forward", "uplink_beam": "4V", "gt_peak": 19.3, "uplink_pol": "V", "downlink_beam": "305", "saturated_eirp_peak": 59.73, "downlink_pol": "V", "transponder": "3310A2", "dynamic_range": 25, "mode": "ALC", "sfd": -63.64, "eirp_up_channel": 74.74273412, "country": "China", "contour_50": -2.3, "contour_eoc": -4.67, "default_gateway": "4V", "lat": 39.35, "lon": 122.27, "ci_downlink_adj_cell_50": 15, "ci_downlink_adj_cell_eoc": 10.69, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 30.16, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "F6vgom3zKHkrq9ieF", "name": "306", "satellite": "IPSTAR", "uplink_cf": 27.275, "downlink_cf": 12.475, "bandwidth": 171, "type": "forward", "uplink_beam": "4H", "gt_peak": 18.68, "uplink_pol": "H", "downlink_beam": "306", "saturated_eirp_peak": 60.13, "downlink_pol": "V", "transponder": "3310B1", "dynamic_range": 25, "mode": "ALC", "sfd": -63.7, "eirp_up_channel": 73.74273412, "country": "China", "contour_50": -2.3, "contour_eoc": -4.69, "default_gateway": "4H", "lat": 35.32, "lon": 109.88, "ci_downlink_adj_cell_50": 15.7, "ci_downlink_adj_cell_eoc": 11.33, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 24.19, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "MaybsjoFNKtWZAMTW", "name": "307", "satellite": "IPSTAR", "uplink_cf": 27.465, "downlink_cf": 12.665, "bandwidth": 171, "type": "forward", "uplink_beam": "4H", "gt_peak": 18.68, "uplink_pol": "H", "downlink_beam": "307", "saturated_eirp_peak": 59.33, "downlink_pol": "V", "transponder": "3310B1", "dynamic_range": 25, "mode": "ALC", "sfd": -63.7, "eirp_up_channel": 73.74273412, "country": "China", "contour_50": -2.3, "contour_eoc": -4.7, "default_gateway": "4H", "lat": 35.24, "lon": 114.52, "ci_downlink_adj_cell_50": 15.8, "ci_downlink_adj_cell_eoc": 11.38, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 24.19, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "vNg9nQfyWt3KdbJfg", "name": "308", "satellite": "IPSTAR", "uplink_cf": 29.586, "downlink_cf": 12.286, "bandwidth": 171, "type": "forward", "uplink_beam": "4V", "gt_peak": 19.3, "uplink_pol": "V", "downlink_beam": "308", "saturated_eirp_peak": 59.33, "downlink_pol": "V", "transponder": "3310A2", "dynamic_range": 25, "mode": "ALC", "sfd": -63.64, "eirp_up_channel": 74.74273412, "country": "China", "contour_50": -2.2, "contour_eoc": -4.47, "default_gateway": "4V", "lat": 35.21, "lon": 119.1, "ci_downlink_adj_cell_50": 14.9, "ci_downlink_adj_cell_eoc": 11.09, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 30.16, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "5j8N4grffSmSXxevN", "name": "309", "satellite": "IPSTAR", "uplink_cf": 27.275, "downlink_cf": 12.475, "bandwidth": 171, "type": "forward", "uplink_beam": "5H", "gt_peak": 21.75, "uplink_pol": "H", "downlink_beam": "309", "saturated_eirp_peak": 59.93, "downlink_pol": "V", "transponder": "3310D2", "dynamic_range": 25, "mode": "ALC", "sfd": -60.81, "eirp_up_channel": 70.74273412, "country": "China", "contour_50": -2.2, "contour_eoc": -4.52, "default_gateway": "5H", "lat": 31.47, "lon": 103.57, "ci_downlink_adj_cell_50": 17.8, "ci_downlink_adj_cell_eoc": 12.94, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 27.33, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "wKWX8eDXAX6cfyhRu", "name": "310", "satellite": "IPSTAR", "uplink_cf": 29.965, "downlink_cf": 12.665, "bandwidth": 171, "type": "forward", "uplink_beam": "5V", "gt_peak": 21.68, "uplink_pol": "V", "downlink_beam": "310", "saturated_eirp_peak": 60.03, "downlink_pol": "V", "transponder": "3310C1", "dynamic_range": 25, "mode": "ALC", "sfd": -61.4, "eirp_up_channel": 71.74273412, "country": "China", "contour_50": -2.6, "contour_eoc": -5.15, "default_gateway": "5V", "lat": 31.22, "lon": 108.21, "ci_downlink_adj_cell_50": 16.4, "ci_downlink_adj_cell_eoc": 11.86, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 27.93, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "iKtRjhohtQwe4MzR3", "name": "311", "satellite": "IPSTAR", "uplink_cf": 27.086, "downlink_cf": 12.286, "bandwidth": 171, "type": "forward", "uplink_beam": "4H", "gt_peak": 18.68, "uplink_pol": "H", "downlink_beam": "311", "saturated_eirp_peak": 59.83, "downlink_pol": "V", "transponder": "3310B1", "dynamic_range": 25, "mode": "ALC", "sfd": -63.7, "eirp_up_channel": 73.74273412, "country": "China", "contour_50": -2.1, "contour_eoc": -4.31, "default_gateway": "4H", "lat": 31.15, "lon": 112.63, "ci_downlink_adj_cell_50": 14.7, "ci_downlink_adj_cell_eoc": 11.32, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 24.19, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "nmBWSeckDvrQAtGuE", "name": "312", "satellite": "IPSTAR", "uplink_cf": 27.275, "downlink_cf": 12.475, "bandwidth": 171, "type": "forward", "uplink_beam": "10V", "gt_peak": 20.8, "uplink_pol": "V", "downlink_beam": "312", "saturated_eirp_peak": 59.73, "downlink_pol": "V", "transponder": "3310B2", "dynamic_range": 25, "mode": "ALC", "sfd": -61.53, "eirp_up_channel": 73.74273412, "country": "China", "contour_50": -2.2, "contour_eoc": -4.55, "default_gateway": "10V", "lat": 31.11, "lon": 116.98, "ci_downlink_adj_cell_50": 15.9, "ci_downlink_adj_cell_eoc": 11.58, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 30.7, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "r87gy4L7wnDDhhBEw", "name": "313", "satellite": "IPSTAR", "uplink_cf": 27.465, "downlink_cf": 12.665, "bandwidth": 171, "type": "forward", "uplink_beam": "10V", "gt_peak": 20.8, "uplink_pol": "V", "downlink_beam": "313", "saturated_eirp_peak": 60.03, "downlink_pol": "V", "transponder": "3310B2", "dynamic_range": 25, "mode": "ALC", "sfd": -61.53, "eirp_up_channel": 73.74273412, "country": "China", "contour_50": -2.4, "contour_eoc": -4.95, "default_gateway": "10V", "lat": 31.1, "lon": 121.4, "ci_downlink_adj_cell_50": 13.9, "ci_downlink_adj_cell_eoc": 10.52, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 30.7, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "5q9HsKFEoCiaXbNGJ", "name": "314", "satellite": "IPSTAR", "uplink_cf": 27.465, "downlink_cf": 12.665, "bandwidth": 171, "type": "forward", "uplink_beam": "5H", "gt_peak": 21.75, "uplink_pol": "H", "downlink_beam": "314", "saturated_eirp_peak": 60.23, "downlink_pol": "V", "transponder": "3310D2", "dynamic_range": 25, "mode": "ALC", "sfd": -60.81, "eirp_up_channel": 70.74273412, "country": "China", "contour_50": -2.3, "contour_eoc": -4.71, "default_gateway": "5H", "lat": 25.56, "lon": 101.98, "ci_downlink_adj_cell_50": 17.9, "ci_downlink_adj_cell_eoc": 14.4, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 27.33, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "JfLWRyg8oNbwGKC7F", "name": "315", "satellite": "IPSTAR", "uplink_cf": 27.086, "downlink_cf": 12.286, "bandwidth": 171, "type": "forward", "uplink_beam": "5H", "gt_peak": 21.75, "uplink_pol": "H", "downlink_beam": "315", "saturated_eirp_peak": 59.93, "downlink_pol": "V", "transponder": "3310D2", "dynamic_range": 25, "mode": "ALC", "sfd": -60.81, "eirp_up_channel": 70.74273412, "country": "China", "contour_50": -2, "contour_eoc": -4.12, "default_gateway": "5H", "lat": 27.15, "lon": 106.13, "ci_downlink_adj_cell_50": 15.5, "ci_downlink_adj_cell_eoc": 12.45, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 27.33, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "2xcmDEizHDpHA9B4e", "name": "316", "satellite": "IPSTAR", "uplink_cf": 29.775, "downlink_cf": 12.475, "bandwidth": 171, "type": "forward", "uplink_beam": "5V", "gt_peak": 21.68, "uplink_pol": "V", "downlink_beam": "316", "saturated_eirp_peak": 60.13, "downlink_pol": "V", "transponder": "3310C1", "dynamic_range": 25, "mode": "ALC", "sfd": -61.4, "eirp_up_channel": 71.74273412, "country": "China", "contour_50": -2.5, "contour_eoc": -4.94, "default_gateway": "5V", "lat": 27.32, "lon": 110.84, "ci_downlink_adj_cell_50": 14.4, "ci_downlink_adj_cell_eoc": 10.96, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 27.93, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "jPGctjL8qzYQuvFDf", "name": "317", "satellite": "IPSTAR", "uplink_cf": 29.965, "downlink_cf": 12.665, "bandwidth": 171, "type": "forward", "uplink_beam": "10V", "gt_peak": 20.8, "uplink_pol": "V", "downlink_beam": "317", "saturated_eirp_peak": 60.53, "downlink_pol": "V", "transponder": "3310D1", "dynamic_range": 25, "mode": "ALC", "sfd": -61.53, "eirp_up_channel": 74.74273412, "country": "China", "contour_50": -2.5, "contour_eoc": -4.97, "default_gateway": "10V", "lat": 27.28, "lon": 115.03, "ci_downlink_adj_cell_50": 14.9, "ci_downlink_adj_cell_eoc": 10.86, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 30.7, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "GrBq9ZCfRA5Mbfx7i", "name": "318", "satellite": "IPSTAR", "uplink_cf": 29.586, "downlink_cf": 12.286, "bandwidth": 171, "type": "forward", "uplink_beam": "10V", "gt_peak": 20.8, "uplink_pol": "V", "downlink_beam": "318", "saturated_eirp_peak": 59.83, "downlink_pol": "V", "transponder": "3310D1", "dynamic_range": 25, "mode": "ALC", "sfd": -61.53, "eirp_up_channel": 74.74273412, "country": "China", "contour_50": -2.2, "contour_eoc": -4.36, "default_gateway": "10V", "lat": 27.25, "lon": 119.18, "ci_downlink_adj_cell_50": 16.7, "ci_downlink_adj_cell_eoc": 11.92, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 30.7, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "5CA3q3nJA5EXTT8TC", "name": "319", "satellite": "IPSTAR", "uplink_cf": 27.465, "downlink_cf": 12.665, "bandwidth": 171, "type": "forward", "uplink_beam": "5V", "gt_peak": 21.68, "uplink_pol": "V", "downlink_beam": "319", "saturated_eirp_peak": 60.39, "downlink_pol": "V", "transponder": "3290A1", "dynamic_range": 25, "mode": "ALC", "sfd": -61.4, "eirp_up_channel": 70.74273412, "country": "China", "contour_50": -2.1, "contour_eoc": -4.43, "default_gateway": "5V", "lat": 23.48, "lon": 108.8, "ci_downlink_adj_cell_50": 14.4, "ci_downlink_adj_cell_eoc": 10.99, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 27.93, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "erdiZectWQ4gJzeya", "name": "320", "satellite": "IPSTAR", "uplink_cf": 29.586, "downlink_cf": 12.286, "bandwidth": 171, "type": "forward", "uplink_beam": "5V", "gt_peak": 21.68, "uplink_pol": "V", "downlink_beam": "320", "saturated_eirp_peak": 59.53, "downlink_pol": "V", "transponder": "3310C1", "dynamic_range": 25, "mode": "ALC", "sfd": -61.4, "eirp_up_channel": 71.74273412, "country": "China", "contour_50": -2.2, "contour_eoc": -4.4, "default_gateway": "5V", "lat": 23.25, "lon": 113.22, "ci_downlink_adj_cell_50": 16.6, "ci_downlink_adj_cell_eoc": 12.66, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 27.93, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "ntSa3Fye78ajXWLYb", "name": "321", "satellite": "IPSTAR", "uplink_cf": 29.775, "downlink_cf": 12.475, "bandwidth": 171, "type": "forward", "uplink_beam": "10V", "gt_peak": 20.8, "uplink_pol": "V", "downlink_beam": "321", "saturated_eirp_peak": 60.13, "downlink_pol": "V", "transponder": "3310D1", "dynamic_range": 25, "mode": "ALC", "sfd": -61.53, "eirp_up_channel": 74.74273412, "country": "China", "contour_50": -2.2, "contour_eoc": -4.48, "default_gateway": "10V", "lat": 23.6, "lon": 117.21, "ci_downlink_adj_cell_50": 17.1, "ci_downlink_adj_cell_eoc": 12.36, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 30.7, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "iFgx3gTGr4aE9CF22", "name": "322", "satellite": "IPSTAR", "uplink_cf": 29.965, "downlink_cf": 12.665, "bandwidth": 171, "type": "forward", "uplink_beam": "14H", "gt_peak": 21.4, "uplink_pol": "H", "downlink_beam": "322", "saturated_eirp_peak": 60.39, "downlink_pol": "V", "transponder": "32900", "dynamic_range": 25, "mode": "ALC", "sfd": -61.24, "eirp_up_channel": 74.74273412, "country": "Taiwan", "contour_50": -2.5, "contour_eoc": -5.11, "default_gateway": "14H", "lat": 23.59, "lon": 121.2, "ci_downlink_adj_cell_50": 18.7, "ci_downlink_adj_cell_eoc": 12.73, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 30.59, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "9iwKxfevww8d6H5EJ", "name": "323", "satellite": "IPSTAR", "uplink_cf": 27.275, "downlink_cf": 12.475, "bandwidth": 171, "type": "forward", "uplink_beam": "5V", "gt_peak": 21.68, "uplink_pol": "V", "downlink_beam": "323", "saturated_eirp_peak": 60.39, "downlink_pol": "V", "transponder": "3290A1", "dynamic_range": 25, "mode": "ALC", "sfd": -61.4, "eirp_up_channel": 70.74273412, "country": "China", "contour_50": -2.4, "contour_eoc": -4.75, "default_gateway": "5V", "lat": 19.79, "lon": 110.96, "ci_downlink_adj_cell_50": 17.3, "ci_downlink_adj_cell_eoc": 14.15, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 27.93, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "TpcDbXx3QweqH8Nrs", "name": "328", "satellite": "IPSTAR", "uplink_cf": 28.475, "downlink_cf": 11.075, "bandwidth": 250, "type": "forward", "uplink_beam": "10V", "gt_peak": 20.8, "uplink_pol": "V", "downlink_beam": "328", "saturated_eirp_peak": 54.16, "downlink_pol": "H", "transponder": "3300A1", "dynamic_range": 25, "mode": "ALC", "sfd": -59.88, "eirp_up_channel": 75.8921731, "country": "China", "contour_50": -1.3, "contour_eoc": -2.66, "default_gateway": "10V", "lat": 35, "lon": 95, "ci_downlink_adj_cell_50": 28, "ci_downlink_adj_cell_eoc": 25.55, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 30.7, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "XhyC4SzjkBKfxEtXT", "name": "401", "satellite": "IPSTAR", "uplink_cf": 27.419, "downlink_cf": 12.619, "bandwidth": 262.5, "type": "forward", "uplink_beam": "7V", "gt_peak": 20.04, "uplink_pol": "V", "downlink_beam": "401", "saturated_eirp_peak": 60.79, "downlink_pol": "V", "transponder": "3310F1", "dynamic_range": 25, "mode": "ALC", "sfd": -60.69, "eirp_up_channel": 75.60406609, "country": "Japan", "contour_50": -2.5, "contour_eoc": -4.63, "default_gateway": "7V", "lat": 42.45, "lon": 141.89, "ci_downlink_adj_cell_50": 21.2, "ci_downlink_adj_cell_eoc": 15.51, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 29.83, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4.5, "intermod": 20}
                ]},
                {"_id": "b4AeapuHgtfsBW9EP", "name": "402", "satellite": "IPSTAR", "uplink_cf": 29.631, "downlink_cf": 12.331, "bandwidth": 262.5, "type": "forward", "uplink_beam": "7V", "gt_peak": 20.04, "uplink_pol": "V", "downlink_beam": "402", "saturated_eirp_peak": 60.69, "downlink_pol": "V", "transponder": "331000", "dynamic_range": 25, "mode": "ALC", "sfd": -60.69, "eirp_up_channel": 76.60406609, "country": "Japan", "contour_50": -2.2, "contour_eoc": -4.31, "default_gateway": "7V", "lat": 36.8, "lon": 139.94, "ci_downlink_adj_cell_50": 22.5, "ci_downlink_adj_cell_eoc": 16.09, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 29.83, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4.5, "intermod": 20}
                ]},
                {"_id": "FEk5PYeTWG58FcRLm", "name": "403", "satellite": "IPSTAR", "uplink_cf": 29.919, "downlink_cf": 12.619, "bandwidth": 262.5, "type": "forward", "uplink_beam": "7V", "gt_peak": 20.04, "uplink_pol": "V", "downlink_beam": "403", "saturated_eirp_peak": 63, "downlink_pol": "V", "transponder": "3290C1", "dynamic_range": 25, "mode": "ALC", "sfd": -60.69, "eirp_up_channel": 76.60406609, "country": "Japan", "contour_50": -2.4, "contour_eoc": -4.53, "default_gateway": "7V", "lat": 34.4, "lon": 134.95, "ci_downlink_adj_cell_50": 18.5, "ci_downlink_adj_cell_eoc": 13.3, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 29.83, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -6, "intermod": 20}
                ]},
                {"_id": "fLjehMeuvxwxbJSuR", "name": "404", "satellite": "IPSTAR", "uplink_cf": 27.131, "downlink_cf": 12.331, "bandwidth": 262.5, "type": "forward", "uplink_beam": "7V", "gt_peak": 20.04, "uplink_pol": "V", "downlink_beam": "404", "saturated_eirp_peak": 60.99, "downlink_pol": "V", "transponder": "3310F1", "dynamic_range": 25, "mode": "ALC", "sfd": -60.69, "eirp_up_channel": 75.60406609, "country": "Japan", "contour_50": -2.1, "contour_eoc": -4.24, "default_gateway": "7V", "lat": 32.06, "lon": 130.46, "ci_downlink_adj_cell_50": 18.4, "ci_downlink_adj_cell_eoc": 13.27, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 29.83, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4.5, "intermod": 20}
                ]},
                {"_id": "hkqYFhRTvvjmQv5oj", "name": "405", "satellite": "IPSTAR", "uplink_cf": 29.919, "downlink_cf": 12.619, "bandwidth": 262.5, "type": "forward", "uplink_beam": "11H", "gt_peak": 20.4, "uplink_pol": "H", "downlink_beam": "405", "saturated_eirp_peak": 61.69, "downlink_pol": "V", "transponder": "331000", "dynamic_range": 25, "mode": "ALC", "sfd": -60.62, "eirp_up_channel": 75.60406609, "country": "South Korea", "contour_50": -2.7, "contour_eoc": -5.01, "default_gateway": "11H", "lat": 35.6, "lon": 127.77, "ci_downlink_adj_cell_50": 14.7, "ci_downlink_adj_cell_eoc": 11.73, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 27.57, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4.5, "intermod": 20}
                ]},
                {"_id": "4BGs7duHSXzJRzAg9", "name": "406", "satellite": "IPSTAR", "uplink_cf": 27.086, "downlink_cf": 12.286, "bandwidth": 171, "type": "forward", "uplink_beam": "10V", "gt_peak": 20.8, "uplink_pol": "V", "downlink_beam": "406", "saturated_eirp_peak": 59.33, "downlink_pol": "V", "transponder": "3310B2", "dynamic_range": 25, "mode": "ALC", "sfd": -61.53, "eirp_up_channel": 73.74273412, "country": "China", "contour_50": -2.4, "contour_eoc": -4.77, "default_gateway": "10V", "lat": 40.64, "lon": 127.19, "ci_downlink_adj_cell_50": 19.5, "ci_downlink_adj_cell_eoc": 14.01, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 30.7, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "Fj8dYoeWbYi9B5cXt", "name": "501", "satellite": "IPSTAR", "uplink_cf": 29.919, "downlink_cf": 12.619, "bandwidth": 262.5, "type": "forward", "uplink_beam": "8V", "gt_peak": 18.54, "uplink_pol": "V", "downlink_beam": "501", "saturated_eirp_peak": 60.63, "downlink_pol": "V", "transponder": "3310F2", "dynamic_range": 25, "mode": "ALC", "sfd": -61.41, "eirp_up_channel": 70.60406609, "country": "Australia", "contour_50": -2.5, "contour_eoc": -4.99, "default_gateway": "8V", "lat": -32.25, "lon": 116.55, "ci_downlink_adj_cell_50": 31.3, "ci_downlink_adj_cell_eoc": 25.96, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 28.34, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "9NkNeh8GgPqX5qH4B", "name": "502", "satellite": "IPSTAR", "uplink_cf": 27.419, "downlink_cf": 12.619, "bandwidth": 262.5, "type": "forward", "uplink_beam": "8H", "gt_peak": 18.84, "uplink_pol": "H", "downlink_beam": "502", "saturated_eirp_peak": 60.82, "downlink_pol": "V", "transponder": "3310G1", "dynamic_range": 25, "mode": "ALC", "sfd": -61.31, "eirp_up_channel": 69.60406609, "country": "Australia", "contour_50": -2.3, "contour_eoc": -4.44, "default_gateway": "8H", "lat": -12.81, "lon": 131.45, "ci_downlink_adj_cell_50": 28.9, "ci_downlink_adj_cell_eoc": 23.59, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 31.63, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "36EEMmrPy5RY4QBZP", "name": "503", "satellite": "IPSTAR", "uplink_cf": 29.631, "downlink_cf": 12.331, "bandwidth": 262.5, "type": "forward", "uplink_beam": "8V", "gt_peak": 18.54, "uplink_pol": "V", "downlink_beam": "503", "saturated_eirp_peak": 61.18, "downlink_pol": "V", "transponder": "3310F2", "dynamic_range": 25, "mode": "ALC", "sfd": -61.41, "eirp_up_channel": 70.60406609, "country": "Australia", "contour_50": -1.9, "contour_eoc": -3.99, "default_gateway": "8V", "lat": -18.12, "lon": 145.45, "ci_downlink_adj_cell_50": 24.7, "ci_downlink_adj_cell_eoc": 19.37, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 28.34, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "2bkddXwn5zHkoKNxf", "name": "504", "satellite": "IPSTAR", "uplink_cf": 29.919, "downlink_cf": 12.619, "bandwidth": 262.5, "type": "forward", "uplink_beam": "8H", "gt_peak": 18.84, "uplink_pol": "H", "downlink_beam": "504", "saturated_eirp_peak": 61.16, "downlink_pol": "V", "transponder": "3310G2", "dynamic_range": 25, "mode": "ALC", "sfd": -61.31, "eirp_up_channel": 70.60406609, "country": "Australia", "contour_50": -2.2, "contour_eoc": -4.52, "default_gateway": "8H", "lat": -22.14, "lon": 149.05, "ci_downlink_adj_cell_50": 24.6, "ci_downlink_adj_cell_eoc": 20.13, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 31.63, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "h293aKjAk5vF2raZc", "name": "505", "satellite": "IPSTAR", "uplink_cf": 27.131, "downlink_cf": 12.331, "bandwidth": 262.5, "type": "forward", "uplink_beam": "8H", "gt_peak": 18.84, "uplink_pol": "H", "downlink_beam": "505", "saturated_eirp_peak": 61.35, "downlink_pol": "V", "transponder": "3310G1", "dynamic_range": 25, "mode": "ALC", "sfd": -61.31, "eirp_up_channel": 69.60406609, "country": "Australia", "contour_50": -2.1, "contour_eoc": -4.32, "default_gateway": "8H", "lat": -26.78, "lon": 152.02, "ci_downlink_adj_cell_50": 20.7, "ci_downlink_adj_cell_eoc": 16.4, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 31.63, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "2t7rdHrCf7rj2z6wQ", "name": "506", "satellite": "IPSTAR", "uplink_cf": 27.419, "downlink_cf": 12.619, "bandwidth": 262.5, "type": "forward", "uplink_beam": "9V", "gt_peak": 19.36, "uplink_pol": "V", "downlink_beam": "506", "saturated_eirp_peak": 61.58, "downlink_pol": "V", "transponder": "3310J1", "dynamic_range": 25, "mode": "ALC", "sfd": -62.74, "eirp_up_channel": 71.60406609, "country": "Australia", "contour_50": -2.4, "contour_eoc": -4.95, "default_gateway": "9V", "lat": -31.27, "lon": 152.32, "ci_downlink_adj_cell_50": 21.5, "ci_downlink_adj_cell_eoc": 17.23, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 29.62, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "FrGGnoQXTeRnE7oHi", "name": "507", "satellite": "IPSTAR", "uplink_cf": 29.631, "downlink_cf": 12.331, "bandwidth": 262.5, "type": "forward", "uplink_beam": "8H", "gt_peak": 18.84, "uplink_pol": "H", "downlink_beam": "507", "saturated_eirp_peak": 61.59, "downlink_pol": "V", "transponder": "3310G2", "dynamic_range": 25, "mode": "ALC", "sfd": -61.31, "eirp_up_channel": 70.60406609, "country": "Australia", "contour_50": -2.2, "contour_eoc": -4.45, "default_gateway": "8H", "lat": -34.59, "lon": 149.63, "ci_downlink_adj_cell_50": 18.9, "ci_downlink_adj_cell_eoc": 13.84, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 31.63, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "AjudaZHkbnzP6niaH", "name": "508", "satellite": "IPSTAR", "uplink_cf": 29.919, "downlink_cf": 12.619, "bandwidth": 262.5, "type": "forward", "uplink_beam": "9V", "gt_peak": 19.36, "uplink_pol": "V", "downlink_beam": "508", "saturated_eirp_peak": 61.53, "downlink_pol": "V", "transponder": "3310J2", "dynamic_range": 25, "mode": "ALC", "sfd": -62.74, "eirp_up_channel": 72.60406609, "country": "Australia", "contour_50": -2.4, "contour_eoc": -4.92, "default_gateway": "9V", "lat": -36.6, "lon": 144.84, "ci_downlink_adj_cell_50": 25.2, "ci_downlink_adj_cell_eoc": 20.23, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 29.62, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "kTsRioE6eL6cB8m8E", "name": "509", "satellite": "IPSTAR", "uplink_cf": 27.131, "downlink_cf": 12.331, "bandwidth": 262.5, "type": "forward", "uplink_beam": "9V", "gt_peak": 19.36, "uplink_pol": "V", "downlink_beam": "509", "saturated_eirp_peak": 61.34, "downlink_pol": "V", "transponder": "3310J1", "dynamic_range": 25, "mode": "ALC", "sfd": -62.74, "eirp_up_channel": 71.60406609, "country": "Australia", "contour_50": -2.1, "contour_eoc": -4.27, "default_gateway": "9V", "lat": -34.77, "lon": 139.08, "ci_downlink_adj_cell_50": 20.5, "ci_downlink_adj_cell_eoc": 13.6, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 29.62, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "3cuJgtXRGhnTWomwR", "name": "510", "satellite": "IPSTAR", "uplink_cf": 29.631, "downlink_cf": 12.331, "bandwidth": 262.5, "type": "forward", "uplink_beam": "9V", "gt_peak": 19.36, "uplink_pol": "V", "downlink_beam": "510", "saturated_eirp_peak": 60.5, "downlink_pol": "V", "transponder": "3310J2", "dynamic_range": 25, "mode": "ALC", "sfd": -62.74, "eirp_up_channel": 72.60406609, "country": "Australia", "contour_50": -2.1, "contour_eoc": -4.28, "default_gateway": "9V", "lat": -42.55, "lon": 147.43, "ci_downlink_adj_cell_50": 20.4, "ci_downlink_adj_cell_eoc": 15.4, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 29.62, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "WWLuSEkCEYvRtC55N", "name": "514", "satellite": "IPSTAR", "uplink_cf": 28.475, "downlink_cf": 11.075, "bandwidth": 250, "type": "forward", "uplink_beam": "8V", "gt_peak": 18.5, "uplink_pol": "V", "downlink_beam": "514", "saturated_eirp_peak": 54.13, "downlink_pol": "V", "transponder": "3320A1", "dynamic_range": 25, "mode": "ALC", "sfd": -61.66, "eirp_up_channel": 74.8921731, "country": "Australia", "contour_50": -1.2, "contour_eoc": -2.53, "default_gateway": "8V", "lat": -20, "lon": 135, "ci_downlink_adj_cell_50": 28, "ci_downlink_adj_cell_eoc": 21.47, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 28.34, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "AqXLRR9kbX2e6u3yN", "name": "601", "satellite": "IPSTAR", "uplink_cf": 27.275, "downlink_cf": 12.475, "bandwidth": 171, "type": "forward", "uplink_beam": "6V", "gt_peak": 21.72, "uplink_pol": "V", "downlink_beam": "601", "saturated_eirp_peak": 59.03, "downlink_pol": "V", "transponder": "3310V1", "dynamic_range": 25, "mode": "ALC", "sfd": -61.16, "eirp_up_channel": 73.74273412, "country": "Indonesia", "contour_50": -2.3, "contour_eoc": -4.61, "default_gateway": "6V", "lat": 3.19, "lon": 97.84, "ci_downlink_adj_cell_50": 19.2, "ci_downlink_adj_cell_eoc": 11.72, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 32.03, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "cyrt7332h3H2BjipR", "name": "602", "satellite": "IPSTAR", "uplink_cf": 27.465, "downlink_cf": 12.665, "bandwidth": 171, "type": "forward", "uplink_beam": "6V", "gt_peak": 21.72, "uplink_pol": "V", "downlink_beam": "602", "saturated_eirp_peak": 58.83, "downlink_pol": "V", "transponder": "3310V1", "dynamic_range": 25, "mode": "ALC", "sfd": -61.16, "eirp_up_channel": 73.74273412, "country": "Indonesia", "contour_50": -2.3, "contour_eoc": -4.64, "default_gateway": "6V", "lat": 0.25, "lon": 100.41, "ci_downlink_adj_cell_50": 21.3, "ci_downlink_adj_cell_eoc": 18.53, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 32.03, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "eixmCKZG9gxW6G7w2", "name": "603", "satellite": "IPSTAR", "uplink_cf": 27.086, "downlink_cf": 12.286, "bandwidth": 171, "type": "forward", "uplink_beam": "6V", "gt_peak": 21.72, "uplink_pol": "V", "downlink_beam": "603", "saturated_eirp_peak": 58.43, "downlink_pol": "V", "transponder": "3310V1", "dynamic_range": 25, "mode": "ALC", "sfd": -61.16, "eirp_up_channel": 73.74273412, "country": "Indonesia", "contour_50": -2.2, "contour_eoc": -4.33, "default_gateway": "6V", "lat": -2.67, "lon": 103.7, "ci_downlink_adj_cell_50": 20.8, "ci_downlink_adj_cell_eoc": 16.17, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 32.03, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "YAaufd3Y62RxpwCdd", "name": "604", "satellite": "IPSTAR", "uplink_cf": 29.775, "downlink_cf": 12.475, "bandwidth": 171, "type": "forward", "uplink_beam": "6V", "gt_peak": 21.72, "uplink_pol": "V", "downlink_beam": "604", "saturated_eirp_peak": 58.23, "downlink_pol": "V", "transponder": "3310V2", "dynamic_range": 25, "mode": "ALC", "sfd": -61.16, "eirp_up_channel": 74.74273412, "country": "Indonesia", "contour_50": -2.2, "contour_eoc": -4.45, "default_gateway": "6V", "lat": -5.86, "lon": 105.69, "ci_downlink_adj_cell_50": 22.9, "ci_downlink_adj_cell_eoc": 19.76, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 32.03, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "ddob79KK4kWriHSAH", "name": "605", "satellite": "IPSTAR", "uplink_cf": 29.965, "downlink_cf": 12.665, "bandwidth": 171, "type": "forward", "uplink_beam": "6V", "gt_peak": 21.72, "uplink_pol": "V", "downlink_beam": "605", "saturated_eirp_peak": 58.53, "downlink_pol": "V", "transponder": "3310V2", "dynamic_range": 25, "mode": "ALC", "sfd": -61.16, "eirp_up_channel": 74.74273412, "country": "Indonesia", "contour_50": -2.3, "contour_eoc": -4.5, "default_gateway": "6V", "lat": -7.23, "lon": 109.16, "ci_downlink_adj_cell_50": 25.2, "ci_downlink_adj_cell_eoc": 19.61, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 32.03, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "5hGiJwua35iXQSyMD", "name": "606", "satellite": "IPSTAR", "uplink_cf": 29.586, "downlink_cf": 12.286, "bandwidth": 171, "type": "forward", "uplink_beam": "6V", "gt_peak": 21.72, "uplink_pol": "V", "downlink_beam": "606", "saturated_eirp_peak": 57.53, "downlink_pol": "V", "transponder": "3310K1", "dynamic_range": 25, "mode": "ALC", "sfd": -61.16, "eirp_up_channel": 77.74273412, "country": "Indonesia", "contour_50": -2.2, "contour_eoc": -4.31, "default_gateway": "6V", "lat": -7.83, "lon": 112.88, "ci_downlink_adj_cell_50": 24.7, "ci_downlink_adj_cell_eoc": 18.77, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 32.03, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "ut4oAzpgQgWNGiz3h", "name": "608", "satellite": "IPSTAR", "uplink_cf": 28.475, "downlink_cf": 11.075, "bandwidth": 250, "type": "forward", "uplink_beam": "6V", "gt_peak": 21.72, "uplink_pol": "V", "downlink_beam": "608", "saturated_eirp_peak": 50.6, "downlink_pol": "H", "transponder": "3310K1", "dynamic_range": 25, "mode": "ALC", "sfd": -59.51, "eirp_up_channel": 79.3921731, "country": "Indonesia", "contour_50": -1, "contour_eoc": -1.8, "default_gateway": "6V", "lat": 0, "lon": 117, "ci_downlink_adj_cell_50": 28, "ci_downlink_adj_cell_eoc": 26.24, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 32.03, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "r2XHgaQgbv47cDx6H", "name": "701", "satellite": "IPSTAR", "uplink_cf": 27.275, "downlink_cf": 12.475, "bandwidth": 171, "type": "forward", "uplink_beam": "12V", "gt_peak": 21.97, "uplink_pol": "V", "downlink_beam": "701", "saturated_eirp_peak": 63.3, "downlink_pol": "V", "transponder": "3310K1", "dynamic_range": 25, "mode": "ALC", "sfd": -60.53, "eirp_up_channel": 77.74273412, "country": "Philippines", "contour_50": -2.5, "contour_eoc": -4.91, "default_gateway": "12V", "lat": 16.2, "lon": 121.29, "ci_downlink_adj_cell_50": 20.9, "ci_downlink_adj_cell_eoc": 17.79, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 30.69, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -6, "intermod": 20}
                ]},
                {"_id": "pfmyhrkCGKJngdwxL", "name": "702", "satellite": "IPSTAR", "uplink_cf": 27.465, "downlink_cf": 12.665, "bandwidth": 171, "type": "forward", "uplink_beam": "12V", "gt_peak": 21.97, "uplink_pol": "V", "downlink_beam": "702", "saturated_eirp_peak": 62.29, "downlink_pol": "V", "transponder": "3310K1", "dynamic_range": 25, "mode": "ALC", "sfd": -60.53, "eirp_up_channel": 77.74273412, "country": "Philippines", "contour_50": -2.6, "contour_eoc": -4.93, "default_gateway": "12V", "lat": 12.14, "lon": 122.99, "ci_downlink_adj_cell_50": 24.8, "ci_downlink_adj_cell_eoc": 20.52, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 30.69, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -6, "intermod": 20}
                ]},
                {"_id": "K5H7aq3EzFt8wmZ2L", "name": "703", "satellite": "IPSTAR", "uplink_cf": 27.086, "downlink_cf": 12.286, "bandwidth": 171, "type": "forward", "uplink_beam": "12V", "gt_peak": 21.97, "uplink_pol": "V", "downlink_beam": "703", "saturated_eirp_peak": 61.19, "downlink_pol": "V", "transponder": "3310K1", "dynamic_range": 25, "mode": "ALC", "sfd": -60.53, "eirp_up_channel": 77.74273412, "country": "Philippines", "contour_50": -2.1, "contour_eoc": -4.22, "default_gateway": "12V", "lat": 7.92, "lon": 124.62, "ci_downlink_adj_cell_50": 26.1, "ci_downlink_adj_cell_eoc": 20.99, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 30.69, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -6, "intermod": 20}
                ]},
                {"_id": "Eq763LWSQsoZe7LRk", "name": "112-2", "satellite": "IPSTAR", "uplink_cf": 28.475, "downlink_cf": 11.075, "bandwidth": 250, "type": "forward", "uplink_beam": "2V", "gt_peak": 19.08, "uplink_pol": "V", "downlink_beam": "112-2", "saturated_eirp_peak": 60.9, "downlink_pol": "V", "transponder": "3280K1", "dynamic_range": 25, "mode": "ALC", "sfd": -61.01, "eirp_up_channel": 75.8921731, "country": "India", "contour_50": -1.8, "contour_eoc": -3.58, "default_gateway": "2V", "lat": 18.05, "lon": 74, "ci_downlink_adj_cell_50": 28.59, "ci_downlink_adj_cell_eoc": 26.84, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 30.39, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -6, "intermod": 20}
                ]},
                {"_id": "nWWATYE9KvuSL5Hod", "name": "207-2", "satellite": "IPSTAR", "uplink_cf": 28.475, "downlink_cf": 11.075, "bandwidth": 250, "type": "forward", "uplink_beam": "3V", "gt_peak": 22.72, "uplink_pol": "V", "downlink_beam": "207-2", "saturated_eirp_peak": 61.6, "downlink_pol": "V", "transponder": "3280H1", "dynamic_range": 25, "mode": "ALC", "sfd": -58.09, "eirp_up_channel": 75.8921731, "country": "Thailand", "contour_50": -2, "contour_eoc": -3.86, "default_gateway": "3V", "lat": 13.75, "lon": 100.57, "ci_downlink_adj_cell_50": 20.65, "ci_downlink_adj_cell_eoc": 18.79, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 25.14, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4.4, "intermod": 20}
                ]},
                {"_id": "hGcARw6474E96XRhG", "name": "212-13H", "satellite": "IPSTAR", "uplink_cf": 27.465, "downlink_cf": 12.665, "bandwidth": 171, "type": "forward", "uplink_beam": "13H", "gt_peak": 18.2, "uplink_pol": "H", "downlink_beam": "212-13H", "saturated_eirp_peak": 59.73, "downlink_pol": "V", "transponder": "3310R1", "dynamic_range": 25, "mode": "ALC", "sfd": -64.31, "eirp_up_channel": 73.74273412, "country": "Malaysia", "contour_50": -2.8, "contour_eoc": -5.41, "default_gateway": "13H", "lat": 7.25, "lon": 99.95, "ci_downlink_adj_cell_50": 19.4, "ci_downlink_adj_cell_eoc": 12.91, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 33.28, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "dqSYrQRj3nCRrAZ9x", "name": "212-3V", "satellite": "IPSTAR", "uplink_cf": 29.965, "downlink_cf": 12.665, "bandwidth": 171, "type": "forward", "uplink_beam": "3V", "gt_peak": 19.7, "uplink_pol": "V", "downlink_beam": "212-3V", "saturated_eirp_peak": 59.83, "downlink_pol": "V", "transponder": "3310R1", "dynamic_range": 25, "mode": "ALC", "sfd": -62.76, "eirp_up_channel": 74.74273412, "country": "Thailand", "contour_50": -2.8, "contour_eoc": -5.41, "default_gateway": "3V", "lat": 7.25, "lon": 99.95, "ci_downlink_adj_cell_50": 19.1, "ci_downlink_adj_cell_eoc": 13.17, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 25.14, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "jhst3dyXymy9Py7qb", "name": "214-2", "satellite": "IPSTAR", "uplink_cf": 28.475, "downlink_cf": 11.075, "bandwidth": 250, "type": "forward", "uplink_beam": "13H", "gt_peak": 21.22, "uplink_pol": "H", "downlink_beam": "214-2", "saturated_eirp_peak": 60.6, "downlink_pol": "V", "transponder": "32800", "dynamic_range": 25, "mode": "ALC", "sfd": -59.64, "eirp_up_channel": 75.8921731, "country": "Malaysia", "contour_50": -1.7, "contour_eoc": -3.32, "default_gateway": "13H", "lat": 3.54, "lon": 101.87, "ci_downlink_adj_cell_50": 22.08, "ci_downlink_adj_cell_eoc": 20.41, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 33.28, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "XGrnhp7TC9vMK8CBA", "name": "304-2", "satellite": "IPSTAR", "uplink_cf": 28.475, "downlink_cf": 11.075, "bandwidth": 250, "type": "forward", "uplink_beam": "4V", "gt_peak": 19.3, "uplink_pol": "V", "downlink_beam": "304-2", "saturated_eirp_peak": 60.6, "downlink_pol": "V", "transponder": "3280A1", "dynamic_range": 25, "mode": "ALC", "sfd": -61.99, "eirp_up_channel": 75.8921731, "country": "China", "contour_50": -1.8, "contour_eoc": -3.5, "default_gateway": "4V", "lat": 39.92, "lon": 116.43, "ci_downlink_adj_cell_50": 18.56, "ci_downlink_adj_cell_eoc": 16.82, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 30.16, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "zWqGRfqee49BQx7sW", "name": "320-2", "satellite": "IPSTAR", "uplink_cf": 28.475, "downlink_cf": 11.075, "bandwidth": 250, "type": "forward", "uplink_beam": "5V", "gt_peak": 21.68, "uplink_pol": "V", "downlink_beam": "320-2", "saturated_eirp_peak": 61.3, "downlink_pol": "V", "transponder": "3280C1", "dynamic_range": 25, "mode": "ALC", "sfd": -59.75, "eirp_up_channel": 72.8921731, "country": "China", "contour_50": -2.1, "contour_eoc": -4.06, "default_gateway": "5V", "lat": 22.8, "lon": 113.6, "ci_downlink_adj_cell_50": 12.98, "ci_downlink_adj_cell_eoc": 11.01, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 27.93, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "M3QRruoqDtRjXtyd2", "name": "322-2", "satellite": "IPSTAR", "uplink_cf": 28.475, "downlink_cf": 11.075, "bandwidth": 250, "type": "forward", "uplink_beam": "14H", "gt_peak": 21.4, "uplink_pol": "H", "downlink_beam": "322-2", "saturated_eirp_peak": 60.7, "downlink_pol": "V", "transponder": "3280D1", "dynamic_range": 25, "mode": "ALC", "sfd": -59.59, "eirp_up_channel": 75.8921731, "country": "China", "contour_50": -1.7, "contour_eoc": -3.36, "default_gateway": "14H", "lat": 23.8, "lon": 121.1, "ci_downlink_adj_cell_50": 15.5, "ci_downlink_adj_cell_eoc": 13.79, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 30.59, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "J5Fu9etyoT932fufJ", "name": "402-2", "satellite": "IPSTAR", "uplink_cf": 28.475, "downlink_cf": 11.075, "bandwidth": 250, "type": "forward", "uplink_beam": "7V", "gt_peak": 20.04, "uplink_pol": "V", "downlink_beam": "402-2", "saturated_eirp_peak": 59.8, "downlink_pol": "V", "transponder": "3280F1", "dynamic_range": 25, "mode": "ALC", "sfd": -60.9, "eirp_up_channel": 75.8921731, "country": "Japan", "contour_50": -1.7, "contour_eoc": -3.36, "default_gateway": "7V", "lat": 36.15, "lon": 139.45, "ci_downlink_adj_cell_50": 22.1, "ci_downlink_adj_cell_eoc": 20.45, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 29.83, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4.5, "intermod": 20}
                ]},
                {"_id": "6fTcqBQMMz9whCPTN", "name": "405-2", "satellite": "IPSTAR", "uplink_cf": 28.475, "downlink_cf": 11.075, "bandwidth": 250, "type": "forward", "uplink_beam": "11H", "gt_peak": 20.4, "uplink_pol": "H", "downlink_beam": "405-2", "saturated_eirp_peak": 60.3, "downlink_pol": "V", "transponder": "3280G1", "dynamic_range": 25, "mode": "ALC", "sfd": -60.83, "eirp_up_channel": 74.8921731, "country": "South Korea", "contour_50": -1.6, "contour_eoc": -3.25, "default_gateway": "11H", "lat": 36.7, "lon": 127.3, "ci_downlink_adj_cell_50": 16.04, "ci_downlink_adj_cell_eoc": 14.4, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 27.57, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "bC3jS2CTA7eKmpaTj", "name": "511", "satellite": "IPSTAR", "uplink_cf": 27.0855, "downlink_cf": 12.2855, "bandwidth": 171, "type": "forward", "uplink_beam": "16V", "gt_peak": 18.01, "uplink_pol": "V", "downlink_beam": "511", "saturated_eirp_peak": 59.6, "downlink_pol": "V", "transponder": "3310J2", "dynamic_range": 25, "mode": "ALC", "sfd": -64.67, "eirp_up_channel": 73.24273412, "country": "New Zealand", "contour_50": -2.5, "contour_eoc": -4.72, "default_gateway": "16V", "lat": -45.1, "lon": 169.69, "ci_downlink_adj_cell_50": 23.4, "ci_downlink_adj_cell_eoc": 17.46, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 30.1, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "iMWhg2eebAAjGYbSF", "name": "512", "satellite": "IPSTAR", "uplink_cf": 27.275, "downlink_cf": 12.475, "bandwidth": 171, "type": "forward", "uplink_beam": "16V", "gt_peak": 18.01, "uplink_pol": "V", "downlink_beam": "512", "saturated_eirp_peak": 59.82, "downlink_pol": "V", "transponder": "3310J2", "dynamic_range": 25, "mode": "ALC", "sfd": -64.67, "eirp_up_channel": 73.24273412, "country": "New Zealand", "contour_50": -2.3, "contour_eoc": -4.61, "default_gateway": "16V", "lat": -41.69, "lon": 173.78, "ci_downlink_adj_cell_50": 25.8, "ci_downlink_adj_cell_eoc": 19.6, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 30.1, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"_id": "u3zsd7jBXYWELvYzK", "name": "513", "satellite": "IPSTAR", "uplink_cf": 27.4645, "downlink_cf": 12.6645, "bandwidth": 171, "type": "forward", "uplink_beam": "16V", "gt_peak": 18.01, "uplink_pol": "V", "downlink_beam": "513", "saturated_eirp_peak": 59.95, "downlink_pol": "V", "transponder": "3310J2", "dynamic_range": 25, "mode": "ALC", "sfd": -64.67, "eirp_up_channel": 73.24273412, "country": "New Zealand", "contour_50": -2.3, "contour_eoc": -4.76, "default_gateway": "16V", "lat": -37.4, "lon": 175.36, "ci_downlink_adj_cell_50": 27.3, "ci_downlink_adj_cell_eoc": 20.83, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 30.1, "current_num_carriers": "multi", "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4, "intermod": 20}
                ]},
                {"name": "BC-100 (102)", "satellite": "IPSTAR", "uplink_cf": 13.875, "downlink_cf": 11.65, "bandwidth": 200, "type": "broadcast", "uplink_beam": "BC-100 (102)", "gt_peak": 16.56, "uplink_pol": "H", "downlink_beam": "BC-100", "saturated_eirp_peak": 58.31, "downlink_pol": "V", "transponder": "3830A1", "dynamic_range": 20, "mode": "ALC", "sfd": -67.49, "eirp_up_channel": 72.92307297, "country": "India", "default_gateway": "BC-100 (102)", "current_num_carriers": "multi", "ci_downlink_adj_cell_50": 25, "ci_downlink_adj_cell_eoc": 23, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 32, "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -5, "intermod": 20}
                ]},
                {"name": "BC-100 (112)", "satellite": "IPSTAR", "uplink_cf": 13.875, "downlink_cf": 11.65, "bandwidth": 200, "type": "broadcast", "uplink_beam": "BC-100 (112)", "gt_peak": 16.07, "uplink_pol": "H", "downlink_beam": "BC-100", "saturated_eirp_peak": 58.31, "downlink_pol": "V", "transponder": "3830A1", "dynamic_range": 20, "mode": "ALC", "sfd": -67.79, "eirp_up_channel": 72.92307297, "country": "India", "default_gateway": "BC-100 (112)", "current_num_carriers": "multi", "ci_downlink_adj_cell_50": 25, "ci_downlink_adj_cell_eoc": 23, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 32, "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -5, "intermod": 20}
                ]},
                {"name": "BC-200 (205-LB)", "satellite": "IPSTAR", "uplink_cf": 13.875, "downlink_cf": 11.65, "bandwidth": 200, "type": "broadcast", "uplink_beam": "BC-200 (205)", "gt_peak": 16.08, "uplink_pol": "H", "downlink_beam": "BC-200 (LB)", "saturated_eirp_peak": 60.85, "downlink_pol": "V", "transponder": "3830C1", "dynamic_range": 20, "mode": "ALC", "sfd": -67.54, "eirp_up_channel": 72.92307297, "country": "Vietnam", "default_gateway": "BC-200 (205)", "current_num_carriers": "multi", "ci_downlink_adj_cell_50": 24, "ci_downlink_adj_cell_eoc": 22, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 29, "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -5, "intermod": 20}
                ]},
                {"name": "BC-200 (207-LB)", "satellite": "IPSTAR", "uplink_cf": 13.875, "downlink_cf": 11.65, "bandwidth": 200, "type": "broadcast", "uplink_beam": "BC-200 (207)", "gt_peak": 16.37, "uplink_pol": "H", "downlink_beam": "BC-200 (LB)", "saturated_eirp_peak": 60.81, "downlink_pol": "V", "transponder": "3830C1", "dynamic_range": 20, "mode": "ALC", "sfd": -67.94, "eirp_up_channel": 72.92307297, "country": "Thailand", "default_gateway": "BC-200 (207)", "current_num_carriers": "multi", "ci_downlink_adj_cell_50": 22, "ci_downlink_adj_cell_eoc": 20, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 29, "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4.9, "intermod": 20}
                ]},
                {"name": "BC-200 (205-HB)", "satellite": "IPSTAR", "uplink_cf": 13.875, "downlink_cf": 11.65, "bandwidth": 200, "type": "broadcast", "uplink_beam": "BC-200 (205)", "gt_peak": 16.08, "uplink_pol": "H", "downlink_beam": "BC-200 (HB)", "saturated_eirp_peak": 60.85, "downlink_pol": "V", "transponder": "3830C1", "dynamic_range": 20, "mode": "ALC", "sfd": -67.54, "eirp_up_channel": 72.92307297, "country": "Vietnam", "default_gateway": "BC-200 (205)", "current_num_carriers": "multi", "ci_downlink_adj_cell_50": 24, "ci_downlink_adj_cell_eoc": 22, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 29, "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -5, "intermod": 20}
                ]},
                {"name": "BC-200 (207-HB)", "satellite": "IPSTAR", "uplink_cf": 13.875, "downlink_cf": 11.65, "bandwidth": 200, "type": "broadcast", "uplink_beam": "BC-200 (207)", "gt_peak": 16.37, "uplink_pol": "H", "downlink_beam": "BC-200 (HB)", "saturated_eirp_peak": 60.81, "downlink_pol": "V", "transponder": "3830C1", "dynamic_range": 20, "mode": "ALC", "sfd": -67.94, "eirp_up_channel": 72.92307297, "country": "Thailand", "default_gateway": "BC-200 (207)", "current_num_carriers": "multi", "ci_downlink_adj_cell_50": 22, "ci_downlink_adj_cell_eoc": 20, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 29, "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -4.9, "intermod": 20}
                ]},
                {"name": "BC-300 (304-LB)", "satellite": "IPSTAR", "uplink_cf": 13.875, "downlink_cf": 11.65, "bandwidth": 200, "type": "broadcast", "uplink_beam": "BC-300 (304)", "gt_peak": 12.37, "uplink_pol": "H", "downlink_beam": "BC-300 (LB)", "saturated_eirp_peak": 57.04, "downlink_pol": "V", "transponder": "38300", "dynamic_range": 20, "mode": "ALC", "sfd": -68.4, "eirp_up_channel": 72.92307297, "country": "China", "default_gateway": "BC-300 (304)", "current_num_carriers": "multi", "ci_downlink_adj_cell_50": 18.7, "ci_downlink_adj_cell_eoc": 16.7, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 25.4, "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -5, "intermod": 20}
                ]},
                {"name": "BC-300 (313-LB)", "satellite": "IPSTAR", "uplink_cf": 13.875, "downlink_cf": 11.65, "bandwidth": 200, "type": "broadcast", "uplink_beam": "BC-300 (313)", "gt_peak": 9.53, "uplink_pol": "H", "downlink_beam": "BC-300 (LB)", "saturated_eirp_peak": 57.07, "downlink_pol": "V", "transponder": "38300", "dynamic_range": 20, "mode": "ALC", "sfd": -70.2, "eirp_up_channel": 72.92307297, "country": "China", "default_gateway": "BC-300 (313)", "current_num_carriers": "multi", "ci_downlink_adj_cell_50": 18.7, "ci_downlink_adj_cell_eoc": 16.7, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 26.6, "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -5, "intermod": 20}
                ]},
                {"name": "BC-300 (320-LB)", "satellite": "IPSTAR", "uplink_cf": 13.875, "downlink_cf": 11.65, "bandwidth": 200, "type": "broadcast", "uplink_beam": "BC-300 (320)", "gt_peak": 12.79, "uplink_pol": "H", "downlink_beam": "BC-300 (LB)", "saturated_eirp_peak": 57.04, "downlink_pol": "V", "transponder": "38300", "dynamic_range": 20, "mode": "ALC", "sfd": -67.9, "eirp_up_channel": 72.92307297, "country": "China", "default_gateway": "BC-300 (320)", "current_num_carriers": "multi", "ci_downlink_adj_cell_50": 18.7, "ci_downlink_adj_cell_eoc": 16.7, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 21.6, "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -5, "intermod": 20}
                ]},
                {"name": "BC-300 (322-LB)", "satellite": "IPSTAR", "uplink_cf": 13.875, "downlink_cf": 11.65, "bandwidth": 200, "type": "broadcast", "uplink_beam": "BC-300 (322)", "gt_peak": 10.39, "uplink_pol": "H", "downlink_beam": "BC-300 (LB)", "saturated_eirp_peak": 57.07, "downlink_pol": "V", "transponder": "38300", "dynamic_range": 20, "mode": "ALC", "sfd": -69.82, "eirp_up_channel": 72.92307297, "country": "Taiwan", "default_gateway": "BC-300 (322)", "current_num_carriers": "multi", "ci_downlink_adj_cell_50": 18.7, "ci_downlink_adj_cell_eoc": 16.7, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 19.7, "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -5, "intermod": 20}
                ]},
                {"name": "BC-300 (304-HB)", "satellite": "IPSTAR", "uplink_cf": 13.875, "downlink_cf": 11.65, "bandwidth": 200, "type": "broadcast", "uplink_beam": "BC-300 (304)", "gt_peak": 12.37, "uplink_pol": "H", "downlink_beam": "BC-300 (HB)", "saturated_eirp_peak": 57.04, "downlink_pol": "V", "transponder": "38300", "dynamic_range": 20, "mode": "ALC", "sfd": -68.4, "eirp_up_channel": 72.92307297, "country": "China", "default_gateway": "BC-300 (304)", "current_num_carriers": "multi", "ci_downlink_adj_cell_50": 18.7, "ci_downlink_adj_cell_eoc": 16.7, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 25.4, "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -5, "intermod": 20}
                ]},
                {"name": "BC-300 (313-HB)", "satellite": "IPSTAR", "uplink_cf": 13.875, "downlink_cf": 11.65, "bandwidth": 200, "type": "broadcast", "uplink_beam": "BC-300 (313)", "gt_peak": 9.53, "uplink_pol": "H", "downlink_beam": "BC-300 (HB)", "saturated_eirp_peak": 57.07, "downlink_pol": "V", "transponder": "38300", "dynamic_range": 20, "mode": "ALC", "sfd": -70.2, "eirp_up_channel": 72.92307297, "country": "China", "default_gateway": "BC-300 (313)", "current_num_carriers": "multi", "ci_downlink_adj_cell_50": 18.7, "ci_downlink_adj_cell_eoc": 16.7, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 26.6, "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -5, "intermod": 20}
                ]},
                {"name": "BC-300 (320-HB)", "satellite": "IPSTAR", "uplink_cf": 13.875, "downlink_cf": 11.65, "bandwidth": 200, "type": "broadcast", "uplink_beam": "BC-300 (320)", "gt_peak": 12.79, "uplink_pol": "H", "downlink_beam": "BC-300 (HB)", "saturated_eirp_peak": 57.04, "downlink_pol": "V", "transponder": "38300", "dynamic_range": 20, "mode": "ALC", "sfd": -67.9, "eirp_up_channel": 72.92307297, "country": "China", "default_gateway": "BC-300 (320)", "current_num_carriers": "multi", "ci_downlink_adj_cell_50": 18.7, "ci_downlink_adj_cell_eoc": 16.7, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 21.6, "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -5, "intermod": 20}
                ]},
                {"name": "BC-300 (322-HB)", "satellite": "IPSTAR", "uplink_cf": 13.875, "downlink_cf": 11.65, "bandwidth": 200, "type": "broadcast", "uplink_beam": "BC-300 (322)", "gt_peak": 10.39, "uplink_pol": "H", "downlink_beam": "BC-300 (HB)", "saturated_eirp_peak": 57.07, "downlink_pol": "V", "transponder": "38300", "dynamic_range": 20, "mode": "ALC", "sfd": -69.82, "eirp_up_channel": 72.92307297, "country": "Taiwan", "default_gateway": "BC-300 (322)", "current_num_carriers": "multi", "ci_downlink_adj_cell_50": 18.7, "ci_downlink_adj_cell_eoc": 16.7, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 19.7, "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -5, "intermod": 20}
                ]},
                {"name": "BC-400 (402)", "satellite": "IPSTAR", "uplink_cf": 13.875, "downlink_cf": 11.65, "bandwidth": 200, "type": "broadcast", "uplink_beam": "BC-400 (402)", "gt_peak": 19.58, "uplink_pol": "H", "downlink_beam": "BC-400", "saturated_eirp_peak": 60.64, "downlink_pol": "V", "transponder": "3820A", "dynamic_range": 20, "mode": "ALC", "sfd": -67.3, "eirp_up_channel": 69.92307297, "country": "Japan", "default_gateway": "BC-400 (402)", "current_num_carriers": "multi", "ci_downlink_adj_cell_50": 29, "ci_downlink_adj_cell_eoc": 27, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 22.3, "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -5, "intermod": 20}
                ]},
                {"name": "BC-500 (507)", "satellite": "IPSTAR", "uplink_cf": 13.875, "downlink_cf": 11.65, "bandwidth": 200, "type": "broadcast", "uplink_beam": "BC-500 (507)", "gt_peak": 20.48, "uplink_pol": "H", "downlink_beam": "BC-500", "saturated_eirp_peak": 57.67, "downlink_pol": "V", "transponder": "3830G1", "dynamic_range": 20, "mode": "ALC", "sfd": -66.2, "eirp_up_channel": 69.92307297, "country": "Australia", "default_gateway": "BC-500 (507)", "current_num_carriers": "multi", "ci_downlink_adj_cell_50": 33, "ci_downlink_adj_cell_eoc": 31, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 40, "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -5, "intermod": 20}
                ]},
                {"name": "BC-500 (NZ)", "satellite": "IPSTAR", "uplink_cf": 13.875, "downlink_cf": 11.65, "bandwidth": 200, "type": "broadcast", "uplink_beam": "BC-500 (NZ)", "gt_peak": 20.48, "uplink_pol": "H", "downlink_beam": "BC-500", "saturated_eirp_peak": 57.67, "downlink_pol": "V", "transponder": "3830G1", "dynamic_range": 20, "mode": "ALC", "sfd": -66.2, "eirp_up_channel": 69.92307297, "country": "New Zealand", "default_gateway": "BC-500 (NZ)", "current_num_carriers": "multi", "ci_downlink_adj_cell_50": 33, "ci_downlink_adj_cell_eoc": 31, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 40, "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -5, "intermod": 20}
                ]},
                {"name": "BC-600 (214-LB)", "satellite": "IPSTAR", "uplink_cf": 13.875, "downlink_cf": 11.65, "bandwidth": 200, "type": "broadcast", "uplink_beam": "BC-600 (214)", "gt_peak": 16.76, "uplink_pol": "H", "downlink_beam": "BC-600 (LB)", "saturated_eirp_peak": 58.12, "downlink_pol": "V", "transponder": "3830D1", "dynamic_range": 20, "mode": "ALC", "sfd": -67.6, "eirp_up_channel": 75.42307297, "country": "Malaysia", "default_gateway": "BC-600 (214)", "current_num_carriers": "multi", "ci_downlink_adj_cell_50": 20, "ci_downlink_adj_cell_eoc": 18, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 28, "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -5, "intermod": 20}
                ]},
                {"name": "BC-600 (604-LB)", "satellite": "IPSTAR", "uplink_cf": 13.875, "downlink_cf": 11.65, "bandwidth": 200, "type": "broadcast", "uplink_beam": "BC-600 (604)", "gt_peak": 14.25, "uplink_pol": "H", "downlink_beam": "BC-600 (LB)", "saturated_eirp_peak": 57.79, "downlink_pol": "V", "transponder": "3830D1", "dynamic_range": 20, "mode": "ALC", "sfd": -69.1, "eirp_up_channel": 75.42307297, "country": "Indonesia", "default_gateway": "BC-600 (604)", "current_num_carriers": "multi", "ci_downlink_adj_cell_50": 20, "ci_downlink_adj_cell_eoc": 18, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 32.7, "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -3, "intermod": 20}
                ]},
                {"name": "BC-600 (214-HB)", "satellite": "IPSTAR", "uplink_cf": 13.875, "downlink_cf": 11.65, "bandwidth": 200, "type": "broadcast", "uplink_beam": "BC-600 (214)", "gt_peak": 16.76, "uplink_pol": "H", "downlink_beam": "BC-600 (HB)", "saturated_eirp_peak": 58.12, "downlink_pol": "V", "transponder": "3830D1", "dynamic_range": 20, "mode": "ALC", "sfd": -67.6, "eirp_up_channel": 75.42307297, "country": "Malaysia", "default_gateway": "BC-600 (214)", "current_num_carriers": "multi", "ci_downlink_adj_cell_50": 20, "ci_downlink_adj_cell_eoc": 18, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 28, "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -5, "intermod": 20}
                ]},
                {"name": "BC-600 (604-HB)", "satellite": "IPSTAR", "uplink_cf": 13.875, "downlink_cf": 11.65, "bandwidth": 200, "type": "broadcast", "uplink_beam": "BC-600 (604)", "gt_peak": 14.25, "uplink_pol": "H", "downlink_beam": "BC-600 (HB)", "saturated_eirp_peak": 57.79, "downlink_pol": "V", "transponder": "3830D1", "dynamic_range": 20, "mode": "ALC", "sfd": -69.1, "eirp_up_channel": 75.42307297, "country": "Indonesia", "default_gateway": "BC-600 (604)", "current_num_carriers": "multi", "ci_downlink_adj_cell_50": 20, "ci_downlink_adj_cell_eoc": 18, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 32.7, "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -3, "intermod": 20}
                ]},
                {"name": "BC-700 (701)", "satellite": "IPSTAR", "uplink_cf": 13.875, "downlink_cf": 11.65, "bandwidth": 200, "type": "broadcast", "uplink_beam": "BC-700 (701)", "gt_peak": 20.16, "uplink_pol": "H", "downlink_beam": "BC-700", "saturated_eirp_peak": 60.11, "downlink_pol": "V", "transponder": "3820C", "dynamic_range": 20, "mode": "ALC", "sfd": -66.8, "eirp_up_channel": 72.92307297, "country": "Philippines", "default_gateway": "BC-700 (701)", "current_num_carriers": "multi", "ci_downlink_adj_cell_50": 25, "ci_downlink_adj_cell_eoc": 23, "ci_downlink_adj_sat": 25, "ci_uplink_adj_cell": 21.6, "ci_uplink_adj_sat": 25, "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 17},
                    {"num_carriers": "multi", "ibo": 0, "obo": -5, "intermod": 20}
                ]}
            ];
            _.each(fwd_data, function (x) {
                Channels.insert(x);
            })
            var rtn_data = [
                {"_id": "NgFgvYHzFDDsZx7g3", "name": "100", "satellite": "IPSTAR", "uplink_cf": 14.058, "downlink_cf": 18.358, "bandwidth": 116, "type": "return", "uplink_beam": "100", "gt_peak": 18.7, "uplink_pol": "H", "downlink_beam": "1V", "saturated_eirp_peak": 57.2, "downlink_pol": "V", "transponder": "3610C1", "dynamic_range": 25, "mode": "ALC", "sfd": -72.09542011, "designed_deepin": 9, "actual": -9.5, "country": "India", "contour_50": -3.18, "contour_eoc": -5.94, "default_gateway": "1V", "lat": 36.24, "lon": 77.02, "ci_uplink_adj_cell_50": 25.1, "ci_uplink_adj_cell_eoc": 20.5, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 22.69, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "tE3mXjFQSvTJb4m5Y", "name": "101", "satellite": "IPSTAR", "uplink_cf": 14.317, "downlink_cf": 18.617, "bandwidth": 116, "type": "return", "uplink_beam": "101", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "1V", "saturated_eirp_peak": 57.2, "downlink_pol": "V", "transponder": "3610C1", "dynamic_range": 25, "mode": "ALC", "sfd": -72.04542011, "designed_deepin": 9, "actual": -9.5, "country": "India", "contour_50": -3.29, "contour_eoc": -6.49, "default_gateway": "1V", "lat": 31.75, "lon": 77.35, "ci_uplink_adj_cell_50": 23.9, "ci_uplink_adj_cell_eoc": 19.46, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 22.69, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "aa689aQs4J9fHm7BS", "name": "102", "satellite": "IPSTAR", "uplink_cf": 14.058, "downlink_cf": 18.358, "bandwidth": 116, "type": "return", "uplink_beam": "102", "gt_peak": 18.9, "uplink_pol": "H", "downlink_beam": "1H", "saturated_eirp_peak": 56.3, "downlink_pol": "H", "transponder": "3610B1", "dynamic_range": 25, "mode": "ALC", "sfd": -71.85542011, "designed_deepin": 9, "actual": -9.5, "country": "India", "contour_50": -2.89, "contour_eoc": -5.9, "default_gateway": "1H", "lat": 27.79, "lon": 76.2, "ci_uplink_adj_cell_50": 22.2, "ci_uplink_adj_cell_eoc": 19.04, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 22.7, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "3BxwaZ4Mys6r74CM5", "name": "103", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 18.4875, "bandwidth": 116, "type": "return", "uplink_beam": "103", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "1V", "saturated_eirp_peak": 57.2, "downlink_pol": "V", "transponder": "3610C1", "dynamic_range": 25, "mode": "ALC", "sfd": -71.40542011, "designed_deepin": 9, "actual": -9.5, "country": "India", "contour_50": -2.92, "contour_eoc": -5.85, "default_gateway": "1V", "lat": 26.39, "lon": 83.2, "ci_uplink_adj_cell_50": 22.7, "ci_uplink_adj_cell_eoc": 19.4, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 22.69, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "geC3fuhMrQM4J2You", "name": "104", "satellite": "IPSTAR", "uplink_cf": 14.317, "downlink_cf": 20.017, "bandwidth": 116, "type": "return", "uplink_beam": "104", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "1V", "saturated_eirp_peak": 57.2, "downlink_pol": "V", "transponder": "3610C1", "dynamic_range": 25, "mode": "ALC", "sfd": -71.44542011, "designed_deepin": 9, "actual": -9.5, "country": "India", "contour_50": -2.8, "contour_eoc": -5.89, "default_gateway": "1V", "lat": 24.45, "lon": 90, "ci_uplink_adj_cell_50": 23.5, "ci_uplink_adj_cell_eoc": 19.74, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 22.69, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "Jino8FkAaCQYp8aS5", "name": "105", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 19.8875, "bandwidth": 116, "type": "return", "uplink_beam": "105", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "1V", "saturated_eirp_peak": 57.2, "downlink_pol": "V", "transponder": "3610C1", "dynamic_range": 25, "mode": "ALC", "sfd": -71.24542011, "designed_deepin": 9, "actual": -9.5, "country": "India", "contour_50": -2.72, "contour_eoc": -5.69, "default_gateway": "1V", "lat": 26.57, "lon": 94.09, "ci_uplink_adj_cell_50": 23.5, "ci_uplink_adj_cell_eoc": 19.92, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 22.69, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "49c6Z5bNgGdRAtTJM", "name": "106", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 18.4875, "bandwidth": 116, "type": "return", "uplink_beam": "106", "gt_peak": 19.2, "uplink_pol": "H", "downlink_beam": "1H", "saturated_eirp_peak": 56.3, "downlink_pol": "H", "transponder": "3610B1", "dynamic_range": 25, "mode": "ALC", "sfd": -71.38542011, "designed_deepin": 9, "actual": -9.5, "country": "India", "contour_50": -2.75, "contour_eoc": -5.73, "default_gateway": "1H", "lat": 24.62, "lon": 73.2, "ci_uplink_adj_cell_50": 22.1, "ci_uplink_adj_cell_eoc": 18.8, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 22.7, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "T4oGNePfgutxH4vYt", "name": "107", "satellite": "IPSTAR", "uplink_cf": 14.317, "downlink_cf": 20.017, "bandwidth": 116, "type": "return", "uplink_beam": "107", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "1H", "saturated_eirp_peak": 56.3, "downlink_pol": "H", "transponder": "3610B1", "dynamic_range": 25, "mode": "ALC", "sfd": -71.31542011, "designed_deepin": 9, "actual": -9.5, "country": "India", "contour_50": -2.8, "contour_eoc": -5.76, "default_gateway": "1H", "lat": 23.24, "lon": 80.5, "ci_uplink_adj_cell_50": 21.7, "ci_uplink_adj_cell_eoc": 18.37, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 22.7, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "uzn9GYsXMNBrfGDBi", "name": "108", "satellite": "IPSTAR", "uplink_cf": 14.058, "downlink_cf": 19.758, "bandwidth": 116, "type": "return", "uplink_beam": "108", "gt_peak": 19.1, "uplink_pol": "H", "downlink_beam": "1V", "saturated_eirp_peak": 57.2, "downlink_pol": "V", "transponder": "3610C1", "dynamic_range": 25, "mode": "ALC", "sfd": -71.27542011, "designed_deepin": 9, "actual": -9.5, "country": "India", "contour_50": -2.62, "contour_eoc": -5.52, "default_gateway": "1V", "lat": 21.97, "lon": 86.5, "ci_uplink_adj_cell_50": 21.9, "ci_uplink_adj_cell_eoc": 18.82, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 22.69, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "g4SXnkip5TogdDxfH", "name": "109", "satellite": "IPSTAR", "uplink_cf": 14.317, "downlink_cf": 18.617, "bandwidth": 116, "type": "return", "uplink_beam": "109", "gt_peak": 19.2, "uplink_pol": "H", "downlink_beam": "1H", "saturated_eirp_peak": 56.3, "downlink_pol": "H", "transponder": "3610B1", "dynamic_range": 25, "mode": "ALC", "sfd": -71.45542011, "designed_deepin": 9, "actual": -9.5, "country": "India", "contour_50": -2.84, "contour_eoc": -5.8, "default_gateway": "1H", "lat": 21.71, "lon": 69.76, "ci_uplink_adj_cell_50": 23.5, "ci_uplink_adj_cell_eoc": 20.46, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 22.7, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "5z8unk2KHfFxFCCSK", "name": "110", "satellite": "IPSTAR", "uplink_cf": 14.058, "downlink_cf": 19.758, "bandwidth": 116, "type": "return", "uplink_beam": "110", "gt_peak": 19.1, "uplink_pol": "H", "downlink_beam": "1H", "saturated_eirp_peak": 56.3, "downlink_pol": "H", "transponder": "3610B1", "dynamic_range": 25, "mode": "ALC", "sfd": -71.29542011, "designed_deepin": 9, "actual": -9.5, "country": "India", "contour_50": -2.62, "contour_eoc": -5.54, "default_gateway": "1H", "lat": 20.28, "lon": 77.6, "ci_uplink_adj_cell_50": 22.1, "ci_uplink_adj_cell_eoc": 19.07, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 22.7, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "Akhtf2WphmWeioxRa", "name": "111", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 19.8875, "bandwidth": 116, "type": "return", "uplink_beam": "111", "gt_peak": 19.5, "uplink_pol": "H", "downlink_beam": "1H", "saturated_eirp_peak": 56.3, "downlink_pol": "H", "transponder": "3610B1", "dynamic_range": 25, "mode": "ALC", "sfd": -71.72542011, "designed_deepin": 9, "actual": -9.5, "country": "India", "contour_50": -3.05, "contour_eoc": -6.37, "default_gateway": "1H", "lat": 18.86, "lon": 83.8, "ci_uplink_adj_cell_50": 20.8, "ci_uplink_adj_cell_eoc": 17.57, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 22.7, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "mM8D6jn9kB24P9sK6", "name": "112", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 19.8875, "bandwidth": 116, "type": "return", "uplink_beam": "112", "gt_peak": 19.4, "uplink_pol": "H", "downlink_beam": "2V", "saturated_eirp_peak": 57.8, "downlink_pol": "V", "transponder": "3610L1", "dynamic_range": 25, "mode": "ALC", "sfd": -71.76542011, "designed_deepin": 9, "actual": -9.5, "country": "India", "contour_50": -3.14, "contour_eoc": -6.31, "default_gateway": "2V", "lat": 17.38, "lon": 74.15, "ci_uplink_adj_cell_50": 21.2, "ci_uplink_adj_cell_eoc": 17.67, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 24.82, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "iZjTXPN38PaJB2HS9", "name": "113", "satellite": "IPSTAR", "uplink_cf": 14.317, "downlink_cf": 18.617, "bandwidth": 116, "type": "return", "uplink_beam": "113", "gt_peak": 19.4, "uplink_pol": "H", "downlink_beam": "2V", "saturated_eirp_peak": 57.8, "downlink_pol": "V", "transponder": "3610L1", "dynamic_range": 25, "mode": "ALC", "sfd": -71.70542011, "designed_deepin": 9, "actual": -9.5, "country": "India", "contour_50": -2.97, "contour_eoc": -6.25, "default_gateway": "2V", "lat": 16.06, "lon": 80.63, "ci_uplink_adj_cell_50": 22.9, "ci_uplink_adj_cell_eoc": 19.43, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 24.82, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "LAJNtKWcsbG28KqRP", "name": "114", "satellite": "IPSTAR", "uplink_cf": 14.058, "downlink_cf": 18.358, "bandwidth": 116, "type": "return", "uplink_beam": "114", "gt_peak": 18.9, "uplink_pol": "H", "downlink_beam": "2V", "saturated_eirp_peak": 57.8, "downlink_pol": "V", "transponder": "3610L1", "dynamic_range": 25, "mode": "ALC", "sfd": -71.44542011, "designed_deepin": 9, "actual": -9.5, "country": "India", "contour_50": -2.54, "contour_eoc": -5.49, "default_gateway": "2V", "lat": 13.1, "lon": 77.43, "ci_uplink_adj_cell_50": 24.4, "ci_uplink_adj_cell_eoc": 21.56, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 24.82, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "sv7DW3su7zF6eKD3v", "name": "115", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 18.4875, "bandwidth": 116, "type": "return", "uplink_beam": "115", "gt_peak": 19, "uplink_pol": "H", "downlink_beam": "2V", "saturated_eirp_peak": 57.8, "downlink_pol": "V", "transponder": "3610L1", "dynamic_range": 25, "mode": "ALC", "sfd": -71.59542011, "designed_deepin": 9, "actual": -9.5, "country": "India", "contour_50": -2.75, "contour_eoc": -5.74, "default_gateway": "2V", "lat": 9.08, "lon": 78.42, "ci_uplink_adj_cell_50": 24, "ci_uplink_adj_cell_eoc": 20.63, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 24.82, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "7zSxE6qGwWjxxEvsP", "name": "201", "satellite": "IPSTAR", "uplink_cf": 14.058, "downlink_cf": 19.758, "bandwidth": 116, "type": "return", "uplink_beam": "201", "gt_peak": 18.8, "uplink_pol": "H", "downlink_beam": "17H", "saturated_eirp_peak": 55.4, "downlink_pol": "H", "transponder": "3610J1", "dynamic_range": 25, "mode": "ALC", "sfd": -71.48542011, "designed_deepin": 9, "actual": -9.5, "country": "Myanmar", "contour_50": -2.49, "contour_eoc": -5.43, "default_gateway": "17H", "lat": 21.56, "lon": 95.9, "ci_uplink_adj_cell_50": 23, "ci_uplink_adj_cell_eoc": 19.41, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 25.73, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "uzdfnhDQbfy4Suf58", "name": "202", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 19.8875, "bandwidth": 116, "type": "return", "uplink_beam": "202", "gt_peak": 19, "uplink_pol": "H", "downlink_beam": "17H", "saturated_eirp_peak": 55.4, "downlink_pol": "H", "transponder": "3610J1", "dynamic_range": 25, "mode": "ALC", "sfd": -71.81542011, "designed_deepin": 9, "actual": -9.5, "country": "Myanmar", "contour_50": -2.87, "contour_eoc": -5.96, "default_gateway": "17H", "lat": 17.22, "lon": 95.5, "ci_uplink_adj_cell_50": 21.4, "ci_uplink_adj_cell_eoc": 17.66, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 25.73, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "DDiDdTAAGAHoxHTgc", "name": "203", "satellite": "IPSTAR", "uplink_cf": 14.317, "downlink_cf": 18.617, "bandwidth": 116, "type": "return", "uplink_beam": "203", "gt_peak": 19.2, "uplink_pol": "H", "downlink_beam": "3H", "saturated_eirp_peak": 58.4, "downlink_pol": "H", "transponder": "3610J1", "dynamic_range": 25, "mode": "ALC", "sfd": -71.65542011, "designed_deepin": 9, "actual": -9.5, "country": "Thailand", "contour_50": -2.85, "contour_eoc": -6, "default_gateway": "3H", "lat": 17.98, "lon": 99.73, "ci_uplink_adj_cell_50": 20.8, "ci_uplink_adj_cell_eoc": 17.4, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 28.64, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "YaqP3xAhEq2HAgNPD", "name": "204", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 18.4875, "bandwidth": 116, "type": "return", "uplink_beam": "204", "gt_peak": 18.9, "uplink_pol": "H", "downlink_beam": "3H", "saturated_eirp_peak": 58.4, "downlink_pol": "H", "transponder": "3610J1", "dynamic_range": 25, "mode": "ALC", "sfd": -71.90542011, "designed_deepin": 9, "actual": -9.5, "country": "Thailand", "contour_50": -2.86, "contour_eoc": -5.95, "default_gateway": "3H", "lat": 16.15, "lon": 103.66, "ci_uplink_adj_cell_50": 21.5, "ci_uplink_adj_cell_eoc": 18.25, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 28.64, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "vENySStdQarmr5Wes", "name": "205", "satellite": "IPSTAR", "uplink_cf": 14.058, "downlink_cf": 19.758, "bandwidth": 116, "type": "return", "uplink_beam": "205", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "15H", "saturated_eirp_peak": 61, "downlink_pol": "H", "transponder": "3610K1", "dynamic_range": 25, "mode": "ALC", "sfd": -71.03542011, "designed_deepin": 9, "actual": -9.5, "country": "Vietnam", "contour_50": -2.65, "contour_eoc": -5.48, "default_gateway": "15H", "lat": 21, "lon": 105.2, "ci_uplink_adj_cell_50": 18.3, "ci_uplink_adj_cell_eoc": 15.53, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 24.46, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "ofguHTMmtfgJ6TAva", "name": "206", "satellite": "IPSTAR", "uplink_cf": 14.317, "downlink_cf": 20.017, "bandwidth": 116, "type": "return", "uplink_beam": "206", "gt_peak": 19.6, "uplink_pol": "H", "downlink_beam": "15H", "saturated_eirp_peak": 61, "downlink_pol": "H", "transponder": "3610K1", "dynamic_range": 25, "mode": "ALC", "sfd": -70.84542011, "designed_deepin": 9, "actual": -9.5, "country": "Vietnam", "contour_50": -2.66, "contour_eoc": -5.59, "default_gateway": "15H", "lat": 17.2, "lon": 107.5, "ci_uplink_adj_cell_50": 17.5, "ci_uplink_adj_cell_eoc": 14.54, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 24.46, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "wPrCZDAsoitkQd7Tm", "name": "207", "satellite": "IPSTAR", "uplink_cf": 14.058, "downlink_cf": 19.758, "bandwidth": 116, "type": "return", "uplink_beam": "207", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "3H", "saturated_eirp_peak": 62, "downlink_pol": "V", "transponder": "3610H1", "dynamic_range": 25, "mode": "ALC", "sfd": -72.25542011, "designed_deepin": 9, "actual": -9.5, "country": "Thailand", "contour_50": -3.5, "contour_eoc": -6.7, "default_gateway": "3H", "lat": 14, "lon": 100.4, "ci_uplink_adj_cell_50": 22.7, "ci_uplink_adj_cell_eoc": 19.25, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 22.69, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "y5DZhDNTpJXAeK9QS", "name": "208", "satellite": "IPSTAR", "uplink_cf": 14.317, "downlink_cf": 20.017, "bandwidth": 116, "type": "return", "uplink_beam": "208", "gt_peak": 18.9, "uplink_pol": "H", "downlink_beam": "18H", "saturated_eirp_peak": 57.4, "downlink_pol": "H", "transponder": "3610J1", "dynamic_range": 25, "mode": "ALC", "sfd": -71.84542011, "designed_deepin": 9, "actual": -9.5, "country": "Cambodia", "contour_50": -2.91, "contour_eoc": -5.89, "default_gateway": "18H", "lat": 12.27, "lon": 104.33, "ci_uplink_adj_cell_50": 18.8, "ci_uplink_adj_cell_eoc": 15.51, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 26.77, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "SHefTZTEcNdYHnKFt", "name": "209", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 19.8875, "bandwidth": 116, "type": "return", "uplink_beam": "209", "gt_peak": 19.9, "uplink_pol": "H", "downlink_beam": "3V", "saturated_eirp_peak": 62, "downlink_pol": "V", "transponder": "3610H1", "dynamic_range": 25, "mode": "ALC", "sfd": -71.40542011, "designed_deepin": 9, "actual": -9.5, "country": "Thailand", "contour_50": -3.1, "contour_eoc": -6.45, "default_gateway": "3V", "lat": 10.75, "lon": 98.6, "ci_uplink_adj_cell_50": 20.1, "ci_uplink_adj_cell_eoc": 16.3, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 25.3, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "kcEZK8oxk8xj7maaE", "name": "210", "satellite": "IPSTAR", "uplink_cf": 14.058, "downlink_cf": 18.358, "bandwidth": 116, "type": "return", "uplink_beam": "210", "gt_peak": 18.5, "uplink_pol": "H", "downlink_beam": "15H", "saturated_eirp_peak": 61, "downlink_pol": "H", "transponder": "3610K1", "dynamic_range": 25, "mode": "ALC", "sfd": -71.83542011, "designed_deepin": 9, "actual": -9.5, "country": "Vietnam", "contour_50": -2.76, "contour_eoc": -5.48, "default_gateway": "15H", "lat": 13.2, "lon": 108.3, "ci_uplink_adj_cell_50": 21.6, "ci_uplink_adj_cell_eoc": 18.39, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 24.46, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "rxhiXqp9K72XpCaY5", "name": "211", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 18.4875, "bandwidth": 116, "type": "return", "uplink_beam": "211", "gt_peak": 18.7, "uplink_pol": "H", "downlink_beam": "15H", "saturated_eirp_peak": 61, "downlink_pol": "H", "transponder": "3610K1", "dynamic_range": 25, "mode": "ALC", "sfd": -71.91542011, "designed_deepin": 9, "actual": -9.5, "country": "Vietnam", "contour_50": -2.86, "contour_eoc": -5.76, "default_gateway": "15H", "lat": 9.57, "lon": 107.16, "ci_uplink_adj_cell_50": 21.3, "ci_uplink_adj_cell_eoc": 17.59, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 24.46, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "mZRTyhmR3wsSiHrXT", "name": "213", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 19.8875, "bandwidth": 116, "type": "return", "uplink_beam": "213", "gt_peak": 19.6, "uplink_pol": "H", "downlink_beam": "13H", "saturated_eirp_peak": 61.6, "downlink_pol": "H", "transponder": "3610T1", "dynamic_range": 25, "mode": "ALC", "sfd": -71.86542011, "designed_deepin": 9, "actual": -9.5, "country": "Malaysia", "contour_50": -3.28, "contour_eoc": -6.61, "default_gateway": "13H", "lat": 1.17, "lon": 104.5, "ci_uplink_adj_cell_50": 20.6, "ci_uplink_adj_cell_eoc": 16.91, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 26.87, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "bdbc9snnjZ6EziAfA", "name": "214", "satellite": "IPSTAR", "uplink_cf": 14.058, "downlink_cf": 19.758, "bandwidth": 116, "type": "return", "uplink_beam": "214", "gt_peak": 19.5, "uplink_pol": "H", "downlink_beam": "13H", "saturated_eirp_peak": 61.6, "downlink_pol": "H", "transponder": "3610T1", "dynamic_range": 25, "mode": "ALC", "sfd": -72.10542011, "designed_deepin": 9, "actual": -9.5, "country": "Malaysia", "contour_50": -3.52, "contour_eoc": -6.75, "default_gateway": "13H", "lat": 3.95, "lon": 102.05, "ci_uplink_adj_cell_50": 24.1, "ci_uplink_adj_cell_eoc": 20.15, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 26.87, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "aKHedmgnrCqsCKcw9", "name": "215", "satellite": "IPSTAR", "uplink_cf": 14.058, "downlink_cf": 18.358, "bandwidth": 116, "type": "return", "uplink_beam": "215", "gt_peak": 18.1, "uplink_pol": "H", "downlink_beam": "13H", "saturated_eirp_peak": 62.8, "downlink_pol": "H", "transponder": "3610R1", "dynamic_range": 25, "mode": "ALC", "sfd": -71.89542011, "designed_deepin": 9, "actual": -9.5, "country": "Malaysia", "contour_50": -2.56, "contour_eoc": -5.14, "default_gateway": "13H", "lat": 1.57, "lon": 111.38, "ci_uplink_adj_cell_50": 24.5, "ci_uplink_adj_cell_eoc": 21.33, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 26.87, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "qWvs53PEpDWASJ6Dh", "name": "216", "satellite": "IPSTAR", "uplink_cf": 14.317, "downlink_cf": 18.617, "bandwidth": 116, "type": "return", "uplink_beam": "216", "gt_peak": 18.3, "uplink_pol": "H", "downlink_beam": "13H", "saturated_eirp_peak": 62.8, "downlink_pol": "H", "transponder": "3610R1", "dynamic_range": 25, "mode": "ALC", "sfd": -71.94542011, "designed_deepin": 9, "actual": -9.5, "country": "Malaysia", "contour_50": -2.75, "contour_eoc": -5.39, "default_gateway": "13H", "lat": 3.78, "lon": 114.32, "ci_uplink_adj_cell_50": 24.9, "ci_uplink_adj_cell_eoc": 20.87, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 26.87, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "gr64won5DpMtsThmu", "name": "217", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 18.4875, "bandwidth": 116, "type": "return", "uplink_beam": "217", "gt_peak": 18, "uplink_pol": "H", "downlink_beam": "13H", "saturated_eirp_peak": 62.8, "downlink_pol": "H", "transponder": "3610R1", "dynamic_range": 25, "mode": "ALC", "sfd": -72.70542011, "designed_deepin": 9, "actual": -9.5, "country": "Malaysia", "contour_50": -3.04, "contour_eoc": -5.85, "default_gateway": "13H", "lat": 5.84, "lon": 117.43, "ci_uplink_adj_cell_50": 23.1, "ci_uplink_adj_cell_eoc": 19.39, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 26.87, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "eWjxjAXLKv7sBQiHW", "name": "301", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 19.8875, "bandwidth": 116, "type": "return", "uplink_beam": "301", "gt_peak": 18.7, "uplink_pol": "H", "downlink_beam": "4H", "saturated_eirp_peak": 55.6, "downlink_pol": "H", "transponder": "3620K1", "dynamic_range": 25, "mode": "ALC", "sfd": -72.50542011, "designed_deepin": 9, "actual": -9.5, "country": "China", "contour_50": -3.12, "contour_eoc": -6.35, "default_gateway": "4H", "lat": 44.87, "lon": 124.12, "ci_uplink_adj_cell_50": 21.7, "ci_uplink_adj_cell_eoc": 18.48, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 21.56, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "dmuKAmGJYJ5aaCmtc", "name": "302", "satellite": "IPSTAR", "uplink_cf": 14.317, "downlink_cf": 20.017, "bandwidth": 116, "type": "return", "uplink_beam": "302", "gt_peak": 18.6, "uplink_pol": "H", "downlink_beam": "4H", "saturated_eirp_peak": 55.6, "downlink_pol": "H", "transponder": "3620K1", "dynamic_range": 25, "mode": "ALC", "sfd": -73.00542011, "designed_deepin": 9, "actual": -9.5, "country": "China", "contour_50": -3.44, "contour_eoc": -6.75, "default_gateway": "4H", "lat": 46.41, "lon": 129.73, "ci_uplink_adj_cell_50": 21.3, "ci_uplink_adj_cell_eoc": 17.4, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 21.56, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "86iBqMszxT4S6xPTB", "name": "303", "satellite": "IPSTAR", "uplink_cf": 14.058, "downlink_cf": 19.758, "bandwidth": 116, "type": "return", "uplink_beam": "303", "gt_peak": 18.8, "uplink_pol": "H", "downlink_beam": "4H", "saturated_eirp_peak": 55.6, "downlink_pol": "H", "transponder": "3620K1", "dynamic_range": 25, "mode": "ALC", "sfd": -71.64542011, "designed_deepin": 9, "actual": -9.5, "country": "China", "contour_50": -2.66, "contour_eoc": -5.59, "default_gateway": "4H", "lat": 39.76, "lon": 111.63, "ci_uplink_adj_cell_50": 21.5, "ci_uplink_adj_cell_eoc": 18.55, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 21.56, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "Tbp8Dss9vY6SMAGoK", "name": "304", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 19.8875, "bandwidth": 116, "type": "return", "uplink_beam": "304", "gt_peak": 19.7, "uplink_pol": "H", "downlink_beam": "4V", "saturated_eirp_peak": 58.3, "downlink_pol": "V", "transponder": "3620J1", "dynamic_range": 25, "mode": "ALC", "sfd": -71.31542011, "designed_deepin": 9, "actual": -9.5, "country": "China", "contour_50": -3.03, "contour_eoc": -6.16, "default_gateway": "4V", "lat": 39.69, "lon": 116.6, "ci_uplink_adj_cell_50": 20.4, "ci_uplink_adj_cell_eoc": 17.31, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 22.62, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "uL2v9kmvhN9CzrdkM", "name": "305", "satellite": "IPSTAR", "uplink_cf": 14.317, "downlink_cf": 20.017, "bandwidth": 116, "type": "return", "uplink_beam": "305", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "4V", "saturated_eirp_peak": 58.3, "downlink_pol": "V", "transponder": "3620J1", "dynamic_range": 25, "mode": "ALC", "sfd": -71.92542011, "designed_deepin": 9, "actual": -9.5, "country": "China", "contour_50": -3.1, "contour_eoc": -6.37, "default_gateway": "4V", "lat": 39.35, "lon": 122.27, "ci_uplink_adj_cell_50": 18.8, "ci_uplink_adj_cell_eoc": 15.7, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 22.62, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "RL4y5q9nweGSKWjyi", "name": "306", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 18.4875, "bandwidth": 116, "type": "return", "uplink_beam": "306", "gt_peak": 18.8, "uplink_pol": "H", "downlink_beam": "4H", "saturated_eirp_peak": 55.6, "downlink_pol": "H", "transponder": "3620K1", "dynamic_range": 25, "mode": "ALC", "sfd": -71.89542011, "designed_deepin": 9, "actual": -9.5, "country": "China", "contour_50": -2.81, "contour_eoc": -5.84, "default_gateway": "4H", "lat": 35.32, "lon": 109.88, "ci_uplink_adj_cell_50": 20.5, "ci_uplink_adj_cell_eoc": 17.25, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 21.56, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "v2vMAo8oEX2TB8jjA", "name": "307", "satellite": "IPSTAR", "uplink_cf": 14.317, "downlink_cf": 18.617, "bandwidth": 116, "type": "return", "uplink_beam": "307", "gt_peak": 19.1, "uplink_pol": "H", "downlink_beam": "4H", "saturated_eirp_peak": 55.6, "downlink_pol": "H", "transponder": "3620K1", "dynamic_range": 25, "mode": "ALC", "sfd": -71.80542011, "designed_deepin": 9, "actual": -9.5, "country": "China", "contour_50": -2.89, "contour_eoc": -6.05, "default_gateway": "4H", "lat": 35.24, "lon": 114.52, "ci_uplink_adj_cell_50": 20.1, "ci_uplink_adj_cell_eoc": 17.04, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 21.56, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "s6JfMFqAwtEczYdQH", "name": "308", "satellite": "IPSTAR", "uplink_cf": 14.058, "downlink_cf": 19.758, "bandwidth": 116, "type": "return", "uplink_beam": "308", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "4V", "saturated_eirp_peak": 58.3, "downlink_pol": "V", "transponder": "3620J1", "dynamic_range": 25, "mode": "ALC", "sfd": -71.37542011, "designed_deepin": 9, "actual": -9.5, "country": "China", "contour_50": -2.82, "contour_eoc": -5.82, "default_gateway": "4V", "lat": 35.21, "lon": 119.1, "ci_uplink_adj_cell_50": 20.7, "ci_uplink_adj_cell_eoc": 17.7, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 22.62, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "cTEgjBawim2sHzygK", "name": "309", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 18.4875, "bandwidth": 116, "type": "return", "uplink_beam": "309", "gt_peak": 18.6, "uplink_pol": "H", "downlink_beam": "5H", "saturated_eirp_peak": 58.7, "downlink_pol": "H", "transponder": "3610F1", "dynamic_range": 25, "mode": "ALC", "sfd": -71.99542011, "designed_deepin": 9, "actual": -9.5, "country": "China", "contour_50": -2.78, "contour_eoc": -5.74, "default_gateway": "5H", "lat": 31.37, "lon": 103.57, "ci_uplink_adj_cell_50": 22, "ci_uplink_adj_cell_eoc": 19.01, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 24.1, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "WWsSniMKYokzNZTTv", "name": "310", "satellite": "IPSTAR", "uplink_cf": 14.317, "downlink_cf": 20.017, "bandwidth": 116, "type": "return", "uplink_beam": "310", "gt_peak": 19.7, "uplink_pol": "H", "downlink_beam": "5V", "saturated_eirp_peak": 57.4, "downlink_pol": "V", "transponder": "3620A1", "dynamic_range": 25, "mode": "ALC", "sfd": -71.37542011, "designed_deepin": 9, "actual": -9.5, "country": "China", "contour_50": -3.07, "contour_eoc": -6.22, "default_gateway": "5V", "lat": 31.22, "lon": 108.21, "ci_uplink_adj_cell_50": 20.4, "ci_uplink_adj_cell_eoc": 16.58, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 21.72, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "zEcKBcRG6DeHL3w49", "name": "311", "satellite": "IPSTAR", "uplink_cf": 14.058, "downlink_cf": 18.358, "bandwidth": 116, "type": "return", "uplink_beam": "311", "gt_peak": 18.7, "uplink_pol": "H", "downlink_beam": "4H", "saturated_eirp_peak": 55.6, "downlink_pol": "H", "transponder": "3620K1", "dynamic_range": 25, "mode": "ALC", "sfd": -71.72542011, "designed_deepin": 9, "actual": -9.5, "country": "China", "contour_50": -2.69, "contour_eoc": -5.57, "default_gateway": "4H", "lat": 31.15, "lon": 112.63, "ci_uplink_adj_cell_50": 19.7, "ci_uplink_adj_cell_eoc": 16.82, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 21.56, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "EFCKv8ayrjvexaTRT", "name": "312", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 18.4875, "bandwidth": 116, "type": "return", "uplink_beam": "312", "gt_peak": 18.6, "uplink_pol": "H", "downlink_beam": "10V", "saturated_eirp_peak": 57.3, "downlink_pol": "V", "transponder": "36100", "dynamic_range": 25, "mode": "ALC", "sfd": -72.04542011, "designed_deepin": 9, "actual": -9.5, "country": "China", "contour_50": -2.74, "contour_eoc": -5.79, "default_gateway": "10V", "lat": 31.11, "lon": 116.98, "ci_uplink_adj_cell_50": 19.2, "ci_uplink_adj_cell_eoc": 16.08, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 20.1, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "hcBXFAmbTS5JGh3Cg", "name": "313", "satellite": "IPSTAR", "uplink_cf": 14.317, "downlink_cf": 18.617, "bandwidth": 116, "type": "return", "uplink_beam": "313", "gt_peak": 19.2, "uplink_pol": "H", "downlink_beam": "10V", "saturated_eirp_peak": 57.3, "downlink_pol": "V", "transponder": "36100", "dynamic_range": 25, "mode": "ALC", "sfd": -71.91542011, "designed_deepin": 9, "actual": -9.5, "country": "China", "contour_50": -3.02, "contour_eoc": -6.26, "default_gateway": "10V", "lat": 31.1, "lon": 121.3, "ci_uplink_adj_cell_50": 18.1, "ci_uplink_adj_cell_eoc": 14.93, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 20.1, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "c5ShSZMnemJacsgmM", "name": "314", "satellite": "IPSTAR", "uplink_cf": 14.317, "downlink_cf": 18.617, "bandwidth": 116, "type": "return", "uplink_beam": "314", "gt_peak": 18.8, "uplink_pol": "H", "downlink_beam": "5H", "saturated_eirp_peak": 58.7, "downlink_pol": "H", "transponder": "3610F1", "dynamic_range": 25, "mode": "ALC", "sfd": -72.35542011, "designed_deepin": 9, "actual": -9.5, "country": "China", "contour_50": -3.07, "contour_eoc": -6.3, "default_gateway": "5H", "lat": 25.56, "lon": 101.98, "ci_uplink_adj_cell_50": 20.4, "ci_uplink_adj_cell_eoc": 17.24, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 24.1, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "Sexd2QTxut6mNLL8v", "name": "315", "satellite": "IPSTAR", "uplink_cf": 14.058, "downlink_cf": 18.358, "bandwidth": 116, "type": "return", "uplink_beam": "315", "gt_peak": 18.7, "uplink_pol": "H", "downlink_beam": "5H", "saturated_eirp_peak": 58.7, "downlink_pol": "H", "transponder": "3610F1", "dynamic_range": 25, "mode": "ALC", "sfd": -71.45542011, "designed_deepin": 9, "actual": -9.5, "country": "China", "contour_50": -2.48, "contour_eoc": -5.3, "default_gateway": "5H", "lat": 27.15, "lon": 106.13, "ci_uplink_adj_cell_50": 21.2, "ci_uplink_adj_cell_eoc": 18.35, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 24.1, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "fCfKEAAaK5JyX94z3", "name": "316", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 19.8875, "bandwidth": 116, "type": "return", "uplink_beam": "316", "gt_peak": 19.7, "uplink_pol": "H", "downlink_beam": "5V", "saturated_eirp_peak": 57.4, "downlink_pol": "V", "transponder": "3620A1", "dynamic_range": 25, "mode": "ALC", "sfd": -71.49542011, "designed_deepin": 9, "actual": -9.5, "country": "China", "contour_50": -3.09, "contour_eoc": -6.34, "default_gateway": "5V", "lat": 27.32, "lon": 110.84, "ci_uplink_adj_cell_50": 18.6, "ci_uplink_adj_cell_eoc": 15.47, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 21.72, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "3J97Q8ju5cv2d2DsX", "name": "317", "satellite": "IPSTAR", "uplink_cf": 14.317, "downlink_cf": 20.017, "bandwidth": 116, "type": "return", "uplink_beam": "317", "gt_peak": 19.5, "uplink_pol": "H", "downlink_beam": "10V", "saturated_eirp_peak": 57.3, "downlink_pol": "V", "transponder": "36100", "dynamic_range": 25, "mode": "ALC", "sfd": -72.12542011, "designed_deepin": 9, "actual": -9.5, "country": "China", "contour_50": -3.29, "contour_eoc": -6.77, "default_gateway": "10V", "lat": 27.28, "lon": 115.03, "ci_uplink_adj_cell_50": 18.8, "ci_uplink_adj_cell_eoc": 15.69, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 20.1, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "52py35ArW87XsMFDr", "name": "318", "satellite": "IPSTAR", "uplink_cf": 14.058, "downlink_cf": 19.758, "bandwidth": 116, "type": "return", "uplink_beam": "318", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "10V", "saturated_eirp_peak": 57.3, "downlink_pol": "V", "transponder": "36100", "dynamic_range": 25, "mode": "ALC", "sfd": -71.38542011, "designed_deepin": 9, "actual": -9.5, "country": "China", "contour_50": -2.78, "contour_eoc": -5.83, "default_gateway": "10V", "lat": 27.25, "lon": 119.18, "ci_uplink_adj_cell_50": 20.2, "ci_uplink_adj_cell_eoc": 17.29, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 20.1, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "X5RmXBJFiECtZpPZ9", "name": "319", "satellite": "IPSTAR", "uplink_cf": 14.317, "downlink_cf": 18.617, "bandwidth": 116, "type": "return", "uplink_beam": "319", "gt_peak": 19, "uplink_pol": "H", "downlink_beam": "5V", "saturated_eirp_peak": 57.4, "downlink_pol": "V", "transponder": "3620A1", "dynamic_range": 25, "mode": "ALC", "sfd": -71.61542011, "designed_deepin": 9, "actual": -9.5, "country": "China", "contour_50": -2.67, "contour_eoc": -5.76, "default_gateway": "5V", "lat": 23.48, "lon": 108.8, "ci_uplink_adj_cell_50": 19.2, "ci_uplink_adj_cell_eoc": 16.12, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 21.72, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "g4xgHY3q23wZEvdqb", "name": "320", "satellite": "IPSTAR", "uplink_cf": 14.058, "downlink_cf": 19.758, "bandwidth": 116, "type": "return", "uplink_beam": "320", "gt_peak": 19.5, "uplink_pol": "H", "downlink_beam": "5V", "saturated_eirp_peak": 57.4, "downlink_pol": "V", "transponder": "3620A1", "dynamic_range": 25, "mode": "ALC", "sfd": -71.15542011, "designed_deepin": 9, "actual": -9.5, "country": "China", "contour_50": -3, "contour_eoc": -5.8, "default_gateway": "5V", "lat": 23.25, "lon": 113.22, "ci_uplink_adj_cell_50": 20.4, "ci_uplink_adj_cell_eoc": 17.52, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 21.72, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "pntKAifFMPoHea3K6", "name": "321", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 19.8875, "bandwidth": 116, "type": "return", "uplink_beam": "321", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "10V", "saturated_eirp_peak": 57.3, "downlink_pol": "V", "transponder": "36100", "dynamic_range": 25, "mode": "ALC", "sfd": -71.94542011, "designed_deepin": 9, "actual": -9.5, "country": "China", "contour_50": -3.05, "contour_eoc": -6.39, "default_gateway": "10V", "lat": 23.6, "lon": 117.21, "ci_uplink_adj_cell_50": 19.6, "ci_uplink_adj_cell_eoc": 16.57, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 20.1, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "axh87sDsn47nRNbez", "name": "322", "satellite": "IPSTAR", "uplink_cf": 14.317, "downlink_cf": 20.017, "bandwidth": 116, "type": "return", "uplink_beam": "322", "gt_peak": 19.6, "uplink_pol": "H", "downlink_beam": "14H", "saturated_eirp_peak": 59.6, "downlink_pol": "H", "transponder": "3610F1", "dynamic_range": 25, "mode": "ALC", "sfd": -71.58542011, "designed_deepin": 9, "actual": -9.5, "country": "Taiwan", "contour_50": -3.12, "contour_eoc": -6.33, "default_gateway": "14H", "lat": 23.59, "lon": 121.2, "ci_uplink_adj_cell_50": 20.5, "ci_uplink_adj_cell_eoc": 17.09, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 27.7, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "3o8LNpYFQPKadyQXX", "name": "323", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 18.4875, "bandwidth": 116, "type": "return", "uplink_beam": "323", "gt_peak": 18.9, "uplink_pol": "H", "downlink_beam": "5V", "saturated_eirp_peak": 57.4, "downlink_pol": "V", "transponder": "3620A1", "dynamic_range": 25, "mode": "ALC", "sfd": -72.01542011, "designed_deepin": 9, "actual": -9.5, "country": "China", "contour_50": -2.99, "contour_eoc": -6.06, "default_gateway": "5V", "lat": 19.79, "lon": 110.96, "ci_uplink_adj_cell_50": 20.4, "ci_uplink_adj_cell_eoc": 17.47, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 21.72, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "Si8uHekPhftuXPH8p", "name": "328", "satellite": "IPSTAR", "uplink_cf": 14.4443, "downlink_cf": 20.1443, "bandwidth": 111.5, "type": "return", "uplink_beam": "328", "gt_peak": 8, "uplink_pol": "V", "downlink_beam": "10V", "saturated_eirp_peak": 57.1, "downlink_pol": "V", "transponder": "36100", "dynamic_range": 25, "mode": "ALC", "sfd": -72.52725133, "designed_deepin": 9, "actual": -9.5, "country": "China", "contour_50": -1.7, "contour_eoc": -3.3, "default_gateway": "10V", "lat": 35, "lon": 95, "ci_uplink_adj_cell_50": 32, "ci_uplink_adj_cell_eoc": 28.98, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 20.1, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "kJyZta2Hq3PyRXrSf", "name": "401", "satellite": "IPSTAR", "uplink_cf": 14.2855, "downlink_cf": 18.5855, "bandwidth": 179, "type": "return", "uplink_beam": "401", "gt_peak": 18, "uplink_pol": "H", "downlink_beam": "7V", "saturated_eirp_peak": 56.3, "downlink_pol": "V", "transponder": "3620B1", "dynamic_range": 25, "mode": "ALC", "sfd": -71.11146969, "designed_deepin": 9, "actual": -9.5, "country": "Japan", "contour_50": -3.19, "contour_eoc": -6.14, "default_gateway": "7V", "lat": 42.45, "lon": 141.89, "ci_uplink_adj_cell_50": 23.2, "ci_uplink_adj_cell_eoc": 19.77, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 25.73, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "kNQkvJHaKQsppkRxF", "name": "402", "satellite": "IPSTAR", "uplink_cf": 14.0895, "downlink_cf": 19.7895, "bandwidth": 179, "type": "return", "uplink_beam": "402", "gt_peak": 18.6, "uplink_pol": "H", "downlink_beam": "7V", "saturated_eirp_peak": 56.3, "downlink_pol": "V", "transponder": "3620B1", "dynamic_range": 25, "mode": "ALC", "sfd": -70.30146969, "designed_deepin": 9, "actual": -9.5, "country": "Japan", "contour_50": -3.12, "contour_eoc": -5.93, "default_gateway": "7V", "lat": 36.8, "lon": 139.94, "ci_uplink_adj_cell_50": 23.4, "ci_uplink_adj_cell_eoc": 19.86, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 25.73, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "nwGwiE5Wqbg8sd5nZ", "name": "403", "satellite": "IPSTAR", "uplink_cf": 14.2855, "downlink_cf": 19.9855, "bandwidth": 179, "type": "return", "uplink_beam": "403", "gt_peak": 19, "uplink_pol": "H", "downlink_beam": "7V", "saturated_eirp_peak": 56.3, "downlink_pol": "V", "transponder": "3620B1", "dynamic_range": 25, "mode": "ALC", "sfd": -70.10146969, "designed_deepin": 9, "actual": -9.5, "country": "Japan", "contour_50": -3.1, "contour_eoc": -6.13, "default_gateway": "7V", "lat": 34.4, "lon": 134.95, "ci_uplink_adj_cell_50": 20.7, "ci_uplink_adj_cell_eoc": 17.49, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 25.73, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "L8An6JH3sGaKXc8yT", "name": "404", "satellite": "IPSTAR", "uplink_cf": 14.0895, "downlink_cf": 18.3895, "bandwidth": 179, "type": "return", "uplink_beam": "404", "gt_peak": 18.8, "uplink_pol": "H", "downlink_beam": "7V", "saturated_eirp_peak": 56.3, "downlink_pol": "V", "transponder": "3620B1", "dynamic_range": 25, "mode": "ALC", "sfd": -69.93146969, "designed_deepin": 9, "actual": -9.5, "country": "Japan", "contour_50": -2.88, "contour_eoc": -5.76, "default_gateway": "7V", "lat": 32.06, "lon": 130.46, "ci_uplink_adj_cell_50": 22.7, "ci_uplink_adj_cell_eoc": 19.42, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 25.73, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "GfnGuSNk2BCP5JikK", "name": "405", "satellite": "IPSTAR", "uplink_cf": 14.2855, "downlink_cf": 19.9855, "bandwidth": 179, "type": "return", "uplink_beam": "405", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "11H", "saturated_eirp_peak": 60.2, "downlink_pol": "H", "transponder": "3610D1", "dynamic_range": 25, "mode": "ALC", "sfd": -70.22146969, "designed_deepin": 9, "actual": -9.5, "country": "South Korea", "contour_50": -3.44, "contour_eoc": -6.55, "default_gateway": "11H", "lat": 35.6, "lon": 127.77, "ci_uplink_adj_cell_50": 18.2, "ci_uplink_adj_cell_eoc": 14.99, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 27.55, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "omPnJCPvJPTxwR2Jq", "name": "406", "satellite": "IPSTAR", "uplink_cf": 14.058, "downlink_cf": 18.358, "bandwidth": 116, "type": "return", "uplink_beam": "406", "gt_peak": 18.3, "uplink_pol": "H", "downlink_beam": "10V", "saturated_eirp_peak": 57.3, "downlink_pol": "V", "transponder": "36100", "dynamic_range": 25, "mode": "ALC", "sfd": -72.76542011, "designed_deepin": 9, "actual": -9.5, "country": "China", "contour_50": -3.12, "contour_eoc": -6.21, "default_gateway": "10V", "lat": 40.64, "lon": 127.19, "ci_uplink_adj_cell_50": 23.3, "ci_uplink_adj_cell_eoc": 19.72, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 20.1, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "7itNk6fFigHLeN6um", "name": "501", "satellite": "IPSTAR", "uplink_cf": 14.2855, "downlink_cf": 19.9855, "bandwidth": 179, "type": "return", "uplink_beam": "501", "gt_peak": 18.1, "uplink_pol": "H", "downlink_beam": "8V", "saturated_eirp_peak": 55, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25, "mode": "ALC", "sfd": -70.98146969, "designed_deepin": 9, "actual": -9.5, "country": "Australia", "contour_50": -3.07, "contour_eoc": -6.11, "default_gateway": "8V", "lat": -32.25, "lon": 116.55, "ci_uplink_adj_cell_50": 33.9, "ci_uplink_adj_cell_eoc": 25.28, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 25.03, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "FWZ77RtBQzgp5FzLZ", "name": "502", "satellite": "IPSTAR", "uplink_cf": 14.2855, "downlink_cf": 18.5855, "bandwidth": 179, "type": "return", "uplink_beam": "502", "gt_peak": 18.2, "uplink_pol": "H", "downlink_beam": "8H", "saturated_eirp_peak": 55.9, "downlink_pol": "H", "transponder": "3620D1", "dynamic_range": 25, "mode": "ALC", "sfd": -70.48146969, "designed_deepin": 9, "actual": -9.5, "country": "Australia", "contour_50": -2.97, "contour_eoc": -5.71, "default_gateway": "8H", "lat": -12.81, "lon": 131.35, "ci_uplink_adj_cell_50": 31.5, "ci_uplink_adj_cell_eoc": 26.27, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 24.49, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "rQzC8RS4T3uBRfwHS", "name": "503", "satellite": "IPSTAR", "uplink_cf": 14.0895, "downlink_cf": 19.7895, "bandwidth": 179, "type": "return", "uplink_beam": "503", "gt_peak": 18.7, "uplink_pol": "H", "downlink_beam": "8V", "saturated_eirp_peak": 55, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25, "mode": "ALC", "sfd": -69.91146969, "designed_deepin": 9, "actual": -9.5, "country": "Australia", "contour_50": -2.72, "contour_eoc": -5.64, "default_gateway": "8V", "lat": -18.12, "lon": 145.45, "ci_uplink_adj_cell_50": 25, "ci_uplink_adj_cell_eoc": 21.93, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 25.03, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "eoG98MfKxAMxaGEeE", "name": "504", "satellite": "IPSTAR", "uplink_cf": 14.2855, "downlink_cf": 19.9855, "bandwidth": 179, "type": "return", "uplink_beam": "504", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "8H", "saturated_eirp_peak": 55.9, "downlink_pol": "H", "transponder": "3620D1", "dynamic_range": 25, "mode": "ALC", "sfd": -69.54146969, "designed_deepin": 9, "actual": -9.5, "country": "Australia", "contour_50": -2.81, "contour_eoc": -5.87, "default_gateway": "8H", "lat": -22.14, "lon": 149.05, "ci_uplink_adj_cell_50": 26.6, "ci_uplink_adj_cell_eoc": 23.42, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 24.49, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "p9kdYmgzfZdxQ9mmP", "name": "505", "satellite": "IPSTAR", "uplink_cf": 14.0895, "downlink_cf": 18.3895, "bandwidth": 179, "type": "return", "uplink_beam": "505", "gt_peak": 19.1, "uplink_pol": "H", "downlink_beam": "8H", "saturated_eirp_peak": 55.9, "downlink_pol": "H", "transponder": "3620D1", "dynamic_range": 25, "mode": "ALC", "sfd": -69.66146969, "designed_deepin": 9, "actual": -9.5, "country": "Australia", "contour_50": -2.78, "contour_eoc": -5.79, "default_gateway": "8H", "lat": -26.78, "lon": 152.02, "ci_uplink_adj_cell_50": 24.8, "ci_uplink_adj_cell_eoc": 21.56, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 24.49, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "2YQypFFhyuALMHXyb", "name": "506", "satellite": "IPSTAR", "uplink_cf": 14.2855, "downlink_cf": 18.5855, "bandwidth": 179, "type": "return", "uplink_beam": "506", "gt_peak": 19, "uplink_pol": "H", "downlink_beam": "9V", "saturated_eirp_peak": 56.3, "downlink_pol": "V", "transponder": "3620F1", "dynamic_range": 25, "mode": "ALC", "sfd": -69.78146969, "designed_deepin": 9, "actual": -9.5, "country": "Australia", "contour_50": -2.73, "contour_eoc": -5.81, "default_gateway": "9V", "lat": -31.27, "lon": 152.32, "ci_uplink_adj_cell_50": 24.7, "ci_uplink_adj_cell_eoc": 21.3, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 28.98, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "37uRXTsjdDY8rsZMP", "name": "507", "satellite": "IPSTAR", "uplink_cf": 14.0895, "downlink_cf": 19.7895, "bandwidth": 179, "type": "return", "uplink_beam": "507", "gt_peak": 19.9, "uplink_pol": "H", "downlink_beam": "8H", "saturated_eirp_peak": 55.9, "downlink_pol": "H", "transponder": "3620D1", "dynamic_range": 25, "mode": "ALC", "sfd": -68.75146969, "designed_deepin": 9, "actual": -9.5, "country": "Australia", "contour_50": -2.7, "contour_eoc": -5.68, "default_gateway": "8H", "lat": -34.59, "lon": 149.63, "ci_uplink_adj_cell_50": 24.3, "ci_uplink_adj_cell_eoc": 20.86, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 24.49, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "pKtAfpv4RYXK6QnLw", "name": "508", "satellite": "IPSTAR", "uplink_cf": 14.2855, "downlink_cf": 19.9855, "bandwidth": 179, "type": "return", "uplink_beam": "508", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "9V", "saturated_eirp_peak": 56.3, "downlink_pol": "V", "transponder": "3620F1", "dynamic_range": 25, "mode": "ALC", "sfd": -69.62146969, "designed_deepin": 9, "actual": -9.5, "country": "Australia", "contour_50": -2.84, "contour_eoc": -5.95, "default_gateway": "9V", "lat": -36.6, "lon": 144.84, "ci_uplink_adj_cell_50": 27.8, "ci_uplink_adj_cell_eoc": 23.37, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 28.98, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "HX5ehq3v6jPYmGEEd", "name": "509", "satellite": "IPSTAR", "uplink_cf": 14.0895, "downlink_cf": 18.3895, "bandwidth": 179, "type": "return", "uplink_beam": "509", "gt_peak": 19, "uplink_pol": "H", "downlink_beam": "9V", "saturated_eirp_peak": 56.3, "downlink_pol": "V", "transponder": "3620F1", "dynamic_range": 25, "mode": "ALC", "sfd": -69.46146969, "designed_deepin": 9, "actual": -9.5, "country": "Australia", "contour_50": -2.6, "contour_eoc": -5.49, "default_gateway": "9V", "lat": -34.77, "lon": 139.08, "ci_uplink_adj_cell_50": 24, "ci_uplink_adj_cell_eoc": 20.61, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 28.98, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "6JiZBmp6LiQ6rPXes", "name": "510", "satellite": "IPSTAR", "uplink_cf": 14.0895, "downlink_cf": 19.7895, "bandwidth": 179, "type": "return", "uplink_beam": "510", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "9V", "saturated_eirp_peak": 56.3, "downlink_pol": "V", "transponder": "3620F1", "dynamic_range": 25, "mode": "ALC", "sfd": -69.51146969, "designed_deepin": 9, "actual": -9.5, "country": "Australia", "contour_50": -2.82, "contour_eoc": -5.84, "default_gateway": "9V", "lat": -42.55, "lon": 147.43, "ci_uplink_adj_cell_50": 22.7, "ci_uplink_adj_cell_eoc": 19.17, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 28.98, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "DjzCrA8DsxDDt8CMT", "name": "514", "satellite": "IPSTAR", "uplink_cf": 14.4443, "downlink_cf": 20.1443, "bandwidth": 111.5, "type": "return", "uplink_beam": "514", "gt_peak": 4.9, "uplink_pol": "H", "downlink_beam": "8V", "saturated_eirp_peak": 52.9, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25, "mode": "ALC", "sfd": -74.58725133, "designed_deepin": 9, "actual": -9.5, "country": "Australia", "contour_50": -1.8, "contour_eoc": -3.94, "default_gateway": "8V", "lat": -20, "lon": 135, "ci_uplink_adj_cell_50": 20, "ci_uplink_adj_cell_eoc": 17.64, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 25.03, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "92c39trqx9ag4WQQQ", "name": "601", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 18.4875, "bandwidth": 116, "type": "return", "uplink_beam": "601", "gt_peak": 19.1, "uplink_pol": "H", "downlink_beam": "6V", "saturated_eirp_peak": 62.9, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25, "mode": "ALC", "sfd": -71.90542011, "designed_deepin": 9, "actual": -9.5, "country": "Indonesia", "contour_50": -3.14, "contour_eoc": -6.15, "default_gateway": "6V", "lat": 3.19, "lon": 97.84, "ci_uplink_adj_cell_50": 22.9, "ci_uplink_adj_cell_eoc": 18.73, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 29.04, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "sD9xG7c6WeAw75Egf", "name": "602", "satellite": "IPSTAR", "uplink_cf": 14.317, "downlink_cf": 18.617, "bandwidth": 116, "type": "return", "uplink_beam": "602", "gt_peak": 19, "uplink_pol": "H", "downlink_beam": "6V", "saturated_eirp_peak": 62.9, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25, "mode": "ALC", "sfd": -71.34542011, "designed_deepin": 9, "actual": -9.5, "country": "Indonesia", "contour_50": -2.72, "contour_eoc": -5.49, "default_gateway": "6V", "lat": 0.25, "lon": 100.41, "ci_uplink_adj_cell_50": 23.4, "ci_uplink_adj_cell_eoc": 20.08, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 29.04, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "CASxwjmrD2Cdn38bF", "name": "603", "satellite": "IPSTAR", "uplink_cf": 14.058, "downlink_cf": 18.358, "bandwidth": 116, "type": "return", "uplink_beam": "603", "gt_peak": 18.3, "uplink_pol": "H", "downlink_beam": "6V", "saturated_eirp_peak": 62.9, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25, "mode": "ALC", "sfd": -72.21542011, "designed_deepin": 9, "actual": -9.5, "country": "Indonesia", "contour_50": -2.91, "contour_eoc": -5.66, "default_gateway": "6V", "lat": -2.67, "lon": 103.7, "ci_uplink_adj_cell_50": 23.1, "ci_uplink_adj_cell_eoc": 19.33, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 29.04, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "6qcN5fDcqWiYWN5vo", "name": "604", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 19.8875, "bandwidth": 116, "type": "return", "uplink_beam": "604", "gt_peak": 18, "uplink_pol": "H", "downlink_beam": "6V", "saturated_eirp_peak": 61.7, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25, "mode": "ALC", "sfd": -72.53542011, "designed_deepin": 9, "actual": -9.5, "country": "Indonesia", "contour_50": -2.94, "contour_eoc": -5.68, "default_gateway": "6V", "lat": -5.86, "lon": 105.69, "ci_uplink_adj_cell_50": 23.3, "ci_uplink_adj_cell_eoc": 19.85, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 29.04, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "tx6GXG5raKLsEcnN3", "name": "605", "satellite": "IPSTAR", "uplink_cf": 14.317, "downlink_cf": 20.017, "bandwidth": 116, "type": "return", "uplink_beam": "605", "gt_peak": 17.9, "uplink_pol": "H", "downlink_beam": "6V", "saturated_eirp_peak": 61.7, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25, "mode": "ALC", "sfd": -72.39542011, "designed_deepin": 9, "actual": -9.5, "country": "Indonesia", "contour_50": -2.86, "contour_eoc": -5.44, "default_gateway": "6V", "lat": -7.23, "lon": 109.16, "ci_uplink_adj_cell_50": 24.9, "ci_uplink_adj_cell_eoc": 21.33, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 29.04, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "G7Q3g4fSAjR78ZLt6", "name": "606", "satellite": "IPSTAR", "uplink_cf": 14.058, "downlink_cf": 19.758, "bandwidth": 116, "type": "return", "uplink_beam": "606", "gt_peak": 17.4, "uplink_pol": "H", "downlink_beam": "6V", "saturated_eirp_peak": 61.7, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25, "mode": "ALC", "sfd": -72.96542011, "designed_deepin": 9, "actual": -9.5, "country": "Indonesia", "contour_50": -2.91, "contour_eoc": -5.51, "default_gateway": "6V", "lat": -7.83, "lon": 112.88, "ci_uplink_adj_cell_50": 23.3, "ci_uplink_adj_cell_eoc": 19.96, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 29.04, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "CeqZ5ptWMCTjYcKoS", "name": "608", "satellite": "IPSTAR", "uplink_cf": 14.4443, "downlink_cf": 20.1443, "bandwidth": 111.5, "type": "return", "uplink_beam": "608", "gt_peak": 6.4, "uplink_pol": "V", "downlink_beam": "6V", "saturated_eirp_peak": 61.5, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25, "mode": "ALC", "sfd": -74.02725133, "designed_deepin": 9, "actual": -9.5, "country": "Indonesia", "contour_50": -2.2, "contour_eoc": -4.4, "default_gateway": "6V", "lat": 0, "lon": 117, "ci_uplink_adj_cell_50": 22, "ci_uplink_adj_cell_eoc": 19.97, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 29.04, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "PZxgFMA5DQX7dwRSt", "name": "701", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 18.4875, "bandwidth": 116, "type": "return", "uplink_beam": "701", "gt_peak": 19.3, "uplink_pol": "H", "downlink_beam": "12V", "saturated_eirp_peak": 59.9, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25, "mode": "ALC", "sfd": -71.74542011, "designed_deepin": 9, "actual": -9.5, "country": "Philippines", "contour_50": -3.22, "contour_eoc": -6.19, "default_gateway": "12V", "lat": 16.2, "lon": 121.29, "ci_uplink_adj_cell_50": 23.7, "ci_uplink_adj_cell_eoc": 19.86, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 28.14, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "i6Foqvcs3PC9xqED9", "name": "702", "satellite": "IPSTAR", "uplink_cf": 14.317, "downlink_cf": 18.617, "bandwidth": 116, "type": "return", "uplink_beam": "702", "gt_peak": 18.8, "uplink_pol": "H", "downlink_beam": "12V", "saturated_eirp_peak": 59.9, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25, "mode": "ALC", "sfd": -72.37542011, "designed_deepin": 9, "actual": -9.5, "country": "Philippines", "contour_50": -3.26, "contour_eoc": -6.32, "default_gateway": "12V", "lat": 12.14, "lon": 122.99, "ci_uplink_adj_cell_50": 26.2, "ci_uplink_adj_cell_eoc": 22.4, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 28.14, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "FfzCMHgwm3qep6kic", "name": "703", "satellite": "IPSTAR", "uplink_cf": 14.058, "downlink_cf": 18.358, "bandwidth": 116, "type": "return", "uplink_beam": "703", "gt_peak": 18.1, "uplink_pol": "H", "downlink_beam": "12V", "saturated_eirp_peak": 59.9, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25, "mode": "ALC", "sfd": -72.34542011, "designed_deepin": 9, "actual": -9.5, "country": "Philippines", "contour_50": -2.8, "contour_eoc": -5.59, "default_gateway": "12V", "lat": 7.92, "lon": 124.62, "ci_uplink_adj_cell_50": 29.2, "ci_uplink_adj_cell_eoc": 25.55, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 28.14, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "gujt84actMBNAkfHn", "name": "112-2", "satellite": "IPSTAR", "uplink_cf": 14.4443, "downlink_cf": 20.1443, "bandwidth": 111.5, "type": "return", "uplink_beam": "112-2", "gt_peak": 19.7, "uplink_pol": "H", "downlink_beam": "2V", "saturated_eirp_peak": 57.7, "downlink_pol": "V", "transponder": "3610L1", "dynamic_range": 25, "mode": "ALC", "sfd": -71.47725133, "designed_deepin": 9, "actual": -9.5, "country": "India", "contour_50": -2.98, "contour_eoc": -6.15, "default_gateway": "2V", "lat": 18.05, "lon": 74, "ci_uplink_adj_cell_50": 30.31, "ci_uplink_adj_cell_eoc": 27.14, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 24.82, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "t36ciMiM4Pv7ftk8k", "name": "207-2", "satellite": "IPSTAR", "uplink_cf": 14.4443, "downlink_cf": 20.1443, "bandwidth": 111.5, "type": "return", "uplink_beam": "207-2", "gt_peak": 19.7, "uplink_pol": "H", "downlink_beam": "3V", "saturated_eirp_peak": 61.8, "downlink_pol": "V", "transponder": "3610H1", "dynamic_range": 25, "mode": "ALC", "sfd": -72.14725133, "designed_deepin": 9, "actual": -9.5, "country": "Thailand", "contour_50": -3.53, "contour_eoc": -6.82, "default_gateway": "3V", "lat": 13.75, "lon": 100.57, "ci_uplink_adj_cell_50": 27.68, "ci_uplink_adj_cell_eoc": 24.39, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 25.3, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "SKsPey4bFiciLd4c8", "name": "212-13H", "satellite": "IPSTAR", "uplink_cf": 14.317, "downlink_cf": 20.017, "bandwidth": 116, "type": "return", "uplink_beam": "212-13H", "gt_peak": 20.1, "uplink_pol": "H", "downlink_beam": "13H", "saturated_eirp_peak": 61.6, "downlink_pol": "H", "transponder": "3610T1", "dynamic_range": 25, "mode": "ALC", "sfd": -72.22542011, "designed_deepin": 9, "actual": -9.5, "country": "Malaysia", "contour_50": -3.74, "contour_eoc": -7.47, "default_gateway": "13H", "lat": 7.25, "lon": 99.95, "ci_uplink_adj_cell_50": 21.8, "ci_uplink_adj_cell_eoc": 17.89, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 26.87, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "cZq8wjmFbm9MkXiTf", "name": "212-3V", "satellite": "IPSTAR", "uplink_cf": 14.317, "downlink_cf": 20.017, "bandwidth": 116, "type": "return", "uplink_beam": "212-3V", "gt_peak": 20.1, "uplink_pol": "H", "downlink_beam": "3V", "saturated_eirp_peak": 62, "downlink_pol": "V", "transponder": "3610H1", "dynamic_range": 25, "mode": "ALC", "sfd": -72.22542011, "designed_deepin": 9, "actual": -9.5, "country": "Thailand", "contour_50": -3.74, "contour_eoc": -7.47, "default_gateway": "3V", "lat": 7.25, "lon": 99.95, "ci_uplink_adj_cell_50": 21.8, "ci_uplink_adj_cell_eoc": 17.89, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 25.3, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "BqeJznRH9czHyL4NH", "name": "214-2", "satellite": "IPSTAR", "uplink_cf": 14.4443, "downlink_cf": 20.1443, "bandwidth": 111.5, "type": "return", "uplink_beam": "214-2", "gt_peak": 19.9, "uplink_pol": "H", "downlink_beam": "13H", "saturated_eirp_peak": 61.4, "downlink_pol": "H", "transponder": "3610T1", "dynamic_range": 25, "mode": "ALC", "sfd": -72.11725133, "designed_deepin": 9, "actual": -9.5, "country": "Malaysia", "contour_50": -3.72, "contour_eoc": -6.99, "default_gateway": "13H", "lat": 3.54, "lon": 101.87, "ci_uplink_adj_cell_50": 28.47, "ci_uplink_adj_cell_eoc": 25.2, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 26.87, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "xDPY6FaXznz8xpK87", "name": "304-2", "satellite": "IPSTAR", "uplink_cf": 14.4443, "downlink_cf": 20.1443, "bandwidth": 111.5, "type": "return", "uplink_beam": "304-2", "gt_peak": 19.9, "uplink_pol": "H", "downlink_beam": "4V", "saturated_eirp_peak": 58.1, "downlink_pol": "V", "transponder": "3620J1", "dynamic_range": 25, "mode": "ALC", "sfd": -71.43725133, "designed_deepin": 9, "actual": -9.5, "country": "China", "contour_50": -3.21, "contour_eoc": -6.31, "default_gateway": "4V", "lat": 39.92, "lon": 116.43, "ci_uplink_adj_cell_50": 28.3, "ci_uplink_adj_cell_eoc": 25.2, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 22.62, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "WTK9HeXjPjziYB6WG", "name": "320-2", "satellite": "IPSTAR", "uplink_cf": 14.4443, "downlink_cf": 20.1443, "bandwidth": 111.5, "type": "return", "uplink_beam": "320-2", "gt_peak": 19.8, "uplink_pol": "H", "downlink_beam": "5V", "saturated_eirp_peak": 57.3, "downlink_pol": "V", "transponder": "3620A1", "dynamic_range": 25, "mode": "ALC", "sfd": -71.26725133, "designed_deepin": 9, "actual": -9.5, "country": "China", "contour_50": -2.98, "contour_eoc": -6.04, "default_gateway": "5V", "lat": 22.8, "lon": 113.6, "ci_uplink_adj_cell_50": 27.79, "ci_uplink_adj_cell_eoc": 24.73, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 21.72, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "x6tJ8HRudacoCMZX6", "name": "322-2", "satellite": "IPSTAR", "uplink_cf": 14.4443, "downlink_cf": 20.1443, "bandwidth": 111.5, "type": "return", "uplink_beam": "322-2", "gt_peak": 19.6, "uplink_pol": "H", "downlink_beam": "14H", "saturated_eirp_peak": 59.5, "downlink_pol": "H", "transponder": "3610F1", "dynamic_range": 25, "mode": "ALC", "sfd": -71.54725133, "designed_deepin": 9, "actual": -9.5, "country": "China", "contour_50": -2.96, "contour_eoc": -6.12, "default_gateway": "14H", "lat": 23.8, "lon": 121.1, "ci_uplink_adj_cell_50": 26.3, "ci_uplink_adj_cell_eoc": 23.14, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 27.7, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "B7CtcgEhiX8BtjinX", "name": "402-2", "satellite": "IPSTAR", "uplink_cf": 14.4443, "downlink_cf": 20.1443, "bandwidth": 111.5, "type": "return", "uplink_beam": "402-2", "gt_peak": 18.9, "uplink_pol": "H", "downlink_beam": "7V", "saturated_eirp_peak": 54.2, "downlink_pol": "V", "transponder": "3620B1", "dynamic_range": 25, "mode": "ALC", "sfd": -72.14725133, "designed_deepin": 9, "actual": -9.5, "country": "Japan", "contour_50": -2.97, "contour_eoc": -6.02, "default_gateway": "7V", "lat": 36.15, "lon": 139.45, "ci_uplink_adj_cell_50": 27.71, "ci_uplink_adj_cell_eoc": 24.66, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 25.73, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "X58bp7A9oTqo4Wvbs", "name": "405-2", "satellite": "IPSTAR", "uplink_cf": 14.4443, "downlink_cf": 20.1443, "bandwidth": 111.5, "type": "return", "uplink_beam": "405-2", "gt_peak": 19.5, "uplink_pol": "H", "downlink_beam": "11H", "saturated_eirp_peak": 58.6, "downlink_pol": "H", "transponder": "3610D1", "dynamic_range": 25, "mode": "ALC", "sfd": -71.72725133, "designed_deepin": 9, "actual": -9.5, "country": "South Korea", "contour_50": -3.08, "contour_eoc": -6.2, "default_gateway": "11H", "lat": 36.7, "lon": 127.3, "ci_uplink_adj_cell_50": 25.91, "ci_uplink_adj_cell_eoc": 22.79, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 27.55, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "L7goWguwFG7BWh7hv", "name": "511", "satellite": "IPSTAR", "uplink_cf": 14.058, "downlink_cf": 18.358, "bandwidth": 116, "type": "return", "uplink_beam": "511", "gt_peak": 18.9, "uplink_pol": "H", "downlink_beam": "16V", "saturated_eirp_peak": 53.1, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25, "mode": "ALC", "sfd": -72.28542011, "designed_deepin": 9, "actual": -9.5, "country": "New Zealand", "contour_50": -3.22, "contour_eoc": -6.33, "default_gateway": "16V", "lat": -45.1, "lon": 169.69, "ci_uplink_adj_cell_50": 25.8, "ci_uplink_adj_cell_eoc": 22.03, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 32.51, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "SBBE5oyn85DpjJYR6", "name": "512", "satellite": "IPSTAR", "uplink_cf": 14.1875, "downlink_cf": 18.4875, "bandwidth": 116, "type": "return", "uplink_beam": "512", "gt_peak": 18.8, "uplink_pol": "H", "downlink_beam": "16V", "saturated_eirp_peak": 53.1, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25, "mode": "ALC", "sfd": -71.91542011, "designed_deepin": 9, "actual": -9.5, "country": "New Zealand", "contour_50": -2.87, "contour_eoc": -5.86, "default_gateway": "16V", "lat": -41.69, "lon": 173.78, "ci_uplink_adj_cell_50": 27.7, "ci_uplink_adj_cell_eoc": 23.7, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 32.51, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]},
                {"_id": "xZ2tFitwyTe2DXjTX", "name": "513", "satellite": "IPSTAR", "uplink_cf": 14.317, "downlink_cf": 18.617, "bandwidth": 116, "type": "return", "uplink_beam": "513", "gt_peak": 18.6, "uplink_pol": "H", "downlink_beam": "16V", "saturated_eirp_peak": 53.1, "downlink_pol": "V", "transponder": "36200", "dynamic_range": 25, "mode": "ALC", "sfd": -72.38542011, "designed_deepin": 9, "actual": -9.5, "country": "New Zealand", "contour_50": -2.94, "contour_eoc": -6.12, "default_gateway": "16V", "lat": -37.4, "lon": 175.36, "ci_uplink_adj_cell_50": 28.8, "ci_uplink_adj_cell_eoc": 24.26, "ci_uplink_adj_sat": 25, "ci_downlink_adj_cell": 32.51, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": -3.5, "intermod": 16},
                    {"num_carriers": "two", "ibo": 0, "obo": -6.5, "intermod": 26},
                    {"num_carriers": "multi", "ibo": 0, "obo": -9.5, "intermod": 32}
                ]}
            ];
            _.each(rtn_data, function (x) {
                Channels.insert(x);
            })


        })();
    }
})


