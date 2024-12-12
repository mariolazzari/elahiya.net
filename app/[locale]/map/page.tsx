import { Map } from "@/components/Map";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Find us",
  alternates: {
    canonical: "/map",
  },
};

function MapPage() {
  const t = useTranslations("Map");

  // map settings
  const apiKey = process.env.MAP_API_KEY;
  const lat = process.env.MAP_LAT;
  const lon = process.env.MAP_LON;

  if (!apiKey || !lat || !lon) {
    throw new Error("Missing map settings");
  }

  return (
    <>
      <h2 className="text-4xl text-primary mx-auto my-4">{t("title")}</h2>
      <Map apiKey={apiKey} latitude={+lat} longitude={+lon} />
    </>
  );
}

export default MapPage;
