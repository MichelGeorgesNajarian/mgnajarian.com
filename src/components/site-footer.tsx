import { HugeiconsIcon } from "@hugeicons/react";
import {
  Github01Icon,
  Linkedin01Icon,
  Mail01Icon,
} from "@hugeicons/core-free-icons";
import { site } from "@/data/site";
import { Button } from "@/components/ui/button";

const links = [
  { label: "GitHub", href: site.socials.github, icon: Github01Icon },
  { label: "LinkedIn", href: site.socials.linkedin, icon: Linkedin01Icon },
  { label: "Email", href: `mailto:${site.email}`, icon: Mail01Icon },
];

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {site.name}. Built with Next.js ·{" "}
          <a
            href={site.repo}
            className="underline underline-offset-4 hover:text-foreground"
          >
            source
          </a>
        </p>
        <ul className="flex items-center gap-1">
          {links.map(({ label, href, icon }) => (
            <li key={label}>
              <Button
                variant="ghost"
                size="icon"
                aria-label={label}
                nativeButton={false}
                render={<a href={href} />}
              >
                <HugeiconsIcon icon={icon} />
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
