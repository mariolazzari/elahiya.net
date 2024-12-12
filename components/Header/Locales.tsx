"use client";

import Image from "next/image";
import { Link, usePathname } from "@/i18n/routing";

export function Locales() {
  const locales = ["fa", "en"];
  const path = usePathname();

  return (
    <div className="flex gap-2">
      {locales.map(locale => (
        <Link key={locale} href={path} locale={locale}>
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
