"use client";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapProps } from "./MapProps";

const customIcon = new L.Icon({
  iconUrl: "/pin.png",
  iconSize: [32, 32], // size of the icon
  iconAnchor: [16, 32], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -32], // point from which the popup should open relative to the iconAnchor
});

function Map({ latitude, longitude, zoom }: MapProps) {
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={zoom}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[latitude, longitude]} icon={customIcon} />
    </MapContainer>
  );
}

export default Map;
