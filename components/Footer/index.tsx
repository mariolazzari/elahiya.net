import { Copyright } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="flex justify-center items-center h-[50px] gap-1">
      <Copyright size={16} />
      <Link href="https://mariolazzari.it" target="_blank">
        Mario Lazzari {year}
      </Link>
    </footer>
  );
}
