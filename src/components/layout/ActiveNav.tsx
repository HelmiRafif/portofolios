"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { Locale } from "@/lib/i18n/locales";
import type { Dictionary } from "@/lib/i18n/types";

function linkClass(active: boolean) {
  return [
    "group inline-flex items-center gap-3 py-1.5 text-sm transition",
    active ? "text-foreground" : "text-muted hover:text-foreground",
  ].join(" ");
}

export function ActiveNav({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const pathname = usePathname() ?? "";
  const base = `/${locale}`;

  const links = [
    { href: `${base}`, label: dict.nav.home, match: (p: string) => p === base },
    { href: `${base}/about`, label: dict.nav.about, match: (p: string) => p.startsWith(`${base}/about`) },
    { href: `${base}/work`, label: dict.nav.work, match: (p: string) => p.startsWith(`${base}/work`) },
    { href: `${base}/projects`, label: dict.nav.projects, match: (p: string) => p.startsWith(`${base}/projects`) },
    { href: `${base}/notes`, label: dict.nav.notes, match: (p: string) => p.startsWith(`${base}/notes`) },
  ];

  return (
    <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm lg:flex-col lg:gap-1">
      {links.map((l, index) => {
        const active = l.match(pathname);
        return (
          <Link
            key={l.href}
            href={l.href}
            className={linkClass(active)}
            aria-current={active ? "page" : undefined}
          >
            <span
              aria-hidden
              className={`font-mono text-xs ${
                active ? "text-accent" : "text-muted group-hover:text-accent"
              }`}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="relative">
              {l.label}
              {active ? (
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-0 h-px w-full bg-accent"
                />
              ) : null}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
