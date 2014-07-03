/**
 * Created by Dome on 4/16/14 AD.
 */

Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function() { return [Meteor.subscribe('satellites')];}
})

AdminController = RouteController.extend({
    onBeforeAction: function(pause){
        // check if user is not logged in or user is not in admin role
        if(!Meteor.user()) {
            this.render('login')
        }
        else if(!Roles.userIsInRole(Meteor.userId(),['admin'])){
            this.render('accessDenied');
        }
        else{}
        pause();

    }
});

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

    // result details (by case)
    this.route('linkDetail',{
        path: '/results/:_id/:case_num',
        waitOn: function(){
            return [Meteor.subscribe('singleRequest',this.params._id)];
        },
        data: function(){
            var req = LinkRequests.findOne({_id:this.params._id});
            var case_num = this.params.case_num;
            var cas = _.filter(req.results, function(item){
                return item.case_num == case_num;
            })[0];
            return cas;
        }
    })

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
    this.route('login');

    // Database Operations

    // Satellite
    this.route('satelliteInsert',{ "path": '/satellites/insert'}); // insert
    this.route('satelliteEdit', { "path": '/satellites/edit/:_id',
        data: function(){
            return { satellite: Satellites.findOne({_id:this.params._id}) };
        }
    }) // edit
    this.route('satelliteView',{ "path": '/satellites/:_id', // view single satellite
        data: function(){
            var sat = Satellites.findOne({_id:this.params._id});
            return {satellite: _.extend(sat,{view_mode:true})};
        }
    })
    this.route('satelliteViewAll', { "path": '/satellites'});

    // Modem
    this.route('modemInsert', { "path": '/modems/insert',
        waitOn: function(){
            return [Meteor.subscribe('modem_vendors')];
        }
    });
    this.route('modemEdit', { "path": '/modems/edit/:_id',
        data: function(){
            return { modem: Modems.findOne({_id:this.params._id}) };
        },
        waitOn: function(){
            return [Meteor.subscribe('modems'),Meteor.subscribe('modem_vendors')];
        }
    }) // edit
    this.route('modemView',{ "path": '/modems/:_id', // view single satellite
        data: function(){
            var modem = Modems.findOne({_id:this.params._id});
            _.each(modem.applications,function(item){
                _.extend(item,{view_mode:true});
            });
            return {modem: _.extend(modem,{view_mode:true})};
        },
        waitOn: function(){
            return [Meteor.subscribe('modems')];
        }
    })
    this.route('modemViewAll', { "path": '/modems',
            waitOn: function(){
                return [Meteor.subscribe('modems')];
            }
        }
    );


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