"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";

interface NavLinksProps {
  className?: string;
  linkClassName?: string;
  onNavigate?: () => void;
}

export function NavLinks({
  className,
  linkClassName,
  onNavigate,
}: NavLinksProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Main" className={className}>
      {site.nav.map(({ label, href }) => {
        const active = pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            onClick={onNavigate}
            aria-current={active ? "page" : undefined}
            className={cn(
              "text-sm font-medium transition-colors hover:text-foreground",
              active ? "text-foreground" : "text-muted-foreground",
              linkClassName,
            )}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
