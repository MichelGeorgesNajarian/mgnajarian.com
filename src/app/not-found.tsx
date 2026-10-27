import Link from "next/link";
import { Section } from "@/components/section";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Section width="prose" className="py-24 md:py-32">
      <p className="text-sm font-medium text-muted-foreground">404</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link href="/" className={`${buttonVariants()} mt-8`}>
        Back home
      </Link>
    </Section>
  );
}
