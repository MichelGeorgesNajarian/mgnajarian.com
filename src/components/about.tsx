import { skills } from "@/data/skills";
import { education } from "@/data/education";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <Section id="about" className="border-t">
      <Reveal>
        <SectionHeading>About</SectionHeading>
        <p className="max-w-3xl text-lg text-muted-foreground">
          Full-stack software engineer with 5+ years building customer-facing
          web platforms and the backend services behind them in React, Angular,
          TypeScript and Go. At Arctic Wolf I redesigned the core
          threat-investigation workflows in the portal used by 10,000+
          organizations and am helping launch its replacement, Aurora. Before
          that I grew from Frontend Developer to Lead Developer at Nintex,
          building recruiting software integrated with Workday, Taleo and
          PeopleSoft.
        </p>
      </Reveal>

      <Reveal className="mt-12 grid gap-8 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.label}>
            <h3 className="text-sm font-medium text-muted-foreground">
              {group.label}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item}>
                  <Badge variant="secondary">{item}</Badge>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Reveal>

      <Reveal className="mt-12">
        <h3 className="text-sm font-medium text-muted-foreground">Education</h3>
        <ul className="mt-3 grid gap-6 sm:grid-cols-2">
          {education.map((item) => (
            <li key={item.school}>
              <p className="font-medium">{item.school}</p>
              <p className="text-muted-foreground">{item.degree}</p>
              {item.detail && (
                <p className="text-sm text-muted-foreground">{item.detail}</p>
              )}
              <p className="text-sm text-muted-foreground">{item.period}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
