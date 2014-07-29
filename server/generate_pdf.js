/**
 * Created by Dome on 7/29/14 AD.
 */

Meteor.methods({
    generate_pdf: function (filename, docDefinition) {

        var path = Meteor.require('path');
        var mypath = path.join(path.resolve("."), "../client/app/");
        var fs = Meteor.require('fs');

        // create a font-declaration object pointing to font files
        // by default pdfmake uses Roboto, if you need more fonts, add them here
        var fonts = {
            Roboto: {
                normal: mypath + 'fonts/Roboto-Regular.ttf',
                bold: mypath + 'fonts/Roboto-Medium.ttf',
                italics: mypath + 'fonts/Roboto-Italic.ttf',
                bolditalics: mypath + 'fonts/Roboto-Italic.ttf'
            }
        };

        // then you create a PdfPrinter object
        var PdfPrinter = Meteor.require('pdfmake');
        var printer = new PdfPrinter(fonts);
        /*
         // and you pass the doc-definition-object to createPdfKitDocument method
         var docDefinition = {
         pageOrientation: 'landscape',
         content: [
         'First paragraph',
         'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines'
         ]
         };
         */

        //var filepath = mypath + '' + 'pdfs/link_' + random_num + '.pdf';
        var filepath = mypath + '' + 'pdfs/' + filename + '.pdf';

        // create the documents and write to the file in the public folder
        var pdfDoc = printer.createPdfKitDocument(docDefinition);
        pdfDoc.pipe(fs.createWriteStream(filepath));
        pdfDoc.end();

        return filepath;
        /*
         // insert the file to our database
         Pdfs.insert(filepath, function (error, obj) {
         console.log('Data at server = ' + obj._id);
         return obj._id;
         });
         return "link_" + random_num + ".pdf";
         */
    },

    'generate_job_report': function (request_id) {

        // find the latest job number in this year
        var current_year = new Date().getFullYear();
        var jobs_in_this_year = JobReports.find({year: current_year}).fetch();
        var job_index = 1;
        console.log(jobs_in_this_year);
        // if this is not first job in this year, find the max index of the job in this year and plus 1 to get index for the new job
        // otherwise, it's the first job in this year so we set job_index to 1
        if (jobs_in_this_year.length > 0) {
            job_index = _.max(jobs_in_this_year, function (item) {
                return item.index;
            }).index + 1;
        }

        var job_id_text = 'JOB ID ' + job_index + '_' + current_year;

        // get the request to create the document
        var request = LinkRequests.findOne({_id: request_id});

        if (request) {
            var docDefinition = {
                pageOrientation: 'landscape',
                content: [
                    job_id_text
                ]
            };

            // get the filepath of generated file in the server
            var file_path = Meteor.call('generate_pdf', job_id_text, docDefinition);
            var current_timestamp = new Date();

            // insert the file to the database as chunks (use grid FS collection https://github.com/CollectionFS/Meteor-cfs-gridfs)
            JobReportsPdfs.insert(file_path, function (error, obj) {
                console.log('Data at server = ' + obj._id);
                if (error) {
                    console.log(error.reason);
                }
                else {
                    // Add the data of recently generated pdf to the Job Reports database
                    JobReports.insert({
                        name: job_id_text,
                        index: job_index,
                        year: current_year,
                        pdf_id: obj._id,
                        request_id: request_id,
                        assumptions: request.assumptions,
                        creator_id: Meteor.user()._id,
                        creator_name: Meteor.user().fullname,
                        created_date: Date.parse(current_timestamp.toString())
                    });
                }

            });

        }
        else {
            throw new Meteor.Error(422, 'Request with ID ' + request_id + ' is not exist.');
        }


    }

})
