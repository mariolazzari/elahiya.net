import { MapWrapper } from "@/components/Map";
import { PageProps } from "@/types/PageProps";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: "Find us",
    alternates: {
      canonical: `https://elahiya.net/${locale}/map`,
    },
  };
}

function MapPage() {
  const t = useTranslations("Map");

  // map settings
  const lat = process.env.MAP_LAT;
  const lon = process.env.MAP_LON;

  if (!lat || !lon) {
    throw new Error("Missing map settings");
  }

  return (
    <div className="flex flex-col items-center justify-center  gap-4">
      <h2 className="text-4xl text-primary mx-auto my-4 text-center">
        {t("title")}
      </h2>
      <MapWrapper latitude={+lat} longitude={+lon} zoom={14} />
    </div>
  );
}

export default MapPage;
