
export const styles = [
    {
        featureType: "administrative",
        elementType: "labels.text.fill",
        stylers: [{ color: "#444444" }],
    },
    {
        featureType: "landscape",
        elementType: "all",
        stylers: [{ color: "#f2f2f2" }],
    },
    {
        featureType: "poi",
        elementType: "all",
        stylers: [{ visibility: "off" }],
    },
    {
        featureType: "road",
        elementType: "all",
        stylers: [{ saturation: -100 }, { lightness: 45 }],
    },
    {
        featureType: "road.highway",
        elementType: "all",
        stylers: [{ visibility: "simplified" }],
    },
    {
        featureType: "road.arterial",
        elementType: "labels.icon",
        stylers: [{ visibility: "off" }],
    },
    {
        featureType: "transit",
        elementType: "all",
        stylers: [{ visibility: "off" }],
    },
    {
        featureType: "water",
        elementType: "all",
        stylers: [
            { visibility: "on" },
        ],
    },
]

export const map_sample_data = [
    {
        wearable_SN : '123',
        displayname : 'user3',
        log : [{
            latitude: 36.73868625605972,
            longitude: 127.0725404087475,
            dateTime : '2020-01-02 01:11',
            building_name : '강석규1호관'
        }, {
            latitude: 36.711507070805394,
            longitude: 127.00726087076714,
            dateTime : '2020-01-02 01:21',
            building_name : '강석규2호관'
        }, {
            latitude: 36.74254462071542,
            longitude: 127.18548547547008,
            dateTime : '2020-01-02 01:31',
            building_name : '강석규3호관'
        }, {
            latitude: 37.737797357187144,
            longitude: 127.18730969428152,
            dateTime : '2020-01-02 01:41',
            building_name : '강석규4호관'
        }]
    },
    {
        wearable_SN : '123',
        displayname : 'user1',
        log : [{
            latitude: 36.7305605972,
            longitude: 127.07253040475,
            dateTime : '2020-01-02 01:11',
            building_name : '강석규5호관'
        }, {
            latitude: 36.741070805394,
            longitude: 127.07720714,
            dateTime : '2020-01-02 01:21',
            building_name : '강석규6호관'
        }, {
            latitude: 36.702072542,
            longitude: 127.08540,
            dateTime : '2020-01-02 01:31',
            building_name : '강석규7호관'
        }, {
            latitude: 35.737797357181144,
            longitude: 127.0870669428152,
            dateTime : '2020-01-02 01:41',
            building_name : '강석규8호관'
        }]
    }, {
        wearable_SN : '124',
        displayname : 'user2',
        log : [{
            latitude: 35.73868615605971,
            longitude: 126.0725304087465,
            dateTime : '2020-01-02 01:11',
            building_name : '강석규9호관'
        }, {
            latitude: 36.0605364,
            longitude: 127.0777985076714,
            dateTime : '2020-01-02 01:21',
            building_name : '강석규10호관'
        }, {
            latitude: 36.74774462072542,
            longitude: 127.77548547567008,
            dateTime : '2020-01-02 01:31',
            building_name : '강석규11호관'
        }, {
            latitude: 36.7370,
            longitude: 127.00428152,
            dateTime : '2020-01-02 01:41',
            building_name : '강석규12호관'
        }]
    },
]