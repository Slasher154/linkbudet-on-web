/**
 * Created by Dome on 5/27/14 AD.
 */

Meteor.methods({
    'insert_satellites':function(){
        (function(){
            Satellites.insert({
                name: "Thaicom 5",
                orbital_slot: 78.5,
                skb: 0.05,
                type: "Conventional"
            });
            Satellites.insert({
                name: "IPSTAR",
                orbital_slot: 119.5,
                skb: 0.05,
                type: "Broadband"
            });
            Satellites.insert({
                name: "Thaicom 6",
                orbital_slot: 78.5,
                skb: 0.05,
                type: "Conventional"
            });
            Satellites.insert({
                name: "Thaicom 7",
                orbital_slot: 120,
                skb: 0.05,
                type: "Conventional"
            });
        })();
    }
})