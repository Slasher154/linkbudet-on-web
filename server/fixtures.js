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

            // -----------------------------------Insert Modems ----------------------------------------
            Meteor.call('insert_modem');

            // -----------------------------------Insert Locations ----------------------------------------
            Meteor.call('insert_locations');

            // -----------------------------------Insert Link Budget Constants ----------------------------------------
            Meteor.call('insert_constants');

            // -----------------------------------Insert ITU 1999 Rain Data ----------------------------------------
            Meteor.call('insert_rain_data');

            // -----------------------------------Insert Gateways----------------------------------------
            Meteor.call('insert_gateways');

            // -----------------------------------Insert Contours from Satsoft program----------------------------------------
            Meteor.call('insert_contours');

            // -----------------------------------Insert Antennas----------------------------------------
            Meteor.call('insert_antennas');

            // -----------------------------------Insert Bucs----------------------------------------
            Meteor.call('insert_bucs');

            // -----------------------------------Insert Adjacent satellites----------------------------------------
            Meteor.call('insert_apstar7');
            Meteor.call('insert_telkom3');
            Meteor.call('insert_asiasat4');
            Meteor.call('insert_express_am4');
        }
