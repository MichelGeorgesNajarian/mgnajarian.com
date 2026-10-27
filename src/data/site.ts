export const site = {
  name: "Michel Georges Najarian",
  title: "Full-Stack Software Engineer",
  location: "Montréal, QC",
  tagline:
    "I build customer-facing web platforms and the services behind them. Currently at Arctic Wolf.",
  /** Link-preview text (Open Graph / Twitter); shorter than `description`. */
  ogDescription:
    "Full-stack software engineer in Montréal with 5+ years building customer-facing web platforms at Arctic Wolf and Nintex, in React, Angular, TypeScript and Go.",
  ogImage: {
    path: "/images/og.jpg",
    width: 3648,
    height: 1689,
    alt: "Michel Georges Najarian smiling in a selfie, lying on a wood floor next to a fluffy white dog",
  },
  url: "https://mgnajarian.com",
  description:
    "Michel Georges Najarian is a full-stack software engineer in Montréal building customer-facing web platforms and the services behind them.",
  email: "hello@mgnajarian.com",
  socials: {
    github: "https://github.com/MichelGeorgesNajarian",
    linkedin: "https://linkedin.com/in/mgnajarian",
  },
  resumePdf: "/documents/michel_georges_najarian_resume.pdf",
  repo: "https://github.com/MichelGeorgesNajarian/mgnajarian.com",
  nav: [
    { label: "Projects", href: "/projects/" },
    { label: "Blog", href: "/blog/" },
    // Points at the PDF until the /resume/ page exists.
    { label: "Resume", href: "/documents/michel_georges_najarian_resume.pdf" },
  ],
} as const;
