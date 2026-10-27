export interface Role {
  title: string;
  /** "YYYY-MM" */
  start: string;
  /** "YYYY-MM"; omit for a current role */
  end?: string;
}

export interface Job {
  company: string;
  /** One line on what the company does / how the role came about. */
  context: string;
  location: string;
  /** Newest first. Multiple entries show a promotion. */
  roles: Role[];
  /** Short, quantified bullets for the home page. */
  summary: string[];
  /** Full résumé bullets (used on /resume). */
  highlights: string[];
  tech: string[];
}

export interface EarlierJob {
  company: string;
  title: string;
  location: string;
  period: string;
  highlights: string[];
  tech: string[];
}

export const experience: Job[] = [
  {
    company: "Arctic Wolf",
    context: "Security operations platform protecting 10,000+ organizations",
    location: "Waterloo, ON (remote)",
    roles: [{ title: "Developer II", start: "2024-09" }],
    summary: [
      "Redesigned the Tickets, Security Investigations and Custom Alerts pages of the customer portal used by 10,000+ organizations.",
      "Rebuilt the alert investigation view and cut urgent production pages to on-call engineers by 70%+, from 5–8 per week to 2 or fewer.",
      "Security Champion: fixed 300+ high and critical dependency vulnerabilities and raised test coverage from ~80% to 98% with Playwright component tests.",
    ],
    highlights: [
      "Redesigned the 3 core pages of Arctic Wolf’s customer security portal (React, TypeScript), used by 10,000+ organizations: Tickets (every alert and customer-reported issue), Security Investigations (threats confirmed by Arctic Wolf’s analysts, plus dismissed false positives) and Custom Alerts (customer-defined rules that trigger alerts)",
      "Rebuilt the alert details page from a static text dump into an interactive investigation view (comments, AI-generated summaries, process trees, linked tickets, incident timelines) and re-architected its code, cutting urgent production pages to on-call engineers by 70%+, from 5–8 per week to 2 or fewer",
      "Building Case Management in Aurora, the next-generation customer portal replacing the current one, which merges Tickets and Security Investigations into a single workflow",
      "Helped the platform team launch Aurora: set frontend coding standards, built shared UI components (MUI), migrated existing pages, and fixed other teams’ pages to match the design system",
      "On call 1 week/month for 6 production services with a 15-minute response target, including the 2 apps (and their Go backends) that Arctic Wolf’s security analysts use to triage every threat; an outage halts analyst work and hides alerts from customers",
      "Security Champion for an 11-person team: fixed 300+ high and critical vulnerabilities in third-party dependencies, which meant upgrading core tooling through breaking changes (ESLint, Nx, React Testing Library, Playwright); now own the team’s tooling upgrades",
      "Introduced Playwright component tests in 2 repos, raising test coverage from ~80% to 98%; the tests have caught 10+ bugs during code review, before they reached production",
      "Wrote guidelines and ran live coding sessions for the company’s AI-assisted development program, adopted by all 11 engineers on the team",
    ],
    tech: ["React", "TypeScript", "Go", "MUI", "Nx", "Playwright", "Snyk"],
  },
  {
    company: "Nintex",
    context: "Recruiting software, via the acquisitions of Inflight and Skuid",
    location: "Kitchener, ON (remote)",
    roles: [
      { title: "Lead Software Developer", start: "2022-11", end: "2024-09" },
      { title: "Frontend Developer", start: "2021-01", end: "2022-11" },
    ],
    summary: [
      "Led an Angular job application app connected to employers’ HR systems (Workday, Taleo), used by 20+ large employers to process 10,000+ applications a month.",
      "Built a mobile-friendly Angular front end over PeopleSoft’s dated hiring pages, meeting WCAG 2.1 AA, plus serverless AWS backends (Cognito, Lambda, DynamoDB).",
      "Promoted to Lead in under 2 years and mentored 4 junior developers.",
    ],
    highlights: [
      "Led development of an Angular job application app that connects to employers’ HR systems (Workday, Taleo), used by 20+ large employers, including Fortune 500 companies, to process 10,000+ applications/month",
      "Built and maintained the Node.js (Koa) API that sends candidates’ applications into Workday, covering the full application flow",
      "Built a modern, mobile-friendly Angular front end over PeopleSoft’s dated hiring pages, pulling data from the underlying system and meeting WCAG 2.1 AA accessibility standards, verified through dedicated testing",
      "Built serverless backends on AWS (Cognito, Lambda, DynamoDB, API Gateway) for user login and candidate data",
      "Took 3 proofs of concept through to shipped products; handled off-hours production releases and worked directly with clients’ engineering teams on integration issues",
      "Promoted to Lead in under 2 years; mentored 4 junior developers",
    ],
    tech: [
      "Angular",
      "TypeScript",
      "Node.js (Koa)",
      "AWS Lambda",
      "Cognito",
      "DynamoDB",
    ],
  },
];

// Not on the current résumé; taken from earlier versions.
export const earlierExperience: EarlierJob[] = [
  {
    company: "International Financial Data Services (IFDS)",
    title: "Architecture R&D Full-Stack Developer (internship)",
    location: "Toronto, ON",
    period: "Sep 2019 – Dec 2019",
    highlights: [
      "Built proofs of concept with Angular, Spring Boot and PostgreSQL running in Kubernetes containers.",
      "Designed and built the backend, RESTful APIs and web portal, including the database structure and change auditing.",
      "Presented the finished proofs of concept to stakeholders and clients.",
    ],
    tech: ["Angular", "Spring Boot", "PostgreSQL", "Kubernetes"],
  },
  {
    company: "Government of Canada, Health Canada",
    title: "Software Developer",
    location: "Ottawa, ON",
    period: "Jan 2019 – Apr 2019",
    highlights: [
      "Converted MATLAB code to C++ and wrote Fortran simulators and analyzers for radiation and cosmic-ray data.",
      "Built a user interface for choosing simulation parameters.",
    ],
    tech: ["C++", "MATLAB", "Fortran"],
  },
  {
    company: "SITAONAIR",
    title: "Full Stack Developer, OSS/BSS team (2 internships)",
    location: "Montréal, QC",
    period: "May 2017 – Dec 2017 · May 2018 – Aug 2018",
    highlights: [
      "Refactored a PHP web service backend, cutting processing time by 50%, and fixed SQL injection vulnerabilities with prepared statements.",
      "Updated an old web app with JavaScript and jQuery, decreasing load times by 70%, and built a modern UI with Bootstrap.",
    ],
    tech: ["PHP", "JavaScript", "jQuery", "Bootstrap", "SQL"],
  },
];
