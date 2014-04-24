/**
 * Created by Dome on 4/23/14 AD.
 */
Template.broadcastMcgSelector.mcgs = function(){
    var selectedApplication = Session.get('selectedBcPlatform');
    if(selectedApplication==="DVB-S1"){
        return [
            "QPSK 1/2",
            "QPSK 3/4",
            "QPSK 5/6",
            "QPSK 7/8",
            "8PSK 2/3",
            "8PSK 3/4"
        ];
    }
    if(selectedApplication==="DVB-S2"){
        return [
            "QPSK 1/2",
            "QPSK 3/4",
            "QPSK 5/6",
            "QPSK 7/8",
            "8PSK 2/3",
            "8PSK 3/4",
            "16APSK 4/5",
            "16APSK 5/6"
        ];
    }

}
Template.broadcastMcgSelector.bt = function(){
    return [1.2,1.28,1.35];
}