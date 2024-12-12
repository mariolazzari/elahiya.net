import { CardImage } from "@/components/CardImage";
import { CardImageProps } from "@/components/CardImage/CardImageProps";

function AboutPage() {
  const cards: CardImageProps[] = [
    {
      title: "title 1",
      text: "text 1",
      imagePath: "/images/card1.png",
    },
    {
      title: "title 2",
      text: "text 2",
      imagePath: "/images/card2.png",
    },
    {
      title: "title 3",
      text: "text 3",
      imagePath: "/images/card3.png",
    },
  ];

  return (
    <>
      <div className="max-w-xl p-4 rounded-xl shadow-xl mx-auto my-4 bg-gradient-to-br from-background to-muted">
        <h2 className="text-4xl text-primary my-4">About us</h2>
        <p className="text-justify">
          Elahiya Pro Language school has been providing English languages,
          TOEFL, IELTS and French classes in Rudehen for 20 years.It is located
          at the 6th Bustan. The institute offers academic and professional
          programs for those who want to learn a new language or gain additional
          language expertise.
        </p>
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
