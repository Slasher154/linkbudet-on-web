/**
 * Created by Dome on 6/12/14 AD.
 */

var pdfStore = new FS.Store.GridFS("pdfs")

Pdfs = new FS.Collection("pdfs",{
    stores: [pdfStore]
});

Pdfs.allow({
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
        return !!userId;
    }
})

