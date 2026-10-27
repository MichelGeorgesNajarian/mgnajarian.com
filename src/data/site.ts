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
  /** Résumé summary (shown on /resume/). */
  summary:
    "Full-stack software engineer with 5+ years building customer-facing web platforms and the backend services behind them in React, Angular, TypeScript and Go. At Arctic Wolf, a cybersecurity operations company, I redesigned the core threat-investigation workflows in the customer portal used by 10,000+ organizations and am helping launch its replacement, Aurora. Before that, I grew from Frontend Developer to Lead Developer at Nintex, building recruiting software integrated with Workday, Taleo and PeopleSoft. Incoming part-time MS in Computer Science student at Georgia Tech.",
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
    { label: "Resume", href: "/resume/" },
  ],
} as const;
