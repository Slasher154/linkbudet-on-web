/**
 * Created by Dome on 5/28/14 AD.
 */

Meteor.methods({
    'insert_gateways': function () {
        var data = [
            {"name": "10V", "city": "Shanghai", "country": "China", "lat": 31.08, "lon": 121.376, "gateway_availability": 99.9, "remote_availability": 99.7, "ant_size": 8.1, "hpa": {"type": "hpa", "size": 500, "obo": 4, "ifl": 2, "intermod": 25, "upc": 5}},
            {"name": "11H", "city": "South Korea", "country": "South Korea", "lat": 37.46, "lon": 127.4, "gateway_availability": 99.9, "remote_availability": 99.7, "ant_size": 8.1, "hpa": {"type": "hpa", "size": 500, "obo": 4, "ifl": 2, "intermod": 25, "upc": 5}},
            {"name": "12V", "city": "Manila", "country": "Philippines", "lat": 15.112, "lon": 120.6075, "gateway_availability": 99.58, "remote_availability": 99.7, "ant_size": 8.1, "hpa": {"type": "hpa", "size": 500, "obo": 4, "ifl": 2, "intermod": 25, "upc": 5}, "site_diversity": {"name": "12V-D", "city": "Manila", "country": "Philippines", "lat": 14.88105, "lon": 120.7915333, "ant_size": 8.1, "distance_from_main": 40, "hpa": {"type": "hpa", "size": 500, "obo": 4, "ifl": 2, "intermod": 25}}},
            {"name": "13H", "city": "Kuala Lumpur", "country": "Malaysia", "lat": 2.987, "lon": 101.716, "gateway_availability": 99.38, "remote_availability": 99.7, "ant_size": 8.1, "hpa": {"type": "hpa", "size": 500, "obo": 4, "ifl": 2, "intermod": 25, "upc": 5}, "site_diversity": {"name": "13H-D", "city": "Kuala Lumpur", "country": "Malaysia", "lat": 2.562966667, "lon": 102.0439111, "ant_size": 8.1, "distance_from_main": 40, "hpa": {"type": "hpa", "size": 500, "obo": 4, "ifl": 2, "intermod": 25}}},
            {"name": "14H", "city": "Taiwan", "country": "Taiwan", "lat": 23.609003, "lon": 120.948689, "gateway_availability": 99.85, "remote_availability": 99.75, "ant_size": 8.1, "hpa": {"type": "hpa", "size": 500, "obo": 4, "ifl": 2, "intermod": 25, "upc": 5}},
            {"name": "15H", "city": "Hanoi", "country": "Vietnam", "lat": 21.02, "lon": 105.41, "gateway_availability": 99.58, "remote_availability": 99.6, "ant_size": 8.1, "hpa": {"type": "hpa", "size": 500, "obo": 4, "ifl": 2, "intermod": 25, "upc": 5}, "site_diversity": {"name": "15H-D", "city": "Hanoi", "country": "Vietnam", "lat": 20.33, "lon": 105.5, "ant_size": 8.1, "distance_from_main": 40, "hpa": {"type": "hpa", "size": 500, "obo": 4, "ifl": 2, "intermod": 25}}},
            {"name": "16V", "city": "New Zealand", "country": "New Zealand", "lat": 36.74, "lon": 174.69, "gateway_availability": 99.85, "remote_availability": 99.75, "ant_size": 8.1, "hpa": {"type": "hpa", "size": 500, "obo": 4, "ifl": 2, "intermod": 25, "upc": 5}},
            {"name": "17H", "city": "Rangoon", "country": "Myanmar", "lat": 16.861874, "lon": 96.220104, "gateway_availability": 99.58, "remote_availability": 99.7, "ant_size": 8.1, "hpa": {"type": "hpa", "size": 500, "obo": 4, "ifl": 2, "intermod": 25, "upc": 5}, "site_diversity": {"name": "17H-D", "city": "Rangoon", "country": "Myanmar", "lat": 16.711515, "lon": 96.286824, "ant_size": 8.1, "distance_from_main": 40, "hpa": {"type": "hpa", "size": 500, "obo": 4, "ifl": 2, "intermod": 25}}},
            {"name": "18H", "city": "Phnom Penh", "country": "Cambodia", "lat": 11.61, "lon": 104.897, "gateway_availability": 99.58, "remote_availability": 99.7, "ant_size": 8.1, "hpa": {"type": "hpa", "size": 500, "obo": 4, "ifl": 2, "intermod": 25, "upc": 5}, "site_diversity": {"name": "18H-D", "city": "Phnom Penh", "country": "Cambodia", "lat": 11.61, "lon": 104.897, "ant_size": 8.1, "distance_from_main": 40, "hpa": {"type": "hpa", "size": 500, "obo": 4, "ifl": 2, "intermod": 25}}},
            {"name": "1H", "city": "Delhi", "country": "India", "lat": 28.48138889, "lon": 77.71166667, "gateway_availability": 99.58, "remote_availability": 99.6, "ant_size": 8.1, "hpa": {"type": "hpa", "size": 500, "obo": 4, "ifl": 2, "intermod": 25, "upc": 5}, "site_diversity": {"name": "1H-D", "city": "Delhi", "country": "India", "lat": 28.69, "lon": 77.46, "ant_size": 8.1, "distance_from_main": 40, "hpa": {"type": "hpa", "size": 500, "obo": 4, "ifl": 2, "intermod": 25}}},
            {"name": "1V", "city": "Delhi", "country": "India", "lat": 28.48138889, "lon": 77.71166667, "gateway_availability": 99.58, "remote_availability": 99.6, "ant_size": 8.1, "hpa": {"type": "hpa", "size": 500, "obo": 4, "ifl": 2, "intermod": 25, "upc": 5}, "site_diversity": {"name": "1V-D", "city": "Delhi", "country": "India", "lat": 28.69, "lon": 77.46, "ant_size": 8.1, "distance_from_main": 40, "hpa": {"type": "hpa", "size": 500, "obo": 4, "ifl": 2, "intermod": 25}}},
            {"name": "2V", "city": "Bombay", "country": "India", "lat": 19.23, "lon": 72.95, "gateway_availability": 99.58, "remote_availability": 99.6, "ant_size": 8.1, "hpa": {"type": "hpa", "size": 500, "obo": 4, "ifl": 2, "intermod": 25, "upc": 5}, "site_diversity": {"name": "2V-D", "city": "Bombay", "country": "India", "lat": 18.61, "lon": 73.82, "ant_size": 8.1, "distance_from_main": 40, "hpa": {"type": "hpa", "size": 500, "obo": 4, "ifl": 2, "intermod": 25}}},
            {"name": "3H", "city": "Bangkok", "country": "Thailand", "lat": 14.0847, "lon": 100.4211, "gateway_availability": 99.58, "remote_availability": 99.7, "ant_size": 8.1, "hpa": {"type": "hpa", "size": 500, "obo": 4, "ifl": 2, "intermod": 25, "upc": 5}, "site_diversity": {"name": "3H-D", "city": "Bangkok", "country": "Thailand", "lat": 13.8589, "lon": 100.51388, "ant_size": 8.1, "distance_from_main": 40, "hpa": {"type": "hpa", "size": 500, "obo": 4, "ifl": 2, "intermod": 25}}},
            {"name": "3V", "city": "Bangkok", "country": "Thailand", "lat": 14.0847, "lon": 100.4211, "gateway_availability": 99.58, "remote_availability": 99.7, "ant_size": 8.1, "hpa": {"type": "hpa", "size": 500, "obo": 4, "ifl": 2, "intermod": 25, "upc": 5}, "site_diversity": {"name": "3V-D", "city": "Bangkok", "country": "Thailand", "lat": 13.8589, "lon": 100.51388, "ant_size": 8.1, "distance_from_main": 40, "hpa": {"type": "hpa", "size": 500, "obo": 4, "ifl": 2, "intermod": 25}}},
            {"name": "4H", "city": "Beijing", "country": "China", "lat": 40.03, "lon": 116.16, "gateway_availability": 99.85, "remote_availability": 99.8, "ant_size": 8.1, "hpa": {"type": "hpa", "size": 500, "obo": 4, "ifl": 2, "intermod": 25, "upc": 5}},
            {"name": "4V", "city": "Beijing", "country": "China", "lat": 40.03, "lon": 116.16, "gateway_availability": 99.85, "remote_availability": 99.8, "ant_size": 8.1, "hpa": {"type": "hpa", "size": 500, "obo": 4, "ifl": 2, "intermod": 25, "upc": 5}},
            {"name": "5H", "city": "Guangzhou", "country": "China", "lat": 23.00028, "lon": 113.3639, "gateway_availability": 99.58, "remote_availability": 99.7, "ant_size": 8.1, "hpa": {"type": "hpa", "size": 500, "obo": 4, "ifl": 2, "intermod": 25, "upc": 5}, "site_diversity": {"name": "5H-D", "city": "Guangzhou", "country": "China", "lat": 23, "lon": 113.364, "ant_size": 8.1, "distance_from_main": 40, "hpa": {"type": "hpa", "size": 500, "obo": 4, "ifl": 2, "intermod": 25}}},
            {"name": "5V", "city": "Guangzhou", "country": "China", "lat": 23.00028, "lon": 113.3639, "gateway_availability": 99.58, "remote_availability": 99.7, "ant_size": 8.1, "hpa": {"type": "hpa", "size": 500, "obo": 4, "ifl": 2, "intermod": 25, "upc": 5}, "site_diversity": {"name": "5V-D", "city": "Guangzhou", "country": "China", "lat": 23, "lon": 113.364, "ant_size": 8.1, "distance_from_main": 40, "hpa": {"type": "hpa", "size": 500, "obo": 4, "ifl": 2, "intermod": 25}}},
            {"name": "6V", "city": "Jakarta", "country": "Indonesia", "lat": -6.355051, "lon": 107.144938, "gateway_availability": 99.38, "remote_availability": 99.69, "ant_size": 8.1, "hpa": {"type": "hpa", "size": 500, "obo": 4, "ifl": 2, "intermod": 25, "upc": 5}, "site_diversity": {"name": "6V-D", "city": "Jakarta", "country": "Indonesia", "lat": -6.355051, "lon": 107.144938, "ant_size": 8.1, "distance_from_main": 40, "hpa": {"type": "hpa", "size": 500, "obo": 4, "ifl": 2, "intermod": 25}}},
            {"name": "7V", "city": "Tokyo", "country": "Japan", "lat": 36.053554, "lon": 138.9548393, "gateway_availability": 99.9, "remote_availability": 99.8, "ant_size": 8.1, "hpa": {"type": "hpa", "size": 500, "obo": 4, "ifl": 2, "intermod": 25, "upc": 5}, "site_diversity": {"name": "7V-D", "city": "Maruyama", "country": "Japan", "lat": 35.006, "lon": 139.9756488, "ant_size": 8.1, "distance_from_main": 40, "hpa": {"type": "hpa", "size": 500, "obo": 4, "ifl": 2, "intermod": 25}}},
            {"name": "8H", "city": "Kalgoorie", "country": "Australia", "lat": -30.736, "lon": 121.48, "gateway_availability": 99.9, "remote_availability": 99.8, "ant_size": 8.1, "hpa": {"type": "hpa", "size": 500, "obo": 4, "ifl": 2, "intermod": 25, "upc": 5}},
            {"name": "8V", "city": "Kalgoorie", "country": "Australia", "lat": -30.736, "lon": 121.48, "gateway_availability": 99.9, "remote_availability": 99.8, "ant_size": 8.1, "hpa": {"type": "hpa", "size": 500, "obo": 4, "ifl": 2, "intermod": 25, "upc": 5}},
            {"name": "9V", "city": "Broken Hill", "country": "Australia", "lat": -31.97, "lon": 141.48, "gateway_availability": 99.9, "remote_availability": 99.8, "ant_size": 8.1, "hpa": {"type": "hpa", "size": 500, "obo": 4, "ifl": 2, "intermod": 25, "upc": 5}},
            {"name": "BC-100 (102)", "city": "Delhi", "country": "India", "lat": 28.48138889, "lon": 77.71166667, "gateway_availability": 99.9, "remote_availability": 99.6, "ant_size": 7.6, "hpa": {"type": "hpa", "size": 500, "obo": 4, "ifl": 2, "intermod": 25, "upc": 5}},
            {"name": "BC-100 (112)", "city": "Bombay", "country": "India", "lat": 19.23, "lon": 72.95, "gateway_availability": 99.9, "remote_availability": 99.6, "ant_size": 7.6, "hpa": {"type": "hpa", "size": 500, "obo": 4, "ifl": 2, "intermod": 25, "upc": 5}},
            {"name": "BC-200 (205)", "city": "Hanoi", "country": "Vietnam", "lat": 21.02, "lon": 105.41, "gateway_availability": 99.9, "remote_availability": 99.6, "ant_size": 7.6, "hpa": {"type": "hpa", "size": 500, "obo": 4, "ifl": 2, "intermod": 25, "upc": 5}},
            {"name": "BC-200 (207)", "city": "Bangkok", "country": "Thailand", "lat": 14.0847, "lon": 100.4211, "gateway_availability": 99.9, "remote_availability": 99.6, "ant_size": 7.6, "hpa": {"type": "hpa", "size": 500, "obo": 4, "ifl": 2, "intermod": 25, "upc": 5}},
            {"name": "BC-300 (304)", "city": "Beijing", "country": "China", "lat": 40.03, "lon": 116.16, "gateway_availability": 99.9, "remote_availability": 99.6, "ant_size": 7.6, "hpa": {"type": "hpa", "size": 500, "obo": 4, "ifl": 2, "intermod": 25, "upc": 5}},
            {"name": "BC-300 (313)", "city": "Shanghai", "country": "China", "lat": 31.079773, "lon": 121.375832, "gateway_availability": 99.9, "remote_availability": 99.6, "ant_size": 7.6, "hpa": {"type": "hpa", "size": 500, "obo": 4, "ifl": 2, "intermod": 25, "upc": 5}},
            {"name": "BC-300 (320)", "city": "Guangzhou", "country": "China", "lat": 23.00028, "lon": 113.3639, "gateway_availability": 99.9, "remote_availability": 99.6, "ant_size": 7.6, "hpa": {"type": "hpa", "size": 500, "obo": 4, "ifl": 2, "intermod": 25, "upc": 5}},
            {"name": "BC-300 (322)", "city": "Taiwan", "country": "Taiwan", "lat": 23.609003, "lon": 120.948689, "gateway_availability": 99.9, "remote_availability": 99.6, "ant_size": 7.6, "hpa": {"type": "hpa", "size": 500, "obo": 4, "ifl": 2, "intermod": 25, "upc": 5}},
            {"name": "BC-400 (402)", "city": "Tokyo", "country": "Japan", "lat": 36.053554, "lon": 138.9548393, "gateway_availability": 99.9, "remote_availability": 99.6, "ant_size": 7.6, "hpa": {"type": "hpa", "size": 500, "obo": 4, "ifl": 2, "intermod": 25, "upc": 5}},
            {"name": "BC-500 (507)", "city": "Kalgoorie", "country": "Australia", "lat": -30.736, "lon": 121.48, "gateway_availability": 99.9, "remote_availability": 99.6, "ant_size": 7.6, "hpa": {"type": "hpa", "size": 500, "obo": 4, "ifl": 2, "intermod": 25, "upc": 5}},
            {"name": "BC-500 (NZ)", "city": "New Zealand", "country": "New Zealand", "lat": 36.74, "lon": 174.69, "gateway_availability": 99.9, "remote_availability": 99.6, "ant_size": 7.6, "hpa": {"type": "hpa", "size": 500, "obo": 4, "ifl": 2, "intermod": 25, "upc": 5}},
            {"name": "BC-600 (214)", "city": "Kuala Lumpur", "country": "Malaysia", "lat": 2.987, "lon": 101.716, "gateway_availability": 99.9, "remote_availability": 99.6, "ant_size": 7.6, "hpa": {"type": "hpa", "size": 500, "obo": 4, "ifl": 2, "intermod": 25, "upc": 5}},
            {"name": "BC-600 (604)", "city": "Jakarta", "country": "Indonesia", "lat": -6.355051, "lon": 107.144938, "gateway_availability": 99.9, "remote_availability": 99.6, "ant_size": 7.6, "hpa": {"type": "hpa", "size": 500, "obo": 4, "ifl": 2, "intermod": 25, "upc": 5}},
            {"name": "BC-700 (701)", "city": "Manila", "country": "Philippines", "lat": 15.112, "lon": 120.6075, "gateway_availability": 99.9, "remote_availability": 99.6, "ant_size": 7.6, "hpa": {"type": "hpa", "size": 500, "obo": 4, "ifl": 2, "intermod": 25, "upc": 5}}
        ]

        _.each(data, function (item) {
            Gateways.insert(item);
        })
    }
})

