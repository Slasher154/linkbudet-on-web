/**
 * Created by Dome on 5/27/14 AD.
 */

Meteor.methods({
    'insert_express_am4': function () {
        (function () {
            var data = [
                {"name": "2_LH", "satellite": "Express-AM4", "uplink_cf": 5.8, "downlink_cf": 3.475, "bandwidth": 40, "type": "broadcast", "uplink_beam": "Fixed", "gt_peak": 0, "uplink_pol": "RHCP", "downlink_beam": "Fixed", "saturated_eirp_peak": 47, "downlink_pol": "LHCP", "transponder": "2_LH", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -6, "intermod": 23}
                ]},
                {"name": "3_LH", "satellite": "Express-AM4", "uplink_cf": 5.85, "downlink_cf": 3.525, "bandwidth": 40, "type": "broadcast", "uplink_beam": "Fixed", "gt_peak": 0, "uplink_pol": "RHCP", "downlink_beam": "Fixed", "saturated_eirp_peak": 47, "downlink_pol": "LHCP", "transponder": "3_LH", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -6, "intermod": 23}
                ]},
                {"name": "4_LH", "satellite": "Express-AM4", "uplink_cf": 5.9, "downlink_cf": 3.575, "bandwidth": 40, "type": "broadcast", "uplink_beam": "Fixed", "gt_peak": 0, "uplink_pol": "RHCP", "downlink_beam": "Fixed", "saturated_eirp_peak": 47, "downlink_pol": "LHCP", "transponder": "4_LH", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -6, "intermod": 23}
                ]},
                {"name": "5_LH", "satellite": "Express-AM4", "uplink_cf": 5.95, "downlink_cf": 3.625, "bandwidth": 40, "type": "broadcast", "uplink_beam": "Fixed", "gt_peak": 0, "uplink_pol": "RHCP", "downlink_beam": "Fixed", "saturated_eirp_peak": 47, "downlink_pol": "LHCP", "transponder": "5_LH", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -6, "intermod": 23}
                ]},
                {"name": "6_LH", "satellite": "Express-AM4", "uplink_cf": 6, "downlink_cf": 3.675, "bandwidth": 40, "type": "broadcast", "uplink_beam": "Fixed", "gt_peak": 0, "uplink_pol": "RHCP", "downlink_beam": "Fixed", "saturated_eirp_peak": 47, "downlink_pol": "LHCP", "transponder": "6_LH", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -6, "intermod": 23}
                ]},
                {"name": "7_LH", "satellite": "Express-AM4", "uplink_cf": 6.05, "downlink_cf": 3.725, "bandwidth": 40, "type": "broadcast", "uplink_beam": "Fixed", "gt_peak": 0, "uplink_pol": "RHCP", "downlink_beam": "Fixed", "saturated_eirp_peak": 47, "downlink_pol": "LHCP", "transponder": "7_LH", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -6, "intermod": 23}
                ]},
                {"name": "8_LH", "satellite": "Express-AM4", "uplink_cf": 6.1, "downlink_cf": 3.775, "bandwidth": 40, "type": "broadcast", "uplink_beam": "Fixed", "gt_peak": 0, "uplink_pol": "RHCP", "downlink_beam": "Fixed", "saturated_eirp_peak": 47, "downlink_pol": "LHCP", "transponder": "8_LH", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -6, "intermod": 23}
                ]},
                {"name": "9_LH", "satellite": "Express-AM4", "uplink_cf": 6.15, "downlink_cf": 3.825, "bandwidth": 40, "type": "broadcast", "uplink_beam": "Fixed", "gt_peak": 0, "uplink_pol": "RHCP", "downlink_beam": "Fixed", "saturated_eirp_peak": 47, "downlink_pol": "LHCP", "transponder": "9_LH", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -6, "intermod": 23}
                ]},
                {"name": "10_LH", "satellite": "Express-AM4", "uplink_cf": 6.2, "downlink_cf": 3.875, "bandwidth": 40, "type": "broadcast", "uplink_beam": "Fixed", "gt_peak": 0, "uplink_pol": "RHCP", "downlink_beam": "Fixed", "saturated_eirp_peak": 47, "downlink_pol": "LHCP", "transponder": "10_LH", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -6, "intermod": 23}
                ]},
                {"name": "11_LH", "satellite": "Express-AM4", "uplink_cf": 6.25, "downlink_cf": 3.925, "bandwidth": 40, "type": "broadcast", "uplink_beam": "Fixed", "gt_peak": 0, "uplink_pol": "RHCP", "downlink_beam": "Fixed", "saturated_eirp_peak": 47, "downlink_pol": "LHCP", "transponder": "11_LH", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -6, "intermod": 23}
                ]},
                {"name": "14_LH", "satellite": "Express-AM4", "uplink_cf": 6.3, "downlink_cf": 3.975, "bandwidth": 40, "type": "broadcast", "uplink_beam": "Fixed", "gt_peak": 0, "uplink_pol": "RHCP", "downlink_beam": "Fixed", "saturated_eirp_peak": 47, "downlink_pol": "LHCP", "transponder": "14_LH", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -6, "intermod": 23}
                ]},
                {"name": "15_LH", "satellite": "Express-AM4", "uplink_cf": 6.35, "downlink_cf": 4.025, "bandwidth": 40, "type": "broadcast", "uplink_beam": "Fixed", "gt_peak": 0, "uplink_pol": "RHCP", "downlink_beam": "Fixed", "saturated_eirp_peak": 47, "downlink_pol": "LHCP", "transponder": "15_LH", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -6, "intermod": 23}
                ]},
                {"name": "16_LH", "satellite": "Express-AM4", "uplink_cf": 6.4, "downlink_cf": 4.075, "bandwidth": 40, "type": "broadcast", "uplink_beam": "Fixed", "gt_peak": 0, "uplink_pol": "RHCP", "downlink_beam": "Fixed", "saturated_eirp_peak": 47, "downlink_pol": "LHCP", "transponder": "16_LH", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -6, "intermod": 23}
                ]},
                {"name": "17_LH", "satellite": "Express-AM4", "uplink_cf": 6.45, "downlink_cf": 4.125, "bandwidth": 40, "type": "broadcast", "uplink_beam": "Fixed", "gt_peak": 0, "uplink_pol": "RHCP", "downlink_beam": "Fixed", "saturated_eirp_peak": 47, "downlink_pol": "LHCP", "transponder": "17_LH", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -6, "intermod": 23}
                ]},
                {"name": "18_LH", "satellite": "Express-AM4", "uplink_cf": 6.5, "downlink_cf": 4.175, "bandwidth": 40, "type": "broadcast", "uplink_beam": "Fixed", "gt_peak": 0, "uplink_pol": "RHCP", "downlink_beam": "Fixed", "saturated_eirp_peak": 47, "downlink_pol": "LHCP", "transponder": "18_LH", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -6, "intermod": 23}
                ]},
                {"name": "2A_RH", "satellite": "Express-AM4", "uplink_cf": 5.8, "downlink_cf": 3.475, "bandwidth": 40, "type": "broadcast", "uplink_beam": "Fixed", "gt_peak": 0, "uplink_pol": "LHCP", "downlink_beam": "Fixed", "saturated_eirp_peak": 47, "downlink_pol": "RHCP", "transponder": "2A_RH", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -6, "intermod": 23}
                ]},
                {"name": "3A_RH", "satellite": "Express-AM4", "uplink_cf": 5.85, "downlink_cf": 3.525, "bandwidth": 40, "type": "broadcast", "uplink_beam": "Fixed", "gt_peak": 0, "uplink_pol": "LHCP", "downlink_beam": "Fixed", "saturated_eirp_peak": 47, "downlink_pol": "RHCP", "transponder": "3A_RH", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -6, "intermod": 23}
                ]},
                {"name": "4A_RH", "satellite": "Express-AM4", "uplink_cf": 5.9, "downlink_cf": 3.575, "bandwidth": 40, "type": "broadcast", "uplink_beam": "Fixed", "gt_peak": 0, "uplink_pol": "LHCP", "downlink_beam": "Fixed", "saturated_eirp_peak": 47, "downlink_pol": "RHCP", "transponder": "4A_RH", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -6, "intermod": 23}
                ]},
                {"name": "5A_RH", "satellite": "Express-AM4", "uplink_cf": 5.95, "downlink_cf": 3.625, "bandwidth": 40, "type": "broadcast", "uplink_beam": "Fixed", "gt_peak": 0, "uplink_pol": "LHCP", "downlink_beam": "Fixed", "saturated_eirp_peak": 47, "downlink_pol": "RHCP", "transponder": "5A_RH", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -6, "intermod": 23}
                ]},
                {"name": "6A_RH", "satellite": "Express-AM4", "uplink_cf": 6, "downlink_cf": 3.675, "bandwidth": 40, "type": "broadcast", "uplink_beam": "Fixed", "gt_peak": 0, "uplink_pol": "LHCP", "downlink_beam": "Fixed", "saturated_eirp_peak": 47, "downlink_pol": "RHCP", "transponder": "6A_RH", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -6, "intermod": 23}
                ]},
                {"name": "7A_RH", "satellite": "Express-AM4", "uplink_cf": 6.05, "downlink_cf": 3.725, "bandwidth": 40, "type": "broadcast", "uplink_beam": "Fixed", "gt_peak": 0, "uplink_pol": "LHCP", "downlink_beam": "Fixed", "saturated_eirp_peak": 47, "downlink_pol": "RHCP", "transponder": "7A_RH", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -6, "intermod": 23}
                ]},
                {"name": "8A_RH", "satellite": "Express-AM4", "uplink_cf": 6.1, "downlink_cf": 3.775, "bandwidth": 40, "type": "broadcast", "uplink_beam": "Fixed", "gt_peak": 0, "uplink_pol": "LHCP", "downlink_beam": "Fixed", "saturated_eirp_peak": 47, "downlink_pol": "RHCP", "transponder": "8A_RH", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -6, "intermod": 23}
                ]},
                {"name": "9A_RH", "satellite": "Express-AM4", "uplink_cf": 6.15, "downlink_cf": 3.825, "bandwidth": 40, "type": "broadcast", "uplink_beam": "Fixed", "gt_peak": 0, "uplink_pol": "LHCP", "downlink_beam": "Fixed", "saturated_eirp_peak": 47, "downlink_pol": "RHCP", "transponder": "9A_RH", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -6, "intermod": 23}
                ]},
                {"name": "10A_RH", "satellite": "Express-AM4", "uplink_cf": 6.2, "downlink_cf": 3.875, "bandwidth": 40, "type": "broadcast", "uplink_beam": "Fixed", "gt_peak": 0, "uplink_pol": "LHCP", "downlink_beam": "Fixed", "saturated_eirp_peak": 47, "downlink_pol": "RHCP", "transponder": "10A_RH", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -6, "intermod": 23}
                ]},
                {"name": "11A_RH", "satellite": "Express-AM4", "uplink_cf": 6.25, "downlink_cf": 3.925, "bandwidth": 40, "type": "broadcast", "uplink_beam": "Fixed", "gt_peak": 0, "uplink_pol": "LHCP", "downlink_beam": "Fixed", "saturated_eirp_peak": 47, "downlink_pol": "RHCP", "transponder": "11A_RH", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -6, "intermod": 23}
                ]},
                {"name": "14A_RH", "satellite": "Express-AM4", "uplink_cf": 6.3, "downlink_cf": 3.975, "bandwidth": 40, "type": "broadcast", "uplink_beam": "Fixed", "gt_peak": 0, "uplink_pol": "LHCP", "downlink_beam": "Fixed", "saturated_eirp_peak": 47, "downlink_pol": "RHCP", "transponder": "14A_RH", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -6, "intermod": 23}
                ]},
                {"name": "15A_RH", "satellite": "Express-AM4", "uplink_cf": 6.35, "downlink_cf": 4.025, "bandwidth": 40, "type": "broadcast", "uplink_beam": "Fixed", "gt_peak": 0, "uplink_pol": "LHCP", "downlink_beam": "Fixed", "saturated_eirp_peak": 47, "downlink_pol": "RHCP", "transponder": "15A_RH", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -6, "intermod": 23}
                ]},
                {"name": "16A_RH", "satellite": "Express-AM4", "uplink_cf": 6.4, "downlink_cf": 4.075, "bandwidth": 40, "type": "broadcast", "uplink_beam": "Fixed", "gt_peak": 0, "uplink_pol": "LHCP", "downlink_beam": "Fixed", "saturated_eirp_peak": 47, "downlink_pol": "RHCP", "transponder": "16A_RH", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -6, "intermod": 23}
                ]},
                {"name": "17A_RH", "satellite": "Express-AM4", "uplink_cf": 6.45, "downlink_cf": 4.125, "bandwidth": 40, "type": "broadcast", "uplink_beam": "Fixed", "gt_peak": 0, "uplink_pol": "LHCP", "downlink_beam": "Fixed", "saturated_eirp_peak": 47, "downlink_pol": "RHCP", "transponder": "17A_RH", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -6, "intermod": 23}
                ]},
                {"name": "18A_RH", "satellite": "Express-AM4", "uplink_cf": 6.5, "downlink_cf": 4.175, "bandwidth": 40, "type": "broadcast", "uplink_beam": "Fixed", "gt_peak": 0, "uplink_pol": "LHCP", "downlink_beam": "Fixed", "saturated_eirp_peak": 47, "downlink_pol": "RHCP", "transponder": "18A_RH", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -6, "intermod": 23}
                ]}
            ];
            _.each(data, function (x) {
                Channels.insert(x);
            })
        })();
    }
})
