import { Copyright } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="h-[50px] bg-muted flex justify-center items-center">
      <Link
        className="flex gap-2 hover:text-primary"
        href="https://mariolazzari.it"
        target="_blank"
      >
        <Copyright />
        <p>Mario Lazzari {year}</p>
      </Link>
    </footer>
  );
}
