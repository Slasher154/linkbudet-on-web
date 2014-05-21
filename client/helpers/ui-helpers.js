/**
 * Created by Dome on 4/21/14 AD.
 */

if (Meteor.isClient){
    UI.registerHelper('isSatelliteSelected', function(){
        return Session.get('isConventional') || Session.get('isBroadband');
    })
    UI.registerHelper('isConventional', function(){
        return Session.get('isConventional');
    })
    UI.registerHelper('isBroadband', function(){
        return Session.get('isBroadband');
    })
    UI.registerHelper('findBestChannel', function(){
        return Session.get('findBestChannel');
    })
    UI.registerHelper('isBeamSelected', function(){
        return Session.get('beam');
    })
    UI.registerHelper('isCountrySelected', function(){
        return Session.get('country');
    })
    UI.registerHelper('isCountryOrBeamSelected', function(){
        return Session.get('beam') || Session.get('country');
    })
    UI.registerHelper('recommendAntenna',function(){
        return Session.get('recommendAntenna');
    })
    UI.registerHelper('recommendBuc', function(){
        return Session.get('recommendBuc');
    })
    UI.registerHelper('findMaxContour', function(){
        return Session.get('findMaxContour');
    })
    UI.registerHelper('isConventionalPlatformSelected', function() {
        if(Session.get('selectedConventionalPlatform')){
            return true;
        }
        return false;
    })
    UI.registerHelper('isBc',function(){
        return Session.get('selectedConventionalPlatform') === 'BC';
    })
    UI.registerHelper('isBcPlatformSelected', function(){
        if(Session.get('selectedBcPlatform')){
            return true;
        }
        return false;
    })
    UI.registerHelper('hasSelectedLocs', function(){
        return Session.get('selectedLocations') && Session.get('selectedLocations').length > 0;
    })
    UI.registerHelper('selectedLocs', function(){
        return Session.get('selectedLocations');
    })
    UI.registerHelper('isModemSelected', function(){
        if(Session.get('modemId')){
            return true;
        }
        return false;
    })
    UI.registerHelper('isAnyPlatformSelected', function(){
        // return true if any broadcast platform (DVB-S1, DVB-S2) or modems (conventional VSAT, broadband satellites is selected
        return Session.get('selectedBcPlatform') || Session.get('modemId');
    })
}