/**
 * Created by Dome on 4/22/14 AD.
 */
Template.pickBuc.bucs = function(){
    return Bucs.find();
}

Template.pickBuc.rendered = function(){
    $('.selectpicker').selectpicker();
}