"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { SunIcon, Moon02Icon } from "@hugeicons/core-free-icons";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const next = resolvedTheme === "dark" ? "light" : "dark";

  // Both icons are rendered and swapped with CSS so the server and client
  // markup match (the resolved theme is unknown during SSR).
  return (
    <Button
      onClick={() => setTheme(next)}
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      title="Toggle theme"
      className="rounded-full"
    >
      <HugeiconsIcon icon={Moon02Icon} className="dark:hidden" />
      <HugeiconsIcon icon={SunIcon} className="hidden dark:block" />
    </Button>
  );
}
