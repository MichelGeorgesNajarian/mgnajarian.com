import { HugeiconsIcon } from "@hugeicons/react";
import { Linkedin01Icon, Mail01Icon } from "@hugeicons/core-free-icons";
import { site } from "@/data/site";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";

export function Contact() {
  return (
    <Section id="contact" width="prose" className="border-t text-center">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Let&apos;s talk
        </h2>
        <p className="mt-3 text-muted-foreground">
          I&apos;m always happy to chat about new roles, projects, or a good
          engineering problem.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${site.email}`}
            className={buttonVariants({ size: "lg" })}
          >
            <HugeiconsIcon icon={Mail01Icon} data-icon="inline-start" />
            Email me
          </a>
          <a
            href={site.socials.linkedin}
            className={buttonVariants({ size: "lg", variant: "outline" })}
          >
            <HugeiconsIcon icon={Linkedin01Icon} data-icon="inline-start" />
            LinkedIn
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
