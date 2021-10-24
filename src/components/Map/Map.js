import React from "react";
// @material-ui/core components
import Box from "@material-ui/core/Box";
import { styles } from "modules/static/map";

export default function MapWrapper({ data }) {
  const mapRef = React.useRef(null);

  console.log(data)

  React.useEffect(() => {
    let google = window.google;
    let map = mapRef.current;

    const myLatlng = new google.maps.LatLng(36.736134, 127.077176);

    const mapOptions = {
      zoom: 15,
      center: myLatlng,
      scrollwheel: true,
      zoomControl: true,
      styles,
    };

    map = new google.maps.Map(map, mapOptions);


    if(data && data.length) {
      data.forEach((log, idx) => {
        const { latitude: lat, longitude: lng, building_name, dateTime } = log;
        const marker = new google.maps.Marker({
          position: { lat, lng },
          map: map,
          animation: google.maps.Animation.DROP,
          title: building_name,
        });
        const contentString = `
          <div class="info-window-content">
            <h2>${building_name}</h2>
            <p>${dateTime}</p>
          </div>`;
        const infowindow = new google.maps.InfoWindow({
          content: contentString,
        });
        google.maps.event.addListener(marker, "click", function () {
          infowindow.open(map, marker);
        });
      });
      const flightPath = new google.maps.Polyline({
        path: data.map(item => ({
          lat : item.latitude,
          lng : item.longitude
        })),
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      }).setMap(map);
    }
  });
  return (
    <>
      <Box
        height="600px"
        position="relative"
        width="100%"
        overflow="hidden"
        borderRadius=".375rem"
        ref={mapRef}
      ></Box>
    </>
  );
}
