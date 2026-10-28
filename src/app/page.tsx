import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { FeaturedProjects } from "@/components/featured-projects";
import { LatestWriting } from "@/components/latest-writing";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ExperienceTimeline />
      <FeaturedProjects />
      <LatestWriting />
      <Contact />
    </>
  );
}
