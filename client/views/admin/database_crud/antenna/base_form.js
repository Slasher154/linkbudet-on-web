/**
 * Created by Dome on 7/29/14 AD.
 */

Template.antennaBaseForm.vendors = function () {
    var vendors = AntennaVendors.find().fetch();
    return _.map(vendors, function (item) {
        return {
            text: item.name,
            value: item.name
        }
    })
}