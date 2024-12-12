import { Link } from "@/i18n/routing";
import { LinksProps } from "./LinksProps";
import { Home, Info, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import { DialogClose } from "@radix-ui/react-dialog";

export function Links({ isDrawer = false }: LinksProps) {
  const t = useTranslations("Menu");

  const size = isDrawer ? 32 : 24;
  const links = [
    {
      label: t("home"),
      href: "/",
      icon: <Home size={size} />,
    },
    {
      label: t("about"),
      href: "/about",
      icon: <Info size={size} />,
    },
    {
      label: t("map"),
      href: "/map",
      icon: <MapPin size={size} />,
    },
  ];

  return (
    <ul
      className={
        isDrawer
          ? "flex flex-col gap-6 font-semibold"
          : "flex gap-4 font-semibold"
      }
    >
      {links.map(link => (
        <li key={link.href}>
          <Link
            className="flex items-center gap-1 hover:text-primary"
            href={link.href}
          >
            {isDrawer ? (
              <DialogClose className="flex gap-2">
                {link.icon} {link.label}
              </DialogClose>
            ) : (
              <span className="flex gap-1">
                {link.icon} {link.label}
              </span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}
