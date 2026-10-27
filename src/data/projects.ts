export interface Project {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  year?: number;
  repo?: string;
  demoUrl?: string;
  /** Label for demoUrl; defaults to "Live demo". */
  demoLabel?: string;
  /** Path under /public, e.g. "/images/projects/foo.webp" */
  image?: string;
  /** Describe informative images; leave unset for decorative ones. */
  imageAlt?: string;
  /** "contain" shows the whole image on white (product shots); default "cover". */
  imageFit?: "cover" | "contain";
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "mgnajarian-com",
    title: "This website",
    summary:
      "My personal site: a statically exported Next.js app with shadcn/ui and Tailwind CSS, deployed to GitHub Pages with a preview of the develop branch.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    repo: "https://github.com/MichelGeorgesNajarian/mgnajarian.com",
    featured: true,
  },
  {
    slug: "fitness-smart-ring",
    title: "OneRing: Fitness Tracking Smart Ring",
    summary:
      "Our University of Waterloo ECE capstone: a smart ring that monitors biometrics and sends readings over Bluetooth Low Energy to a phone. I led the React Native app (Redux, native Bluetooth module) and built the AWS backend for accounts and data storage.",
    tags: ["C", "BLE", "React Native", "Redux", "AWS"],
    year: 2022,
    demoUrl: "https://www.youtube.com/watch?v=t9sz5sh4ywE",
    demoLabel: "Watch demo",
    image: "/images/onering.webp",
    imageAlt:
      "3D render of the OneRing smart ring, showing its internal circuit boards",
    imageFit: "contain",
    featured: true,
  },
  {
    slug: "beautify-tv-show-directory",
    title: "BeautifyTvShowDirectory",
    summary:
      "Recursively renames the episode files in a TV series folder into clean show and season folders, matching them against The Movie Database (TMDb) API.",
    tags: ["Java", "Maven", "TMDb API"],
    repo: "https://github.com/MichelGeorgesNajarian/BeautifyTvShowDirectory",
    featured: true,
  },
  {
    slug: "changemaker",
    title: "ChangeMaker",
    summary:
      "Computes the fewest bills and coins needed to make change using dynamic programming, with probability-based coin selection when a denomination runs low.",
    tags: ["C++", "Dynamic programming"],
    repo: "https://github.com/MichelGeorgesNajarian/ChangeMaker",
    featured: false,
  },
  {
    slug: "bike-radar",
    title: "Bike Radar",
    summary:
      "An embedded proximity sensor on a TI MSP430 in C: an ultrasonic sensor drives red, orange, yellow and green LEDs to show how close the nearest object is, built on a custom hand-routed daughterboard.",
    tags: ["C", "MSP430", "Embedded", "PCB"],
    featured: false,
  },
];
