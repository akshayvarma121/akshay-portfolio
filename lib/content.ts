// ============================================================
//  PORTFOLIO CONTENT — edit everything here, touch nothing else
// ============================================================

export const meta = {
  title: "Akshay Varma — Full-Stack Engineer & Founder",
  description:
    "I build software that ships. Founder of Kruze Studio, creator of StudioPOS. Open to dev roles at startups.",
  url: "https://akshayvarma.dev",
  ogImage: "/og-image.png",
};

export const nav = {
  monogram: "AV",
  links: [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
};

export const terminal = {
  // Each line typed in the hero terminal.
  // delay = extra pause in ms after the line finishes (optional).
  // colour overrides: "accent" | "muted" | "default"
  lines: [
    { text: "$ akshay --init", colour: "accent", delay: 400 },
    { text: "" },
    { text: "> loading profile...", colour: "muted", delay: 200 },
    { text: "" },
    { text: "  name:          Akshay Varma" },
    { text: "  role:         Full-Stack Engineer + Founder" },
    { text: "  location:      Bhopal, MP" },
    { text: "  status:        open to work", delay: 500 },
    { text: "" },
    { text: "> compiling experience...", colour: "muted", delay: 200 },
    { text: "" },
    { text: "  [kruze]       StudioPOS — desktop SaaS, paying clients, production" },
    { text: "  [pantech]     API latency -50% — validated in prod" },
    { text: "  [hackathon]   Kachra Seth — 3rd / Anveshana 2025", delay: 400 },
    { text: "" },
    { text: "> stack loaded: MERN · FastAPI · Rust/Tauri · Java · SQLite", colour: "muted", delay: 300 },
    { text: "" },
    { text: "  ready.  ↓" },
  ],
};

export const work = {
  eyebrow: "WORK",
  projects: [
    {
      title: "StudioPOS",
      slug: "studiopos",                  // used for /work/[slug] route
      oneliner: "Offline-first desktop SaaS for tailoring studios. No cloud, no dependency.",
      tags: ["Tauri", "Rust", "React 19", "SQLite"],
      stat: "Live in production",
      statLabel: "paying clients",
      description:
        "Built and shipped end-to-end while in second year of undergrad. Features SHA-256 PIN auth, owner/staff RBAC, dynamic measurement schema with order-history auto-fill, payment-gated delivery, WhatsApp notifications, and a twin-print PDF engine. Zero cloud dependency by design.",
      href: "https://kruze.space",        // external link or /work/studiopos
    },
    {
      title: "Kachra Seth",
      slug: "kachra-seth",
      oneliner: "Municipal waste management platform. QR-tracked bins, no IoT hardware.",
      tags: ["React", "Vite", "FastAPI", "MongoDB"],
      stat: "-90% infra cost",
      statLabel: "vs IoT hardware",
      description:
        "Eliminated IoT hardware dependency with QR-verified bin tracking. Route optimisation reduced fuel use 30% and improved collection efficiency 40%. AI waste classification via smartphone camera. Competed against senior engineering teams — placed 3rd at Anveshana 2025.",
      href: "https://github.com/akshayvarma121/kachra-seth",
    },
  ],
};

export const about = {
  eyebrow: "ABOUT",
  avatar: "/avatar.png",
  paragraphs: [
    "I'm a third-year CS student at SIRT Bhopal and the founder of Kruze, an independent dev studio. I started it because I wanted to build software that actually gets used — StudioPOS runs in real tailoring studios and has paying clients.",
    "I work across the full stack — React, Node, FastAPI, and Rust/Tauri for desktop. I've shipped backend work in production at Pantech.AI, where I cut API latency by 50% through targeted indexing.",
    "I'm looking for dev roles at startups where owning a problem from schema to deployment is the expectation, not the exception.",
  ],
  currently: {
    building: "IRIS - Intelligent AI attendance system ",          // ← update whenever you start something new
    reading: "The Diary Of a CEO",
  },
};

export const contact = {
  eyebrow: "CONTACT",
  email: "varmaakshay2020@gmail.com",      // clicking this copies to clipboard
  github: "https://github.com/akshayvarma121",
  linkedin: "https://www.linkedin.com/in/akshay-varma1201/",
  note: "I reply to emails from people who've read this page.",
};

export const footer = {
  text: "built by akshay varma",
};

// ============================================================
//  CASE STUDY PAGES  (work/studiopos and work/kachra-seth)
//  Leave body as "" until you write the real case study.
// ============================================================

export const caseStudies: Record<string, {
  title: string;
  description: string;   // meta description for SEO
  body: string;   // markdown or plain text; empty = "coming soon" stub
}> = {
  studiopos: {
    title: "StudioPOS — Case Study",
    description: "How I built and shipped an offline-first desktop SaaS for tailoring studios in my second year of undergrad.",
    body: "",     // ← write your case study here when ready
  },
  "kachra-seth": {
    title: "Kachra Seth — Case Study",
    description: "How we cut municipal waste management infra costs by 90% by replacing IoT with QR codes.",
    body: "",
  },
};
export type TerminalLine = typeof terminal.lines[number];
export type Project = typeof work.projects[number];
