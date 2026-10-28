import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { basePath } from "@/lib/base-path";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    // The preview (served from a sub-path) must not be indexed.
    rules: basePath
      ? { userAgent: "*", disallow: "/" }
      : { userAgent: "*", allow: "/" },
    sitemap: `${site.url}${basePath}/sitemap.xml`,
  };
}
