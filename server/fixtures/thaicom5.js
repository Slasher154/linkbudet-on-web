/**
 * Created by Dome on 5/27/14 AD.
 */

Meteor.methods({
    'insert_thaicom5': function () {
        (function () {
            var data = [
                {"name": "1V", "satellite": "Thaicom 5", "uplink_cf": 5.945, "downlink_cf": 3.72, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Standard C", "gt_peak": 1.6, "uplink_pol": "H", "downlink_beam": "Standard C", "saturated_eirp_peak": 40.53, "downlink_pol": "V", "transponder": "1V", "mode": "FGM", "sfd": -80, "atten_range": 16, "default_atten": 9, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -1.8, "obo": -2.2, "intermod": 18.78},
                    {"num_carriers": "multi", "ibo": -5.2, "obo": -4.2, "intermod": 17.12}
                ]},
                {"name": "2V", "satellite": "Thaicom 5", "uplink_cf": 5.985, "downlink_cf": 3.76, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Standard C", "gt_peak": 1.6, "uplink_pol": "H", "downlink_beam": "Standard C", "saturated_eirp_peak": 40.53, "downlink_pol": "V", "transponder": "2V", "mode": "FGM", "sfd": -80, "atten_range": 16, "default_atten": 8, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -1.8, "obo": -2.2, "intermod": 18.78},
                    {"num_carriers": "multi", "ibo": -5.2, "obo": -4.2, "intermod": 17.12}
                ]},
                {"name": "3V", "satellite": "Thaicom 5", "uplink_cf": 6.025, "downlink_cf": 3.8, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Standard C", "gt_peak": 1.6, "uplink_pol": "H", "downlink_beam": "Standard C", "saturated_eirp_peak": 40.53, "downlink_pol": "V", "transponder": "3V", "mode": "FGM", "sfd": -80, "atten_range": 16, "default_atten": 8, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -1.8, "obo": -2.2, "intermod": 18.78},
                    {"num_carriers": "multi", "ibo": -5.2, "obo": -4.2, "intermod": 17.12}
                ]},
                {"name": "4V", "satellite": "Thaicom 5", "uplink_cf": 6.065, "downlink_cf": 3.84, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Standard C", "gt_peak": 1.6, "uplink_pol": "H", "downlink_beam": "Standard C", "saturated_eirp_peak": 40.53, "downlink_pol": "V", "transponder": "4V", "mode": "FGM", "sfd": -80, "atten_range": 16, "default_atten": 8, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -1.8, "obo": -2.2, "intermod": 18.78},
                    {"num_carriers": "multi", "ibo": -5.2, "obo": -4.2, "intermod": 17.12}
                ]},
                {"name": "5V", "satellite": "Thaicom 5", "uplink_cf": 6.105, "downlink_cf": 3.88, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Standard C", "gt_peak": 1.6, "uplink_pol": "H", "downlink_beam": "Standard C", "saturated_eirp_peak": 40.53, "downlink_pol": "V", "transponder": "5V", "mode": "FGM", "sfd": -80, "atten_range": 16, "default_atten": 8, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -1.8, "obo": -2.2, "intermod": 18.78},
                    {"num_carriers": "multi", "ibo": -5.2, "obo": -4.2, "intermod": 17.12}
                ]},
                {"name": "6V", "satellite": "Thaicom 5", "uplink_cf": 6.145, "downlink_cf": 3.92, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Standard C", "gt_peak": 1.6, "uplink_pol": "H", "downlink_beam": "Standard C", "saturated_eirp_peak": 40.53, "downlink_pol": "V", "transponder": "6V", "mode": "FGM", "sfd": -80, "atten_range": 16, "default_atten": 6, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -1.8, "obo": -2.2, "intermod": 18.78},
                    {"num_carriers": "multi", "ibo": -5.2, "obo": -4.2, "intermod": 17.12}
                ]},
                {"name": "7V", "satellite": "Thaicom 5", "uplink_cf": 6.185, "downlink_cf": 3.96, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Standard C", "gt_peak": 1.6, "uplink_pol": "H", "downlink_beam": "Standard C", "saturated_eirp_peak": 40.53, "downlink_pol": "V", "transponder": "7V", "mode": "FGM", "sfd": -80, "atten_range": 16, "default_atten": 8, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -1.8, "obo": -2.2, "intermod": 18.78},
                    {"num_carriers": "multi", "ibo": -5.2, "obo": -4.2, "intermod": 17.12}
                ]},
                {"name": "8V", "satellite": "Thaicom 5", "uplink_cf": 6.225, "downlink_cf": 4, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Standard C", "gt_peak": 1.6, "uplink_pol": "H", "downlink_beam": "Standard C", "saturated_eirp_peak": 40.53, "downlink_pol": "V", "transponder": "8V", "mode": "FGM", "sfd": -80, "atten_range": 16, "default_atten": 6, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -1.8, "obo": -2.2, "intermod": 18.78},
                    {"num_carriers": "multi", "ibo": -5.2, "obo": -4.2, "intermod": 17.12}
                ]},
                {"name": "9V", "satellite": "Thaicom 5", "uplink_cf": 6.265, "downlink_cf": 4.04, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Standard C", "gt_peak": 1.6, "uplink_pol": "H", "downlink_beam": "Standard C", "saturated_eirp_peak": 40.53, "downlink_pol": "V", "transponder": "9V", "mode": "FGM", "sfd": -80, "atten_range": 16, "default_atten": 8, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -1.8, "obo": -2.2, "intermod": 18.78},
                    {"num_carriers": "multi", "ibo": -5.2, "obo": -4.2, "intermod": 17.12}
                ]},
                {"name": "10V", "satellite": "Thaicom 5", "uplink_cf": 6.305, "downlink_cf": 4.08, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Standard C", "gt_peak": 1.6, "uplink_pol": "H", "downlink_beam": "Standard C", "saturated_eirp_peak": 40.53, "downlink_pol": "V", "transponder": "10V", "mode": "FGM", "sfd": -80, "atten_range": 16, "default_atten": 9, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -1.8, "obo": -2.2, "intermod": 18.78},
                    {"num_carriers": "multi", "ibo": -5.2, "obo": -4.2, "intermod": 17.12}
                ]},
                {"name": "11V", "satellite": "Thaicom 5", "uplink_cf": 6.345, "downlink_cf": 4.12, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Standard C", "gt_peak": 1.6, "uplink_pol": "H", "downlink_beam": "Standard C", "saturated_eirp_peak": 40.53, "downlink_pol": "V", "transponder": "11V", "mode": "FGM", "sfd": -80, "atten_range": 16, "default_atten": 6, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -1.8, "obo": -2.2, "intermod": 18.78},
                    {"num_carriers": "multi", "ibo": -5.2, "obo": -4.2, "intermod": 17.12}
                ]},
                {"name": "12V", "satellite": "Thaicom 5", "uplink_cf": 6.385, "downlink_cf": 4.16, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Standard C", "gt_peak": 1.6, "uplink_pol": "H", "downlink_beam": "Standard C", "saturated_eirp_peak": 40.53, "downlink_pol": "V", "transponder": "12V", "mode": "FGM", "sfd": -80, "atten_range": 16, "default_atten": 8, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -1.8, "obo": -2.2, "intermod": 18.78},
                    {"num_carriers": "multi", "ibo": -5.2, "obo": -4.2, "intermod": 17.12}
                ]},
                {"name": "1G", "satellite": "Thaicom 5", "uplink_cf": 6.465, "downlink_cf": 3.44, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Global C", "gt_peak": -3.41, "uplink_pol": "V", "downlink_beam": "Global C", "saturated_eirp_peak": 37.77, "downlink_pol": "H", "transponder": "1G", "mode": "FGM", "sfd": -80, "atten_range": 16, "default_atten": 4, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -2, "obo": -2.4, "intermod": 16.45},
                    {"num_carriers": "multi", "ibo": -5.5, "obo": -4.7, "intermod": 16.7}
                ]},
                {"name": "2G", "satellite": "Thaicom 5", "uplink_cf": 6.505, "downlink_cf": 3.48, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Global C", "gt_peak": -3.41, "uplink_pol": "V", "downlink_beam": "Global C", "saturated_eirp_peak": 37.77, "downlink_pol": "H", "transponder": "2G", "mode": "FGM", "sfd": -80, "atten_range": 16, "default_atten": 5, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -2, "obo": -2.4, "intermod": 16.45},
                    {"num_carriers": "multi", "ibo": -5.5, "obo": -4.7, "intermod": 16.7}
                ]},
                {"name": "3G", "satellite": "Thaicom 5", "uplink_cf": 6.545, "downlink_cf": 3.52, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Global C", "gt_peak": -3.41, "uplink_pol": "V", "downlink_beam": "Global C", "saturated_eirp_peak": 37.77, "downlink_pol": "H", "transponder": "3G", "mode": "FGM", "sfd": -80, "atten_range": 16, "default_atten": 5, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -2, "obo": -2.4, "intermod": 16.45},
                    {"num_carriers": "multi", "ibo": -5.5, "obo": -4.7, "intermod": 16.7}
                ]},
                {"name": "4G", "satellite": "Thaicom 5", "uplink_cf": 6.585, "downlink_cf": 3.56, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Global C", "gt_peak": -3.41, "uplink_pol": "V", "downlink_beam": "Global C", "saturated_eirp_peak": 37.77, "downlink_pol": "H", "transponder": "4G", "mode": "FGM", "sfd": -80, "atten_range": 16, "default_atten": 6, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -2, "obo": -2.4, "intermod": 16.45},
                    {"num_carriers": "multi", "ibo": -5.5, "obo": -4.7, "intermod": 16.7}
                ]},
                {"name": "5G", "satellite": "Thaicom 5", "uplink_cf": 6.625, "downlink_cf": 3.6, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Global C", "gt_peak": -3.41, "uplink_pol": "V", "downlink_beam": "Global C", "saturated_eirp_peak": 37.77, "downlink_pol": "H", "transponder": "5G", "mode": "FGM", "sfd": -80, "atten_range": 16, "default_atten": 6, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -2, "obo": -2.4, "intermod": 16.45},
                    {"num_carriers": "multi", "ibo": -5.5, "obo": -4.7, "intermod": 16.7}
                ]},
                {"name": "6G", "satellite": "Thaicom 5", "uplink_cf": 6.665, "downlink_cf": 3.64, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Global C", "gt_peak": -3.41, "uplink_pol": "V", "downlink_beam": "Global C", "saturated_eirp_peak": 37.77, "downlink_pol": "H", "transponder": "6G", "mode": "FGM", "sfd": -80, "atten_range": 16, "default_atten": 4, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -2, "obo": -2.4, "intermod": 16.45},
                    {"num_carriers": "multi", "ibo": -5.5, "obo": -4.7, "intermod": 16.7}
                ]},
                {"name": "7G", "satellite": "Thaicom 5", "uplink_cf": 6.705, "downlink_cf": 3.68, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Global C", "gt_peak": -3.41, "uplink_pol": "V", "downlink_beam": "Global C", "saturated_eirp_peak": 37.77, "downlink_pol": "H", "transponder": "7G", "mode": "FGM", "sfd": -80, "atten_range": 16, "default_atten": 9, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -2, "obo": -2.4, "intermod": 16.45},
                    {"num_carriers": "multi", "ibo": -5.5, "obo": -4.7, "intermod": 16.7}
                ]},
                {"name": "1E", "satellite": "Thaicom 5", "uplink_cf": 6.45, "downlink_cf": 3.425, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Extended C", "gt_peak": 2.1, "uplink_pol": "H", "downlink_beam": "Extended C", "saturated_eirp_peak": 39.68, "downlink_pol": "V", "transponder": "1E", "mode": "FGM", "sfd": -80, "atten_range": 16, "default_atten": 8, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -1.8, "obo": -2.2, "intermod": 17.53},
                    {"num_carriers": "multi", "ibo": -5.2, "obo": -4.2, "intermod": 16.97}
                ]},
                {"name": "2E", "satellite": "Thaicom 5", "uplink_cf": 6.49, "downlink_cf": 3.465, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Extended C", "gt_peak": 2.1, "uplink_pol": "H", "downlink_beam": "Extended C", "saturated_eirp_peak": 39.68, "downlink_pol": "V", "transponder": "2E", "mode": "FGM", "sfd": -80, "atten_range": 16, "default_atten": 6, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -1.8, "obo": -2.2, "intermod": 17.53},
                    {"num_carriers": "multi", "ibo": -5.2, "obo": -4.2, "intermod": 16.97}
                ]},
                {"name": "3E", "satellite": "Thaicom 5", "uplink_cf": 6.53, "downlink_cf": 3.505, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Extended C", "gt_peak": 2.1, "uplink_pol": "H", "downlink_beam": "Extended C", "saturated_eirp_peak": 39.68, "downlink_pol": "V", "transponder": "3E", "mode": "FGM", "sfd": -80, "atten_range": 16, "default_atten": 8, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -1.8, "obo": -2.2, "intermod": 17.53},
                    {"num_carriers": "multi", "ibo": -5.2, "obo": -4.2, "intermod": 16.97}
                ]},
                {"name": "4E", "satellite": "Thaicom 5", "uplink_cf": 6.57, "downlink_cf": 3.545, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Extended C", "gt_peak": 2.1, "uplink_pol": "H", "downlink_beam": "Extended C", "saturated_eirp_peak": 39.68, "downlink_pol": "V", "transponder": "4E", "mode": "FGM", "sfd": -80, "atten_range": 16, "default_atten": 8, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -1.8, "obo": -2.2, "intermod": 17.53},
                    {"num_carriers": "multi", "ibo": -5.2, "obo": -4.2, "intermod": 16.97}
                ]},
                {"name": "5E", "satellite": "Thaicom 5", "uplink_cf": 6.61, "downlink_cf": 3.585, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Extended C", "gt_peak": 2.1, "uplink_pol": "H", "downlink_beam": "Extended C", "saturated_eirp_peak": 39.68, "downlink_pol": "V", "transponder": "5E", "mode": "FGM", "sfd": -80, "atten_range": 16, "default_atten": 7, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -1.8, "obo": -2.2, "intermod": 17.53},
                    {"num_carriers": "multi", "ibo": -5.2, "obo": -4.2, "intermod": 16.97}
                ]},
                {"name": "6E", "satellite": "Thaicom 5", "uplink_cf": 6.65, "downlink_cf": 3.625, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Extended C", "gt_peak": 2.1, "uplink_pol": "H", "downlink_beam": "Extended C", "saturated_eirp_peak": 39.68, "downlink_pol": "V", "transponder": "6E", "mode": "FGM", "sfd": -80, "atten_range": 16, "default_atten": 5, "current_num_carriers": "multi", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": -1.8, "obo": -2.2, "intermod": 17.53},
                    {"num_carriers": "multi", "ibo": -5.2, "obo": -4.2, "intermod": 16.97}
                ]},
                {"name": "K1H", "satellite": "Thaicom 5", "uplink_cf": 14.4681, "downlink_cf": 12.7201, "bandwidth": 54, "type": "broadcast", "uplink_beam": "Thailand KU", "gt_peak": 10.18, "uplink_pol": "V", "downlink_beam": "Thailand KU", "saturated_eirp_peak": 56.96, "downlink_pol": "H", "transponder": "K1H", "dynamic_range": 29, "mode": "ALC", "sfd": -62, "designed_deepin": 14, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 25},
                    {"num_carriers": "multi", "ibo": 0, "obo": -5, "intermod": 20}
                ]},
                {"name": "K2H", "satellite": "Thaicom 5", "uplink_cf": 14.4055, "downlink_cf": 12.6575, "bandwidth": 54, "type": "broadcast", "uplink_beam": "Thailand KU", "gt_peak": 10.18, "uplink_pol": "V", "downlink_beam": "Thailand KU", "saturated_eirp_peak": 56.96, "downlink_pol": "H", "transponder": "K2H", "dynamic_range": 29, "mode": "ALC", "sfd": -62, "designed_deepin": 14, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 25},
                    {"num_carriers": "multi", "ibo": 0, "obo": -5, "intermod": 20}
                ]},
                {"name": "K3H", "satellite": "Thaicom 5", "uplink_cf": 14.35184, "downlink_cf": 12.60384, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Thailand KU", "gt_peak": 10.18, "uplink_pol": "V", "downlink_beam": "Thailand KU", "saturated_eirp_peak": 56.96, "downlink_pol": "H", "transponder": "K3H", "dynamic_range": 29, "mode": "ALC", "sfd": -62, "designed_deepin": 14, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 25},
                    {"num_carriers": "multi", "ibo": 0, "obo": -5, "intermod": 20}
                ]},
                {"name": "K4H", "satellite": "Thaicom 5", "uplink_cf": 14.31034, "downlink_cf": 12.56234, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Thailand KU", "gt_peak": 10.18, "uplink_pol": "V", "downlink_beam": "Thailand KU", "saturated_eirp_peak": 56.96, "downlink_pol": "H", "transponder": "K4H", "dynamic_range": 29, "mode": "ALC", "sfd": -62, "designed_deepin": 14, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 25},
                    {"num_carriers": "multi", "ibo": 0, "obo": -5, "intermod": 20}
                ]},
                {"name": "K5H", "satellite": "Thaicom 5", "uplink_cf": 14.26884, "downlink_cf": 12.52084, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Thailand KU", "gt_peak": 10.18, "uplink_pol": "V", "downlink_beam": "Thailand KU", "saturated_eirp_peak": 56.96, "downlink_pol": "H", "transponder": "K5H", "dynamic_range": 29, "mode": "ALC", "sfd": -62, "designed_deepin": 14, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 25},
                    {"num_carriers": "multi", "ibo": 0, "obo": -5, "intermod": 20}
                ]},
                {"name": "K6H", "satellite": "Thaicom 5", "uplink_cf": 14.22734, "downlink_cf": 12.47934, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Thailand KU", "gt_peak": 10.18, "uplink_pol": "V", "downlink_beam": "Thailand KU", "saturated_eirp_peak": 56.96, "downlink_pol": "H", "transponder": "K6H", "dynamic_range": 29, "mode": "ALC", "sfd": -62, "designed_deepin": 14, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 25},
                    {"num_carriers": "multi", "ibo": 0, "obo": -5, "intermod": 20}
                ]},
                {"name": "K7H", "satellite": "Thaicom 5", "uplink_cf": 14.18584, "downlink_cf": 12.43784, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Thailand KU", "gt_peak": 10.18, "uplink_pol": "V", "downlink_beam": "Thailand KU", "saturated_eirp_peak": 56.96, "downlink_pol": "H", "transponder": "K7H", "dynamic_range": 29, "mode": "ALC", "sfd": -62, "designed_deepin": 14, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 25},
                    {"num_carriers": "multi", "ibo": 0, "obo": -5, "intermod": 20}
                ]},
                {"name": "K8H", "satellite": "Thaicom 5", "uplink_cf": 14.14434, "downlink_cf": 12.39634, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Thailand KU", "gt_peak": 10.18, "uplink_pol": "V", "downlink_beam": "Thailand KU", "saturated_eirp_peak": 56.96, "downlink_pol": "H", "transponder": "K8H", "dynamic_range": 29, "mode": "ALC", "sfd": -62, "designed_deepin": 14, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 25},
                    {"num_carriers": "multi", "ibo": 0, "obo": -5, "intermod": 20}
                ]},/*
                {"name": "K8V", "satellite": "Thaicom 5", "uplink_cf": 14.10284, "downlink_cf": 12.35484, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Steerable KU", "gt_peak": 10.66, "uplink_pol": "H", "downlink_beam": "Steerable KU", "saturated_eirp_peak": 55.01, "downlink_pol": "V", "transponder": "K8V", "dynamic_range": 29, "mode": "ALC", "sfd": -62, "designed_deepin": 14, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 25},
                    {"num_carriers": "multi", "ibo": 0, "obo": -5, "intermod": 20}
                ]},*/
                {"name": "K9H", "satellite": "Thaicom 5", "uplink_cf": 14.10284, "downlink_cf": 12.35484, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Thailand KU", "gt_peak": 10.18, "uplink_pol": "V", "downlink_beam": "Thailand KU", "saturated_eirp_peak": 56.96, "downlink_pol": "H", "transponder": "K9H", "dynamic_range": 29, "mode": "ALC", "sfd": -62, "designed_deepin": 14, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 25},
                    {"num_carriers": "multi", "ibo": 0, "obo": -5, "intermod": 20}
                ]},
                {"name": "K9V", "satellite": "Thaicom 5", "uplink_cf": 14.06134, "downlink_cf": 12.31334, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Steerable KU", "gt_peak": 10.66, "uplink_pol": "H", "downlink_beam": "Steerable KU", "saturated_eirp_peak": 55.01, "downlink_pol": "V", "transponder": "K9V", "dynamic_range": 29, "mode": "ALC", "sfd": -62, "designed_deepin": 14, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 25},
                    {"num_carriers": "multi", "ibo": 0, "obo": -5, "intermod": 20}
                ]},
                {"name": "K10H", "satellite": "Thaicom 5", "uplink_cf": 14.06134, "downlink_cf": 12.31334, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Thailand KU", "gt_peak": 10.18, "uplink_pol": "V", "downlink_beam": "Thailand KU", "saturated_eirp_peak": 56.96, "downlink_pol": "H", "transponder": "K10H", "dynamic_range": 29, "mode": "ALC", "sfd": -62, "designed_deepin": 14, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 25},
                    {"num_carriers": "multi", "ibo": 0, "obo": -5, "intermod": 20}
                ]},
                {"name": "K10V", "satellite": "Thaicom 5", "uplink_cf": 14.01984, "downlink_cf": 12.27184, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Steerable KU", "gt_peak": 10.66, "uplink_pol": "H", "downlink_beam": "Steerable KU", "saturated_eirp_peak": 55.01, "downlink_pol": "V", "transponder": "K10V", "dynamic_range": 29, "mode": "ALC", "sfd": -62, "designed_deepin": 14, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 25},
                    {"num_carriers": "multi", "ibo": 0, "obo": -5, "intermod": 20}
                ]},
                {"name": "K11H", "satellite": "Thaicom 5", "uplink_cf": 14.01984, "downlink_cf": 12.27184, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Thailand KU", "gt_peak": 10.18, "uplink_pol": "V", "downlink_beam": "Thailand KU", "saturated_eirp_peak": 56.96, "downlink_pol": "H", "transponder": "K11H", "dynamic_range": 29, "mode": "ALC", "sfd": -62, "designed_deepin": 14, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 25},
                    {"num_carriers": "multi", "ibo": 0, "obo": -5, "intermod": 20}
                ]},
                {"name": "K11V", "satellite": "Thaicom 5", "uplink_cf": 14.01984, "downlink_cf": 12.27184, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Steerable KU", "gt_peak": 10.66, "uplink_pol": "H", "downlink_beam": "Steerable KU", "saturated_eirp_peak": 55.01, "downlink_pol": "V", "transponder": "K11V", "dynamic_range": 29, "mode": "ALC", "sfd": -62, "designed_deepin": 14, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 25},
                    {"num_carriers": "multi", "ibo": 0, "obo": -5, "intermod": 20}
                ]}/*,
                {"name": "K12V", "satellite": "Thaicom 5", "uplink_cf": 14.20659, "downlink_cf": 12.45859, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Steerable KU", "gt_peak": 10.66, "uplink_pol": "H", "downlink_beam": "Steerable KU", "saturated_eirp_peak": 55.01, "downlink_pol": "V", "transponder": "K12V", "dynamic_range": 29, "mode": "ALC", "sfd": -62, "designed_deepin": 14, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 25},
                    {"num_carriers": "multi", "ibo": 0, "obo": -5, "intermod": 20}
                ]},
                {"name": "K13V", "satellite": "Thaicom 5", "uplink_cf": 14.24809, "downlink_cf": 12.50009, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Steerable KU", "gt_peak": 10.66, "uplink_pol": "H", "downlink_beam": "Steerable KU", "saturated_eirp_peak": 55.01, "downlink_pol": "V", "transponder": "K13V", "dynamic_range": 29, "mode": "ALC", "sfd": -62, "designed_deepin": 14, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 25},
                    {"num_carriers": "multi", "ibo": 0, "obo": -5, "intermod": 20}
                ]},
                {"name": "K14V", "satellite": "Thaicom 5", "uplink_cf": 14.28959, "downlink_cf": 12.54159, "bandwidth": 36, "type": "broadcast", "uplink_beam": "Steerable KU", "gt_peak": 10.66, "uplink_pol": "H", "downlink_beam": "Steerable KU", "saturated_eirp_peak": 55.01, "downlink_pol": "V", "transponder": "K14V", "dynamic_range": 29, "mode": "ALC", "sfd": -62, "designed_deepin": 14, "current_num_carriers": "single", "backoff_settings": [
                    {"num_carriers": "single", "ibo": 0, "obo": 0, "intermod": 25},
                    {"num_carriers": "two", "ibo": 0, "obo": -3, "intermod": 25},
                    {"num_carriers": "multi", "ibo": 0, "obo": -5, "intermod": 20}
                ]}*/
            ]
            db.channels.update({satellite:"Thaicom 5"},{$set:{'backoff_settings.0.intermod':25}},{multi:true})
            _.each(data, function (x) {
                Channels.insert(x);
            })
        })();
    }
})

