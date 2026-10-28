import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { basePath } from "@/lib/base-path";
import { getAllPosts } from "@/lib/posts";

export const dynamic = "force-static";

const url = (path: string) => `${site.url}${basePath}${path}`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();

  return [
    { url: url("/") },
    { url: url("/projects/") },
    { url: url("/resume/") },
    { url: url("/blog/") },
    ...projects.map(({ slug }) => ({ url: url(`/projects/${slug}/`) })),
    ...posts.map((post) => ({
      url: url(`/blog/${post.slug}/`),
      lastModified: post.date,
    })),
  ];
}
