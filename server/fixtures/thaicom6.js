/**
 * Created by Dome on 5/27/14 AD.
 */

Meteor.methods({
    'insert_thaicom6': function () {
        (function () {
            var data = [
                {"name": "C101", "satellite": "Thaicom 6", "uplink_cf": 5.945, "downlink_cf": 3.72, "bandwidth": 36, "type": "broadcast", "uplink_beam": "C1", "gt_peak": 5.93, "uplink_pol": "V", "downlink_beam": "C1", "saturated_eirp_peak": 46.44, "downlink_pol": "H", "transponder": "C101", "dynamic_range": "N/A", "mode": "FGM", "sfd": -82, "atten_range": "16", "default_atten": "9", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4.5, "intermod": 23}
                ]},
                {"name": "C102", "satellite": "Thaicom 6", "uplink_cf": 5.985, "downlink_cf": 3.76, "bandwidth": 36, "type": "broadcast", "uplink_beam": "C1", "gt_peak": 5.93, "uplink_pol": "V", "downlink_beam": "C1", "saturated_eirp_peak": 46.44, "downlink_pol": "H", "transponder": "C102", "dynamic_range": "N/A", "mode": "FGM", "sfd": -82, "atten_range": "16", "default_atten": "11", "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4.5, "intermod": 23}
                ]},
                {"name": "C103", "satellite": "Thaicom 6", "uplink_cf": 6.025, "downlink_cf": 3.8, "bandwidth": 36, "type": "broadcast", "uplink_beam": "C1", "gt_peak": 5.93, "uplink_pol": "V", "downlink_beam": "C1", "saturated_eirp_peak": 46.44, "downlink_pol": "H", "transponder": "C103", "dynamic_range": "N/A", "mode": "FGM", "sfd": -82, "atten_range": "16", "default_atten": "9", "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4.5, "intermod": 23}
                ]},
                {"name": "C104", "satellite": "Thaicom 6", "uplink_cf": 6.065, "downlink_cf": 3.84, "bandwidth": 36, "type": "broadcast", "uplink_beam": "C1", "gt_peak": 5.93, "uplink_pol": "V", "downlink_beam": "C1", "saturated_eirp_peak": 46.44, "downlink_pol": "H", "transponder": "C104", "dynamic_range": "N/A", "mode": "FGM", "sfd": -82, "atten_range": "16", "default_atten": "8", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4.5, "intermod": 23}
                ]},
                {"name": "C105", "satellite": "Thaicom 6", "uplink_cf": 6.105, "downlink_cf": 3.88, "bandwidth": 36, "type": "broadcast", "uplink_beam": "C1", "gt_peak": 5.93, "uplink_pol": "V", "downlink_beam": "C1", "saturated_eirp_peak": 46.44, "downlink_pol": "H", "transponder": "C105", "dynamic_range": "N/A", "mode": "FGM", "sfd": -82, "atten_range": "16", "default_atten": "13", "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4.5, "intermod": 23}
                ]},
                {"name": "C106", "satellite": "Thaicom 6", "uplink_cf": 6.145, "downlink_cf": 3.92, "bandwidth": 36, "type": "broadcast", "uplink_beam": "C1", "gt_peak": 5.93, "uplink_pol": "V", "downlink_beam": "C1", "saturated_eirp_peak": 46.44, "downlink_pol": "H", "transponder": "C106", "dynamic_range": "N/A", "mode": "FGM", "sfd": -82, "atten_range": "16", "default_atten": "13", "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4.5, "intermod": 23}
                ]},
                {"name": "C107", "satellite": "Thaicom 6", "uplink_cf": 6.185, "downlink_cf": 3.96, "bandwidth": 36, "type": "broadcast", "uplink_beam": "C1", "gt_peak": 5.93, "uplink_pol": "V", "downlink_beam": "C1", "saturated_eirp_peak": 46.44, "downlink_pol": "H", "transponder": "C107", "dynamic_range": "N/A", "mode": "FGM", "sfd": -82, "atten_range": "16", "default_atten": "13", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4.5, "intermod": 23}
                ]},
                {"name": "C108", "satellite": "Thaicom 6", "uplink_cf": 6.225, "downlink_cf": 4, "bandwidth": 36, "type": "broadcast", "uplink_beam": "C1", "gt_peak": 5.93, "uplink_pol": "V", "downlink_beam": "C1", "saturated_eirp_peak": 46.44, "downlink_pol": "H", "transponder": "C108", "dynamic_range": "N/A", "mode": "FGM", "sfd": -82, "atten_range": "16", "default_atten": "14", "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4.5, "intermod": 23}
                ]},
                {"name": "C109", "satellite": "Thaicom 6", "uplink_cf": 6.265, "downlink_cf": 4.04, "bandwidth": 36, "type": "broadcast", "uplink_beam": "C1", "gt_peak": 5.93, "uplink_pol": "V", "downlink_beam": "C1", "saturated_eirp_peak": 46.44, "downlink_pol": "H", "transponder": "C109", "dynamic_range": "N/A", "mode": "FGM", "sfd": -82, "atten_range": "16", "default_atten": "14", "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4.5, "intermod": 23}
                ]},
                {"name": "C110", "satellite": "Thaicom 6", "uplink_cf": 6.305, "downlink_cf": 4.08, "bandwidth": 36, "type": "broadcast", "uplink_beam": "C1", "gt_peak": 5.93, "uplink_pol": "V", "downlink_beam": "C1", "saturated_eirp_peak": 46.44, "downlink_pol": "H", "transponder": "C110", "dynamic_range": "N/A", "mode": "FGM", "sfd": -82, "atten_range": "16", "default_atten": "11", "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4.5, "intermod": 23}
                ]},
                {"name": "C111", "satellite": "Thaicom 6", "uplink_cf": 6.345, "downlink_cf": 4.12, "bandwidth": 36, "type": "broadcast", "uplink_beam": "C1", "gt_peak": 5.93, "uplink_pol": "V", "downlink_beam": "C1", "saturated_eirp_peak": 46.44, "downlink_pol": "H", "transponder": "C111", "dynamic_range": "N/A", "mode": "FGM", "sfd": -82, "atten_range": "16", "default_atten": "11", "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4.5, "intermod": 23}
                ]},
                {"name": "C112", "satellite": "Thaicom 6", "uplink_cf": 6.385, "downlink_cf": 4.16, "bandwidth": 36, "type": "broadcast", "uplink_beam": "C1", "gt_peak": 5.93, "uplink_pol": "V", "downlink_beam": "C1", "saturated_eirp_peak": 46.44, "downlink_pol": "H", "transponder": "C112", "dynamic_range": "N/A", "mode": "FGM", "sfd": -82, "atten_range": "16", "default_atten": "10", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.3, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -6.5, "obo": -4.5, "intermod": 23}
                ]},
                {"name": "C201", "satellite": "Thaicom 6", "uplink_cf": 5.965, "downlink_cf": 3.74, "bandwidth": 72, "type": "broadcast", "uplink_beam": "C2", "gt_peak": 1.76, "uplink_pol": "V", "downlink_beam": "C2", "saturated_eirp_peak": 47.41, "downlink_pol": "H", "transponder": "C201", "dynamic_range": "N/A", "mode": "FGM", "sfd": -82, "atten_range": "16", "default_atten": "8", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.1, "intermod": 21},
                    {"num_carriers": "multi", "ibo": -5.5, "obo": -3.5, "intermod": 20}
                ]},
                {"name": "C202", "satellite": "Thaicom 6", "uplink_cf": 6.045, "downlink_cf": 3.82, "bandwidth": 72, "type": "broadcast", "uplink_beam": "C2", "gt_peak": 1.76, "uplink_pol": "V", "downlink_beam": "C2", "saturated_eirp_peak": 47.41, "downlink_pol": "H", "transponder": "C202", "dynamic_range": "N/A", "mode": "FGM", "sfd": -82, "atten_range": "16", "default_atten": "8", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.1, "intermod": 21},
                    {"num_carriers": "multi", "ibo": -5.5, "obo": -3.5, "intermod": 20}
                ]},
                {"name": "C203", "satellite": "Thaicom 6", "uplink_cf": 6.125, "downlink_cf": 3.9, "bandwidth": 72, "type": "broadcast", "uplink_beam": "C2", "gt_peak": 1.76, "uplink_pol": "V", "downlink_beam": "C2", "saturated_eirp_peak": 47.41, "downlink_pol": "H", "transponder": "C203", "dynamic_range": "N/A", "mode": "FGM", "sfd": -82, "atten_range": "16", "default_atten": "8", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.1, "intermod": 21},
                    {"num_carriers": "multi", "ibo": -5.5, "obo": -3.5, "intermod": 20}
                ]},
                {"name": "C204", "satellite": "Thaicom 6", "uplink_cf": 6.205, "downlink_cf": 3.98, "bandwidth": 72, "type": "broadcast", "uplink_beam": "C2", "gt_peak": 1.76, "uplink_pol": "V", "downlink_beam": "C2", "saturated_eirp_peak": 47.41, "downlink_pol": "H", "transponder": "C204", "dynamic_range": "N/A", "mode": "FGM", "sfd": -82, "atten_range": "16", "default_atten": "8", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.1, "intermod": 21},
                    {"num_carriers": "multi", "ibo": -5.5, "obo": -3.5, "intermod": 20}
                ]},
                {"name": "C205", "satellite": "Thaicom 6", "uplink_cf": 6.285, "downlink_cf": 4.06, "bandwidth": 72, "type": "broadcast", "uplink_beam": "C2", "gt_peak": 1.76, "uplink_pol": "V", "downlink_beam": "C2", "saturated_eirp_peak": 47.41, "downlink_pol": "H", "transponder": "C205", "dynamic_range": "N/A", "mode": "FGM", "sfd": -82, "atten_range": "16", "default_atten": "8", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.1, "intermod": 21},
                    {"num_carriers": "multi", "ibo": -5.5, "obo": -3.5, "intermod": 20}
                ]},
                {"name": "C206", "satellite": "Thaicom 6", "uplink_cf": 6.365, "downlink_cf": 4.14, "bandwidth": 72, "type": "broadcast", "uplink_beam": "C2", "gt_peak": 1.76, "uplink_pol": "V", "downlink_beam": "C2", "saturated_eirp_peak": 47.41, "downlink_pol": "H", "transponder": "C206", "dynamic_range": "N/A", "mode": "FGM", "sfd": -82, "atten_range": "16", "default_atten": "6", "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.5, "obo": -2.1, "intermod": 21},
                    {"num_carriers": "multi", "ibo": -5.5, "obo": -3.5, "intermod": 20}
                ]},
                {"name": "K03", "satellite": "Thaicom 6", "uplink_cf": 14.394, "downlink_cf": 12.646, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Ku", "gt_peak": 10.77, "uplink_pol": "H", "downlink_beam": "Ku", "saturated_eirp_peak": 56.84, "downlink_pol": "V", "transponder": "K03", "dynamic_range": 30, "mode": "ALC", "sfd": -74, "designed_deepin": 22, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 30},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 25},
                    {"num_carriers": "multi", "ibo": 0, "obo": -5, "intermod": 20}
                ]},
                {"name": "K01", "satellite": "Thaicom 6", "uplink_cf": 14.477, "downlink_cf": 12.729, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Ku", "gt_peak": 10.77, "uplink_pol": "H", "downlink_beam": "Ku", "saturated_eirp_peak": 56.84, "downlink_pol": "V", "transponder": "K01", "dynamic_range": 30, "mode": "ALC", "sfd": -74, "designed_deepin": 22, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 30},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 25},
                    {"num_carriers": "multi", "ibo": 0, "obo": -5, "intermod": 20}
                ]},
                {"name": "K04", "satellite": "Thaicom 6", "uplink_cf": 14.352, "downlink_cf": 12.604, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Ku", "gt_peak": 10.77, "uplink_pol": "H", "downlink_beam": "Ku", "saturated_eirp_peak": 56.84, "downlink_pol": "V", "transponder": "K04", "dynamic_range": 30, "mode": "ALC", "sfd": -74, "designed_deepin": 22, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 30},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 25},
                    {"num_carriers": "multi", "ibo": 0, "obo": -5, "intermod": 20}
                ]},
                {"name": "K02", "satellite": "Thaicom 6", "uplink_cf": 14.435, "downlink_cf": 12.687, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Ku", "gt_peak": 10.77, "uplink_pol": "H", "downlink_beam": "Ku", "saturated_eirp_peak": 56.84, "downlink_pol": "V", "transponder": "K02", "dynamic_range": 30, "mode": "ALC", "sfd": -74, "designed_deepin": 22, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 30},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 25},
                    {"num_carriers": "multi", "ibo": 0, "obo": -5, "intermod": 20}
                ]},
                {"name": "K05", "satellite": "Thaicom 6", "uplink_cf": 14.311, "downlink_cf": 12.563, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Ku", "gt_peak": 10.77, "uplink_pol": "H", "downlink_beam": "Ku", "saturated_eirp_peak": 56.84, "downlink_pol": "V", "transponder": "K05", "dynamic_range": 30, "mode": "ALC", "sfd": -74, "designed_deepin": 22, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 30},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 25},
                    {"num_carriers": "multi", "ibo": 0, "obo": -5, "intermod": 20}
                ]},
                {"name": "K06", "satellite": "Thaicom 6", "uplink_cf": 14.269, "downlink_cf": 12.521, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Ku", "gt_peak": 10.77, "uplink_pol": "H", "downlink_beam": "Ku", "saturated_eirp_peak": 56.84, "downlink_pol": "V", "transponder": "K06", "dynamic_range": 30, "mode": "ALC", "sfd": -74, "designed_deepin": 22, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 30},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 25},
                    {"num_carriers": "multi", "ibo": 0, "obo": -5, "intermod": 20}
                ]},
                {"name": "K07", "satellite": "Thaicom 6", "uplink_cf": 14.216, "downlink_cf": 12.468, "bandwidth": 54, "type": "broadcast", "uplink_beam": "Ku", "gt_peak": 10.77, "uplink_pol": "H", "downlink_beam": "Ku", "saturated_eirp_peak": 56.84, "downlink_pol": "V", "transponder": "K07", "dynamic_range": 30, "mode": "ALC", "sfd": -74, "designed_deepin": 22, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 30},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 25},
                    {"num_carriers": "multi", "ibo": 0, "obo": -5, "intermod": 20}
                ]},
                {"name": "K08", "satellite": "Thaicom 6", "uplink_cf": 14.154, "downlink_cf": 12.406, "bandwidth": 54, "type": "broadcast", "uplink_beam": "Ku", "gt_peak": 10.77, "uplink_pol": "H", "downlink_beam": "Ku", "saturated_eirp_peak": 56.84, "downlink_pol": "V", "transponder": "K08", "dynamic_range": 30, "mode": "ALC", "sfd": -74, "designed_deepin": 22, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 30},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 25},
                    {"num_carriers": "multi", "ibo": 0, "obo": -5, "intermod": 20}
                ]}
            ]
            _.each(data, function (x) {
                Channels.insert(x);
            })
        })();
    }
})