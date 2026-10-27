export interface Project {
  slug: string;
  title: string;
  /** One or two sentences, shown on cards and in link previews. */
  summary: string;
  /** Longer write-up for the detail page, one entry per paragraph. */
  description?: string[];
  tags: string[];
  year?: number;
  repo?: string;
  demoUrl?: string;
  /** Label for demoUrl; defaults to "Live demo". */
  demoLabel?: string;
  /** Iframe-able URL for the detail page (e.g. a YouTube /embed/ link or a GH Pages demo you control). */
  embedUrl?: string;
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
    description: [
      "This is the site you're on: a Next.js app using the App Router, statically exported and hosted on GitHub Pages. The UI is built from shadcn/ui components on Tailwind CSS, with light and dark themes.",
      "Résumé content lives in typed data files, so a change to my experience or projects is a single edit. Pull requests run lint, typecheck and build checks, and merging to the develop branch publishes a preview under /develop while master serves production.",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    repo: "https://github.com/MichelGeorgesNajarian/mgnajarian.com",
    featured: true,
  },
  {
    slug: "fitness-smart-ring",
    title: "OneRing: Fitness Tracking Smart Ring",
    summary:
      "Our University of Waterloo ECE capstone: a smart ring that monitors biometrics and sends readings over Bluetooth Low Energy to a phone. I led the React Native app (Redux, native Bluetooth module) and built the AWS backend for accounts and data storage.",
    description: [
      "OneRing was our University of Waterloo ECE final-year design project (Group 58): a smart ring that monitors the wearer's biometrics, sends the readings over Bluetooth Low Energy to a mobile device, and shows relevant fitness statistics.",
      "Sensor data was processed and transmitted over Bluetooth in C. I led the development of the mobile app in React Native with Redux and a native Bluetooth module, which handles the wireless retrieval and transmission of data, and I architected and implemented the AWS backend for account management and data storage and retrieval.",
      "The full demo recording from March 2022 is below.",
    ],
    tags: ["C", "BLE", "React Native", "Redux", "AWS"],
    demoUrl: "https://www.youtube.com/watch?v=t9sz5sh4ywE",
    demoLabel: "Watch demo",
    embedUrl: "https://www.youtube-nocookie.com/embed/t9sz5sh4ywE",
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
    description: [
      "A Java and Maven tool for tidying a TV library. Point it at a root directory that contains nothing but a TV series and it recursively goes through the sub-directories, using The Movie Database (TMDb) API to find and match each episode file.",
      "Matched episodes are renamed and sorted into clean folders by show and season.",
    ],
    tags: ["Java", "Maven", "TMDb API"],
    repo: "https://github.com/MichelGeorgesNajarian/BeautifyTvShowDirectory",
    featured: true,
  },
  {
    slug: "changemaker",
    title: "ChangeMaker",
    summary:
      "Computes the fewest bills and coins needed to make change using dynamic programming, with probability-based coin selection when a denomination runs low.",
    description: [
      "A C++ program that uses dynamic programming to work out the fewest bills and coins needed to make change for an amount.",
      "When a denomination is running low, it picks coins using probabilities instead of always taking the minimum.",
    ],
    tags: ["C++", "Dynamic programming"],
    repo: "https://github.com/MichelGeorgesNajarian/ChangeMaker",
    featured: false,
  },
  {
    slug: "bike-radar",
    title: "Bike Radar",
    summary:
      "An embedded proximity sensor on a TI MSP430 in C: an ultrasonic sensor drives red, orange, yellow and green LEDs to show how close the nearest object is, built on a custom hand-routed daughterboard.",
    description: [
      "An embedded project on a TI MSP430 microcontroller, written in C. An ultrasonic sensor measures the distance to the nearest object and drives red, orange, yellow and green LEDs to show how close it is.",
      "The components were soldered onto a custom daughterboard with hand-traced PCB routes.",
    ],
    tags: ["C", "MSP430", "Embedded", "PCB"],
    repo: "https://github.com/MichelGeorgesNajarian/ECE_298",
    featured: false,
  },
];
