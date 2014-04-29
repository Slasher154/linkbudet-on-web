/**
 * Created by Dome on 4/22/14 AD.
 */
Template.pickBuc.sizeList = function(){
    return ["1W","2W","4W"];
}

Template.pickBuc.rendered = function(){
    $('.selectpicker').selectpicker();
}