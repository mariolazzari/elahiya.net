import Link from "next/link";
import { LinksProps } from "./LinksProps";
import { Home, Info, MapPin } from "lucide-react";

export function Links({ isDrawer = false }: LinksProps) {
  const size = isDrawer ? 32 : 24;
  const links = [
    {
      label: "Home",
      href: "/",
      icon: <Home size={size} />,
    },
    {
      label: "About",
      href: "/about",
      icon: <Info size={size} />,
    },
    {
      label: "Find",
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
            {link.icon} {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
