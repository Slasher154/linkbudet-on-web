/**
 * Created by Dome on 4/22/14 AD.
 */
Template.pickAntenna.antennas = function () {
    var antennas = _.groupBy(Antennas.find().fetch(),function(item){ return item.vendor; });
    var grouped_antennas = [];
    for(var prop in antennas){
        grouped_antennas.push({
            vendor: prop,
            antenna: antennas[prop]
        })
    }
    return _.sortBy(grouped_antennas, function(item){ return item.vendor;});
}

Template.pickAntenna.events({
    'change input#remote-size': function (e) {
        // Alert if user selects C-Band and input remote size less than 1.8m and clear the input
        var remote_size = $(e.currentTarget).val();
        if (Session.get('isCBand') && remote_size < 1.8) {
            alert('You cannot use antenna smaller than 1.8m with C-Band.');
            $(e.currentTarget).val('');

        }

    }
})

Template.pickAntenna.rendered = function(){
    $('.selectpicker').selectpicker();
}