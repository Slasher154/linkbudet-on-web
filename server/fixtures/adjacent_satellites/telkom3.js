/**
 * Created by Dome on 6/13/14 AD.
 */

Meteor.methods({
    'insert_telkom3': function () {
        (function () {
            var data = [
                {"name": "T32", "satellite": "Telkom-3", "uplink_cf": 5.858, "downlink_cf": 3.63, "bandwidth": 54, "type": "broadcast", "uplink_beam": "ASEAN", "gt_peak": 0, "uplink_pol": "H", "downlink_beam": "ASEAN", "saturated_eirp_peak": 40, "downlink_pol": "V", "transponder": "T32", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4, "intermod": 23}
                ]},
                {"name": "T13", "satellite": "Telkom-3", "uplink_cf": 5.965, "downlink_cf": 3.74, "bandwidth": 36, "type": "broadcast", "uplink_beam": "ASEAN", "gt_peak": 0, "uplink_pol": "H", "downlink_beam": "ASEAN", "saturated_eirp_peak": 40, "downlink_pol": "V", "transponder": "T13", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4, "intermod": 23}
                ]},
                {"name": "T14", "satellite": "Telkom-3", "uplink_cf": 6.005, "downlink_cf": 3.78, "bandwidth": 36, "type": "broadcast", "uplink_beam": "ASEAN", "gt_peak": 0, "uplink_pol": "H", "downlink_beam": "ASEAN", "saturated_eirp_peak": 40, "downlink_pol": "V", "transponder": "T14", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4, "intermod": 23}
                ]},
                {"name": "T15", "satellite": "Telkom-3", "uplink_cf": 6.045, "downlink_cf": 3.82, "bandwidth": 36, "type": "broadcast", "uplink_beam": "ASEAN", "gt_peak": 0, "uplink_pol": "H", "downlink_beam": "ASEAN", "saturated_eirp_peak": 40, "downlink_pol": "V", "transponder": "T15", "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4, "intermod": 23}
                ]},
                {"name": "T16", "satellite": "Telkom-3", "uplink_cf": 6.085, "downlink_cf": 3.86, "bandwidth": 36, "type": "broadcast", "uplink_beam": "ASEAN", "gt_peak": 0, "uplink_pol": "H", "downlink_beam": "ASEAN", "saturated_eirp_peak": 40, "downlink_pol": "V", "transponder": "T16", "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4, "intermod": 23}
                ]},
                {"name": "T17", "satellite": "Telkom-3", "uplink_cf": 6.125, "downlink_cf": 3.9, "bandwidth": 36, "type": "broadcast", "uplink_beam": "ASEAN", "gt_peak": 0, "uplink_pol": "H", "downlink_beam": "ASEAN", "saturated_eirp_peak": 40, "downlink_pol": "V", "transponder": "T17", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4, "intermod": 23}
                ]},
                {"name": "T18", "satellite": "Telkom-3", "uplink_cf": 6.165, "downlink_cf": 3.94, "bandwidth": 36, "type": "broadcast", "uplink_beam": "ASEAN", "gt_peak": 0, "uplink_pol": "H", "downlink_beam": "ASEAN", "saturated_eirp_peak": 40, "downlink_pol": "V", "transponder": "T18", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4, "intermod": 23}
                ]},
                {"name": "T19", "satellite": "Telkom-3", "uplink_cf": 6.205, "downlink_cf": 3.98, "bandwidth": 36, "type": "broadcast", "uplink_beam": "ASEAN", "gt_peak": 0, "uplink_pol": "H", "downlink_beam": "ASEAN", "saturated_eirp_peak": 40, "downlink_pol": "V", "transponder": "T19", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4, "intermod": 23}
                ]},
                {"name": "T20", "satellite": "Telkom-3", "uplink_cf": 6.245, "downlink_cf": 4.02, "bandwidth": 36, "type": "broadcast", "uplink_beam": "ASEAN", "gt_peak": 0, "uplink_pol": "H", "downlink_beam": "ASEAN", "saturated_eirp_peak": 40, "downlink_pol": "V", "transponder": "T20", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4, "intermod": 23}
                ]},
                {"name": "T21", "satellite": "Telkom-3", "uplink_cf": 6.285, "downlink_cf": 4.06, "bandwidth": 36, "type": "broadcast", "uplink_beam": "ASEAN", "gt_peak": 0, "uplink_pol": "H", "downlink_beam": "ASEAN", "saturated_eirp_peak": 40, "downlink_pol": "V", "transponder": "T21", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4, "intermod": 23}
                ]},
                {"name": "T22", "satellite": "Telkom-3", "uplink_cf": 6.325, "downlink_cf": 4.1, "bandwidth": 36, "type": "broadcast", "uplink_beam": "ASEAN", "gt_peak": 0, "uplink_pol": "H", "downlink_beam": "ASEAN", "saturated_eirp_peak": 40, "downlink_pol": "V", "transponder": "T22", "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4, "intermod": 23}
                ]},
                {"name": "T23", "satellite": "Telkom-3", "uplink_cf": 6.365, "downlink_cf": 4.14, "bandwidth": 36, "type": "broadcast", "uplink_beam": "ASEAN", "gt_peak": 0, "uplink_pol": "H", "downlink_beam": "ASEAN", "saturated_eirp_peak": 40, "downlink_pol": "V", "transponder": "T23", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4, "intermod": 23}
                ]},
                {"name": "T24", "satellite": "Telkom-3", "uplink_cf": 6.405, "downlink_cf": 4.18, "bandwidth": 36, "type": "broadcast", "uplink_beam": "ASEAN", "gt_peak": 0, "uplink_pol": "H", "downlink_beam": "ASEAN", "saturated_eirp_peak": 40, "downlink_pol": "V", "transponder": "T24", "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4, "intermod": 23}
                ]}
            ];
            _.each(data, function (x) {
                Channels.insert(x);
            })
        })();
    }
})

