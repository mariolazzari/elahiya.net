import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Drawer() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>

      <SheetContent className="w-64 border border-muted shadow-lg">
        <SheetHeader>
          <SheetTitle>Elahiya</SheetTitle>
          <SheetDescription>Pro Language School</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
