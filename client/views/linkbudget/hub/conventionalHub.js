/**
 * Created by Dome on 4/22/14 AD.
 */
Template.conventionalHub.events({
    'change input#hub-size': function (e) {
        // Alert if user selects C-Band and input hub size less than 1.8m and clear the input
        var hub_size = $(e.currentTarget).val();
        if (Session.get('isCBand') && hub_size < 1.8) {
            alert('You cannot use antenna smaller than 1.8m with C-Band.');
            $(e.currentTarget).val('');
        }


    }
})

Template.conventionalHub.rendered = function(){
    // render typeahead for hub locations from location database
    var locations = _.pluck(Locations.find().fetch(),'display_name');
    //$(this.find('#hub-location')).typeahead({source: locations});
}