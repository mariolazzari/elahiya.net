import Image from "next/image";
import { Link } from "@/i18n/routing";

export function Locales() {
  const locales = ["ir", "en"];

  return (
    <div className="flex gap-2">
      {locales.map(locale => (
        <Link key={locale} href="/" locale={locale}>
          <Image
            src={`/images/${locale}.png`}
            alt={locale}
            width={32}
            height={32}
            priority
          />
        </Link>
      ))}
    </div>
  );
}
