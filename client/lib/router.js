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
            [Meteor.subscribe('satellites'), Meteor.subscribe('channels'), Meteor.subscribe('modems')]
        }
    })
    this.route('about');
    this.route('contact');
    this.route('maps',{
        waitOn: function(){
            [Meteor.subscribe('satellites'), Meteor.subscribe('channels'), Meteor.subscribe('contours')]
        }
    })
})

Router.onBeforeAction('loading');
Router.onBeforeAction(function () {
    Errors.clearSeen();
})