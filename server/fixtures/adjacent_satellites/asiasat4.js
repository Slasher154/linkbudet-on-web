/**
 * Created by Dome on 5/27/14 AD.
 */

Meteor.methods({
    'insert_asiasat4': function () {
        (function () {
            var data = [
                {"name": "1V", "satellite": "Asiasat-4", "uplink_cf": 5.885, "downlink_cf": 3.66, "bandwidth": 36, "type": "broadcast", "uplink_beam": "C-Band", "gt_peak": 0, "uplink_pol": "H", "downlink_beam": "C-Band", "saturated_eirp_peak": 40, "downlink_pol": "V", "transponder": "1V", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4, "intermod": 23}
                ]},
                {"name": "2V", "satellite": "Asiasat-4", "uplink_cf": 5.925, "downlink_cf": 3.7, "bandwidth": 36, "type": "broadcast", "uplink_beam": "C-Band", "gt_peak": 0, "uplink_pol": "H", "downlink_beam": "C-Band", "saturated_eirp_peak": 40, "downlink_pol": "V", "transponder": "2V", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4, "intermod": 23}
                ]},
                {"name": "3V", "satellite": "Asiasat-4", "uplink_cf": 5.965, "downlink_cf": 3.74, "bandwidth": 36, "type": "broadcast", "uplink_beam": "C-Band", "gt_peak": 0, "uplink_pol": "H", "downlink_beam": "C-Band", "saturated_eirp_peak": 40, "downlink_pol": "V", "transponder": "3V", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4, "intermod": 23}
                ]},
                {"name": "4V", "satellite": "Asiasat-4", "uplink_cf": 6.005, "downlink_cf": 3.78, "bandwidth": 36, "type": "broadcast", "uplink_beam": "C-Band", "gt_peak": 0, "uplink_pol": "H", "downlink_beam": "C-Band", "saturated_eirp_peak": 40, "downlink_pol": "V", "transponder": "4V", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4, "intermod": 23}
                ]},
                {"name": "5V", "satellite": "Asiasat-4", "uplink_cf": 6.045, "downlink_cf": 3.82, "bandwidth": 36, "type": "broadcast", "uplink_beam": "C-Band", "gt_peak": 0, "uplink_pol": "H", "downlink_beam": "C-Band", "saturated_eirp_peak": 40, "downlink_pol": "V", "transponder": "5V", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4, "intermod": 23}
                ]},
                {"name": "6V", "satellite": "Asiasat-4", "uplink_cf": 6.085, "downlink_cf": 3.86, "bandwidth": 36, "type": "broadcast", "uplink_beam": "C-Band", "gt_peak": 0, "uplink_pol": "H", "downlink_beam": "C-Band", "saturated_eirp_peak": 40, "downlink_pol": "V", "transponder": "6V", "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4, "intermod": 23}
                ]},
                {"name": "7V", "satellite": "Asiasat-4", "uplink_cf": 6.125, "downlink_cf": 3.9, "bandwidth": 36, "type": "broadcast", "uplink_beam": "C-Band", "gt_peak": 0, "uplink_pol": "H", "downlink_beam": "C-Band", "saturated_eirp_peak": 40, "downlink_pol": "V", "transponder": "7V", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4, "intermod": 23}
                ]},
                {"name": "8V", "satellite": "Asiasat-4", "uplink_cf": 6.165, "downlink_cf": 3.94, "bandwidth": 36, "type": "broadcast", "uplink_beam": "C-Band", "gt_peak": 0, "uplink_pol": "H", "downlink_beam": "C-Band", "saturated_eirp_peak": 40, "downlink_pol": "V", "transponder": "8V", "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4, "intermod": 23}
                ]},
                {"name": "9V", "satellite": "Asiasat-4", "uplink_cf": 6.205, "downlink_cf": 3.98, "bandwidth": 36, "type": "broadcast", "uplink_beam": "C-Band", "gt_peak": 0, "uplink_pol": "H", "downlink_beam": "C-Band", "saturated_eirp_peak": 40, "downlink_pol": "V", "transponder": "9V", "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4, "intermod": 23}
                ]},
                {"name": "10V", "satellite": "Asiasat-4", "uplink_cf": 6.245, "downlink_cf": 4.02, "bandwidth": 36, "type": "broadcast", "uplink_beam": "C-Band", "gt_peak": 0, "uplink_pol": "H", "downlink_beam": "C-Band", "saturated_eirp_peak": 40, "downlink_pol": "V", "transponder": "10V", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4, "intermod": 23}
                ]},
                {"name": "11V", "satellite": "Asiasat-4", "uplink_cf": 6.285, "downlink_cf": 4.06, "bandwidth": 36, "type": "broadcast", "uplink_beam": "C-Band", "gt_peak": 0, "uplink_pol": "H", "downlink_beam": "C-Band", "saturated_eirp_peak": 40, "downlink_pol": "V", "transponder": "11V", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4, "intermod": 23}
                ]},
                {"name": "12V", "satellite": "Asiasat-4", "uplink_cf": 6.325, "downlink_cf": 4.1, "bandwidth": 36, "type": "broadcast", "uplink_beam": "C-Band", "gt_peak": 0, "uplink_pol": "H", "downlink_beam": "C-Band", "saturated_eirp_peak": 40, "downlink_pol": "V", "transponder": "12V", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4, "intermod": 23}
                ]},
                {"name": "13V", "satellite": "Asiasat-4", "uplink_cf": 6.365, "downlink_cf": 4.14, "bandwidth": 36, "type": "broadcast", "uplink_beam": "C-Band", "gt_peak": 0, "uplink_pol": "H", "downlink_beam": "C-Band", "saturated_eirp_peak": 40, "downlink_pol": "V", "transponder": "13V", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4, "intermod": 23}
                ]},
                {"name": "14V", "satellite": "Asiasat-4", "uplink_cf": 6.405, "downlink_cf": 4.18, "bandwidth": 36, "type": "broadcast", "uplink_beam": "C-Band", "gt_peak": 1, "uplink_pol": "H", "downlink_beam": "C-Band", "saturated_eirp_peak": 40, "downlink_pol": "V", "transponder": "14V", "current_num_carriers": "multi", "backoff_settings": [
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