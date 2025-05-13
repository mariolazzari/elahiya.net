"use client";
import { Link } from "@/i18n/navigation";
import { usePathname } from "@/i18n/navigation";
import clsx from "clsx";
import { useLocale } from "next-intl";

export function LocaleToggle() {
  const locales = ["en", "fa"];
  const pathname = usePathname();
  const current = useLocale();

  return (
    <div className="flex gap-2">
      {locales.map(locale => (
        <Link
          className={clsx(
            "hover:cursor-pointer font-semibold",
            locale === current && "text-primary"
          )}
          key={locale}
          href={pathname}
          locale={locale}
        >
          {locale}
        </Link>
      ))}
    </div>
  );
}
