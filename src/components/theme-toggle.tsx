"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { SunIcon, Moon02Icon } from "@hugeicons/core-free-icons";
import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <Button
      onClick={toggle}
      variant="outline"
      size="icon"
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="rounded-full p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50"
    >
      <HugeiconsIcon icon={theme === "dark" ? SunIcon : Moon02Icon} />
    </Button>
  );
}
