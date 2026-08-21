"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import type { Locale } from "@/lib/i18n/locales";
import type { Dictionary } from "@/lib/i18n/types";

type SectionLink = {
  id: string;
  label: string;
};

function isInViewport(target: Element) {
  const rect = target.getBoundingClientRect();
  return rect.top < 160 && rect.bottom > 160;
}

export function SectionNav({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const pathname = usePathname() ?? "";

  const { base, sections, enabled } = useMemo(() => {
    const basePath = `/${locale}`;

    if (pathname === basePath) {
      const homeSections: SectionLink[] = [
        { id: "overview", label: dict.home.sections.overview },
        { id: "featured", label: dict.home.featuredProjects },
        { id: "contact", label: dict.home.contactTitle },
      ];

      return { base: basePath, sections: homeSections, enabled: true };
    }

    if (pathname.startsWith(`${basePath}/projects`)) {
      const projectSections: SectionLink[] = [
        { id: "projects-top", label: dict.projects.title },
        { id: "filters", label: dict.projects.filterTech },
        { id: "projects-list", label: dict.projects.all },
      ];

      return { base: `${basePath}/projects`, sections: projectSections, enabled: true };
    }

    return { base: basePath, sections: [] as SectionLink[], enabled: false };
  }, [dict, locale, pathname]);

  const [activeId, setActiveId] = useState<string | null>(sections[0]?.id ?? null);

  useEffect(() => {
    if (!enabled || sections.length === 0) return;

    const targets = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (targets.length === 0) return;

    const updateFromDOM = () => {
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && isInViewport(el)) {
          setActiveId(s.id);
          return;
        }
      }

      setActiveId(sections[0]?.id ?? null);
    };

    const observer = new IntersectionObserver(
      () => {
        updateFromDOM();
      },
      {
        root: null,
        rootMargin: "-120px 0px -60% 0px",
        threshold: [0, 0.2, 0.6, 1],
      },
    );

    for (const el of targets) observer.observe(el);
    updateFromDOM();

    return () => observer.disconnect();
  }, [enabled, sections]);

  if (!enabled) return null;

  return (
    <div className="space-y-3">
      <p className="kicker">On this page</p>
      <nav className="space-y-1" aria-label="Section">
        {sections.map((s) => {
          const active = s.id === activeId;
          const href = `${base}#${s.id}`;
          return (
            <Link
              key={s.id}
              href={href}
              className={
                active
                  ? "block text-sm text-foreground"
                  : "block text-sm text-muted hover:text-foreground"
              }
              aria-current={active ? "location" : undefined}
            >
              <span className="inline-flex items-center gap-3">
                <span
                  aria-hidden
                  className={
                    active
                      ? "h-px w-6 bg-accent"
                      : "h-px w-6 bg-border transition group-hover:bg-accent"
                  }
                />
                {s.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
