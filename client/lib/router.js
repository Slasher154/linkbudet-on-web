/**
 * Created by Dome on 4/16/14 AD.
 */

Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading'
})

Router.map(function () {
    this.route('index', {
        path: '/',
        waitOn: function () {
            [Meteor.subscribe('satellites'), Meteor.subscribe('channels'), Meteor.subscribe('modems'), Meteor.subscribe('locations'),
            Meteor.subscribe('antennas'), Meteor.subscribe('bucs')]
        }
    })
    this.route('about');
    this.route('contact');
    this.route('maps',{
        waitOn: function(){
            [Meteor.subscribe('satellites'), Meteor.subscribe('channels'), Meteor.subscribe('contours')]
        }
    });
    this.route('calculate',{
       waitOn: function(){
           [Meteor.subscribe('satellites'), Meteor.subscribe('channels'), Meteor.subscribe('constants'), Meteor.subscribe('intf')]
       }
    });
})

Router.onBeforeAction('loading');
Router.onBeforeAction(function () {
    Errors.clearSeen();
})