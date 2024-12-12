import { ThemeToggle } from "../Theme/ThemeToggle";
import { Separator } from "../ui/separator";
import { Drawer } from "./Drawer";
import { Links } from "./Links";
import { Locales } from "./Locales";

export function Header() {
  return (
    <>
      <header className="flex justify-between items-center px-4 h-[50px]">
        <Locales />
        <nav className="hidden md:block">
          <Links />
        </nav>

        <div className="flex gap-2">
          <ThemeToggle />
          <Drawer />
        </div>
      </header>
      <Separator className="h-0.5 bg-muted" />
    </>
  );
}
