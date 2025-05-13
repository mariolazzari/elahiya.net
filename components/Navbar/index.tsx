import Link from "next/link";
import { LocaleToggle } from "../LocaleToggle";
import { ThemeToggle } from "../ThemeToggle";
import { Drawer } from "../Drawer";
import { FaHome, FaInfo, FaSearch } from "react-icons/fa";

export function Navbar() {
  const links = [
    { href: "/", label: "Home", icon: <FaHome /> },
    { href: "/about", label: "About us", icon: <FaInfo /> },
    { href: "/map", label: "Find us", icon: <FaSearch /> },
  ];

  return (
    <header className="h-[50px]">
      <nav className="h-full bg-muted flex justify-between items-center px-4">
        <LocaleToggle />

        <ul className="hidden md:flex gap-4">
          {links.map(link => (
            <li key={link.href} className="inline-block mr-4">
              <Link
                className="hover:text-primary font-semibold flex gap-1 items-center"
                href={link.href}
              >
                {link.icon}
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex gap-2 items-center">
          <ThemeToggle />
          <Drawer />
        </div>
      </nav>
    </header>
  );
}
