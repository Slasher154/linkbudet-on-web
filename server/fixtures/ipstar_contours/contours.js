Meteor.methods({
    insert_contours_1: function(){
        (function(){

                Meteor.call('insert_australia_contours');
                Meteor.call('insert_australia_contours_2');
                Meteor.call('insert_cambodia_contours');
                Meteor.call('insert_korea_contours');
        })();
    },
    insert_contours_2: function(){
        (function(){
            Meteor.call('insert_china_contours');
            Meteor.call('insert_china_contours_2');
            Meteor.call('insert_china_contours_3');
            Meteor.call('insert_china_contours_4');
        })();
    },
    insert_contours_3: function(){
        (function(){
            Meteor.call('insert_india_contours');
            Meteor.call('insert_india_contours_2');
            Meteor.call('insert_indonesia_contours');
            Meteor.call('insert_japan_contours');
        })();
    },
    insert_contours_4: function(){
        (function(){
            Meteor.call('insert_malaysia_contours');
            Meteor.call('insert_myanmar_contours');
            Meteor.call('insert_new_zealand_contours');
            Meteor.call('insert_philippines_contours');
            Meteor.call('insert_thailand_contours');
            Meteor.call('insert_vietnam_contours');
        })();
    }
})