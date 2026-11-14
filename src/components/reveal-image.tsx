"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface RevealImageProps {
  children: ReactNode;
  /** Text on the button that reveals the image. */
  label?: string;
  /** Extra classes for the outer wrapper. */
  className?: string;
}

/** Blurs its children behind a centred button until the button is clicked. */
export function RevealImage({
  children,
  label = "Click to reveal image",
  className,
}: RevealImageProps) {
  const [imageVisible, setImageVisible] = useState(false);

  return (
    <div className={cn("grid overflow-hidden", className)}>
      {!imageVisible && (
        <div className="col-start-1 row-start-1 z-1 flex items-center justify-center">
          <Button onClick={() => setImageVisible(true)}>{label}</Button>
        </div>
      )}
      <div
        className={cn(
          "col-start-1 row-start-1 z-0 transition-[filter] duration-50",
          imageVisible ? "blur-0" : "blur-2xl",
        )}
      >
        {children}
      </div>
    </div>
  );
}
