/**
 * Created by Dome on 4/22/14 AD.
 */
Template.broadband.countries = function () {
    var sat = Session.get('satellite');
    if (sat) {
        var countries = Channels.find({satellite: sat.name}, {fields: {country: 1}, sort: {country: 1}}).fetch();
        return _.uniq(_.pluck(countries, 'country'));
    }
}

Template.broadband.events({
    'change select': function(e){
        var selectedCountry = $(e.target).val();
        Session.set('country', selectedCountry);
    }
})