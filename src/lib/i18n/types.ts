export type Dictionary = {
  meta: {
    siteName: string;
    description: string;
  };
  nav: {
    home: string;
    about: string;
    work: string;
    projects: string;
    notes: string;
  };
  home: {
    status: string;
    kicker: string;
    headline: string;
    subheadline: string;
    principlesTitle: string;
    principles: string[];
    proofLabel: string;
    proof: string[];
    ctaProjects: string;
    ctaContact: string;
    featuredProjects: string;
    featuredDescription: string;
    viewAllProjects: string;
    noFeatured: string;
    contactTitle: string;
    contactDescription: string;
    contactEmailLabel: string;
    contactEmailHref: string;
    contactLinkedInLabel: string;
    contactLinkedInHref: string;
    contactGitHubLabel: string;
    contactGitHubHref: string;
    sections: {
      overview: string;
      featuredEyebrow: string;
      contactEyebrow: string;
    };
  };
  projects: {
    eyebrow: string;
    title: string;
    subtitle: string;
    metaDescription: string;
    featuredOnly: string;
    all: string;
    any: string;
    filterTech: string;
    resetFilters: string;
    updated: string;
    missingData: string;
    empty: string;
    featuredBadge: string;
    statsProjects: string;
    statsRoles: string;
    statsTech: string;
    countLabel: string;
  };
  about: {
    eyebrow: string;
    title: string;
    metaDescription: string;
    lead: string;
    body: string[];
    principlesTitle: string;
    principles: { title: string; description: string }[];
    focusTitle: string;
    focus: string[];
    educationTitle: string;
    education: {
      school: string;
      degree: string;
      period: string;
    }[];
    skillsTitle: string;
    skills: { group: string; items: string[] }[];
    languagesTitle: string;
    languages: { name: string; level: string }[];
    contactCta: string;
  };
  work: {
    eyebrow: string;
    title: string;
    metaDescription: string;
    intro: string;
    rolesTitle: string;
    roles: {
      company: string;
      role: string;
      period: string;
      scope: string;
      summary: string;
      points: string[];
    }[];
    note: string;
  };
  notes: {
    eyebrow: string;
    title: string;
    subtitle: string;
    metaDescription: string;
    topicsTitle: string;
    topics: { title: string; summary: string }[];
    comingNext: string;
  };
  common: {
    skipToContent: string;
    expand: string;
    collapse: string;
    website: string;
    repo: string;
    impact: string;
    updated: string;
    backHome: string;
    errorTitle: string;
    errorDescription: string;
    retry: string;
    loading: string;
  };
};
