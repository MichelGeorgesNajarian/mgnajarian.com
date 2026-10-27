import { cn } from "@/lib/utils";

interface SectionProps extends React.ComponentProps<"section"> {
  /** Width of the inner container: prose-heavy pages vs. grids. */
  width?: "prose" | "wide";
}

export function Section({
  width = "wide",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("scroll-mt-20 py-16 md:py-24", className)}
      {...props}
    >
      <div
        className={cn(
          "mx-auto px-4",
          width === "prose" ? "max-w-3xl" : "max-w-5xl",
        )}
      >
        {children}
      </div>
    </section>
  );
}
