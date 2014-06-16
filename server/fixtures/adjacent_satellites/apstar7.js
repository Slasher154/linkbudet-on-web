/**
 * Created by Dome on 6/13/14 AD.
 */

Meteor.methods({
    'insert_apstar7': function () {
        (function () {
            var data = [
                {"name": "1A", "satellite": "Apstar-7", "uplink_cf": 5.868, "downlink_cf": 3.643, "bandwidth": 30, "type": "broadcast", "uplink_beam": "Semi", "gt_peak": 0, "uplink_pol": "V", "downlink_beam": "C-Band", "saturated_eirp_peak": 40, "downlink_pol": "H", "transponder": "1A", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4, "intermod": 23}
                ]},
                {"name": "2A", "satellite": "Apstar-7", "uplink_cf": 5.905, "downlink_cf": 3.68, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Semi", "gt_peak": 0, "uplink_pol": "V", "downlink_beam": "C-Band", "saturated_eirp_peak": 40, "downlink_pol": "H", "transponder": "2A", "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4, "intermod": 23}
                ]},
                {"name": "3A", "satellite": "Apstar-7", "uplink_cf": 5.945, "downlink_cf": 3.72, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Semi", "gt_peak": 0, "uplink_pol": "V", "downlink_beam": "C-Band", "saturated_eirp_peak": 40, "downlink_pol": "H", "transponder": "3A", "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4, "intermod": 23}
                ]},
                {"name": "4A", "satellite": "Apstar-7", "uplink_cf": 5.985, "downlink_cf": 3.76, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Semi", "gt_peak": 0, "uplink_pol": "V", "downlink_beam": "C-Band", "saturated_eirp_peak": 40, "downlink_pol": "H", "transponder": "4A", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4, "intermod": 23}
                ]},
                {"name": "5A", "satellite": "Apstar-7", "uplink_cf": 6.025, "downlink_cf": 3.8, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Semi", "gt_peak": 0, "uplink_pol": "V", "downlink_beam": "C-Band", "saturated_eirp_peak": 40, "downlink_pol": "H", "transponder": "5A", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4, "intermod": 23}
                ]},
                {"name": "6A", "satellite": "Apstar-7", "uplink_cf": 6.065, "downlink_cf": 3.84, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Semi", "gt_peak": 0, "uplink_pol": "V", "downlink_beam": "C-Band", "saturated_eirp_peak": 40, "downlink_pol": "H", "transponder": "6A", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4, "intermod": 23}
                ]},
                {"name": "7A", "satellite": "Apstar-7", "uplink_cf": 6.105, "downlink_cf": 3.88, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Semi", "gt_peak": 0, "uplink_pol": "V", "downlink_beam": "C-Band", "saturated_eirp_peak": 40, "downlink_pol": "H", "transponder": "7A", "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4, "intermod": 23}
                ]},
                {"name": "8A", "satellite": "Apstar-7", "uplink_cf": 6.145, "downlink_cf": 3.92, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Semi", "gt_peak": 0, "uplink_pol": "V", "downlink_beam": "C-Band", "saturated_eirp_peak": 40, "downlink_pol": "H", "transponder": "8A", "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4, "intermod": 23}
                ]},
                {"name": "9A", "satellite": "Apstar-7", "uplink_cf": 6.185, "downlink_cf": 3.96, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Semi", "gt_peak": 0, "uplink_pol": "V", "downlink_beam": "C-Band", "saturated_eirp_peak": 40, "downlink_pol": "H", "transponder": "9A", "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4, "intermod": 23}
                ]},
                {"name": "10A", "satellite": "Apstar-7", "uplink_cf": 6.225, "downlink_cf": 4, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Semi", "gt_peak": 0, "uplink_pol": "V", "downlink_beam": "C-Band", "saturated_eirp_peak": 40, "downlink_pol": "H", "transponder": "10A", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4, "intermod": 23}
                ]},
                {"name": "11A", "satellite": "Apstar-7", "uplink_cf": 6.265, "downlink_cf": 4.04, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Semi", "gt_peak": 0, "uplink_pol": "V", "downlink_beam": "C-Band", "saturated_eirp_peak": 40, "downlink_pol": "H", "transponder": "11A", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4, "intermod": 23}
                ]},
                {"name": "12A", "satellite": "Apstar-7", "uplink_cf": 6.305, "downlink_cf": 4.08, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Semi", "gt_peak": 0, "uplink_pol": "V", "downlink_beam": "C-Band", "saturated_eirp_peak": 40, "downlink_pol": "H", "transponder": "12A", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4, "intermod": 23}
                ]},
                {"name": "13A", "satellite": "Apstar-7", "uplink_cf": 6.345, "downlink_cf": 4.12, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Semi", "gt_peak": 0, "uplink_pol": "V", "downlink_beam": "C-Band", "saturated_eirp_peak": 40, "downlink_pol": "H", "transponder": "13A", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4, "intermod": 23}
                ]},
                {"name": "14A", "satellite": "Apstar-7", "uplink_cf": 6.385, "downlink_cf": 4.16, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Semi", "gt_peak": 0, "uplink_pol": "V", "downlink_beam": "C-Band", "saturated_eirp_peak": 40, "downlink_pol": "H", "transponder": "14A", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4, "intermod": 23}
                ]},
                {"name": "1B", "satellite": "Apstar-7", "uplink_cf": 5.885, "downlink_cf": 3.66, "bandwidth": 36, "type": "broadcast", "uplink_beam": "C-Band", "gt_peak": 0, "uplink_pol": "H", "downlink_beam": "C-Band", "saturated_eirp_peak": 40, "downlink_pol": "V", "transponder": "1B", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4, "intermod": 23}
                ]},
                {"name": "2B", "satellite": "Apstar-7", "uplink_cf": 5.925, "downlink_cf": 3.7, "bandwidth": 36, "type": "broadcast", "uplink_beam": "C-Band", "gt_peak": 0, "uplink_pol": "H", "downlink_beam": "C-Band", "saturated_eirp_peak": 40, "downlink_pol": "V", "transponder": "2B", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4, "intermod": 23}
                ]},
                {"name": "3B", "satellite": "Apstar-7", "uplink_cf": 5.965, "downlink_cf": 3.74, "bandwidth": 36, "type": "broadcast", "uplink_beam": "C-Band", "gt_peak": 0, "uplink_pol": "H", "downlink_beam": "C-Band", "saturated_eirp_peak": 40, "downlink_pol": "V", "transponder": "3B", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4, "intermod": 23}
                ]},
                {"name": "4B", "satellite": "Apstar-7", "uplink_cf": 6.005, "downlink_cf": 3.78, "bandwidth": 36, "type": "broadcast", "uplink_beam": "C-Band", "gt_peak": 0, "uplink_pol": "H", "downlink_beam": "C-Band", "saturated_eirp_peak": 40, "downlink_pol": "V", "transponder": "4B", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4, "intermod": 23}
                ]},
                {"name": "5B", "satellite": "Apstar-7", "uplink_cf": 6.045, "downlink_cf": 3.82, "bandwidth": 36, "type": "broadcast", "uplink_beam": "C-Band", "gt_peak": 0, "uplink_pol": "H", "downlink_beam": "C-Band", "saturated_eirp_peak": 40, "downlink_pol": "V", "transponder": "5B", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4, "intermod": 23}
                ]},
                {"name": "6B", "satellite": "Apstar-7", "uplink_cf": 6.085, "downlink_cf": 3.86, "bandwidth": 36, "type": "broadcast", "uplink_beam": "C-Band", "gt_peak": 0, "uplink_pol": "H", "downlink_beam": "C-Band", "saturated_eirp_peak": 40, "downlink_pol": "V", "transponder": "6B", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4, "intermod": 23}
                ]},
                {"name": "7B", "satellite": "Apstar-7", "uplink_cf": 6.125, "downlink_cf": 3.9, "bandwidth": 36, "type": "broadcast", "uplink_beam": "C-Band", "gt_peak": 0, "uplink_pol": "H", "downlink_beam": "C-Band", "saturated_eirp_peak": 40, "downlink_pol": "V", "transponder": "7B", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4, "intermod": 23}
                ]},
                {"name": "8B", "satellite": "Apstar-7", "uplink_cf": 6.165, "downlink_cf": 3.94, "bandwidth": 36, "type": "broadcast", "uplink_beam": "C-Band", "gt_peak": 0, "uplink_pol": "H", "downlink_beam": "C-Band", "saturated_eirp_peak": 40, "downlink_pol": "V", "transponder": "8B", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4, "intermod": 23}
                ]},
                {"name": "9B", "satellite": "Apstar-7", "uplink_cf": 6.205, "downlink_cf": 3.98, "bandwidth": 36, "type": "broadcast", "uplink_beam": "C-Band", "gt_peak": 0, "uplink_pol": "H", "downlink_beam": "C-Band", "saturated_eirp_peak": 40, "downlink_pol": "V", "transponder": "9B", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4, "intermod": 23}
                ]},
                {"name": "10B", "satellite": "Apstar-7", "uplink_cf": 6.245, "downlink_cf": 4.02, "bandwidth": 36, "type": "broadcast", "uplink_beam": "C-Band", "gt_peak": 0, "uplink_pol": "H", "downlink_beam": "C-Band", "saturated_eirp_peak": 40, "downlink_pol": "V", "transponder": "10B", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4, "intermod": 23}
                ]},
                {"name": "11B", "satellite": "Apstar-7", "uplink_cf": 6.285, "downlink_cf": 4.06, "bandwidth": 36, "type": "broadcast", "uplink_beam": "C-Band", "gt_peak": 0, "uplink_pol": "H", "downlink_beam": "C-Band", "saturated_eirp_peak": 40, "downlink_pol": "V", "transponder": "11B", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4, "intermod": 23}
                ]},
                {"name": "12B", "satellite": "Apstar-7", "uplink_cf": 6.325, "downlink_cf": 4.1, "bandwidth": 36, "type": "broadcast", "uplink_beam": "C-Band", "gt_peak": 0, "uplink_pol": "H", "downlink_beam": "C-Band", "saturated_eirp_peak": 40, "downlink_pol": "V", "transponder": "12B", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4, "intermod": 23}
                ]},
                {"name": "13B", "satellite": "Apstar-7", "uplink_cf": 6.365, "downlink_cf": 4.14, "bandwidth": 36, "type": "broadcast", "uplink_beam": "C-Band", "gt_peak": 0, "uplink_pol": "H", "downlink_beam": "C-Band", "saturated_eirp_peak": 40, "downlink_pol": "V", "transponder": "13B", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4, "intermod": 23}
                ]},
                {"name": "14B", "satellite": "Apstar-7", "uplink_cf": 6.405, "downlink_cf": 4.18, "bandwidth": 36, "type": "broadcast", "uplink_beam": "C-Band", "gt_peak": 0, "uplink_pol": "H", "downlink_beam": "C-Band", "saturated_eirp_peak": 40, "downlink_pol": "V", "transponder": "14B", "current_num_carriers": "multi", "backoff_settings": [
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