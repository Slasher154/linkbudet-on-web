/**
 * Created by Dome on 4/23/14 AD.
 */
Template.modemSelector.modems = function(){
    var modems = _.groupBy(Modems.find().fetch(),function(item){ return item.vendor; });
    var grouped_modems = [];
    for(var prop in modems){
        grouped_modems.push({
            vendor: prop,
            modem: modems[prop]
        })
    }
    return grouped_modems;
}

Template.modemSelector.events({
    'change #modemPicker': function(e){
        var modem_id = $(e.currentTarget).find('option:selected').val();
        if(modem_id!==''){
            Session.set('modemId',modem_id);
        }
        console.log(Session.get('modemId'));
    }
})

Template.modemSelector.rendered = function(){
    $('.selectpicker').selectpicker();
}