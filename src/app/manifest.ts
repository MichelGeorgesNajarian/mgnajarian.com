import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Michel Georges Najarian - Software Engineer",
    short_name: "Michel Georges Najarian",
    description:
      "Michel Georges Najarian's personal website showcasing software engineering expertise, projects, and insights.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
