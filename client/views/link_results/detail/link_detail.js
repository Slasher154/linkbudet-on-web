/**
 * Created by Dome on 6/27/14 AD.
 */

Template.linkDetailTable.tableRows = function(){
    return ['Parameter','Value','Unit'];
}

Template.linkDetailTable.summaryRows = function(){
    return ['C/N Total (dB)', 'MCG', 'Es/No Threshold (dB)','Link margin (dB)','Required Link margin (dB)', 'Status','Occ.BW (MHz)','Data Rate (Mbps)','Power Utilization (%)','HPA Power (W)','UL Availability (%)','DL Availability (%)','Total Availability (%)'];
}

Template.linkDetailTable.isAcm = function(){
    //return true if the application has ACM mode

}