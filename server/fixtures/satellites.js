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
            Satellites.insert({
                name: "Apstar-7",
                orbital_slot: 76.5,
                type: "Conventional"
            });
            Satellites.insert({
                name: "Express-AM4",
                orbital_slot: 80,
                type: "Conventional"
            });
            Satellites.insert({
                name: "Telkom-3",
                orbital_slot: 118,
                type: "Conventional"
            });
            Satellites.insert({
                name: "Asiasat-4",
                orbital_slot: 122,
                type: "Conventional"
            });
        })();
    }
})