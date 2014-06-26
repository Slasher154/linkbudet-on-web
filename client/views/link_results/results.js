/**
 * Created by Dome on 6/18/14 AD.
 */

Template.results.assumptions = function () {
    console.log('Result id = ' + this._id);
    var assumption = LinkRequests.findOne({_id: this._id}).assumptions;

    // Set the display text for assumption in title, detail pair
    var data = [];

    // Satellite
    push("Satellite", assumption.satellite);

    // Beam / Country
    if (_.has(assumption, 'country')) {
        push("Country", assumption.country);
    }
    if (_.has(assumption, 'beam')) {
        push("Beam", assumption.beam);
    }

    // Channels
    if (_.has(assumption, 'channels')) {
        push("Channels", assumption.channels.join(','));
    }

    // Hub antenna
    if (_.has(assumption, 'hub_antenna')) {
        push("Hub antenna", assumption.hub_antenna.name);
    }

    // Hub location
    if (_.has(assumption, 'hub_location')) {
        push("Hub location", assumption.hub_location);
    }

    // Remote antennas
    if (_.has(assumption, 'remote_antennas')) {
        push("Remote antennas", _.pluck(assumption.remote_antennas, 'name'));
    }

    // Remote locations
    if (_.has(assumption, 'remote_locations')) {
        push("Remote locations", assumption.remote_locations.join(','))
    }

    // BUCs
    if (_.has(assumption, 'bucs')) {
        push("BUCs", _.pluck(assumption.bucs, 'name'));
    }

    // Platform
    if (_.has(assumption, 'platform')) {
        push("Platform", assumption.platform.name);
    }

    // Forward Fix MCGs
    if (_.has(assumption, 'fwd_fix_mcgs')) {
        push("Fix MCGs", assumption.fwd_fix_mcgs.join(','));
    }

    // Return Fix MCGs
    if (_.has(assumption, 'rtn_fix_mcgs')) {
        push("Fix MCGs", assumption.rtn_fix_mcgs.join(','));
    }


    // Bandwidth
    if (_.has(assumption, 'bandwidths')) {
        var text = "";
        for (var i = 0; i < assumption.bandwidths.length; i++) {
            var bw = assumption.bandwidths[i];
            if (bw.fwd != 0) {
                text += bw.fwd + "";
            }
            if (bw.rtn != 0) {
                text += " / " + bw.rtn;
            }
            text += " " + assumption.unit;
            if (i != assumption.bandwidths.length - 1) {
                text += " ,";
            }
        }
        ;
        push("Bandwidth", text);
    }

    return data;

    function push(title, detail) {
        data.push({title: title, detail: detail});
    }

}

Template.results.conventionalResult = function () {

    var request = LinkRequests.findOne({_id: this._id});
    var result = request.results;
    var assumption = request.assumptions;

    var data = [];

    for (var i = 0; i < result.length; i++) {
        var re = result[i];

        // We will group the results by adjacent satellite interferences first.
        // For 2-ways communications, we will select the result with same adjacent satellite case for A to B and B to A only.

        // check if result has return link or adjacent satellite for both forward is not the same case
        var fwd_clear = _.where(re.fwd, {uplink_condition: "clear", downlink_condition: "clear"})[0];

        if (!_.isEmpty(re.rtn)) {
            var rtn_clear = _.where(re.rtn, {uplink_condition: "clear", downlink_condition: "clear"})[0];

            // check if result has return link or adjacent satellite for both forward is not the same case
            if (!_.isEqual(_.pluck(fwd_clear.ci_downlink_adj_sat_obj, 'name'), _.pluck(rtn_clear.ci_downlink_adj_sat_obj, 'name'))) {
                console.log('Case no. ' + i + ' has different adj.intf case.');
                continue; // skip this case and continue to the next result
            }
        }

        // create result object for forward and return results
        var fwd_result_obj = CreateLinkObject(re.fwd);
        if (_.has(assumption, 'platform')) {
            _.extend(fwd_result_obj, {platform: assumption.platform.name});
        }
        var rtn_result_obj = {}
        if (!_.isEmpty(re.rtn)) {
            rtn_result_obj = CreateLinkObject(re.rtn);
            if (_.has(assumption, 'platform')) {
                _.extend(rtn_result_obj, {platform: assumption.platform.name});
            }
        }

        // check if our data array already contains the current result adj.sat downlink interference
        var intf_name = _.pluck(fwd_clear.ci_downlink_adj_sat_obj, 'name').join(',');
        var intf = _.find(data, function (item) {
            return item.intf == intf_name;
        });

        // if intf is undefined, it means there is no group for this yet
        // so we create new group
        if (_.isUndefined(intf)) {
            console.log('Create new group for interferences ' + intf_name);
            data.push({
                intf: intf_name,
                has_intf: intf_name != "no interference",
                fwd: [fwd_result_obj],
                rtn: [rtn_result_obj]
            });
        }
        // push the result of fwd_result_obj and rtn_result_obj
        else {
            console.log('Push this result into interference group ' + intf_name);
            intf.fwd.push(fwd_result_obj);
            intf.rtn.push(rtn_result_obj);
        }

    }

    console.log("Interference groups = " + JSON.stringify(data));

    return data;

    function CreateLinkObject(result) {
        // return the necessary information to show in the table result
        var clear = _.where(result, {uplink_condition: "clear", downlink_condition: "clear"})[0];
        var rain = _.where(result, {uplink_condition: "rain", downlink_condition: "rain"})[0];

        return {
            case_name: clear.channel + " : " + clear.downlink_location.name,
            uplink_location: clear.uplink_location.name,
            downlink_location: clear.downlink_location.name,
            uplink_antenna: clear.uplink_antenna.size,
            downlink_antenna: clear.downlink_antenna.size,
            data_rate: clear.data_rate.toFixed(2),
            mcg: clear.mcg.name,
            eb_no_threshold: eb_no(clear.mcg.spectral_efficiency, clear.mcg.es_no).toFixed(2),
            bandwidth: clear.roundup_bandwidth,
            uplink_ifl: clear.uplink_hpa.ifl,
            hpa_power: clear.hpa_power.toFixed(2),
            cn_total: clear.cn_total.toFixed(2),
            eb_no: eb_no(clear.mcg.spectral_efficiency, clear.cn_total).toFixed(2),
            eb_no_margin: clear.link_margin.toFixed(2),
            cn_uplink: clear.cn_uplink.toFixed(2),
            cn_downlink: clear.cn_downlink.toFixed(2),
            eb_no_rain: eb_no(rain.mcg.spectral_efficiency, rain.cn_total).toFixed(2),
            power_util_percent: clear.power_util_percent.toFixed(2),
            guardband: clear.guardband,
            roll_off_factor: clear.roll_off_factor
        };

    }

    function eb_no(spec_eff, es_no) {
        return es_no - 10 * log10(spec_eff);
    }

    function log10(num) {
        return Math.log(num) / Math.LN10;
    }


}



