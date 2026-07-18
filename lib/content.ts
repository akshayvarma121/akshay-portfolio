// ============================================================
//  PORTFOLIO CONTENT — edit everything here, touch nothing else
// ============================================================

export const meta = {
  title: "Akshay Varma — Full-Stack Software Engineer",
  description:
    "I build software that ships. Creator of StudioPOS. Open to engineering roles at startups.",
  url: "https://akshayvarma.dev",
  ogImage: "/og-image.png",
};

export const nav = {
  monogram: "Akshay Varma",
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
    { text: "  role:         Full-Stack Software Engineer" },
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
      oneliner: "An offline-first desktop app built for tailoring studios, designed to keep working perfectly even when the internet drops.",
      tags: ["Tauri", "Rust", "React 19", "SQLite"],
      stat: "Live in production",
      statLabel: "paying clients",
      description:
        "I built and shipped this from scratch during my second year of undergrad. It features secure PIN auth, role-based access for staff, dynamic measurement forms that remember returning customers, and a custom PDF engine for printing working slips. The whole thing runs locally so boutiques never have to worry about cloud outages.",
      href: "https://www.kruze.space/products/studiopos",
      image: "/ui1.png",
    },
    {
      title: "NESTOS",
      slug: "nestos",
      oneliner: "A productivity workspace that combines personal task management with shared accountability, wrapped around a highly secure encrypted vault.",
      tags: ["React 18", "Node.js", "PostgreSQL", "Supabase"],
      stat: "AES-256-GCM",
      statLabel: "zero-knowledge vault",
      description: "I wanted to build something that actually forces you to stay focused. It's a brutalist, multi-tenant OS that gives you a real-time focus dashboard and strict Pomodoro timers. The best part is the encrypted vault—everything is locked behind a strict PIN, so your sensitive data is completely private.",
      href: "https://github.com/akshayvarma121/NESTOS",
      liveUrl: "https://nestos-kappa.vercel.app/",
    },
    {
      title: "Kachra Seth",
      slug: "kachra-seth",
      oneliner: "A smart waste management system that cuts out expensive IoT hardware by using QR codes and smartphones to track garbage collection.",
      tags: ["React", "Vite", "FastAPI", "MongoDB"],
      stat: "-90% infra cost",
      statLabel: "vs IoT hardware",
      description:
        "Cities waste a lot of money on smart bins with sensors. We solved this by slapping QR codes on bins and building an app that workers use to verify collection. It plans optimized routes to save fuel and even uses the phone's camera to classify waste using AI. We ended up taking 3rd place at Anveshana 2025 against some really senior teams.",
      href: "https://github.com/akshayvarma121/kachra-seth",
      image: "/Ks1.jpeg",
    },
    {
      title: "IRIS",
      slug: "iris",
      oneliner: "An AI attendance tracker that uses facial recognition and liveness checks to completely eliminate proxy attendance.",
      tags: ["FastAPI", "React 19", "DeepFace", "ChromaDB", "SQLite"],
      stat: "Verification <500ms",
      statLabel: "with liveness check",
      description:
        "I built this to stop proxy attendance and fake medical certificates. It uses live face-matching and texture checks so you can't just hold up a photo of someone else. I also hooked up a ChromaDB chatbot so students can instantly ask questions about college policies instead of digging through PDFs.",
      href: "https://github.com/akshayvarma121/IRIS",
    },
  ],
};

export const about = {
  eyebrow: "ABOUT",
  avatar: "/avatar.png",
  paragraphs: [
    "I'm currently in my third year studying CS at SIRT Bhopal, but my real education happens when I'm building things. I don't just write code for the sake of it—I build tools that solve actual problems. For example, my desktop app StudioPOS is currently being used by real tailoring studios every day.",
    "Technically, I bounce between React, Node, FastAPI, and even Rust when I need to build something for the desktop. I’ve also spent time optimizing production backends at Pantech.AI, where I managed to chop API latency in half just by tweaking how we indexed data.",
    "Right now, I'm looking to join a startup team where I can take on serious responsibility. I want to be in a place where I'm trusted to handle a feature from the first whiteboard session all the way to deployment.",
    "When I step away from the keyboard, I'm usually playing football or gaming. It turns out that getting off the screen for a bit is usually the best way to figure out whatever bug I was stuck on."
  ],
  currently: {
    building: "IRIS - Intelligent AI attendance system ",          // ← update whenever you start something new
    reading: "The Diary Of a CEO",
  },
  gallery: [
    { src: "/ks2.jpeg", description: "The core team behind the Kachra Seth project.", fit: "object-contain", position: "object-center" },
    { src: "/Ks1.jpeg", description: "Engaging with the crowd and running live demonstrations of our prototype at the Anveshana tech fair.", fit: "object-contain", position: "object-center" },
    { src: "/hck.jpeg", description: "Presenting the Kachra Seth prototype to the panel of judges", fit: "object-contain", position: "object-center" },
    { src: "/ks3.jpeg", description: "Celebrating the victory alongside all the winning teams at the Anveshana 2025 hackathon.", fit: "object-contain", position: "object-center" },
    { src: "/ks4.jpeg", description: "Securing 3rd place overall at the Anveshana 2025 finals.", fit: "object-contain", position: "object-center" }
  ],
};

export const contact = {
  eyebrow: "CONTACT",
  email: "varmaakshay2020@gmail.com",      // clicking this copies to clipboard
  github: "https://github.com/akshayvarma121",
  linkedin: "https://www.linkedin.com/in/akshay-varma1201/",
  leetcode: "https://leetcode.com/u/7wss1wuDAv/",
  kruze: "https://kruze.space",
  note: "I reply to emails from people who've read this page.",
};

export const footer = {
  text: "built by akshay varma",
};

// ============================================================
//  CASE STUDY PAGES  (work/studiopos, work/kachra-seth, work/iris)
// ============================================================

export const caseStudies: Record<string, {
  title: string;
  description: string;   // meta description for SEO
  body: string;   // markdown or plain text
  gallery?: string[];
}> = {
  studiopos: {
    title: "StudioPOS — Case Study",
    description: "How I built and shipped an offline-first desktop SaaS for tailoring studios in my second year of undergrad.",
    body: `I built StudioPOS during my second year of college. It started as a custom app for a local tailoring shop (Preet Designer Boutique) because the owner was struggling to keep track of orders, customer measurements, and staff payments. Later, I refactored the code to turn it into a clean, white-label desktop app that other boutiques can use.

Tailoring shops have a unique workflow. They don't need a heavy cloud system, and they certainly don't want their business to stop if the internet goes down. That's why I made it offline-first. By using Tauri with Rust and SQLite, everything runs locally on their computer. The owner has total control over their data, and there's no lag.

## Setting Up and Security

The app has a strict setup process when it's opened for the first time. It checks the database tables and runs a setup wizard if needed. The owner has to set a custom 4-digit PIN, which is encrypted locally using SHA-256. 

After that, the owner sets up the boutique name, logo, social links, and UPI payment details. This branding is used across the entire app and on printed invoices.

## How the Shop Floor Works

* **Staff and Owner Modes**: Staff can log in without a PIN to view active orders, search customer files, and update order statuses. However, sensitive areas like sales reports, payroll logs, and cash accounts require the owner's 4-digit PIN.

* **Dynamic Measurements**: Different clothes need different measurements. A kurti needs a chest and shoulder size, while pants need length and waist. Instead of a messy form with dozens of empty inputs, the app loads fields dynamically from a JSON template based on the garment type. If a returning customer places an order, the system scans their past receipts and automatically fills in their last recorded measurements to save time.

* **Avoiding Unpaid Deliveries**: A common issue in boutiques is staff handing over finished clothes before the customer pays the remaining balance. To fix this, if an order has an outstanding balance, the app blocks the staff from marking it as "Delivered" until the payment is cleared and recorded.

* **Easy Notifications**: The app automatically generates custom WhatsApp messages with the customer's name, order ID, and balance details. Staff can open WhatsApp from the app and send the message with one click.

## Custom PDF Engine

The most challenging part of the project was the print layout. Tailors need to see measurements on paper at their workbenches, while customers need a clean invoice. I wrote a twin-print engine using jsPDF that generates a single document with two distinct sections:

* **Customer Invoice**: Page one has the boutique's branding, items ordered, payment breakdown, and a UPI QR code linked to the exact pending balance.

* **Tailor Working Slips**: The subsequent pages are split so that every garment gets its own page. It prints the measurements in huge, bold text that the tailors can easily read from a distance while working at their tables. It also includes any special requests or notes from the client.

## Local Payroll

To help manage the staff, the app tracks how much tailors earn. It supports both flat-rate and percentage-based commissions. When an order is marked finished, the app automatically calculates the tailor's cut and logs it. It also tracks cash advances and daily attendance locally in SQLite, preventing double entries.`,
  },
  nestos: {
    title: "NESTOS — Case Study",
    description: "How I built a high-performance, real-time productivity and accountability operating system for focused execution.",
    body: `NESTOS is a high-performance, real-time productivity and accountability operating system designed for focused execution. It bridges the gap between individual task management and shared partner accountability, offering strict daily routines, goal tracking, secure data storage, and zero-distraction workflows.

## Shared Space Architecture

The platform is built on a multi-tenant "Shared Space" architecture. A user can generate an Invite Token to link their account with a partner. Once linked, both users share the same workspace for Goals, Tasks, and Deadlines, while maintaining private boundaries for personal chores and encrypted vaults.

## The Command Center

The core of NESTOS is the Focus Dashboard—a real-time command center designed to answer *"What do I need to do right now?"*
* **Dynamic Horizons**: Automatically pulls scheduled Micro Tasks from the backlog and highlights overdue items in stark red.
* **Daily Routine Timeline**: A vertical timeline of recurring habits with 3-state tracking (Done, Skipped, Pending).
* **Strict Timeline Lock**: Users can permanently freeze the current day's routine inputs, rejecting any further edits via frontend or API to enforce accountability.

## Zero-Knowledge Encrypted Vault

Security is a primary focus. NESTOS includes a zero-knowledge encrypted vault for storing API keys, passwords, and sensitive journals. 
* **AES-256-GCM Encryption**: Data is encrypted on the backend before touching the database. The server never stores raw text.
* **PIN Protection**: Requires a hashed 6-digit PIN to unlock, and automatically locks after periods of inactivity.

## Advanced Analytics & Imports

Recent iterations introduced a comprehensive Recharts-powered dashboard displaying KPI summary cards, Stacked Bar Charts for routine execution, and Area Charts for goal slice completion over timeframes. I also implemented bulk JSON import capabilities, allowing users to instantly populate their Timetable and Goal Backlogs, dramatically reducing the friction of initial setup.`,
  },
  "kachra-seth": {
    title: "Kachra Seth — Case Study",
    description: "How we cut municipal waste management infra costs by 90% by replacing IoT with QR codes.",
    body: `Most smart city projects for waste management rely on expensive IoT bin sensors that cost upwards of ₹50,000 each. For a typical Indian municipality, installing these on hundreds of bins is way too expensive. 

Kachra Seth was our attempt to solve this. Instead of putting expensive sensors on bins, we used the smartphone in everyone's pocket. By using simple QR codes on trash bins and a smartphone camera, we cut down infrastructure costs by 90%. We competed with senior engineering teams at Anveshana 2025 and won 3rd place.

## How the Platform Works

* **Citizen Mobile App**: We built a Progressive Web App (PWA) that citizens can open without installing anything. When they throw waste, they scan the bin's QR code. They can also take a photo of their waste, and a built-in AI model classifies it (like dry or wet waste) to show them which bin it belongs to. To encourage people, we added a leaderboard where neighbourhoods compete on segregation rates.

* **Municipal Dashboard**: Workers scan the bin's QR code before and after clearing it. This logs the time and location automatically, proving the collection actually happened. The system also plans vehicle paths using routing algorithms to save fuel.

* **Analytics Portal**: City officials can view overall waste clearance stats, response times for complaints, and download reports for clean-city surveys.

## Working Offline

In many parts of Indian cities, internet connectivity is spotty. We designed the app to cache scans and location tags locally when offline. As soon as the worker's device connects back to the internet, it syncs everything with the database automatically.`,
  },
  iris: {
    title: "IRIS AI — Case Study",
    description: "How I built a fraud-proof, AI-powered attendance system with dynamic QR codes, liveness check, and RAG support.",
    body: `I built IRIS to solve a simple problem: students taking attendance for their friends (proxy attendance) and uploading forged certificates for attendance exceptions. IRIS stands for Intelligent Recognition System. It is an attendance platform that uses face matching, dynamic codes, and document checks to verify attendance.

## Preventing Cheating

* **Selfie Checks**: When verifying, students take a live selfie. The system uses a face-matching model (VGG-Face) to compare it with their registered photo. It also uses texture checks to make sure they are taking a live photo, not just holding up a picture of a friend on another phone.

* **Rotating QR Codes**: Instead of a static code that students can copy and text to their friends at home, the teacher displays a QR code that rotates every 10 seconds. The student must scan it live in the classroom.

* **Radar Scanner**: Teachers can run a "Radar Loop" that automatically scans the room using a webcam to log multiple students quickly. To prevent students who show up late from logging attendance, the loop shuts down after 30 minutes.

## Checking Document Fraud

If a student misses class and uploads a medical certificate, the system runs two checks. First, it uses Error Level Analysis (ELA) to see if the certificate was edited or photoshopped (by looking for differences in image compression levels). Second, it uses text recognition (OCR) to check if the name and dates on the certificate match the student's records.

## Q&A Chatbot

We also integrated a simple chatbot that lets students ask questions about their attendance logs or college rules. The chatbot uses a local database (ChromaDB) to pull context from student handbooks, responding to queries in under a second.`,
  },
};
export type TerminalLine = typeof terminal.lines[number];
export type Project = typeof work.projects[number];
