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
        console.log('PDF generated');
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

    generate_job_report: function (request_id) {

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

        var job_id_text = 'JOB_ID_' + job_index + '_' + current_year;

        // get the request to create the document
        var request = LinkRequests.findOne({_id: request_id});

        if (request) {

            var docDefinition = CreateDocDefinition(request, job_id_text);

            // get the filepath of generated file in the server
            var file_path = Meteor.call('generate_pdf', job_id_text, docDefinition);
            var current_timestamp = new Date();

            // insert the file to the database as chunks (use grid FS collection https://github.com/CollectionFS/Meteor-cfs-gridfs)

            var creator_name = Meteor.user().fullname;
            var job_object = {
                name: job_id_text,
                index: job_index,
                year: current_year,
                request_id: request_id,
                assumptions: request.assumptions,
                creator_id: this.userId,
                creator_name: creator_name,
                created_date: Date.parse(current_timestamp.toString())
            }
            console.log('Before call insert pdf');
            Meteor.call('insert_pdf_from_file_path', file_path, job_object)
            console.log('After call insert pdf');
        }
        else {
            throw new Meteor.Error(422, 'Request with ID ' + request_id + ' is not exist.');
        }


    },

    insert_pdf_from_file_path: function(file_path,job_object){
        console.log('In function insert pdf');
        Meteor.setTimeout(
            function(){
                console.log('Inside timeout insert pdf');
                var pdf = JobReportsPdfs.insert(file_path);
                console.log(file_path);
                console.log(pdf);
                _.extend(job_object,{ pdf_id: pdf._id});
                JobReports.insert(job_object);

                return "";
            }, 500
        );
    }

})

// Create doc definition from the request
function CreateDocDefinition(request, job_id) {

    var assumption = request.assumptions;
    var results_per_page = 5; // default results per page
    var vertical_margin = 10;
    var tableFontSize = 6;
    var footerFontSize = 6;
    var footerLeftMargin = 0;
    var platform = (assumption.platform.name == 'Standard DVB-S1' || assumption.platform.name == 'Standard DVB-S2') ? 'Ericsson Rx8200' : assumption.platform.name;

    var pageFooter = [{
        text: [{text:"Remark : ", style:'footerHeader'}],
        margin: [footerLeftMargin,0,0,0]

    },{
        margin: [footerLeftMargin,0,0,10],
        ul: [
            {text: [{text:'Eb/No threshold is from ',style:'footerContent'},{text: platform, style: 'footerRed'}]},
            {text: "The frequency availability need to be checked with BCP", style: 'footerContent'}
        ]

    },
        {
            text: "Note: ",
            style: 'footerHeader',
            margin: [footerLeftMargin,0,0,0]
        },{
            ul:[
                {text: 'Typical recommend margin for Eb/No at clear sky should not be less than 2 dB for C band 5 dB for Ku band.', style: 'footerContent'},
                {text: 'LNB must cover extended C-band frequency range if downlink frequency is within this range (3.4-4.2 GHz).', style:'footerContent'},
                {text: 'Antenna sidelobe should meet 29-25 log(theta), where theta equals to sidelobe angle (degree)', style:'footerContent'},
                {text: [{text:'Satellite Attenuation setting = ', style: 'footerContent'},{text: '8', style: 'footerRed'},{text: ' dB', style: 'footerContent'}]}
            ],
            margin: [footerLeftMargin,0,0,10]
        },{
            text: [{text:'Date Printed: ', style: 'footerHeader'},{ text: new Date().toLocaleString("en-GB"), style: 'footerContent'}],
            margin: [footerLeftMargin,0,0,0]
        }
    ];

    var docDefinition = {
        header: { columns: [
            { text: job_id, alignment: 'right', margin: [40, 10] }
        ]},
        //footer: pageFooter,
        pageOrientation: 'landscape',
        pageSize: 'A4',
        content: [

        ],
        styles: {
            redText: {
                color: 'red',
                bold: true
            },
            tableHeader: {
                bold: true,
                fontSize: tableFontSize,
                alignment: 'center'
            },
            tableContent: {
                fontSize: tableFontSize,
                alignment: 'center'
            },
            footerContent: {
                fontSize: footerFontSize
            },
            footerRed: {
                fontSize: footerFontSize,
                color: 'red'
            },
            footerHeader:{
                fontSize: footerFontSize,
                bold: true
            }
        }
    };

    // Add Content to doc definition

    var groupedResults = GroupByAdjacentSatelliteInterferences(request);


    // Loop through each adjacent satellite cases
    for (var k = 0; k < groupedResults.length; k++) {

        var group = groupedResults[k];
        var fwd_only = _.isEmpty(group.rtn[0]);

        // if it's broadcast link, double the cases per page because it does not need to provide the space for return link
        if (fwd_only) {
            results_per_page *= 2;
        }

        // find the number of page per case. each page will have cases
        var page_per_case = parseInt((group.fwd.length - 1) / results_per_page) + 1;


        // since the location table body will be the same for every page, we just find it here first
        var hub = Locations.findOne({name: assumption.hub_location});
        var sat_lon = Satellites.findOne({name: assumption.satellite}).orbital_slot;
        var sat_beam_text = assumption.satellite + ' ' + assumption.beam;
        console.log('Satellite Slot = ' + sat_lon);
        var loc_table_body = _.map(assumption.remote_locations, function (loc) {
            var data = [];
            // Hub Location
            data.push(assumption.hub_location);
            // Remote Location
            data.push(loc);

            var remote = Locations.findOne({name: loc});

            // ********** Data in the table must be string only!! ***********

            // Hub EIRP
            data.push(_.where(hub.data, { satellite: assumption.satellite, beam: assumption.beam, type: 'downlink'})[0].value.toFixed(2));
            // Hub G/T
            data.push(_.where(hub.data, { satellite: assumption.satellite, beam: assumption.beam, type: 'uplink'})[0].value.toFixed(2));
            // Hub Azimuth
            data.push(AzimuthAngle({lat: hub.lat, lon: hub.lon}, sat_lon).toFixed(2));
            // Hub Elevation Angle
            data.push(ElevationAngle({lat: hub.lat, lon: hub.lon}, sat_lon).toFixed(2));
            // Hub Rain Zone
            data.push('-');

            // Remote EIRP
            data.push(_.where(remote.data, { satellite: assumption.satellite, beam: assumption.beam, type: 'downlink'})[0].value.toFixed(2));
            // Remote G/T
            data.push(_.where(remote.data, { satellite: assumption.satellite, beam: assumption.beam, type: 'uplink'})[0].value.toFixed(2));
            // Remote Azimuth
            data.push(AzimuthAngle({lat: remote.lat, lon: remote.lon}, sat_lon).toFixed(2));
            // Remote Elevation Angle
            data.push(ElevationAngle({lat: remote.lat, lon: remote.lon}, sat_lon).toFixed(2));
            // Remote Rain Zone
            data.push('-');

            // Return the data with style mapped

            return _.map(data, function (item) {
                return { text: item, style: 'tableContent'};
            })

        })
        console.log('Loc Table Body = ' + JSON.stringify(loc_table_body));
        for (var i = 1; i <= page_per_case; i++) {

            // Add all contents except result table

            //Add Case Name
            console.log('Case name: ' + group.intf);
            AddContent({
                text: [
                    {text: 'Case : ', bold: true},
                    {text: group.intf, style: 'redText'}
                ]
            });
            console.log('Frequency Caption ' + group.caption);
            // Add Frequency Range
            AddContent({
                text: group.caption, style: 'redText',
                margin: [0, 0, 0, vertical_margin]
            });
            console.log('Summary Caption');
            // Summary Caption
            AddContent({
                text: [
                    {text: 'Summary of Link Budgets of Link Budgets (Digital Applications) on ', bold: true},
                    { text: sat_beam_text, style: 'redText'}
                ],
                margin: [0, 0, 0, vertical_margin]

            });
            console.log('Strictly Recommendation');
            // Strictly recommendation
            AddContent({
                text: [
                    {text: 'Strictly Recommendation: ', bold: true, fontSize: 8},
                    {text: 'Due to the interference from adjacent satellites, All antenna using Thaicom Satellite, both transmit and receive, shall have antenna pattern conform to 29-25*log() starting from 2 degree separation. This means that 3 m antenna or larger shall be used in Thaicom network. The use of smaller antenna or antenna with pattern not comply 29-25*log() will cause interference to/receive interference from adjacent satellites and it shall be customers responsibility to fix the interference and/or accept such interference.', fontSize: 8}
                ],
                margin: [0, 0, 0, vertical_margin]
            });

            // Location Table
            console.log('Location Table');

            var loc_table = [];

            // First row (Location A and Location B)
            loc_table.push([
                {text: "", colSpan: 2},
                {},
                {text: "Location A", colSpan: 5, style: 'tableHeader'},
                {},
                {},
                {},
                {},
                {text: "Location B", colSpan: 5, style: 'tableHeader'},
                {},
                {},
                {},
                {}
            ]);
            // Second row (Location A, B, EIRP, G/T, etc.)
            loc_table.push(_.map(
                ['Location A', 'Location B', 'EIRP (dBW)', 'G/T (dBK-1)', 'Azimuth', 'Elevation', 'Rain Zone', 'EIRP (dBW)', 'G/T(dBK-1)', 'Azimuth', 'Elevation', 'Rain Zone']
                , function (item) {
                    return { text: item, style: 'tableHeader'};
                }));
            // Table body
            _.each(loc_table_body, function (item) {
                loc_table.push(item);
            });
            console.log('Loc table data = ' + JSON.stringify(loc_table));

            AddContent({
                table: {
                    headerRows: 2,
                    body: loc_table
                },
                margin: [0, 0, 0, vertical_margin]
            });

            // Summary of link budget from loc a to loc b
            console.log('Summary of link budget from loc a to loc b');
            AddContent({
                text: 'Summary of Link Budget from Location A to Location B',
                margin: [0, 0, 0, vertical_margin]
            })

            var first_header_row = _.map([
                {text: '', colSpan: 2},
                {},
                {text: 'Antenna (metres)', colSpan: 2},
                {},
                {text: 'Information Rate (kbps)', rowSpan: 2},
                {text: 'FEC', rowSpan: 2},
                {text: 'Eb/No Threshold', rowSpan: 2},
                {text: 'Allocated BW (kHz)', rowSpan: 2},
                {text: 'Uplink IFL (dB)', rowSpan: 2},
                {text: 'HPA power (Watts)', rowSpan: 2},
                {text: 'Clear Sky', colSpan: 5},
                {},
                {},
                {},
                {},
                {text: 'Rain Both sides'},
                {text: 'Power Utilization', rowSpan: 2},
                {text: 'Guardband (%)', rowSpan: 2},
                {text: 'BT Product', rowSpan: 2}
            ], function (item) {
                return _.extend(item, {style: 'tableHeader'})
            });
            var second_header_row = _.map([
                { text: 'Location A'},
                { text: 'Location B'},
                { text: 'A'},
                { text: 'B'},
                {},
                {},
                {},
                {},
                {},
                {},
                { text: 'C/N Total'},
                { text: 'Eb/No'},
                { text: 'Eb/No margin'},
                { text: 'C/N Up'},
                { text: 'C/N Down'},
                { text: 'Eb/No'},
                {},
                {},
                {}
            ], function (item) {
                return _.extend(item, {style: 'tableHeader'})
            });
            console.log('First row = ' + JSON.stringify(first_header_row));
            console.log('Second row = ' + JSON.stringify(second_header_row));
            // Forward Result table

            var fwd_table_content = [first_header_row, second_header_row];
            var rtn_table_content = [first_header_row, second_header_row];

            // Loop through result
            for (var j = results_per_page * (i - 1); j < (results_per_page * i); j++) {
                // If j equals to the length of forward result array, it means that this index is out of bound. We stop the loop.
                if (j == group.fwd.length) {
                    break;
                }
                else {
                    fwd_table_content.push(TransformResultToTableContent(group.fwd[j]));

                    if (!_.isEmpty(group.rtn[j])) {
                        rtn_table_content.push(TransformResultToTableContent(group.rtn[j]));
                    }
                }

            }

            var fwd_table = {
                table: {
                    headerRows: 2,
                    body: fwd_table_content
                },
                margin: [0, 0, 0, vertical_margin]
            };

            // check if it's last page. We will not insert the page break if it's last page to prevent free blank page
            var lastPage = k == groupedResults.length - 1 && i == page_per_case;

            // if it has only fwd link (BC) add page break after fwd table
            /*
            if (fwd_only && !lastPage) {
                _.extend(fwd_table, {'pageBreak': 'after'});
            }
            */
            // Add forward table
            AddContent(fwd_table);

            // if it's not forward only (VSAT), add return table
            if(!fwd_only){
            var rtn_table = {
                table: {
                    headerRows: 2,
                    body: rtn_table_content
                },
                margin: [0, 0, 0, vertical_margin]
            }
            /*
            if (!lastPage) {
                _.extend(rtn_table, {'pageBreak': 'after'});
            }
            */
                AddContent({
                    text: 'Summary of Link Budget from Location B to Location A',
                    margin: [0, 0, 0, vertical_margin]
                });
                AddContent(rtn_table);
            }


            // Add page footer
            _.each(pageFooter, function(item){
               AddContent(item);
            });

            // Add page break
            if(!lastPage){
                AddContent({
                    text: '',
                    pageBreak: 'after'
                })
            }

        }

    }
    ;

    console.log('Returning doc definition...');
    console.log(JSON.stringify(docDefinition));
    return docDefinition;

    function AddContent(content) {
        docDefinition.content.push(content);
    }

    function TransformResultToTableContent(result) {
        //Transform some number to string
        return _.map([
            result.uplink_location,
            result.downlink_location,
            result.uplink_antenna.toString(),
            result.downlink_antenna.toString(),
            result.data_rate.toString(),
            result.mcg,
            result.eb_no_threshold.toString(),
            result.bandwidth.toString(),
            result.uplink_ifl.toString(),
            result.operating_hpa_power.toString(),
            result.cn_total.toString(),
            result.eb_no.toString(),
            result.eb_no_margin.toString(),
            result.cn_uplink.toString(),
            result.cn_downlink.toString(),
            result.eb_no_rain.toString(),
            result.power_util_percent.toString(),
            result.guardband.toString(),
            result.roll_off_factor.toString()
        ], function (item) {
            return {text: item, style: 'tableContent'};
        });
    }
}

