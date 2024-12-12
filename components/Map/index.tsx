"use client";

// import { useLocale } from "next-intl";
import "mapbox-gl/dist/mapbox-gl.css";
import MapGl, {
  Marker,
  NavigationControl,
  FullscreenControl,
  GeolocateControl,
  ScaleControl,
} from "react-map-gl";
import { MapProps } from "./MapProps";

export function Map({ apiKey, latitude, longitude }: MapProps) {
  // locales
  //  const locale = useLocale();

  return (
    <MapGl
      mapboxAccessToken={apiKey}
      style={{
        width: "99%",
        height: "500px",
      }}
      initialViewState={{
        longitude,
        latitude,
        zoom: 11,
      }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      attributionControl={false}
      // locale={{ locale }}
    >
      <Marker longitude={longitude} latitude={latitude} color="purple" />
      <ScaleControl />
      <NavigationControl />
      <FullscreenControl />
      <GeolocateControl />
    </MapGl>
  );
}
