import Link from "next/link";
import { site } from "@/data/site";
import { NavLinks } from "@/components/nav-links";
import { MobileNav } from "@/components/mobile-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b print:hidden",
        "bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/60",
      )}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="font-semibold tracking-tight">
          {site.name}
        </Link>
        <div className="flex items-center gap-2">
          <NavLinks className="hidden items-center gap-6 pr-2 md:flex" />
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
