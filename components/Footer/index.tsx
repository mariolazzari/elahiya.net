import { Copyright } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <Separator className="h-0.5 bg-muted" />
      <footer className="flex justify-center items-center h-[50px] gap-1">
        <Link
          className="flex items-center gap-1 font-semibold hover:text-primary"
          href="https://mariolazzari.it"
          target="_blank"
        >
          <Copyright size={16} />
          Mario Lazzari {year}
        </Link>
      </footer>
    </>
  );
}
