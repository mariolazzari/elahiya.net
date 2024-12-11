import { Drawer } from "./Drawer";
import { Links } from "./Links";
import { Locales } from "./Locales";

export function Header() {
  return (
    <head className="flex justify-between items-center p-4 h-[50px]">
      <Locales />
      <nav>
        <Links />
      </nav>
      <Drawer />
    </head>
  );
}
