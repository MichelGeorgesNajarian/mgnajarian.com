import { getAllPosts } from "@/lib/posts";
import { pageMetadata } from "@/lib/metadata";
import { PostCard } from "@/components/post-card";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";

export const metadata = pageMetadata({
  title: "Blog",
  description:
    "Notes on software engineering, web development and random thoughts.",
  path: "/blog/",
});

export default async function BlogPage() {
  const posts = await getAllPosts();

  // Newest first, grouped by year.
  const byYear = new Map<string, typeof posts>();
  for (const post of posts) {
    const year = post.date.slice(0, 4);
    byYear.set(year, [...(byYear.get(year) ?? []), post]);
  }

  return (
    <Section width="prose">
      <Reveal>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Blog
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Notes on software engineering, web development and building this site.
        </p>
      </Reveal>

      {posts.length === 0 ? (
        <p className="mt-12 text-muted-foreground">No posts yet.</p>
      ) : (
        <div className="mt-12 space-y-12">
          {[...byYear].map(([year, yearPosts]) => (
            <section key={year}>
              <h2 className="border-b pb-2 text-sm font-semibold tracking-wider text-muted-foreground">
                {year}
              </h2>
              <ul className="mt-6 space-y-10">
                {yearPosts.map((post) => (
                  <li key={post.slug}>
                    <PostCard post={post} />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </Section>
  );
}
