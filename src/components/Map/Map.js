// @material-ui/core components
import Box from "@material-ui/core/Box";
import { styles } from "modules/static/map";
import React from "react";


export default function MapWrapper({ data, clickAble = false, lat = 37.517235, lng = 127.047325, onClick=()=>{} }) {
  const mapRef = React.useRef(null);

  React.useEffect(() => {
    let google = window.google;
    let map = mapRef.current;

    const myLatlng = new google.maps.LatLng(lat, lng);

    const mapOptions = {
      zoom: 15,
      center: myLatlng,
      scrollwheel: true,
      zoomControl: true,
      styles,
    };

    map = new google.maps.Map(map, mapOptions);

    const clickMarker = new google.maps.Marker({
      position: { lat, lng },
      map: map,
      animation: google.maps.Animation.DROP
    });
    clickMarker.setVisible(false)

    if(clickAble) map.addListener('click', ev => {
      clickMarker.setVisible(true)
      clickMarker.setPosition(ev.latLng)
      onClick(ev.latLng.lat(), ev.latLng.lng())
    })

    if(data && data.length) {
      data.forEach(detail => {
        console.log(detail.wearable_SN, detail.displayname)
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        detail.log.forEach((log, idx) => {
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
          path: detail.log.map(item => ({
            lat : item.latitude,
            lng : item.longitude
          })),
          geodesic: true,
          strokeColor: `#` + randomColor,
          strokeOpacity: 1.0,
          strokeWeight: 2,
        }).setMap(map);
      })
    }
  }, [])

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
