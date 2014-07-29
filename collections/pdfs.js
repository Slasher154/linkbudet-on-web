/**
 * Created by Dome on 6/12/14 AD.
 */

var pdfStore = new FS.Store.GridFS("job_reports_pdfs")

JobReportsPdfs = new FS.Collection("job_reports_pdfs",{
    stores: [pdfStore]
});

JobReportsPdfs.allow({
    insert: function(userId, doc) {
        return (userId && doc.metadata.owner === userId);
    },
    update: function(userId, doc, fieldNames, modifier) {
        return (userId === doc.metadata.owner);
    },
    remove: function(userId, doc) {
        return false;
    },
    download: function(userId) {
        //return !!userId;
        return true;
    }
})

