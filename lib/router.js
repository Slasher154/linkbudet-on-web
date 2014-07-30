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
        /*
        // check if user is not logged in or user is not in admin role
        if(!Meteor.user()) {
            this.render('login')
        }
        else if(!Roles.userIsInRole(Meteor.userId(),['admin'])){
            this.render('accessDenied');
        }
        else{}
        pause();
        */
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
    this.route('contours',{
        waitOn: function(){
            [Meteor.subscribe('channels'), Meteor.subscribe('contours'), Meteor.subscribe('test_results')]
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
            return [Meteor.subscribe('singleRequest',this.params._id),Meteor.subscribe('channelFrequency')];
        },
        data: function() {
            return {
                _id: this.params._id
            };
        }
    });

    this.route('editRequest',{
        path: '/request/edit/:_id',
        waitOn: function(){
            return [Meteor.subscribe('singleRequest',this.params._id),Meteor.subscribe('channels'), Meteor.subscribe('modems'), Meteor.subscribe('locations'),
                    Meteor.subscribe('antennas'), Meteor.subscribe('bucs')];
        },
        data: function() {
            return {
                _id: this.params._id
            };
        }
    })



    this.route('allJobReports',{
        path: '/reports/',
        waitOn: function(){
            [Meteor.subscribe('reportsByUser'),Meteor.subscribe('jobReports')];
        }
    })
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
    this.route('satelliteInsert',{ "path": '/satellites/insert',
        controller: AdminController}); // insert
    this.route('satelliteEdit', { "path": '/satellites/edit/:_id',
        controller: AdminController,
        data: function(){
            return { satellite: Satellites.findOne({_id:this.params._id}) };
        }
    }); // edit
    this.route('satelliteView',{ "path": '/satellites/:_id', // view single satellite
        data: function(){
            var sat = Satellites.findOne({_id:this.params._id});
            return {satellite: _.extend(sat,{view_mode:true})};
        }
    });
    this.route('satelliteViewAll', { "path": '/satellites'});

    // Modem
    this.route('modemInsert', { "path": '/modems/insert',
        controller: AdminController,
        waitOn: function(){
            return [Meteor.subscribe('modem_vendors')];
        }
    });
    this.route('modemEdit', { "path": '/modems/edit/:_id',
        controller: AdminController,
        data: function(){
            return { modem: Modems.findOne({_id:this.params._id}) };
        },
        waitOn: function(){
            return [Meteor.subscribe('modems'),Meteor.subscribe('modem_vendors')];
        }
    }); // edit
    this.route('modemDuplicate', { "path": '/modems/duplicate/:_id',
        controller: AdminController,
        data: function(){
            return { modem: Modems.findOne({_id:this.params._id}) };
        },
        waitOn: function(){
            return [Meteor.subscribe('modems'),Meteor.subscribe('modem_vendors')];
        }
    }); // duplicate
    this.route('modemView',{ "path": '/modems/:_id', // view single modem
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
    });
    this.route('modemViewAll', { "path": '/modems',
            waitOn: function(){
                return [Meteor.subscribe('modems')];
            }
        });

    // Modem Vendor
    this.route('modemVendorInsert', { "path": '/modem_vendors/insert',
        waitOn: function(){

        }
    })
    this.route('modemVendorViewAll', { "path": '/modem_vendors/' ,
        waitOn: function(){
            return [Meteor.subscribe('modem_vendors')];
        }
    })

    // Antenna
    this.route('antennaInsert', { "path": '/antennas/insert',
        controller: AdminController,
        waitOn: function(){
            return [Meteor.subscribe('antenna_vendors')];
        }
    });
    this.route('antennaEdit', { "path": '/antennas/edit/:_id',
        controller: AdminController,
        data: function(){
            return { antenna: Antennas.findOne({_id:this.params._id}) };
        },
        waitOn: function(){
            return [Meteor.subscribe('antennas'),Meteor.subscribe('antenna_vendors')];
        }
    }); // edit
    this.route('antennaView',{ "path": '/antennas/:_id', // view single antenna
        data: function(){
            var antenna = Antennas.findOne({_id:this.params._id});
            _.each(antenna.applications,function(item){
                _.extend(item,{view_mode:true});
            });
            return {antenna: _.extend(antenna,{view_mode:true})};
        },
        waitOn: function(){
            return [Meteor.subscribe('antennas')];
        }
    });
    this.route('antennaViewAll', { "path": '/antennas',
        waitOn: function(){
            return [Meteor.subscribe('antennas')];
        }
    });

    // Antenna Vendor
    this.route('antennaVendorInsert', { "path": '/antenna_vendors/insert',
        waitOn: function(){

        }
    })
    this.route('antennaVendorViewAll', { "path": '/antenna_vendors/' ,
        waitOn: function(){
            return [Meteor.subscribe('antenna_vendors')];
        }
    })
    
    // Location
    this.route('locationInsert', { "path": '/locations/insert',
        controller: AdminController,
        waitOn: function(){
            return [Meteor.subscribe('channels')];
        }
    });
    this.route('locationEdit', { "path": '/locations/edit/:_id',
        controller: AdminController,
        data: function(){
            return { location: Locations.findOne({_id:this.params._id}) };
        },
        waitOn: function(){
            return [Meteor.subscribe('singleLocation',this.params._id),Meteor.subscribe('channels')];
        }
    }); // edit
    this.route('locationView',{ "path": '/locations/:_id', // view single location
        data: function(){
            var location = Locations.findOne({_id:this.params._id});
            return {location: _.extend(location,{view_mode:true})};
        },
        waitOn: function(){
            return [Meteor.subscribe('singleLocation',this.params._id)];
        }
    });
    this.route('locationViewAll', { "path": '/locations',
        waitOn: function(){
            return [Meteor.subscribe('locations')];
        }
    });

    // Channels
    this.route('channelViewAll', {
        "path": '/channels/',
        waitOn: function(){
            return [Meteor.subscribe('channels')];
        }
    })

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