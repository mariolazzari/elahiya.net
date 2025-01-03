import { CardImage, CardImageProps } from "@/components/CardImage";
import { PageProps } from "@/types/PageProps";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: "About us",
    alternates: {
      canonical: `https://elahiya.net/${locale}/about`,
    },
  };
}

function AboutPage() {
  const t = useTranslations("About");

  const cards: CardImageProps[] = [
    {
      title: t("card1Title"),
      text: t("card1Text"),
      imagePath: "/images/card1.png",
    },
    {
      title: t("card2Title"),
      text: t("card2Text"),
      imagePath: "/images/card2.png",
    },
    {
      title: t("card3Title"),
      text: t("card3Text"),
      imagePath: "/images/card3.png",
    },
  ];

  return (
    <>
      <div className="max-w-xl p-4 rounded-xl shadow-xl mx-auto my-4 bg-gradient-to-br from-background to-muted border border-muted hover:border-primary">
        <h2 className="text-4xl text-primary my-4 font-bold text-center">
          {t("title")}
        </h2>
        <p className="text-justify">{t("text")}</p>
      </div>

      <div className="my-4 flex justify-center items-center flex-wrap gap-16">
        {cards.map(card => (
          <CardImage key={card.title} {...card} />
        ))}
      </div>
    </>
  );
}

export default AboutPage;
