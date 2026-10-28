import Link from "next/link";
import { notFound } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft01Icon,
  ArrowUpRight01Icon,
} from "@hugeicons/core-free-icons";
import { projects } from "@/data/projects";
import { pageMetadata } from "@/lib/metadata";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ProjectEmbed } from "@/components/project-embed";
import { ProjectImage } from "@/components/project-image";
import { Section } from "@/components/section";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

// Required by `output: "export"`: only the slugs below exist.
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) {
    return {};
  }

  return pageMetadata({
    title: project.title,
    description: project.summary,
    path: `/projects/${project.slug}/`,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const openUrl = project.demoUrl ?? project.embedUrl;
  // An embedded demo has its own section below, so don't repeat it up here.
  const showDemoButton = project.demoUrl && !project.embedUrl;

  return (
    <Section width="prose">
      <Link
        href="/projects/"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <HugeiconsIcon icon={ArrowLeft01Icon} className="size-4" />
        All projects
      </Link>

      <h1 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
        {project.title}
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">{project.summary}</p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li key={tag}>
            <Badge variant="secondary">{tag}</Badge>
          </li>
        ))}
      </ul>

      {(project.repo || showDemoButton) && (
        <div className="mt-6 flex flex-wrap gap-3">
          {showDemoButton && (
            <a
              href={project.demoUrl}
              className={buttonVariants({ variant: "default" })}
            >
              {project.demoLabel ?? "Live demo"}
              <HugeiconsIcon icon={ArrowUpRight01Icon} />
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              className={buttonVariants({ variant: "outline" })}
            >
              Source
              <HugeiconsIcon icon={ArrowUpRight01Icon} />
            </a>
          )}
        </div>
      )}

      {project.image && (
        <div className="mt-10 overflow-hidden rounded-xl border">
          <ProjectImage project={project} />
        </div>
      )}

      {project.description && (
        <div className="mt-10 space-y-4 text-lg leading-relaxed">
          {project.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      )}

      {project.embedUrl && openUrl && (
        <div className="mt-10">
          <h2 className="mb-4 text-xl font-semibold tracking-tight">Demo</h2>
          <ProjectEmbed
            embedUrl={project.embedUrl}
            openUrl={openUrl}
            title={`${project.title}: ${project.demoLabel ?? "demo"}`}
            openLabel={project.demoLabel}
          />
        </div>
      )}
    </Section>
  );
}
