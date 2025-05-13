import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { FaHome, FaInfo, FaSearch } from "react-icons/fa";
import { Link } from "@/i18n/navigation";

export function Drawer() {
  const links = [
    {
      label: "Home",
      href: "/",
      icon: <FaHome />,
    },
    {
      label: "About us",
      href: "/about",
      icon: <FaInfo />,
    },
    {
      label: "Find us",
      href: "/map",
      icon: <FaSearch />,
    },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="cursor-pointer hover:text-primary"
          variant="ghost"
          size="icon"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-64" side="right">
        <SheetHeader className="text-center">
          <Image
            className="rounded-full mx-auto"
            src="/logo.png"
            height={100}
            width={100}
            alt="Logo"
            priority
          />
          <SheetTitle className="text-primary">Elahiya</SheetTitle>
          <SheetDescription className="text-normal">
            Pro òanguage school
          </SheetDescription>
        </SheetHeader>

        <ul className="px-4 -mt-4 text-xl">
          {links.map(link => (
            <li className="hover:text-primary my-1" key={link.href}>
              <Link
                className="flex gap-2 items-center text-lg"
                href={link.href}
              >
                {link.icon} {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
