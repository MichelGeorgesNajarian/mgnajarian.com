import { earlierExperience, experience } from "@/data/experience";
import { formatRange } from "@/lib/format";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

export function ExperienceTimeline() {
  return (
    <Section id="experience" className="border-t">
      <SectionHeading>Experience</SectionHeading>

      <ol className="space-y-12 border-l pl-6 sm:pl-8">
        {experience.map((job) => (
          <li key={job.company} className="relative">
            <span
              aria-hidden
              className={cn(
                "absolute top-2 -left-7.25 sm:-left-9.25",
                "size-2.5 rounded-full bg-primary ring-4 ring-background",
              )}
            />
            <Reveal>
              <h3 className="text-xl font-semibold">{job.company}</h3>
              <p className="text-sm text-muted-foreground">
                {job.context} · {job.location}
              </p>

              <ul className="mt-3 space-y-1">
                {job.roles.map((role) => (
                  <li key={role.title} className="flex flex-wrap gap-x-3">
                    <span className="font-medium">{role.title}</span>
                    <span className="text-muted-foreground">
                      {formatRange(role.start, role.end)}
                    </span>
                  </li>
                ))}
              </ul>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground marker:text-foreground/40">
                {job.summary.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>

              <ul className="mt-4 flex flex-wrap gap-2">
                {job.tech.map((item) => (
                  <li key={item}>
                    <Badge variant="outline">{item}</Badge>
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal className="mt-12">
        <details className="group rounded-lg border px-4 py-3">
          <summary className="cursor-pointer text-sm font-medium select-none">
            Earlier experience
          </summary>
          <ul className="mt-4 space-y-4">
            {earlierExperience.map((job) => (
              <li key={job.company}>
                <p className="font-medium">
                  {job.company}{" "}
                  <span className="font-normal text-muted-foreground">
                    · {job.title}
                  </span>
                </p>
                <p className="text-sm text-muted-foreground">
                  {job.location} · {job.period}
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground marker:text-foreground/40">
                  {job.highlights.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <p className="mt-2 text-sm text-muted-foreground">
                  {job.tech.join(" · ")}
                </p>
              </li>
            ))}
          </ul>
        </details>
      </Reveal>
    </Section>
  );
}
