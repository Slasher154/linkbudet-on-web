/**
 * Created by Dome on 4/22/14 AD.
 */
Template.pickAntenna.antennas = function () {
    //TODO: Change to set value to ID
    return [{
        _id: "xxx",
        name: "0.84 m"
    },{
        _id: "yyy",
        name: "1.2 m"
    },{
        _id: "zzz",
        name: "1.8 m"
    },{
        _id: "aaa",
        name: "E7000"
    }
    ]

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