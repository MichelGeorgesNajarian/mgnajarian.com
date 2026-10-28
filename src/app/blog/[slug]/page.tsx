import Link from "next/link";
import { notFound } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";
import { formatDate } from "@/lib/format";
import { pageMetadata } from "@/lib/metadata";
import { getAllPosts, getPost } from "@/lib/posts";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/section";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

// Required by `output: "export"`: only the slugs below exist.
export const dynamicParams = false;

export async function generateStaticParams() {
  return (await getAllPosts()).map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) {
    return {};
  }

  return pageMetadata({
    title: post.title,
    description: post.summary,
    path: `/blog/${post.slug}/`,
    article: { publishedTime: post.date, tags: post.tags },
  });
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const { default: Content } = await import(`@/content/blog/${slug}.mdx`);

  return (
    <Section width="prose">
      <Link
        href="/blog/"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <HugeiconsIcon icon={ArrowLeft01Icon} className="size-4" />
        All posts
      </Link>

      <header className="mt-6">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          <time dateTime={post.date}>{formatDate(post.date)}</time> ·{" "}
          {post.readingMinutes} min read
        </p>
        {post.tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <li key={tag}>
                <Badge variant="secondary">{tag}</Badge>
              </li>
            ))}
          </ul>
        )}
      </header>

      <article className="prose dark:prose-invert prose-headings:scroll-mt-24 prose-a:text-link prose-pre:border prose-pre:bg-muted prose-pre:text-foreground mt-10 max-w-none [&_:is(h1,h2,h3,h4)_a]:text-inherit [&_:is(h1,h2,h3,h4)_a]:no-underline">
        <Content />
      </article>
    </Section>
  );
}
