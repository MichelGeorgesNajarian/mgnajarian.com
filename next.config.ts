import type { NextConfig } from "next";

// Set only for the develop preview build, which is served from /develop.
// Production (master) is served from the domain root and leaves this unset.
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

export default nextConfig;
