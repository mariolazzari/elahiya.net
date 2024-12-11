import { Copyright } from "lucide-react";
import Link from "next/link";
import { Separator } from "../ui/separator";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <Separator className="h-0.5 bg-muted" />
      <footer className="flex justify-center items-center h-[50px] gap-1">
        <Copyright size={16} />
        <Link href="https://mariolazzari.it" target="_blank">
          Mario Lazzari {year}
        </Link>
      </footer>
    </>
  );
}
