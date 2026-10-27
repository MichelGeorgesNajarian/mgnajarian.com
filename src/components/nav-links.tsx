"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";
import { withBasePath } from "@/lib/base-path";

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
        const classes = (active: boolean) =>
          cn(
            "text-sm font-medium transition-colors hover:text-foreground",
            active ? "text-foreground" : "text-muted-foreground",
            linkClassName,
          );

        // Files aren't pages: skip client-side routing and open in a new tab.
        if (href.endsWith(".pdf")) {
          return (
            <a
              key={href}
              href={withBasePath(href)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onNavigate}
              className={classes(false)}
            >
              {label}
            </a>
          );
        }

        const active = pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            onClick={onNavigate}
            aria-current={active ? "page" : undefined}
            className={classes(active)}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
