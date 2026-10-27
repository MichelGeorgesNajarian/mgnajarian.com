"use client";

import { useState, useSyncExternalStore } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const DESKTOP_QUERY = "(min-width: 768px)";

function subscribe(onChange: () => void) {
  const query = window.matchMedia(DESKTOP_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

// Server and first client render assume mobile, so phones never start the
// iframe download.
function useIsDesktop() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(DESKTOP_QUERY).matches,
    () => false,
  );
}

interface ProjectEmbedProps {
  /** URL to load in the iframe. */
  embedUrl: string;
  /** Page to open in a new tab (the only control on mobile, a fallback on desktop). */
  openUrl: string;
  title: string;
  /** Button label on mobile, e.g. "Watch demo". */
  openLabel?: string;
}

/**
 * Desktop: a lazy iframe with one small fallback link.
 * Mobile: a single button, since embedded apps are cramped and heavy on phones.
 */
export function ProjectEmbed({
  embedUrl,
  openUrl,
  title,
  openLabel = "Open demo",
}: ProjectEmbedProps) {
  const isDesktop = useIsDesktop();
  const [loaded, setLoaded] = useState(false);

  if (!isDesktop) {
    return (
      <a
        href={openUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(buttonVariants({ size: "lg" }), "w-full")}
      >
        {openLabel}
        <HugeiconsIcon icon={ArrowUpRight01Icon} />
      </a>
    );
  }

  return (
    <div className="space-y-3">
      <div className="relative aspect-video overflow-hidden rounded-xl border bg-muted">
        {!loaded && (
          <div
            aria-hidden
            className="absolute inset-0 animate-pulse bg-muted"
          />
        )}
        <iframe
          src={embedUrl}
          title={title}
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-presentation"
          onLoad={() => setLoaded(true)}
          className="absolute inset-0 h-full w-full"
        />
      </div>
      <a
        href={openUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
      >
        Open in new tab
        <HugeiconsIcon icon={ArrowUpRight01Icon} className="size-4" />
      </a>
    </div>
  );
}
