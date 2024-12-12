import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CardImageProps } from "./CardImageProps";

export function CardImage({ title, text, imagePath }: CardImageProps) {
  return (
    <Card className="w-[350px] hover:border-primary">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className="w-[350px]">
        <Image
          className="mx-auto my-4 rounded-lg"
          src={imagePath}
          alt={title}
          width={350}
          height={300}
          priority
        />

        {text}
      </CardContent>
    </Card>
  );
}
