import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const customIcon = L.divIcon({
  className: 'custom-marker',
  html: `
    <div style="
      width: 20px; 
      height: 20px; 
      background-color: red; 
      border-radius: 50%; 
      border: 2px solid white; 
      box-shadow: 0 0 5px rgba(0,0,0,0.5);
    "></div>
  `,
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});

const Map = ({
  latitude = 41.029484056252755,
  longitude = 28.919070959096636,
  width = "100%",
  height = "100%",
}) => {
  return (
    <div style={{ width, height, margin: 'auto' }}>
      <MapContainer
        center={[latitude, longitude]}
        zoom={16}

        style={{ width: "100%", height: "100%" }}
        className="rounded-lg"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker 
          position={[latitude, longitude]} 
          icon={customIcon} 
        />
      </MapContainer>
    </div>
  );
};

export default Map;