/**
 * Created by Dome on 4/22/14 AD.
 */
Template.recommendAntenna.events({
    'change input': function(e){
        var checked = $(e.currentTarget).is(':checked');
        Session.set('recommendAntenna',checked);
    }
})