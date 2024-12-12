import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Links } from "./Links";
import { Separator } from "../ui/separator";
import { Logo } from "../Logo";

export function Drawer() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu size={32} aria-label="Menu" />
      </SheetTrigger>

      <SheetContent className="w-64 border border-muted shadow-lg">
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
          <SheetDescription>Elahiya Pro Language School</SheetDescription>
        </SheetHeader>
        <Separator className="h-0.5 bg-muted my-8" />

        <Links isDrawer />
      </SheetContent>
    </Sheet>
  );
}
