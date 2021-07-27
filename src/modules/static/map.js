
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

export const sample_data = [
    { 
        lat: 36.73868615605972, 
        lng: 127.0725304087475,
        dateTime : '2020-01-02 01:11',
        building_name : '강석규1호관' 
    }, { 
        lat: 36.741507970805394, 
        lng: 127.07726987076714,
        dateTime : '2020-01-02 01:21',
        building_name : '강석규2호관'
    }, { 
        lat: 36.74264462072542, 
        lng: 127.08548547567008,
        dateTime : '2020-01-02 01:31',
        building_name : '강석규3호관'
    }, { 
        lat: 36.737797357181144, 
        lng: 127.08730669428152,
        dateTime : '2020-01-02 01:41',
        building_name : '강석규4호관'
    }
]