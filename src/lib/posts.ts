import fs from "node:fs";
import path from "node:path";
import readingTime from "reading-time";

export interface PostMetadata {
  title: string;
  /** "YYYY-MM-DD" */
  date: string;
  summary: string;
  tags: string[];
  /** Drafts are visible in `next dev` and left out of production builds. */
  draft?: boolean;
}

export interface Post extends PostMetadata {
  slug: string;
  readingMinutes: number;
}

const POSTS_DIR = path.join(process.cwd(), "src/content/blog");

// The `export const metadata = {...}` block isn't prose, so keep it out of the word count.
function stripMetadataExport(source: string): string {
  return source.replace(/^export const metadata = \{[\s\S]*?\n\};?\s*\n/m, "");
}

/** All posts, newest first. Runs at build time (fs + dynamic imports). */
export async function getAllPosts(): Promise<Post[]> {
  if (!fs.existsSync(POSTS_DIR)) {
    return [];
  }

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));
  const posts = await Promise.all(
    files.map(async (file): Promise<Post> => {
      const slug = file.replace(/\.mdx$/, "");
      const { metadata } = (await import(`@/content/blog/${slug}.mdx`)) as {
        metadata: PostMetadata;
      };
      const text = stripMetadataExport(
        fs.readFileSync(path.join(POSTS_DIR, file), "utf8"),
      );
      return {
        ...metadata,
        tags: metadata.tags ?? [],
        slug,
        readingMinutes: Math.max(1, Math.ceil(readingTime(text).minutes)),
      };
    }),
  );

  return posts
    .filter((post) => !(post.draft && process.env.NODE_ENV === "production"))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export async function getPost(slug: string): Promise<Post | undefined> {
  return (await getAllPosts()).find((post) => post.slug === slug);
}
