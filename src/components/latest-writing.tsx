import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { buttonVariants } from "@/components/ui/button";
import { PostCard } from "@/components/post-card";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";

/** The three newest posts. Renders nothing until there is at least one. */
export async function LatestWriting() {
  const posts = (await getAllPosts()).slice(0, 3);
  if (posts.length === 0) {
    return null;
  }

  return (
    <Section id="writing" className="border-t">
      <SectionHeading>Latest writing</SectionHeading>
      <ul className="space-y-10">
        {posts.map((post, index) => (
          <li key={post.slug}>
            <Reveal delay={index * 0.08}>
              <PostCard post={post} />
            </Reveal>
          </li>
        ))}
      </ul>
      <div className="mt-10 flex justify-center">
        <Link href="/blog/" className={buttonVariants({ variant: "outline" })}>
          All posts
        </Link>
      </div>
    </Section>
  );
}
