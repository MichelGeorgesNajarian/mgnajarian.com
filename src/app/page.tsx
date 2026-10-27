import { Section } from "@/components/section";
import { site } from "@/data/site";

export default function Home() {
  return (
    <Section width="prose" className="py-24 md:py-32">
      <p className="text-sm font-medium text-muted-foreground">
        {site.location}
      </p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
        {site.name}
      </h1>
      <p className="mt-4 text-xl text-muted-foreground">{site.title}</p>
      <p className="mt-8 text-muted-foreground">
        The new site is on its way. Check back soon.
      </p>
    </Section>
  );
}
