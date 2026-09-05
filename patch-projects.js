
const fs = require("fs");

// Update project-showcase.tsx
let projectPath = "s:/Previous/src/components/project-showcase.tsx";
let code = fs.readFileSync(projectPath, "utf8");

const newProjects = `const projects = [
  {
    id: 1,
    title: "Vittaprabandhanam (Fin-Tech app)",
    description: "A centralized, intelligent dashboard orchestrating real-time personal finance telemetry across complex operational environments.",
    longDescription: "Architected a full-stack financial command center leveraging Expo (React Native), Supabase, and WatermelonDB. Engineered offline-first syncing capabilities via RxJS observables, ensuring zero-latency data access. Overhauled raw un-typed data flows by defining rigorous TypeScript schemas, reducing runtime faults by 90% and stabilizing core tracking metrics.",
    imageUrl: "https://placehold.co/600x400.png",
    tags: ["Full-Stack", "Mobile App", "React Native", "PostgreSQL", "Supabase", "TypeScript", "Offline-First", "High Performance"],
    liveUrl: "#",
    sourceUrl: "#",
    hint: "fintech dashboard mobile app"
  },
  {
    id: 2,
    title: "Project Phoenix (Stealth Field Promoter App)",
    description: "A secure MVP Android application architected for ground-level field promoters.",
    longDescription: "Developed a comprehensive mobile application handling intricate user access control and live status telemetry for operational efficiency. Integrated Clerk for robust JWT-based authentication flows. Established continuous integration pipelines using GitHub Actions, accelerating build iteration cycles and achieving 99.9% uptime on internal environments.",
    imageUrl: "https://placehold.co/600x400.png",
    tags: ["Mobile App", "React Native", "Android", "Clerk Authentication", "CI/CD", "Operations"],
    liveUrl: "#",
    sourceUrl: "#",
    hint: "field promoter android app"
  },
  {
    id: 3,
    title: "Intelligent Job Search Automation Engine",
    description: "A fully decentralized application tracking pipeline operating autonomously via Google Apps Script.",
    longDescription: "Engineered a robust scraper targeting Gmail APIs to extract, parse, and structure job application telemetry into a centralized Google Sheets dashboard. Implemented intelligent heuristics (Scam Factor grading algorithms) mitigating malicious recruiting risks. Deployed modular Google Script configurations circumventing standard execution limits by 300%.",
    imageUrl: "https://placehold.co/600x400.png",
    tags: ["Automation", "Google Apps Script", "APIs", "ETL Pipelines", "Data Analytics"],
    liveUrl: "#",
    sourceUrl: "#",
    hint: "automated job search tracking dashboard"
  },
  {
    id: 4,
    title: "Aetherial Architecture Portfolio",
    description: "An ultra-premium, dark-themed 3D WebGL portfolio built strictly upon the Lumina Data Narrative design system.",
    longDescription: "Constructed a visually intense, interactive web presence utilizing React, Tailwind CSS, and Three.js. Architected high-fidelity 3D particles and scroll-linked GSAP animations orchestrating an immersive user experience. Optimized client-side rendering pathways targeting 60fps operation on heterogeneous mobile architectures.",
    imageUrl: "https://placehold.co/600x400.png",
    tags: ["Web App", "WebGL", "Three.js", "GSAP", "Next.js", "Tailwind CSS", "UI/UX", "3D"],
    liveUrl: "#",
    sourceUrl: "#",
    hint: "3d portfolio website"
  },
  {
    id: 5,
    title: "Lumina Data Narrative Design System",
    description: "A strict, codified design language enforcing uniform aesthetics across all digital touchpoints.",
    longDescription: "Built an extensive Tailwind configuration standardizing glassmorphism, precise blur stratifications, and semantic color lexicons (e.g., surface, primary, tertiary). Implemented modular component primitives (Buttons, Cards) strictly adhering to these constraints, ensuring rapid, zero-deviation prototyping for subsequent web projects.",
    imageUrl: "https://placehold.co/600x400.png",
    tags: ["Design System", "Tailwind CSS", "UI/UX", "Architecture", "CSS"],
    liveUrl: "#",
    sourceUrl: "#",
    hint: "design system documentation"
  },
  {
    id: 6,
    title: "BIT Cycles Rental",
    description: "A streamlined hardware deployment mechanism focused on rapid, low-friction micro-mobility rentals.",
    longDescription: "Designed an aggressive, mobile-first booking UI mapping cleanly to backend validation schemas, minimizing form-friction. Engineered high-availability routing via React Router handling 100+ concurrent traffic spikes, driving a 40% reduction in user-side data input anomalies.",
    imageUrl: "https://placehold.co/600x400.png",
    tags: ["Full-Stack", "Web App", "React", "Node.js", "Operations", "UI/UX"],
    liveUrl: "#",
    sourceUrl: "#",
    hint: "cycle rental app"
  }
];`;

const newTags = `const allTags = ["All", "Full-Stack", "Web App", "Mobile App", "React Native", "UI/UX", "Automation", "WebGL"];`;

code = code.replace(/const projects = \[\s*\{[\s\S]*?\}\s*\];/, newProjects);
code = code.replace(/const allTags = \[.*?\];/, newTags);
fs.writeFileSync(projectPath, code, "utf8");

// Update header.tsx
let headerPath = "s:/Previous/src/components/header.tsx";
let headerCode = fs.readFileSync(headerPath, "utf8");

const newRoutes = `const routes = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#leadership", label: "Leadership" },
  { href: "#achievements", label: "Achievements" },
  { href: "#my-work", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#testimonials", label: "References" },
];`;

headerCode = headerCode.replace(/const routes = \[[\s\S]*?\];/, newRoutes);
fs.writeFileSync(headerPath, headerCode, "utf8");
console.log("Projects and Header updated.");

