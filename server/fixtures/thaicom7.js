/**
 * Created by Dome on 5/27/14 AD.
 */

Meteor.methods({
    'insert_thaicom7': function () {
        (function () {
            var data = [
                {"name": "1V_Semi", "satellite": "Thaicom 7", "uplink_cf": 5.865, "downlink_cf": 3.64, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Semi", "gt_peak": 0.09, "uplink_pol": "H", "downlink_beam": "Semi", "saturated_eirp_peak": 43.04, "downlink_pol": "V", "transponder": "1V_Semi", "mode": "FGM", "sfd": -83, "atten_range": 16, "default_atten": 8, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": -5.7, "obo": -3.5, "intermod": 25},
                    {"num_carriers": "two", "ibo": -5.2, "obo": -3.5, "intermod": 25},
                    {"num_carriers": "multi", "ibo": -5.4, "obo": -3.9, "intermod": 20}
                ]},
                {"name": "2V_Semi", "satellite": "Thaicom 7", "uplink_cf": 5.905, "downlink_cf": 3.68, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Semi", "gt_peak": 0.09, "uplink_pol": "H", "downlink_beam": "Semi", "saturated_eirp_peak": 43.04, "downlink_pol": "V", "transponder": "2V_Semi", "mode": "FGM", "sfd": -83, "atten_range": 16, "default_atten": 8, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": -5.7, "obo": -3.5, "intermod": 25},
                    {"num_carriers": "two", "ibo": -5.2, "obo": -3.5, "intermod": 25},
                    {"num_carriers": "multi", "ibo": -5.4, "obo": -3.9, "intermod": 20}
                ]},
                {"name": "3V_Semi", "satellite": "Thaicom 7", "uplink_cf": 5.945, "downlink_cf": 3.72, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Semi", "gt_peak": 0.09, "uplink_pol": "H", "downlink_beam": "Semi", "saturated_eirp_peak": 43.04, "downlink_pol": "V", "transponder": "3V_Semi", "mode": "FGM", "sfd": -83, "atten_range": 16, "default_atten": 8, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": -5.7, "obo": -3.5, "intermod": 25},
                    {"num_carriers": "two", "ibo": -5.2, "obo": -3.5, "intermod": 25},
                    {"num_carriers": "multi", "ibo": -5.4, "obo": -3.9, "intermod": 20}
                ]},
                {"name": "4V_Semi", "satellite": "Thaicom 7", "uplink_cf": 5.985, "downlink_cf": 3.76, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Semi", "gt_peak": 0.09, "uplink_pol": "H", "downlink_beam": "Semi", "saturated_eirp_peak": 43.04, "downlink_pol": "V", "transponder": "4V_Semi", "mode": "FGM", "sfd": -83, "atten_range": 16, "default_atten": 8, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": -5.7, "obo": -3.5, "intermod": 25},
                    {"num_carriers": "two", "ibo": -5.2, "obo": -3.5, "intermod": 25},
                    {"num_carriers": "multi", "ibo": -5.4, "obo": -3.9, "intermod": 20}
                ]},
                {"name": "5V_Semi", "satellite": "Thaicom 7", "uplink_cf": 6.025, "downlink_cf": 3.8, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Semi", "gt_peak": 0.09, "uplink_pol": "H", "downlink_beam": "Semi", "saturated_eirp_peak": 43.04, "downlink_pol": "V", "transponder": "5V_Semi", "mode": "FGM", "sfd": -83, "atten_range": 16, "default_atten": 8, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": -5.7, "obo": -3.5, "intermod": 25},
                    {"num_carriers": "two", "ibo": -5.2, "obo": -3.5, "intermod": 25},
                    {"num_carriers": "multi", "ibo": -5.4, "obo": -3.9, "intermod": 20}
                ]},
                {"name": "6V_Semi", "satellite": "Thaicom 7", "uplink_cf": 6.065, "downlink_cf": 3.84, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Semi", "gt_peak": 0.09, "uplink_pol": "H", "downlink_beam": "Semi", "saturated_eirp_peak": 43.04, "downlink_pol": "V", "transponder": "6V_Semi", "mode": "FGM", "sfd": -83, "atten_range": 16, "default_atten": 8, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": -5.7, "obo": -3.5, "intermod": 25},
                    {"num_carriers": "two", "ibo": -5.2, "obo": -3.5, "intermod": 25},
                    {"num_carriers": "multi", "ibo": -5.4, "obo": -3.9, "intermod": 20}
                ]},
                {"name": "7V_Semi", "satellite": "Thaicom 7", "uplink_cf": 6.105, "downlink_cf": 3.88, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Semi", "gt_peak": 0.09, "uplink_pol": "H", "downlink_beam": "Semi", "saturated_eirp_peak": 43.04, "downlink_pol": "V", "transponder": "7V_Semi", "mode": "FGM", "sfd": -83, "atten_range": 16, "default_atten": 8, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": -5.7, "obo": -3.5, "intermod": 25},
                    {"num_carriers": "two", "ibo": -5.2, "obo": -3.5, "intermod": 25},
                    {"num_carriers": "multi", "ibo": -5.4, "obo": -3.9, "intermod": 20}
                ]},
                {"name": "8V_Semi", "satellite": "Thaicom 7", "uplink_cf": 6.145, "downlink_cf": 3.92, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Semi", "gt_peak": 0.09, "uplink_pol": "H", "downlink_beam": "Semi", "saturated_eirp_peak": 43.04, "downlink_pol": "V", "transponder": "8V_Semi", "mode": "FGM", "sfd": -83, "atten_range": 16, "default_atten": 8, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": -5.7, "obo": -3.5, "intermod": 25},
                    {"num_carriers": "two", "ibo": -5.2, "obo": -3.5, "intermod": 25},
                    {"num_carriers": "multi", "ibo": -5.4, "obo": -3.9, "intermod": 20}
                ]},
                {"name": "9V_Semi", "satellite": "Thaicom 7", "uplink_cf": 6.185, "downlink_cf": 3.96, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Semi", "gt_peak": 0.09, "uplink_pol": "H", "downlink_beam": "Semi", "saturated_eirp_peak": 43.04, "downlink_pol": "V", "transponder": "9V_Semi", "mode": "FGM", "sfd": -83, "atten_range": 16, "default_atten": 8, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": -5.7, "obo": -3.5, "intermod": 25},
                    {"num_carriers": "two", "ibo": -5.2, "obo": -3.5, "intermod": 25},
                    {"num_carriers": "multi", "ibo": -5.4, "obo": -3.9, "intermod": 20}
                ]},
                {"name": "10V_Semi", "satellite": "Thaicom 7", "uplink_cf": 6.225, "downlink_cf": 4, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Semi", "gt_peak": 0.09, "uplink_pol": "H", "downlink_beam": "Semi", "saturated_eirp_peak": 43.04, "downlink_pol": "V", "transponder": "10V_Semi", "mode": "FGM", "sfd": -83, "atten_range": 16, "default_atten": 8, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": -5.7, "obo": -3.5, "intermod": 25},
                    {"num_carriers": "two", "ibo": -5.2, "obo": -3.5, "intermod": 25},
                    {"num_carriers": "multi", "ibo": -5.4, "obo": -3.9, "intermod": 20}
                ]},
                {"name": "11V_Semi", "satellite": "Thaicom 7", "uplink_cf": 6.265, "downlink_cf": 4.04, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Semi", "gt_peak": 0.09, "uplink_pol": "H", "downlink_beam": "Semi", "saturated_eirp_peak": 43.04, "downlink_pol": "V", "transponder": "11V_Semi", "mode": "FGM", "sfd": -83, "atten_range": 16, "default_atten": 8, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": -5.7, "obo": -3.5, "intermod": 25},
                    {"num_carriers": "two", "ibo": -5.2, "obo": -3.5, "intermod": 25},
                    {"num_carriers": "multi", "ibo": -5.4, "obo": -3.9, "intermod": 20}
                ]},
                {"name": "12V_Semi", "satellite": "Thaicom 7", "uplink_cf": 6.305, "downlink_cf": 4.08, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Semi", "gt_peak": 0.09, "uplink_pol": "H", "downlink_beam": "Semi", "saturated_eirp_peak": 43.04, "downlink_pol": "V", "transponder": "12V_Semi", "mode": "FGM", "sfd": -83, "atten_range": 16, "default_atten": 8, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": -5.7, "obo": -3.5, "intermod": 25},
                    {"num_carriers": "two", "ibo": -5.2, "obo": -3.5, "intermod": 25},
                    {"num_carriers": "multi", "ibo": -5.4, "obo": -3.9, "intermod": 20}
                ]},
                {"name": "13V_Semi", "satellite": "Thaicom 7", "uplink_cf": 6.345, "downlink_cf": 4.12, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Semi", "gt_peak": 0.09, "uplink_pol": "H", "downlink_beam": "Semi", "saturated_eirp_peak": 43.04, "downlink_pol": "V", "transponder": "13V_Semi", "mode": "FGM", "sfd": -83, "atten_range": 16, "default_atten": 8, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": -5.7, "obo": -3.5, "intermod": 25},
                    {"num_carriers": "two", "ibo": -5.2, "obo": -3.5, "intermod": 25},
                    {"num_carriers": "multi", "ibo": -5.4, "obo": -3.9, "intermod": 20}
                ]},
                {"name": "14V_Semi", "satellite": "Thaicom 7", "uplink_cf": 6.385, "downlink_cf": 4.16, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Semi", "gt_peak": 0.09, "uplink_pol": "H", "downlink_beam": "Semi", "saturated_eirp_peak": 43.04, "downlink_pol": "V", "transponder": "14V_Semi", "mode": "FGM", "sfd": -83, "atten_range": 16, "default_atten": 8, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": -5.7, "obo": -3.5, "intermod": 25},
                    {"num_carriers": "two", "ibo": -5.2, "obo": -3.5, "intermod": 25},
                    {"num_carriers": "multi", "ibo": -5.4, "obo": -3.9, "intermod": 20}
                ]},
                {"name": "1V_Reg", "satellite": "Thaicom 7", "uplink_cf": 5.865, "downlink_cf": 3.64, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Regional", "gt_peak": 0.09, "uplink_pol": "H", "downlink_beam": "Regional", "saturated_eirp_peak": 43.4, "downlink_pol": "V", "transponder": "1V_Reg", "mode": "FGM", "sfd": -83, "atten_range": 16, "default_atten": 8, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": -4.2, "obo": -2.2, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.1, "obo": -2.2, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -5.4, "obo": -3.9, "intermod": 20}
                ]},
                {"name": "2V_Reg", "satellite": "Thaicom 7", "uplink_cf": 5.905, "downlink_cf": 3.68, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Regional", "gt_peak": 0.09, "uplink_pol": "H", "downlink_beam": "Regional", "saturated_eirp_peak": 43.4, "downlink_pol": "V", "transponder": "2V_Reg", "mode": "FGM", "sfd": -83, "atten_range": 16, "default_atten": 8, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": -4.2, "obo": -2.2, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.1, "obo": -2.2, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -5.4, "obo": -3.9, "intermod": 20}
                ]},
                {"name": "3V_Reg", "satellite": "Thaicom 7", "uplink_cf": 5.945, "downlink_cf": 3.72, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Regional", "gt_peak": 0.09, "uplink_pol": "H", "downlink_beam": "Regional", "saturated_eirp_peak": 43.4, "downlink_pol": "V", "transponder": "3V_Reg", "mode": "FGM", "sfd": -83, "atten_range": 16, "default_atten": 8, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": -4.2, "obo": -2.2, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.1, "obo": -2.2, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -5.4, "obo": -3.9, "intermod": 20}
                ]},
                {"name": "4V_Reg", "satellite": "Thaicom 7", "uplink_cf": 5.985, "downlink_cf": 3.76, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Regional", "gt_peak": 0.09, "uplink_pol": "H", "downlink_beam": "Regional", "saturated_eirp_peak": 43.4, "downlink_pol": "V", "transponder": "4V_Reg", "mode": "FGM", "sfd": -83, "atten_range": 16, "default_atten": 8, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": -4.2, "obo": -2.2, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.1, "obo": -2.2, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -5.4, "obo": -3.9, "intermod": 20}
                ]},
                {"name": "5V_Reg", "satellite": "Thaicom 7", "uplink_cf": 6.025, "downlink_cf": 3.8, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Regional", "gt_peak": 0.09, "uplink_pol": "H", "downlink_beam": "Regional", "saturated_eirp_peak": 43.4, "downlink_pol": "V", "transponder": "5V_Reg", "mode": "FGM", "sfd": -83, "atten_range": 16, "default_atten": 8, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": -4.2, "obo": -2.2, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.1, "obo": -2.2, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -5.4, "obo": -3.9, "intermod": 20}
                ]},
                {"name": "6V_Reg", "satellite": "Thaicom 7", "uplink_cf": 6.065, "downlink_cf": 3.84, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Regional", "gt_peak": 0.09, "uplink_pol": "H", "downlink_beam": "Regional", "saturated_eirp_peak": 43.4, "downlink_pol": "V", "transponder": "6V_Reg", "mode": "FGM", "sfd": -83, "atten_range": 16, "default_atten": 8, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": -4.2, "obo": -2.2, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.1, "obo": -2.2, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -5.4, "obo": -3.9, "intermod": 20}
                ]},
                {"name": "7V_Reg", "satellite": "Thaicom 7", "uplink_cf": 6.105, "downlink_cf": 3.88, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Regional", "gt_peak": 0.09, "uplink_pol": "H", "downlink_beam": "Regional", "saturated_eirp_peak": 43.4, "downlink_pol": "V", "transponder": "7V_Reg", "mode": "FGM", "sfd": -83, "atten_range": 16, "default_atten": 8, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": -4.2, "obo": -2.2, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.1, "obo": -2.2, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -5.4, "obo": -3.9, "intermod": 20}
                ]},
                {"name": "8V_Reg", "satellite": "Thaicom 7", "uplink_cf": 6.145, "downlink_cf": 3.92, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Regional", "gt_peak": 0.09, "uplink_pol": "H", "downlink_beam": "Regional", "saturated_eirp_peak": 43.4, "downlink_pol": "V", "transponder": "8V_Reg", "mode": "FGM", "sfd": -83, "atten_range": 16, "default_atten": 8, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": -4.2, "obo": -2.2, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.1, "obo": -2.2, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -5.4, "obo": -3.9, "intermod": 20}
                ]},
                {"name": "9V_Reg", "satellite": "Thaicom 7", "uplink_cf": 6.185, "downlink_cf": 3.96, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Regional", "gt_peak": 0.09, "uplink_pol": "H", "downlink_beam": "Regional", "saturated_eirp_peak": 43.4, "downlink_pol": "V", "transponder": "9V_Reg", "mode": "FGM", "sfd": -83, "atten_range": 16, "default_atten": 8, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": -4.2, "obo": -2.2, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.1, "obo": -2.2, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -5.4, "obo": -3.9, "intermod": 20}
                ]},
                {"name": "10V_Reg", "satellite": "Thaicom 7", "uplink_cf": 6.225, "downlink_cf": 4, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Regional", "gt_peak": 0.09, "uplink_pol": "H", "downlink_beam": "Regional", "saturated_eirp_peak": 43.4, "downlink_pol": "V", "transponder": "10V_Reg", "mode": "FGM", "sfd": -83, "atten_range": 16, "default_atten": 8, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": -4.2, "obo": -2.2, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.1, "obo": -2.2, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -5.4, "obo": -3.9, "intermod": 20}
                ]},
                {"name": "11V_Reg", "satellite": "Thaicom 7", "uplink_cf": 6.265, "downlink_cf": 4.04, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Regional", "gt_peak": 0.09, "uplink_pol": "H", "downlink_beam": "Regional", "saturated_eirp_peak": 43.4, "downlink_pol": "V", "transponder": "11V_Reg", "mode": "FGM", "sfd": -83, "atten_range": 16, "default_atten": 8, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": -4.2, "obo": -2.2, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.1, "obo": -2.2, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -5.4, "obo": -3.9, "intermod": 20}
                ]},
                {"name": "12V_Reg", "satellite": "Thaicom 7", "uplink_cf": 6.305, "downlink_cf": 4.08, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Regional", "gt_peak": 0.09, "uplink_pol": "H", "downlink_beam": "Regional", "saturated_eirp_peak": 43.4, "downlink_pol": "V", "transponder": "12V_Reg", "mode": "FGM", "sfd": -83, "atten_range": 16, "default_atten": 8, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": -4.2, "obo": -2.2, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.1, "obo": -2.2, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -5.4, "obo": -3.9, "intermod": 20}
                ]},
                {"name": "13V_Reg", "satellite": "Thaicom 7", "uplink_cf": 6.345, "downlink_cf": 4.12, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Regional", "gt_peak": 0.09, "uplink_pol": "H", "downlink_beam": "Regional", "saturated_eirp_peak": 43.4, "downlink_pol": "V", "transponder": "13V_Reg", "mode": "FGM", "sfd": -83, "atten_range": 16, "default_atten": 8, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": -4.2, "obo": -2.2, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.1, "obo": -2.2, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -5.4, "obo": -3.9, "intermod": 20}
                ]},
                {"name": "14V_Reg", "satellite": "Thaicom 7", "uplink_cf": 6.385, "downlink_cf": 4.16, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Regional", "gt_peak": 0.09, "uplink_pol": "H", "downlink_beam": "Regional", "saturated_eirp_peak": 43.4, "downlink_pol": "V", "transponder": "14V_Reg", "mode": "FGM", "sfd": -83, "atten_range": 16, "default_atten": 8, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": -4.2, "obo": -2.2, "intermod": 25},
                    {"num_carriers": "two", "ibo": -3.1, "obo": -2.2, "intermod": 22},
                    {"num_carriers": "multi", "ibo": -5.4, "obo": -3.9, "intermod": 20}
                ]}
            ];
            _.each(data, function (x) {
                Channels.insert(x);
            })
        })();
    }
})