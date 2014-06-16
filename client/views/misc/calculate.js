/**
 * Created by Dome on 5/23/14 AD.
 */

Template.calculate.rendered = function () {
    /*
     Meteor.call('get_adj_sat',function(error,data){
     if(error){
     console.log(error.reason);
     }
     else{
     console.log('Data at client = ' + data);
     var pfd_file = Pdfs.findOne({'original.name':data});
     console.log(pfd_file.url);
     }

     });

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
     */

}

Template.calculate.mypdfs = function () {

    return Pdfs.find();


}

Template.calculate.adj = function () {

    var intfs = Intf.find().fetch();
    var obj = [];
    _.each(intfs, function (item) {
        var string = "";
        _.each(item.intf, function (item2) {
            console.log('item 2 = ' + item2);
            if(item2.length ==0){
                string += "F"
            }
            _.each(item2, function (item3) {
                console.log('item 3 = ' + item3);
                var chan = Channels.findOne({_id: item3});

                string += chan.satellite + "_" + chan.name;
                if(chan.current_num_carriers=="single"){
                    string += " (A) ";
                }
                else{
                    string += " (B) ";
                }
                string += " , ";
            });
            string += " | "
        });
        console.log("------------Text = " + string);
        obj.push(
            {chan: item.name, text: string}
        );
    })
    console.log(JSON.stringify(obj));
    return obj;

    //return [{chan:"2X",text:"555"}];
}

