import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getTranslations } from "next-intl/server";
import { PageProps } from "@/types/PageProps";
import { Metadata } from "next";

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

async function AboutPage() {
  const t = await getTranslations("About");

  const cards = [
    {
      title: t("card1Title"),
      text: t("card1Text"),
      image: "/card1.png",
    },
    {
      title: t("card2Title"),
      text: t("card2Text"),
      image: "/card2.png",
    },
    {
      title: t("card3Title"),
      text: t("card3Text"),
      image: "/card3.png",
    },
  ];

  return (
    <section className="py-8">
      <div className="flex flex-col items-center justify-center max-w-xl text-justify mx-auto gap-4 shadow-lg p-4">
        <h2 className="text-3xl text-primary font-semibold">{t("title")}</h2>
        <p>{t("text")}</p>
      </div>

      <div className="flex justify-center items-center flex-wrap gap-8 my-4">
        {cards.map(card => (
          <Card
            className="w-[350px] hover:border hover:border-primary"
            key={card.title}
          >
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent className="h-[450px] space-y-2">
              <Image
                src={card.image}
                alt={card.title}
                height={250}
                width={300}
                priority
              />
              <p>{card.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default AboutPage;
