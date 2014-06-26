/**
 * Created by Dome on 6/26/14 AD.
 */

Template.satelliteBaseForm.rendered = function(){


}

Template.satelliteBaseForm.types = function(){
    var types = ['Conventional','Broadband'];
    return _.map(types,function(item){
        return {
            text: item,
            value: item
        }
    })
}
