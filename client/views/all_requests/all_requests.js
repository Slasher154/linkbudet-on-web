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
                    // Show alert to delay the PDF process generation
                    // If we auto redirect page to Job page, the PDF will be not ready and PDF file will be error
                    alert('PDF is successfully generated.');
                    Router.go('allJobReports');
                }
            });
        }
    }
})