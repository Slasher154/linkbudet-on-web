/**
 * Created by Dome on 5/23/14 AD.
 */

Template.calculate.rendered = function () {

    var fwd_chan = Channels.find({satellite:'IPSTAR', type:'forward'}).fetch();
    _.each(fwd_chan,function(item){
        _.extend(item,{'default_gateway':item.uplink_beam});
    });
    var bc_chan = Channels.find({satellite:'IPSTAR', type:'broadcast'}).fetch();
    _.each(bc_chan,function(item){
        _.extend(item,{'default_gateway':item.uplink_beam});
    });
    var rtn_chan = Channels.find({satellite:'IPSTAR', type:'return'}).fetch();
    _.each(rtn_chan,function(item){
        _.extend(item,{'default_gateway':item.downlink_beam});
    });
    console.log(JSON.stringify(fwd_chan));
    console.log(JSON.stringify(bc_chan));
    console.log(JSON.stringify(rtn_chan));
    Meteor.call('link_calc', function (error, result) {
        var s = "";
        for (var prop in result) {
            // important check that this is objects own property
            // not from prototype prop inherited
            if(result.hasOwnProperty(prop)){
                //alert(prop + " = " + result[prop]);
                s += prop + " = " + result[prop] + "<br />";
            }
        }
        console.log(s);
        $('#result').append(s);
    });


}

Template.calculate.result = function () {



}