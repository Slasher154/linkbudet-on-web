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

            }