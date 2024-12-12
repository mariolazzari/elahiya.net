import { Map } from "@/components/Map";

function MapPage() {
  // map settings
  const apiKey = process.env.MAP_API_KEY;
  const lat = process.env.MAP_LAT;
  const lon = process.env.MAP_LON;

  if (!apiKey || !lat || !lon) {
    throw new Error("Missing map settings");
  }

  return (
    <>
      <h2 className="text-4xl text-primary mx-auto my-4">Find us</h2>
      <Map apiKey={apiKey} latitude={+lat} longitude={+lon} />
    </>
  );
}

export default MapPage;
