import type { Dictionary } from "../types";

export const en: Dictionary = {
  meta: {
    siteName: "Helmi Rafif",
    description:
      "Fullstack Developer — Flutter mobile, React web, Firebase, Clean Architecture.",
  },
  nav: {
    home: "Home",
    about: "About",
    work: "Work",
    projects: "Projects",
    notes: "Notes",
  },
  home: {
    status: "Open to opportunities",
    kicker: "Flutter · React · Clean Architecture · Scalable Apps",
    headline: "Fullstack developer shipping mobile and web apps that last.",
    subheadline:
      "3+ years building production mobile and web applications with Flutter and React. I focus on Clean Architecture, modern state management, Firebase backend integration, and pragmatic delivery that scales with product growth.",
    principlesTitle: "How I work",
    principles: [
      "Clean and explicit architecture — layer separation and dependency injection that age well",
      "Ownership and accountability — from implementation through store deployment",
      "Maintainability over shortcuts — readable, testable, long-term solutions",
      "Pragmatic delivery — balancing engineering quality with business timelines",
    ],
    proofLabel: "Focus areas",
    proof: [
      "Flutter & Dart",
      "React & TypeScript",
      "Firebase",
      "Clean Architecture",
      "REST & Socket.io",
      "POS & accounting",
    ],
    ctaProjects: "View projects",
    ctaContact: "Contact me",
    featuredProjects: "Featured projects",
    featuredDescription:
      "Selected work that highlights scope, decisions, and outcomes.",
    viewAllProjects: "View all projects",
    noFeatured: "No featured projects yet.",
    contactTitle: "Contact",
    contactDescription:
      "Open to roles where technical depth, architectural judgment, and reliable delivery matter.",
    contactEmailLabel: "Email",
    contactEmailHref: "mailto:helmi.rafif17@gmail.com",
    contactLinkedInLabel: "LinkedIn",
    contactLinkedInHref: "https://www.linkedin.com/in/helmirafif",
    contactGitHubLabel: "GitHub",
    contactGitHubHref: "https://github.com/HelmiRafif",
    sections: {
      overview: "Overview",
      featuredEyebrow: "Selected",
      contactEyebrow: "Reach out",
    },
  },
  projects: {
    eyebrow: "Portfolio",
    title: "Projects",
    subtitle:
      "A curated set of projects with scope, decisions, and outcomes. Content is fetched externally so updates don't require redeploys.",
    metaDescription:
      "Selected projects with scope, decisions, and outcomes — fetched from an external source.",
    featuredOnly: "Featured",
    all: "All projects",
    any: "Any",
    filterTech: "Tech",
    resetFilters: "Reset",
    updated: "Updated",
    missingData:
      "Projects data source is not configured. Set PROJECTS_JSON_URL to an external JSON endpoint.",
    empty: "No projects match the current filters.",
    featuredBadge: "Featured",
    statsProjects: "Projects",
    statsRoles: "Roles",
    statsTech: "Technologies",
    countLabel: "projects",
  },
  about: {
    eyebrow: "About",
    title: "Engineering mobile and web apps that hold up in production.",
    metaDescription:
      "About Helmi Rafif — fullstack developer focused on Flutter, React, and Clean Architecture.",
    lead: "I'm a fullstack developer with 3+ years of experience building mobile and web applications. I specialize in Flutter mobile development and React web development, with Firebase backend integration and modern state management as core parts of my toolkit.",
    body: [
      "My work spans enterprise web accounting systems (GroApp), POS and cashier applications used by real merchants (Smartlink), mosque management (MOSQ), and internal HR tools (Empower HR). Each project demanded a balance between pragmatic delivery and long-term maintainability.",
      "I care about the details that make production apps reliable: predictable state management, honest error handling, clean architecture that keeps a growing codebase reason-able, and interfaces that non-technical users can navigate without a manual.",
    ],
    principlesTitle: "Operating principles",
    principles: [
      {
        title: "Clean and explicit architecture",
        description:
          "Strict layer separation and dependency injection so the next engineer — including future me — can reason about the codebase quickly.",
      },
      {
        title: "Ownership through deployment",
        description:
          "I stay accountable from first implementation to store release and beyond.",
      },
      {
        title: "Maintainability over shortcuts",
        description:
          "The fastest solution is the one that survives the second and third iteration.",
      },
      {
        title: "Pragmatic delivery",
        description:
          "Quality engineering has to fit the timeline and the business reality.",
      },
    ],
    focusTitle: "Where I contribute",
    focus: [
      "Flutter mobile development and cross-platform architecture",
      "React web development with TypeScript and Vite",
      "Firebase backend integration — Auth, Firestore, Storage, Realtime DB",
      "Clean Architecture with strict layer separation and DI",
      "State management — GetX, Zustand, RxJS",
      "REST API and real-time integration — Axios, Dio, Socket.io",
      "Leading feature delivery end-to-end in SDLC Scrum teams",
    ],
    educationTitle: "Education",
    education: [
      {
        school: "Universitas Terbuka",
        degree: "Information Systems (Bachelor's degree)",
        period: "2023 – present",
      },
      {
        school: "SMKN 4 Malang",
        degree: "Software Engineering (Rekayasa Perangkat Lunak)",
        period: "2019 – 2022",
      },
    ],
    skillsTitle: "Technical skills",
    skills: [
      {
        group: "Frontend",
        items: [
          "JavaScript/TypeScript",
          "React",
          "Flutter",
          "HTML/CSS",
          "Tailwind CSS",
        ],
      },
      {
        group: "Backend & API",
        items: ["Node.js", "Firebase", "RESTful API", "Socket.io"],
      },
      {
        group: "State management",
        items: ["GetX", "Zustand", "RxJS"],
      },
      {
        group: "Tools & workflow",
        items: ["Git", "Vite", "Docker", "CI/CD", "Agile/Scrum"],
      },
      {
        group: "Architecture",
        items: ["Clean Architecture", "Monorepo", "Design Patterns"],
      },
    ],
    languagesTitle: "Languages",
    languages: [
      { name: "Indonesian", level: "Native" },
      { name: "English", level: "Professional working proficiency" },
    ],
    contactCta: "Open to roles where technical depth and reliable delivery matter.",
  },
  work: {
    eyebrow: "Work",
    title: "Selected experience.",
    metaDescription:
      "Selected roles and work — frontend development across Flutter, React, and React Native.",
    intro:
      "A snapshot of the roles and companies I've contributed to. Details are drawn from shipped, production-facing work.",
    rolesTitle: "Experience",
    roles: [
      {
        company: "PT. Ada Ide Langsung Jalan",
        role: "Frontend Developer Staff (Mobile & Web)",
        period: "Oct 2022 – Present",
        scope: "GroApp, Smartlink Cashier, Smartlink Owner, Empower HR",
        summary:
          "Developing enterprise web and mobile applications with React and Flutter, following the SDLC Scrum method.",
        points: [
          "Built GroApp, an enterprise accounting web app with React 18, TypeScript, and Vite in a monorepo architecture",
          "Implemented Clean Architecture with strict layer separation and dependency injection",
          "Managed state with Zustand and RxJS for reactive programming patterns",
          "Integrated Firebase backend services and RESTful APIs with Axios",
          "Built real-time features with Socket.io client for live notifications",
          "Shipped 15+ feature modules including Auth, Company Management, Banking, and Contacts",
          "Converted Kotlin source code to Flutter for the Smartlink Cashier application",
          "Developed Smartlink Owner with Inventory, Promotions, and QRIS features",
          "Deployed the internal HR app Empower HR to the Apple App Store",
          "Built a custom internationalization (i18n) library for the Groapp ERP mobile app",
        ],
      },
      {
        company: "Freelance",
        role: "Software Developer & Web Automation",
        period: "Sep 2021 – Present",
        scope: "Adhan app, family census web app, automation tools",
        summary:
          "Developing applications and tools for different clients and projects across mobile, web, and automation.",
        points: [
          "Developed a mobile Adhan application using Flutter (Dart)",
          "Built a web application for family census data collection using Laravel (PHP)",
          "Created automation tools for Facebook Marketplace and a PLN project management system",
        ],
      },
      {
        company: "PT IMPERINDO",
        role: "Fullstack Mobile Developer",
        period: "Sep 2021 – Sep 2022",
        scope: "MOSQ, Sayurdaily",
        summary:
          "Developing mobile applications with Flutter, integrating Firebase backend services and publishing to the Google Play Store.",
        points: [
          "Developed MOSQ, a mosque management mobile app with Flutter (Dart)",
          "Integrated Firebase Authentication and Database management",
          "Implemented GetX state management for efficient app state handling",
          "Published MOSQ to the Google Play Store",
          "Developed Sayurdaily, an online marketplace for fresh local food",
        ],
      },
      {
        company: "Gods SEO",
        role: "Intern",
        period: "Feb 2021 – Dec 2021",
        scope: "Adhan app, HR Management, web automation",
        summary:
          "Built mobile and web applications and automation tools across Flutter, Laravel, and PHP.",
        points: [
          "Developed a mobile Adhan application using Flutter (Dart)",
          "Built a family data collection web app using Laravel (PHP) with MySQL",
          "Created an HR Management app with Licensing and Employee Payroll features",
          "Executed web automation for Backlinks Brokers and Facebook Marketplace",
        ],
      },
    ],
    note: "Education: Information Systems at Universitas Terbuka (2023 – present); Software Engineering at SMKN 4 Malang.",
  },
  notes: {
    eyebrow: "Notes",
    title: "Short notes on engineering trade-offs.",
    subtitle:
      "Short write-ups on decisions, trade-offs, and engineering practices. Content-first, no fluff.",
    metaDescription:
      "Notes on engineering decisions, trade-offs, and practices.",
    topicsTitle: "Planned topics",
    topics: [
      {
        title: "Architecture decisions that age well",
        summary:
          "What clean architecture really buys you on a Flutter or React codebase, and where it costs you.",
      },
      {
        title: "State management in production",
        summary:
          "Choosing between GetX, Zustand, and RxJS — and what survives real-world feature growth.",
      },
      {
        title: "Migrating a legacy codebase",
        summary:
          "From Kotlin to Flutter: the risks, decisions, and feedback loops of a codebase migration.",
      },
      {
        title: "Shipping features end-to-end",
        summary:
          "From requirement to store release: the handoffs, risks, and feedback loops.",
      },
    ],
    comingNext: "Notes are in progress. The first write-ups will land here.",
  },
  common: {
    skipToContent: "Skip to content",
    expand: "Expand details",
    collapse: "Collapse details",
    website: "Website",
    repo: "Repository",
    impact: "Impact",
    updated: "Updated",
    backHome: "Back home",
    errorTitle: "Something went wrong",
    errorDescription:
      "The page hit an unexpected error. Try again, or head back home.",
    retry: "Try again",
    loading: "Loading",
  },
};
