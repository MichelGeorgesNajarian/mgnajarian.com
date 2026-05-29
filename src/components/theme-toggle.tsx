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
      variant="ghost"
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="rounded-full p-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {theme === "dark" ? (
        // Sun icon
        <HugeiconsIcon icon={SunIcon} />
      ) : (
        // Moon icon
        <HugeiconsIcon icon={Moon02Icon} />
      )}
    </Button>
  );
}
