/**
 * Created by Dome on 5/26/14 AD.
 */

Meteor.methods({
    // Return four co-ordinates surrounding the given lat/lon
    get_rain_points: function (lat, lon) {
        // check if lat,lon is valid
        if (lat > 90 || lat < -90 || lon > 180 || lon < -180) {
            throw new Meteor.Error(422, 'Lat/Lon is not valid.');
        }
        // the database grid contains lat/lon at 1.5 degree step, so find the 2 lat and 2 lons which are closest to the given point
        var x_lat = Math.floor(lat / 1.5);
        var x_lon = Math.floor(lon / 1.5);
        var y1 = x_lat * 1.5;
        var y2 = (x_lat + 1) * 1.5;
        var x1 = x_lon * 1.5;
        var x2 = (x_lon + 1) * 1.5;
        console.log(y1 + " , " + y2 + " , " + x1 + " , " + x2);
        var f12 = RainData.findOne({lat: y2, lon: x1}).value;
        var f22 = RainData.findOne({lat: y2, lon: x2}).value;
        var f11 = RainData.findOne({lat: y1, lon: x1}).value;
        var f21 = RainData.findOne({lat: y1, lon: x2}).value;

        // Perform bi-linear interpolation
        // Source: http://en.wikipedia.org/wiki/Bilinear_interpolation

        // Linear interpolation in the x-axis for both y
        var fxy1 = linearInterpolation(lon, x1, x2, f11, f21);
        var fxy2 = linearInterpolation(lon, x1, x2, f12, f22);

        // Linear interpolation fxy1,fxy2 in the y-axis
        var rain = linearInterpolation(lat, y1, y2, fxy1, fxy2);

        console.log('topLeft = ' + f12 + ' topRight = ' + f22 + ' bottomLeft = ' + f11 + ' bottomRight = ' + f21);
        console.log('Rain 001 = ' + rain);
        return rain;
    },

    generate_pdf: function () {

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

        // and you pass the doc-definition-object to createPdfKitDocument method
        var docDefinition = {
            pageOrientation: 'landscape',
            content: [
                'First paragraph',
                'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines'
            ]
        };

        // Random a number to append the file name
        var random_num = randomIntFromInterval(1, 10);
        var filepath = mypath + '' + 'pdfs/link_' + random_num + '.pdf';

        // create the documents and write to the file in the public folder
        var pdfDoc = printer.createPdfKitDocument(docDefinition);
        pdfDoc.pipe(fs.createWriteStream(filepath));
        pdfDoc.end();

        // insert the file to our database
        Pdfs.insert(filepath, function (error, obj) {
            console.log('Data at server = ' + obj._id);
            return obj._id;
        });
        return "link_" + random_num + ".pdf";

    },

    test_authen: function () {
        var oAuthServiceUrl = 'https://thcom2.thaicom.net/authservice/AuthenticationSystem.asmx?op=GetAuthen';

        var path = Meteor.require('path');
        var my_path = path.resolve(".");

        var sys_name = "LNCL";
        var ip_address = headers.methodClientIP(this);

        // if my_path starts with '/Users' >> development machine (MAC)
        // else, it is production server
        var api_key = "A42994C48598F2A278D892F2AB1CB5F8231CFF55"; // api key for development machine
        if(my_path.substring(0,6) !== '/Users'){
            api_key = "2A94C4ADCCDCC29242B18ED6C13E4D7B8382F2AB"; // api key for production server
        }

        function beginAuthen(user, password) {
            var message = "";
            var soapMessage =
                '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\
                <soap:Body>\
                    <GetAuthen xmlns="http://www.ipstar.info/WebService/">\
                      <param>\
                        <UserName>37090</UserName>\
                        <Password>;uvufuwmp8,</Password>\
                        <System>' + sys_name + '</System>\
                        <IP_Address>' + ip_address + '</IP_Address>\
                        <APIKey>' + api_key + '</APIKey>\
                      </param>\
                    </GetAuthen>\
                </soap:Body>\
                </soap:Envelope>';
            try {
                var result = HTTP.post(oAuthServiceUrl, {
                    content: soapMessage,
                    headers: {
                        'Content-Type': 'text/xml; charset=utf-8'
                    }
                });
                message = JSON.stringify(result);
            } catch (e) {
                console.log("Error: " + e.message);
                message = JSON.stringify(e);
                return false;
            }
            message += " Client IP Address = " + ip_address;
            return message;
        }

        function endAuth(data) {
            $(data).find('GetAuthenResult').each(function () {
                var id_text = $(this).find('IsSuccess').text();
                var name_text = $(this).find('Message').text();
                console.log("ID Text = " + id_text);
                console.log("Name Text = " + name_text);
            });
        }

        return beginAuthen('', '');
    }


})

function linearInterpolation(x, x1, x2, fx1, fx2) {
    return ((fx2 - fx1) / (x2 - x1)) * (x - x1) + fx1;
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}