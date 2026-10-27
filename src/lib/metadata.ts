import type { Metadata } from "next";
import { site } from "@/data/site";

interface PageMetadataInput {
  title: string;
  description: string;
  /** Path of the page, e.g. "/projects/". */
  path: string;
}

/**
 * Per-page metadata. Next replaces the layout's openGraph/twitter objects
 * wholesale when a page sets its own, so the shared image is repeated here.
 */
export function pageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  const fullTitle = `${title} · ${site.name}`;
  const image = {
    url: site.ogImage.path,
    width: site.ogImage.width,
    height: site.ogImage.height,
    alt: site.ogImage.alt,
  };

  return {
    title,
    description,
    openGraph: {
      type: "website",
      url: path,
      siteName: site.name,
      title: fullTitle,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [{ url: image.url, alt: image.alt }],
    },
  };
}
