import { HugeiconsIcon } from "@hugeicons/react";
import { Download01Icon } from "@hugeicons/core-free-icons";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { site } from "@/data/site";
import { skills } from "@/data/skills";
import { withBasePath } from "@/lib/base-path";
import { formatRange } from "@/lib/format";
import { pageMetadata } from "@/lib/metadata";
import { buttonVariants } from "@/components/ui/button";
import { Section } from "@/components/section";

export const metadata = pageMetadata({
  title: "Résumé",
  description: `Résumé of ${site.name}, ${site.title.toLowerCase()}: experience, skills and education.`,
  path: "/resume/",
});

const displayUrl = (url: string) => url.replace(/^https?:\/\//, "");

function ResumeSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10 print:mt-6">
      <h2 className="border-b pb-2 text-sm font-semibold tracking-wider uppercase">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export default function ResumePage() {
  const contact = [
    { label: site.email, href: `mailto:${site.email}` },
    {
      label: displayUrl(site.socials.linkedin),
      href: site.socials.linkedin,
    },
    { label: displayUrl(site.socials.github), href: site.socials.github },
  ];

  return (
    <Section width="prose" className="py-12 md:py-16 print:py-0">
      <header>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {site.name}
            </h1>
            <p className="mt-1 text-lg text-muted-foreground">
              {site.title} · {site.location}
            </p>
          </div>
          <a
            href={withBasePath(site.resumePdf)}
            download
            className={`${buttonVariants({ variant: "outline" })} print:hidden`}
          >
            <HugeiconsIcon icon={Download01Icon} data-icon="inline-start" />
            Download PDF
          </a>
        </div>
        <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
          {contact.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className="hover:text-foreground hover:underline">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </header>

      <ResumeSection title="Summary">
        <p className="leading-relaxed">{site.summary}</p>
      </ResumeSection>

      <ResumeSection title="Experience">
        <ul className="space-y-8 print:space-y-5">
          {experience.map((job) => (
            <li key={job.company} className="break-inside-avoid-page">
              <h3 className="font-semibold">{job.company}</h3>
              <p className="text-sm text-muted-foreground">
                {job.context} · {job.location}
              </p>
              <ul className="mt-2 space-y-0.5">
                {job.roles.map((role) => (
                  <li
                    key={role.title}
                    className="flex flex-wrap justify-between gap-x-4 text-sm"
                  >
                    <span className="font-medium">{role.title}</span>
                    <span className="text-muted-foreground">
                      {formatRange(role.start, role.end)}
                    </span>
                  </li>
                ))}
              </ul>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed marker:text-foreground/40">
                {job.highlights.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Tech:</span>{" "}
                {job.tech.join(", ")}
              </p>
            </li>
          ))}
        </ul>
      </ResumeSection>

      <ResumeSection title="Skills">
        <dl className="space-y-1.5 text-sm">
          {skills.map((group) => (
            <div key={group.label} className="sm:flex sm:gap-3">
              <dt className="w-36 shrink-0 font-medium">{group.label}</dt>
              <dd className="text-muted-foreground">
                {group.items.join(", ")}
              </dd>
            </div>
          ))}
        </dl>
      </ResumeSection>

      <ResumeSection title="Education">
        <ul className="space-y-3 text-sm">
          {education.map((item) => (
            <li key={item.school}>
              <div className="flex flex-wrap justify-between gap-x-4">
                <span className="font-medium">{item.school}</span>
                <span className="text-muted-foreground">{item.period}</span>
              </div>
              <p>{item.degree}</p>
              {item.detail && (
                <p className="text-muted-foreground">{item.detail}</p>
              )}
            </li>
          ))}
        </ul>
      </ResumeSection>
    </Section>
  );
}
