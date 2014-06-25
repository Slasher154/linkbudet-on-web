/**
 * Created by Dome on 4/16/14 AD.
 */

Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function() { return [Meteor.subscribe('satellites')];}
})

Router.map(function () {
    this.route('index', {
        path: '/',
        waitOn: function () {
            [Meteor.subscribe('channels'), Meteor.subscribe('modems'), Meteor.subscribe('locations'),
            Meteor.subscribe('antennas'), Meteor.subscribe('bucs')]
        }
    })
    this.route('about');
    this.route('contact');
    this.route('maps',{
        waitOn: function(){
            [Meteor.subscribe('channels'), Meteor.subscribe('contours')]
        }
    });
    this.route('calculate',{
       waitOn: function(){
           [Meteor.subscribe('channels'), Meteor.subscribe('constants'), Meteor.subscribe('intf')]
       }
    });
    this.route('results',{
        path: '/results/:_id',
        waitOn: function(){
            return [Meteor.subscribe('singleRequest',this.params._id)];
        },
        data: function() {
            return {
                _id: this.params._id
            };
        }
    });
    this.route('allRequests',{
        path: '/requests/:sat',
        waitOn: function(){
            var sat = this.params.sat;
            var sat_name = "";
            if(sat=="thaicom5") { sat_name = "Thaicom 5";}
            else if(sat=="thaicom6") { sat_name = "Thaicom 6";}
            else if(sat=="thaicom7") { sat_name = "Thaicom 7";}
            else if(sat=="ipstar") { sat_name = "IPSTAR";}
            else{}
            return [Meteor.subscribe('requestsBySatellite', sat_name)];
        },
        data: function(){
            var sat = this.params.sat;
            var sat_name = "";
            if(sat=="thaicom5") { sat_name = "Thaicom 5";}
            else if(sat=="thaicom6") { sat_name = "Thaicom 6";}
            else if(sat=="thaicom7") { sat_name = "Thaicom 7";}
            else if(sat=="ipstar") { sat_name = "IPSTAR";}
            else{}
           return {
               sat: sat_name
           }
        }
    });
    this.route('authen');
    this.route('login');
})

var requireLogin = function(pause){
    if(!Meteor.user()){
        if (Meteor.loggingIn())
            this.render(this.loadingTemplate);
        else
            this.render('login');
        pause();
    }
}

Router.onBeforeAction(requireLogin);
Router.onBeforeAction('loading');
Router.onBeforeAction(function () {
    Errors.clearSeen();
})