import Image from "next/image";
import type { Project } from "@/data/projects";
import { withBasePath } from "@/lib/base-path";
import { cn } from "@/lib/utils";

interface ProjectImageProps {
  project: Project;
  /** Extra classes for the <img> (e.g. a hover zoom). */
  className?: string;
}

/** A project's image at 16:9: cropped to fill, or shown whole for product shots. */
export function ProjectImage({ project, className }: ProjectImageProps) {
  if (!project.image) {
    return null;
  }

  return (
    <div className="overflow-hidden">
      <Image
        src={withBasePath(project.image)}
        alt={project.imageAlt ?? ""}
        width={800}
        height={450}
        className={cn(
          "aspect-video w-full",
          project.imageFit === "contain" ? "object-contain" : "object-cover",
          className,
        )}
      />
    </div>
  );
}
