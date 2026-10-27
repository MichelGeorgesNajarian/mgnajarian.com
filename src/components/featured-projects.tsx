import Link from "next/link";
import { projects } from "@/data/projects";
import { buttonVariants } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";

export function FeaturedProjects() {
  const featured = projects.filter((project) => project.featured);

  return (
    <Section id="projects" className="border-t">
      <SectionHeading>Projects</SectionHeading>
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((project, index) => (
          <li key={project.slug}>
            <Reveal delay={index * 0.08} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          </li>
        ))}
      </ul>
      <div className="mt-10 flex justify-center">
        <Link
          href="/projects/"
          className={buttonVariants({ variant: "outline" })}
        >
          All projects
        </Link>
      </div>
    </Section>
  );
}
