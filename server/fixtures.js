  /**
         * Created by thanatv on 7/03/14.
         */
//Insert default data
        if (Satellites.find().count() === 0) {

            // -----------------------------------Insert Satellite Data----------------------------------------
            Meteor.call('insert_satellites');

            // -----------------------------------Insert Thaicom 5 Channels----------------------------------------
            Meteor.call('insert_thaicom5');

            // -----------------------------------Insert Thaicom 6 Channels----------------------------------------
            Meteor.call('insert_thaicom6');

            // -----------------------------------Insert Thaicom 7 Channels----------------------------------------
            Meteor.call('insert_thaicom7')

            // -----------------------------------Insert IPSTAR Channels----------------------------------------
            Meteor.call('insert_ipstar');

            // -----------------------------------Insert Modems Vendors----------------------------------------
            Meteor.call('insert_modem_vendors');

            // -----------------------------------Insert Modems ----------------------------------------
            Meteor.call('insert_modem');

            // -----------------------------------Insert Locations ----------------------------------------
            Meteor.call('insert_locations');

            // -----------------------------------Insert Link Budget Constants ----------------------------------------
            Meteor.call('insert_constants');

            // -----------------------------------Insert Antennas----------------------------------------
            Meteor.call('insert_antennas');

            // -----------------------------------Insert Bucs----------------------------------------
            Meteor.call('insert_bucs');

            // -----------------------------------Insert Adjacent satellites----------------------------------------
            Meteor.call('insert_apstar7');
            Meteor.call('insert_telkom3');
            Meteor.call('insert_asiasat4');
            Meteor.call('insert_express_am4');

            // -----------------------------------Insert Gateways----------------------------------------
            Meteor.call('insert_gateways');

            // -----------------------------------Insert Contours from Satsoft program----------------------------------------
            Meteor.call('insert_australia_contours');
            Meteor.call('insert_australia_contours_2');
            Meteor.call('insert_cambodia_contours');
            Meteor.call('insert_china_contours');
            Meteor.call('insert_china_contours_2');
            Meteor.call('insert_china_contours_3');
            Meteor.call('insert_china_contours_4');
            Meteor.call('insert_india_contours');
            Meteor.call('insert_india_contours_2');
            Meteor.call('insert_indonesia_contours');
            Meteor.call('insert_japan_contours');
            Meteor.call('insert_korea_contours');
            Meteor.call('insert_malaysia_contours');
            Meteor.call('insert_myanmar_contours');
            Meteor.call('insert_new_zealand_contours');
            Meteor.call('insert_philippines_contours');
            Meteor.call('insert_thailand_contours');
            Meteor.call('insert_vietnam_contours');

            // -----------------------------------Insert ITU 1999 Rain Data ----------------------------------------
            Meteor.call('insert_rain_data');
        }
