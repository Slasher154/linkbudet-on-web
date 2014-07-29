/**
 * Created by Dome on 6/20/14 AD.
 */

Template.allRequests.requests = function(){
    return LinkRequests.find();

}

Template.allRequests.events({
    'click .generate-pdf': function(e){
        e.preventDefault();
        if(confirm("Generate PDF?")){
            var _id = $(e.currentTarget).attr('value');

            Meteor.call('generate_job_report',_id, function(error){
                if(error){
                    Errors.throw(error.reason);
                }
                else{
                    Router.go('allJobReports');
                }
            });
        }
    }
})