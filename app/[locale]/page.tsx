import { Logo } from "@/components/Logo";
import { Socials } from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { Info, Map } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function Home() {
  const t = useTranslations("Home");

  const buttons = [
    { label: "About us", href: "/about", icon: <Info /> },
    { label: "Find us", href: "/map", icon: <Map /> },
  ];

  return (
    <>
      <Logo size="medium" />

      <h1 className="text-5xl text-center font-semibold text-primary mb-4">
        {t("title")}
      </h1>

      <Socials />

      <div className="flex gap-4 mt-4">
        {buttons.map(b => (
          <Link key={b.href} href={b.href}>
            <Button className="w-32 font-semibold">
              {b.icon} {b.label}
            </Button>
          </Link>
        ))}
      </div>
    </>
  );
}
