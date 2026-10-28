import type { NextConfig } from "next";
import createMDX from "@next/mdx";

// Set only for the preview build, which is served from /preview.
// Production is served from the domain root and leaves this unset.
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  ...(basePath && { basePath }),
  // Make the base path available to app code (see src/lib/base-path.ts).
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  // /blog/foo/ -> blog/foo/index.html (GitHub Pages friendly)
  trailingSlash: true,
  // No image optimization server on GitHub Pages
  images: { unoptimized: true },
};

// Plugins are referenced by name because Turbopack only accepts serializable options.
const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-gfm"],
    rehypePlugins: [
      "rehype-slug",
      ["rehype-autolink-headings", { behavior: "wrap" }],
      [
        "rehype-pretty-code",
        {
          theme: { light: "github-light", dark: "github-dark" },
          keepBackground: false,
        },
      ],
    ],
  },
});

export default withMDX(nextConfig);
