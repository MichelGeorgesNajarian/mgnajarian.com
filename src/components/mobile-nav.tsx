"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Menu01Icon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavLinks } from "@/components/nav-links";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open menu"
            className="md:hidden"
          />
        }
      >
        <HugeiconsIcon icon={Menu01Icon} />
      </SheetTrigger>
      <SheetContent side="right">
        <SheetTitle className="px-6 pt-6 text-base font-semibold">
          Menu
        </SheetTitle>
        <NavLinks
          className="flex flex-col gap-1 px-4"
          linkClassName="rounded-md px-2 py-3 text-base hover:bg-muted"
          onNavigate={() => setOpen(false)}
        />
      </SheetContent>
    </Sheet>
  );
}
