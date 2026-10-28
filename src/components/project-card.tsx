import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import type { Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

/** Text-only on purpose: mixed image/no-image cards misalign their titles. Images live on the detail page. */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="relative h-full transition duration-200 hover:-translate-y-2 hover:shadow-md">
      <CardHeader>
        <CardTitle className="text-base">
          {/* Stretched link: the whole card opens the detail page. */}
          <Link
            href={`/projects/${project.slug}/`}
            className={cn(
              "outline-none",
              "after:absolute after:inset-0 after:rounded-xl",
              "focus-visible:after:ring-3 focus-visible:after:ring-ring/50",
            )}
          >
            {project.title}
          </Link>
        </CardTitle>
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
              className="relative z-10 inline-flex items-center gap-1 text-link hover:underline"
            >
              {project.demoLabel ?? "Live demo"}
              <HugeiconsIcon icon={ArrowUpRight01Icon} className="size-4" />
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              className="relative z-10 inline-flex items-center gap-1 text-link hover:underline"
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
