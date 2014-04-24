/**
 * Created by Dome on 4/24/14 AD.
 */
Template.bandwidth.events({
    'click button': function(e){
        e.preventDefault();
        //Find which input the clicked button belongs to
        var $input = $(e.currentTarget).parent('');
        //Remove the active class for all the buttons
        $input.find('button').removeClass('active');
        //Toggle the active class for clicked button
        $(e.currentTarget).addClass('active');
    }
})