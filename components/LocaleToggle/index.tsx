"use client";
import { Link } from "@/i18n/navigation";
import { usePathname } from "@/i18n/navigation";
import clsx from "clsx";
import { useLocale } from "next-intl";
import { useSidebar } from "../ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";

export function LocaleToggle() {
  const locales = [
    { locale: "en", label: "English" },
    { locale: "fa", label: "فارسی" },
  ];
  const pathname = usePathname();
  const current = useLocale();
  const { open } = useSidebar();
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col gap-2 ml-3">
      {locales.map(({ locale, label }) => (
        <Link
          className={clsx(
            "hover:cursor-pointer font-semibold",
            locale === current && "text-primary"
          )}
          key={locale}
          href={pathname}
          locale={locale}
        >
          {locale} {(open || isMobile) && <span className="ml-1">{label}</span>}
        </Link>
      ))}
    </div>
  );
}
