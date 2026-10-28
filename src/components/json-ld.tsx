import { site } from "@/data/site";

/** schema.org Person data so search engines can tie the site to my profiles. */
export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": site.name,
    "jobTitle": site.title,
    "url": site.url,
    "sameAs": [site.socials.github, site.socials.linkedin],
  };

  return (
    <script
      type="application/ld+json"
      // "<" is escaped so the JSON can never close the script tag.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
