/**
 * Created by Dome on 4/24/14 AD.
 */

Template.index.events({
    'submit form': function (e) {
        e.preventDefault();

    },
    'click #submit': function (e) {
        e.preventDefault();

        // Validate the input

        var linkInput = {};
        var bwUnit;
        var bandwidth = [];

        // check if any satellite is selected
        var satellite = Session.get('satellite');
        if (!satellite) {
            Errors.throw('Please select satellite.');
            return false;
        }

        // check if broadband or conventional

        if (Session.get('isConventional')) {
            // check if any beam is selected
            var beam = Session.get('beam');
            if (!beam) {
                Errors.throw('Please select beam.');
                return false;
            }

            var channels;
            var hubSize;
            var hubLocation;
            var remoteSize;
            var selectedLocs;
            var selectedConventionalPlatform;
            var selectedBcPlatform;
            var selectedMcgs = [];
            var selectedBt;
            var selectedVsatModem;
            var linkMargin;


            // check if any channel is selected
            channels = $('.conventionalChannels').find('label.active').map(function () {
                return $(this).find('input').val();
            }).get();
            console.log('Selected channels: ' + channels.join(','));
            if (channels.length <= 0) {
                Errors.throw('Please select at least 1 satellite channel.');
                return false;
            }

            // check if hub size is valid
            hubSize = $('#hub-size').val();
            console.log('Hub size: ' + hubSize + ' m.')
            if (hubSize === '' || hubSize < 0) {
                Errors.throw('Hub size is not valid.');
                return false;
            }

            // check if location is valid
            // TODO: Wait for the location database
            hubLocation = $('#hub-location').val();
            console.log('Hub location: ' + hubLocation);

            // check if remote antenna size is valid
            remoteSize = $('#remote-size').val();
            console.log('Remote size: ' + remoteSize + ' m.');
            if (remoteSize === '' || remoteSize < 0) {
                Errors.throw('Remote size is not valid.');
                return false;
            }

            // check if remote location is valid
            selectedLocs = $('#selected-locations').find('span').map(function () {
                return $(this).html();
            }).get();
            console.log('Selected locations: ' + selectedLocs.join(','));
            if (selectedLocs.length <= 0) {
                Errors.throw('Please select at least 1 remote location.');
                return false;
            }

            // check if any platform (BC/VSAT) is selected
            selectedConventionalPlatform = Session.get('selectedConventionalPlatform');
            console.log('Selected conventional platform: ' + selectedConventionalPlatform);
            if (!selectedConventionalPlatform) {
                Errors.throw('Please select platform.');
                return false;
            }

            // if BC is selected, check if any application is selected (DVB-S1/DVB-S2)
            // also check if any MCG and BT product is selected
            if (selectedConventionalPlatform === "BC") {
                selectedBcPlatform = Session.get('selectedBcPlatform');
                console.log('Selected BC Platform: ' + selectedBcPlatform);
                if (!selectedBcPlatform) {
                    Errors.throw('Please select broadcast application.');
                    return false;
                }

                selectedMcgs = $('.bcMcg').find(':checked').map(function () {
                    return $(this).val();
                }).get();
                console.log('Selct MCGs: ' + selectedMcgs.join(','));
                if (selectedMcgs.length <= 0) {
                    Errors.throw('Please select at least 1 MCG.');
                    return false;
                }

                selectedBt = $('#bt-product').find('option:selected').val();
                console.log('BT Product: ' + selectedBt);
                if (selectedBt === '') {
                    Errors.throw('Please select BT product.');
                    return false;
                }
            }

            // if VSAT is selected, check modem and link margin
            if (selectedConventionalPlatform === "VSAT") {
                selectedVsatModem = Session.get('modemId');
                console.log('Select VSAT modem: ' + selectedVsatModem);
                if (!selectedVsatModem || selectedVsatModem === '') {
                    Errors.throw('Please select modem.');
                    return false;
                }

                linkMargin = $('#link-margin').val();
                console.log('Link margin: ' + linkMargin + " dB");
                if (linkMargin < 0 || linkMargin === '') {
                    Errors.throw('Invalid link margin.');
                    return false;
                }
            }
        }

        if (Session.get('isBroadband')) {
            // check if any country is selected
            var country = Session.get('country');
            if (!country) {
                Errors.throw('Please select country.');
                return false;
            }

            var findBestChannel = Session.get('findBestChannel');
            var findMaxContour = Session.get('findMaxContour');
            var selectedChannels = [];
            var selectedDefinedContours = [];
            var selectedLatLon = [];
            var recommendAntenna;
            var selectedAntennas = [];
            var recommendBuc;
            var selectedBucs = [];
            var modem;
            var fixMcg;

            // check if best beam option is selected
            if (!findBestChannel) {
                // check if any channel is selected
                selectedChannels = $('#broadbandChannels').find('label.active').map(function () {
                    return $(this).find('input').val();
                }).get();
                console.log("Selected Channels: " + selectedChannels);
                if (selectedChannels.length <= 0) {
                    Errors.throw('Please select at least 1 channel.');
                    return false;
                }

                // check if max contour is selected
                if (!findMaxContour) {
                    // check if any defined contours or lat/lon is selected
                    selectedDefinedContours = $('#definedContours').find('label.active').map(function () {
                        return $(this).find('input').val();
                    }).get();
                    console.log('Selected Defined contours: ' + selectedDefinedContours);
                    selectedLatLon = $('#selected-locations').find('span').map(function () {
                        return $(this).html();
                    }).get();
                    console.log('Selected lat/lon: ' + selectedLatLon.join(','));
                    if (selectedLatLon.length > 0) {
                        //check if each latlon is valid
                        _.map(selectedLatLon, function (item) {
                            if (!CheckLatLon(item)) {
                                Errors.throw('Lat/Lon is not valid.');
                                return false;
                            }
                        })
                    }
                    // check if any location is selected
                    if (selectedDefinedContours.length <= 0 && selectedLatLon.length <= 0) {
                        Errors.throw('Please select at least 1 location.');
                        return false;
                    }
                }
            }
            else {
                //check if any lat/lon is selected
                selectedLatLon = $('#selected-locations').find('span').map(function () {
                    return $(this).html();
                }).get();
                console.log('Selected lat/lon: ' + selectedLatLon.join(','));
                if (selectedLatLon.length > 0) {
                    //check if each latlon is valid
                    _.map(selectedLatLon, function (item) {
                        if (!CheckLatLon(item)) {
                            Errors.throw('Lat/Lon is not valid.');
                            return false;
                        }
                    })
                }
                if (selectedLatLon.length <= 0) {
                    Errors.throw('Please select at least 1 location.');
                    return false;
                }
            }

            // check if recommend antenna is selected
            recommendAntenna = Session.get('recommendAntenna');

            // check if any antenna is selected
            if (!recommendAntenna) {
                selectedAntennas = $('#antennaPicker').find('option:selected').map(function () {
                    return $(this).val();
                }).get();
                console.log('Selected antennas: ' + selectedAntennas.join(','));
                if (selectedAntennas.length <= 0) {
                    Errors.throw('Please select at least 1 antenna.');
                    return false;
                }
            }

            // check if any BUC is selected
            recommendBuc = Session.get('recommendBuc');

            // check if any buc is selected
            if (!recommendBuc) {
                selectedBucs = $('#bucPicker').find('option:selected').map(function () {
                    return $(this).val();
                }).get();
                console.log('Selected bucs: ' + selectedBucs.join(','));
                if (selectedBucs.length <= 0) {
                    Errors.throw('Please select at least 1 buc size.');
                    return false;
                }
            }

            // check if any platform is selected
            modem = Session.get('modemId');
            console.log('Selected modem: ' + modem);
            if (!modem || modem === '') {
                Errors.throw('Please select modem.');
                return false;
            }

            // check if calculate at fixed MCG is selected
            fixMcg = $('#fixMcg').is(':checked');
            console.log('Fix MCG: ' + fixMcg)
        }

        // get the bandwidth

        // check if bandwidth unit is selected
        bwUnit = $('#bwUnitPicker').find('option:selected').val();
        console.log("Bandwidth unit: " + bwUnit);
        if(bwUnit===''){
            Errors.throw('Please select bandwidth unit.');
            return false;
        }

        // check if at least 1 bandwidth is input
        var $bwRows = $('.rowBw');
        $bwRows.each(function(){
            var bwFwd = $(this).find('.fwd').val();
            var bwRtn = $(this).find('.rtn').val();
            if(!(bwFwd==='' || bwRtn==='')){
                bandwidth.push({'fwd':bwFwd,'rtn':bwRtn});
            }
        })
        if(bandwidth.length<=0){
            Errors.throw('Please input at least 1 bandwidth.');
        }

    }


})

// check if input lat-lon text is valid
// the valid lat-lon is in the form lat,lon => -89,-179
function CheckLatLon(text) {

    // test regular expression for number,number first
    if (!text.match(/[-.0-9]+[,][-.0-9]+/)) {
        console.log('Regex does not match')
        return false;
    }
    // get lat from the number before comma
    var lat = text.split(',')[0];
    var lon = text.split(',')[1];

    // return false if lat and lon is not a number (NaN = not a number)
    if (isNaN(lat) || isNaN(lon)) {
        console.log('lat,lon is not a number')
        return false;
    }
    // check if lat is between -90 and 90 , lon is between -180 to 180
    else if (lat < -90 || lat > 90 || lon < -180 || lon > 180) {
        console.log('lat, lon is not within correct range.')
        return false;
    }
    return true;
}