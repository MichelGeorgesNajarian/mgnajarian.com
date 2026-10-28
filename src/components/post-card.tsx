import Link from "next/link";
import type { Post } from "@/lib/posts";
import { formatDate } from "@/lib/format";
import { Badge } from "@/components/ui/badge";

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="group relative">
      <p className="text-sm text-muted-foreground">
        <time dateTime={post.date}>{formatDate(post.date)}</time> ·{" "}
        {post.readingMinutes} min read
      </p>
      <h3 className="mt-1 text-xl font-semibold tracking-tight">
        {/* Stretched link: the whole block opens the post. */}
        <Link
          href={`/blog/${post.slug}/`}
          className="outline-none after:absolute after:-inset-3 after:rounded-lg focus-visible:after:ring-3 focus-visible:after:ring-ring/50"
        >
          {post.title}
        </Link>
      </h3>
      <p className="mt-2 text-muted-foreground">{post.summary}</p>
      {post.tags.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <li key={tag}>
              <Badge variant="secondary">{tag}</Badge>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
