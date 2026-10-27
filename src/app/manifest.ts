import type { MetadataRoute } from "next";
import { basePath } from "@/lib/base-path";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Michel Georges Najarian - Software Engineer",
    short_name: "Michel Georges Najarian",
    description:
      "Michel Georges Najarian's personal website showcasing software engineering expertise, projects, and insights.",
    start_url: `${basePath}/`,
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: `${basePath}/favicon.ico`,
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
