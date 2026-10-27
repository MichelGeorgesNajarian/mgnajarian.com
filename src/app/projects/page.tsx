import { projects } from "@/data/projects";
import { pageMetadata } from "@/lib/metadata";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";

export const metadata = pageMetadata({
  title: "Projects",
  description:
    "Things I've built: a capstone smart ring, developer tools, embedded projects and this website.",
  path: "/projects/",
});

export default function ProjectsPage() {
  // Featured projects first; otherwise keep the order from the data file.
  const sorted = [...projects].sort(
    (a, b) => Number(b.featured) - Number(a.featured),
  );

  return (
    <Section>
      <Reveal>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Projects
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Things I&rsquo;ve built outside of work: a capstone smart ring,
          developer tools, embedded projects and this website.
        </p>
      </Reveal>
      <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sorted.map((project, index) => (
          <li key={project.slug}>
            <Reveal delay={Math.min(index, 5) * 0.06} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
