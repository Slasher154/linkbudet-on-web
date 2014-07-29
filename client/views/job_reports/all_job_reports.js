/**
 * Created by Dome on 7/29/14 AD.
 */


Template.allJobReports.jobs = function(){
    return JobReports.find().fetch();
}

Template.allJobReports.jobUrl = function(doc_id){
    return JobReportsPdfs.findOne({_id:doc_id}).url();
}