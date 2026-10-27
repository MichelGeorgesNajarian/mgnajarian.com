import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // /blog/foo/ -> blog/foo/index.html (GitHub Pages friendly)
  trailingSlash: true,
  // No image optimization server on GitHub Pages
  images: { unoptimized: true },
};

export default nextConfig;
