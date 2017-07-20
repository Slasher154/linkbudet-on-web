/**
 * Created by Dome on 6/25/14 AD.
 */

Template.satelliteInsert.events({
    'submit form': function(e){
        e.preventDefault();
        // validate input
        var sat = $('#name').val();
        var slot = Number($('#orbitalSlot').val());
        var skb = Number($('#skb').val());
        if(sat === '' || slot === '' || skb === ''){
            Errors.throw('Please fill in all the fields.');
        }
        else if(slot < -180 || slot > 180){
            Errors.throw('Orbital slot must be between -180 to 180 degrees')
        }
        else{
            Satellites.insert({
                name: sat,
                orbital_slot: slot,
                skb: skb,
                type: $('#type').find('option:selected').val()
            }, function(error, _id){
                if(error){
                    Errors.throw(error.reason);
                }
                else{
                    Router.go('satelliteView',{_id: _id});
                }

            });
        }

    }
})