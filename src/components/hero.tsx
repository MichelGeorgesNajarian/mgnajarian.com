import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Github01Icon, Linkedin01Icon } from "@hugeicons/core-free-icons";
import { site } from "@/data/site";
import { withBasePath } from "@/lib/base-path";
import { Button, buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <Section className="py-16 md:py-24">
      <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <Reveal>
            <p className="text-sm font-medium text-muted-foreground">
              {site.location}
            </p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
              {site.name}
            </h1>
            <p className="mt-3 text-xl text-muted-foreground">{site.title}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg text-balance">{site.tagline}</p>
          </Reveal>
          <Reveal
            delay={0.2}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start"
          >
            <Link href="/resume/" className={buttonVariants({ size: "lg" })}>
              View résumé
            </Link>
            <a
              href="#contact"
              className={buttonVariants({ size: "lg", variant: "outline" })}
            >
              Get in touch
            </a>
            <Button
              variant="ghost"
              size="icon-lg"
              aria-label="GitHub"
              nativeButton={false}
              render={<a href={site.socials.github} />}
            >
              <HugeiconsIcon icon={Github01Icon} />
            </Button>
            <Button
              variant="ghost"
              size="icon-lg"
              aria-label="LinkedIn"
              nativeButton={false}
              render={<a href={site.socials.linkedin} />}
            >
              <HugeiconsIcon icon={Linkedin01Icon} />
            </Button>
          </Reveal>
        </div>
        {/* Not wrapped in Reveal: it is the LCP element and should paint immediately. */}
        <Image
          src={withBasePath("/images/headshot.webp")}
          alt={`Portrait of ${site.name}`}
          width={640}
          height={640}
          priority
          className={cn(
            "size-48 shrink-0 rounded-full object-cover sm:size-56 md:size-64",
            "ring-1 ring-foreground/10",
          )}
        />
      </div>
    </Section>
  );
}
