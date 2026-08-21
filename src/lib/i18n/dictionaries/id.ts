import type { Dictionary } from "../types";

export const id: Dictionary = {
  meta: {
    siteName: "Helmi Rafif",
    description:
      "Fullstack Developer — Flutter mobile, React web, Firebase, Clean Architecture.",
  },
  nav: {
    home: "Beranda",
    about: "Tentang",
    work: "Pengalaman",
    projects: "Proyek",
    notes: "Catatan",
  },
  home: {
    status: "Terbuka untuk peluang",
    kicker: "Flutter · React · Clean Architecture · Aplikasi Scalable",
    headline: "Fullstack developer mengirim aplikasi mobile dan web yang tahan lama.",
    subheadline:
      "3+ tahun membangun aplikasi mobile dan web produksi dengan Flutter dan React. Saya fokus pada Clean Architecture, state management modern, integrasi backend Firebase, dan delivery pragmatis yang tumbuh bersama produk.",
    principlesTitle: "Cara saya bekerja",
    principles: [
      "Arsitektur yang clean dan eksplisit — pemisahan layer dan dependency injection yang menua dengan baik",
      "Ownership dan akuntabilitas — dari implementasi hingga deployment ke store",
      "Maintainability di atas shortcut — solusi yang readable, testable, dan long-term",
      "Pragmatic delivery — menyeimbangkan kualitas engineering dengan timeline bisnis",
    ],
    proofLabel: "Bidang fokus",
    proof: [
      "Flutter & Dart",
      "React & TypeScript",
      "Firebase",
      "Clean Architecture",
      "REST & Socket.io",
      "POS & akuntansi",
    ],
    ctaProjects: "Lihat proyek",
    ctaContact: "Hubungi saya",
    featuredProjects: "Proyek unggulan",
    featuredDescription:
      "Pilihan proyek yang menonjolkan scope, keputusan, dan hasil.",
    viewAllProjects: "Lihat semua proyek",
    noFeatured: "Belum ada proyek unggulan.",
    contactTitle: "Kontak",
    contactDescription:
      "Terbuka untuk peran yang mengutamakan kedalaman teknis, pertimbangan arsitektur, dan delivery yang reliable.",
    contactEmailLabel: "Email",
    contactEmailHref: "mailto:helmi.rafif17@gmail.com",
    contactLinkedInLabel: "LinkedIn",
    contactLinkedInHref: "https://www.linkedin.com/in/helmirafif",
    contactGitHubLabel: "GitHub",
    contactGitHubHref: "https://github.com/HelmiRafif",
    sections: {
      overview: "Ikhtisar",
      featuredEyebrow: "Pilihan",
      contactEyebrow: "Hubungi",
    },
  },
  projects: {
    eyebrow: "Portofolio",
    title: "Proyek",
    subtitle:
      "Kumpulan proyek terpilih dengan scope, keputusan, dan hasil. Konten diambil dari sumber eksternal sehingga pembaruan tidak memerlukan redeploy.",
    metaDescription:
      "Proyek terpilih dengan scope, keputusan, dan hasil — diambil dari sumber eksternal.",
    featuredOnly: "Unggulan",
    all: "Semua proyek",
    any: "Semua",
    filterTech: "Teknologi",
    resetFilters: "Reset",
    updated: "Diperbarui",
    missingData:
      "Sumber data proyek belum dikonfigurasi. Set PROJECTS_JSON_URL ke endpoint JSON eksternal.",
    empty: "Tidak ada proyek yang cocok dengan filter saat ini.",
    featuredBadge: "Unggulan",
    statsProjects: "Proyek",
    statsRoles: "Peran",
    statsTech: "Teknologi",
    countLabel: "proyek",
  },
  about: {
    eyebrow: "Tentang",
    title: "Merancang aplikasi mobile dan web yang andal di produksi.",
    metaDescription:
      "Tentang Helmi Rafif — fullstack developer yang fokus pada Flutter, React, dan Clean Architecture.",
    lead: "Saya fullstack developer dengan 3+ tahun pengalaman membangun aplikasi mobile dan web. Saya berspesialisasi dalam Flutter mobile development dan React web development, dengan integrasi backend Firebase dan state management modern sebagai bagian inti dari perangkat saya.",
    body: [
      "Pekerjaan saya mencakup sistem akuntansi web enterprise (GroApp), aplikasi POS dan kasir yang dipakai pedagang nyata (Smartlink), manajemen masjid (MOSQ), dan alat HR internal (Empower HR). Setiap proyek menuntut keseimbangan antara delivery pragmatis dan maintainability jangka panjang.",
      "Saya memperhatikan detail yang membuat aplikasi produksi andal: state management yang bisa diprediksi, penanganan error yang jujur, clean architecture yang menjaga codebase tetap mudah dipahami seiring pertumbuhan, dan antarmuka yang bisa dipakai pengguna non-teknis tanpa manual.",
    ],
    principlesTitle: "Prinsip bekerja",
    principles: [
      {
        title: "Arsitektur yang clean dan eksplisit",
        description:
          "Pemisahan layer yang ketat dan dependency injection agar engineer berikutnya — termasuk saya di masa depan — bisa memahami codebase dengan cepat.",
      },
      {
        title: "Ownership sampai deployment",
        description:
          "Saya bertanggung jawab dari implementasi pertama hingga rilis ke store dan seterusnya.",
      },
      {
        title: "Maintainability di atas shortcut",
        description:
          "Solusi tercepat adalah yang bertahan di iterasi kedua dan ketiga.",
      },
      {
        title: "Pragmatic delivery",
        description:
          "Kualitas engineering harus cocok dengan timeline dan realita bisnis.",
      },
    ],
    focusTitle: "Bidang kontribusi",
    focus: [
      "Flutter mobile development dan arsitektur cross-platform",
      "React web development dengan TypeScript dan Vite",
      "Integrasi backend Firebase — Auth, Firestore, Storage, Realtime DB",
      "Clean Architecture dengan pemisahan layer yang ketat dan DI",
      "State management — GetX, Zustand, RxJS",
      "Integrasi REST API dan real-time — Axios, Dio, Socket.io",
      "Memimpin delivery fitur end-to-end dalam tim SDLC Scrum",
    ],
    educationTitle: "Pendidikan",
    education: [
      {
        school: "Universitas Terbuka",
        degree: "Sistem Informasi (Sarjana)",
        period: "2023 – sekarang",
      },
      {
        school: "SMKN 4 Malang",
        degree: "Rekayasa Perangkat Lunak",
        period: "2019 – 2022",
      },
    ],
    skillsTitle: "Keahlian teknis",
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
        group: "Alat & workflow",
        items: ["Git", "Vite", "Docker", "CI/CD", "Agile/Scrum"],
      },
      {
        group: "Arsitektur",
        items: ["Clean Architecture", "Monorepo", "Design Patterns"],
      },
    ],
    languagesTitle: "Bahasa",
    languages: [
      { name: "Indonesia", level: "Native" },
      { name: "Inggris", level: "Kemampuan kerja profesional" },
    ],
    contactCta: "Terbuka untuk peran yang mengutamakan kedalaman teknis dan delivery yang reliable.",
  },
  work: {
    eyebrow: "Pengalaman",
    title: "Pengalaman terpilih.",
    metaDescription:
      "Peran dan pekerjaan terpilih — pengembangan frontend di Flutter, React, dan React Native.",
    intro:
      "Cuplikan peran dan perusahaan yang pernah saya kontribusikan. Detail diambil dari pekerjaan produksi yang sudah dirilis.",
    rolesTitle: "Pengalaman",
    roles: [
      {
        company: "PT. Ada Ide Langsung Jalan",
        role: "Frontend Developer Staff (Mobile & Web)",
        period: "Okt 2022 – Sekarang",
        scope: "GroApp, Smartlink Cashier, Smartlink Owner, Empower HR",
        summary:
          "Mengembangkan aplikasi web dan mobile enterprise dengan React dan Flutter, mengikuti metode SDLC Scrum.",
        points: [
          "Membangun GroApp, aplikasi web akuntansi enterprise dengan React 18, TypeScript, dan Vite dalam arsitektur monorepo",
          "Menerapkan Clean Architecture dengan pemisahan layer yang ketat dan dependency injection",
          "Mengelola state dengan Zustand dan RxJS untuk pola reactive programming",
          "Mengintegrasikan layanan backend Firebase dan RESTful API dengan Axios",
          "Membangun fitur real-time dengan Socket.io client untuk notifikasi live",
          "Mengirimkan 15+ modul fitur termasuk Auth, Company Management, Banking, dan Contacts",
          "Mengonversi source code Kotlin ke Flutter untuk aplikasi Smartlink Cashier",
          "Mengembangkan Smartlink Owner dengan fitur Inventory, Promotions, dan QRIS",
          "Men-deploy aplikasi HR internal Empower HR ke Apple App Store",
          "Membangun library internationalization (i18n) kustom untuk aplikasi mobile Groapp ERP",
        ],
      },
      {
        company: "Pekerja Lepas",
        role: "Software Developer & Web Automation",
        period: "Sep 2021 – Sekarang",
        scope: "Aplikasi Adhan, web sensus keluarga, alat automasi",
        summary:
          "Mengembangkan aplikasi dan alat untuk berbagai klien dan proyek di bidang mobile, web, dan automasi.",
        points: [
          "Mengembangkan aplikasi mobile Adhan menggunakan Flutter (Dart)",
          "Membangun aplikasi web untuk pengumpulan data sensus keluarga menggunakan Laravel (PHP)",
          "Membuat alat automasi untuk Facebook Marketplace dan sistem manajemen proyek PLN",
        ],
      },
      {
        company: "PT IMPERINDO",
        role: "Fullstack Mobile Developer",
        period: "Sep 2021 – Sep 2022",
        scope: "MOSQ, Sayurdaily",
        summary:
          "Mengembangkan aplikasi mobile dengan Flutter, mengintegrasikan layanan backend Firebase, dan memublikasikan ke Google Play Store.",
        points: [
          "Mengembangkan MOSQ, aplikasi mobile manajemen masjid dengan Flutter (Dart)",
          "Mengintegrasikan Firebase Authentication dan manajemen Database",
          "Menerapkan state management GetX untuk penanganan state aplikasi yang efisien",
          "Memublikasikan MOSQ ke Google Play Store",
          "Mengembangkan Sayurdaily, marketplace online untuk makanan segar lokal",
        ],
      },
      {
        company: "Gods SEO",
        role: "Intern",
        period: "Feb 2021 – Des 2021",
        scope: "Aplikasi Adhan, HR Management, automasi web",
        summary:
          "Membangun aplikasi mobile dan web serta alat automasi di Flutter, Laravel, dan PHP.",
        points: [
          "Mengembangkan aplikasi mobile Adhan menggunakan Flutter (Dart)",
          "Membangun aplikasi web pengumpulan data keluarga menggunakan Laravel (PHP) dengan MySQL",
          "Membuat aplikasi HR Management dengan fitur Licensing dan Employee Payroll",
          "Menjalankan automasi web untuk Backlinks Brokers dan Facebook Marketplace",
        ],
      },
    ],
    note: "Pendidikan: Sistem Informasi di Universitas Terbuka (2023 – sekarang); Rekayasa Perangkat Lunak di SMKN 4 Malang.",
  },
  notes: {
    eyebrow: "Catatan",
    title: "Catatan singkat tentang trade-off engineering.",
    subtitle:
      "Tulisan singkat tentang keputusan, trade-off, dan praktik engineering. Fokus konten, tanpa gimmick.",
    metaDescription:
      "Catatan tentang keputusan engineering, trade-off, dan praktik.",
    topicsTitle: "Topik yang direncanakan",
    topics: [
      {
        title: "Keputusan arsitektur yang menua dengan baik",
        summary:
          "Apa yang sebenarnya dibeli clean architecture di codebase Flutter atau React, dan di mana ia berbiaya.",
      },
      {
        title: "State management di produksi",
        summary:
          "Memilih antara GetX, Zustand, dan RxJS — dan apa yang bertahan dari pertumbuhan fitur nyata.",
      },
      {
        title: "Migrasi codebase legacy",
        summary:
          "Dari Kotlin ke Flutter: risiko, keputusan, dan loop umpan balik dalam migrasi codebase.",
      },
      {
        title: "Mengirim fitur end-to-end",
        summary:
          "Dari kebutuhan hingga rilis store: handoff, risiko, dan loop umpan balik.",
      },
    ],
    comingNext: "Catatan sedang disusun. Tulisan pertama akan tayang di sini.",
  },
  common: {
    skipToContent: "Langsung ke konten",
    expand: "Perluas detail",
    collapse: "Ciutkan detail",
    website: "Situs web",
    repo: "Repositori",
    impact: "Dampak",
    updated: "Diperbarui",
    backHome: "Kembali ke beranda",
    errorTitle: "Terjadi kesalahan",
    errorDescription:
      "Halaman mengalami kesalahan yang tidak terduga. Coba lagi, atau kembali ke beranda.",
    retry: "Coba lagi",
    loading: "Memuat",
  },
};
