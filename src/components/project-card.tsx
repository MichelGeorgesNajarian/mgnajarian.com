import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import type { Project } from "@/data/projects";
import { withBasePath } from "@/lib/base-path";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="h-full transition duration-200 hover:-translate-y-2 hover:shadow-md">
      {project.image && (
        <div
          className={cn(
            "overflow-hidden",
            project.imageFit === "contain" && "bg-transparent",
          )}
        >
          <Image
            src={withBasePath(project.image)}
            alt={project.imageAlt ?? ""}
            width={800}
            height={450}
            className={cn(
              "aspect-video w-full transition-transform duration-300 group-hover/card:scale-105",
              project.imageFit === "contain"
                ? "object-contain"
                : "object-cover",
            )}
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-base">{project.title}</CardTitle>
        <CardDescription>{project.summary}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <ul className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag}>
              <Badge variant="secondary">{tag}</Badge>
            </li>
          ))}
        </ul>
      </CardContent>
      {(project.repo || project.demoUrl) && (
        <CardFooter className="gap-4 text-sm font-medium">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              className="inline-flex items-center gap-1 text-primary hover:underline"
            >
              {project.demoLabel ?? "Live demo"}
              <HugeiconsIcon icon={ArrowUpRight01Icon} className="size-4" />
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              className="inline-flex items-center gap-1 text-primary hover:underline"
            >
              Source
              <HugeiconsIcon icon={ArrowUpRight01Icon} className="size-4" />
            </a>
          )}
        </CardFooter>
      )}
    </Card>
  );
}
