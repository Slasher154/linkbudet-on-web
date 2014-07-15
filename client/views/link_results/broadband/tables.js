/**
 * Created by Dome on 7/14/14 AD.
 */

Template.forwardResultTable.tableRows = function(){
    return [
        "Antenna Size (m)",
        "Downlink Location",
        "Beam",
        "Occupied Bandwidth (MHz)",
        "MCG Clear Sky",
        "EBE Clear Sky (bps/Hz)",
        "Data Rate Clear Sky (Mbps)",
        "MCG Rain Fade",
        "EBE Rain Fade (bps/Hz)",
        "Data Rate Rain Fade (Mbps)",
        "Total Link Availability (%)"
    ]
}

Template.returnResultTable.tableRows = function(){
    return [
        "Antenna Size (m)",
        "BUC (W)",
        "Uplink Location",
        "Beam",
        "Occupied Bandwidth (MHz)",
        "MCG Clear Sky",
        "EBE Clear Sky (bps/Hz)",
        "Data Rate Clear Sky (Mbps)",
        "MCG Rain Fade",
        "EBE Rain Fade (bps/Hz)",
        "Data Rate Rain Fade (Mbps)",
        "Total Link Availability (%)"
    ]
}