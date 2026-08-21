"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { LOCALES, type Locale } from "@/lib/i18n/locales";

function replaceLocale(pathname: string, nextLocale: Locale) {
  const parts = pathname.split("/");
  const hasLocale = LOCALES.includes((parts[1] as Locale) ?? "en");

  if (hasLocale) {
    parts[1] = nextLocale;
    return parts.join("/");
  }

  return `/${nextLocale}${pathname === "/" ? "" : pathname}`;
}

export function LocaleSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const pathname = usePathname() ?? "/";

  return (
    <div
      className="flex items-center gap-1.5 text-sm"
      role="group"
      aria-label="Language"
    >
      {LOCALES.map((locale) => {
        const href = replaceLocale(pathname, locale);
        const active = locale === currentLocale;

        return (
          <Link
            key={locale}
            href={href}
            className={
              active
                ? "inline-flex min-h-9 items-center rounded-full border border-accent bg-accent px-3 py-1 text-xs font-semibold text-accent-ink"
                : "inline-flex min-h-9 items-center rounded-full border border-transparent px-3 py-1 text-xs font-medium text-muted hover:border-border hover:text-foreground"
            }
            aria-current={active ? "page" : undefined}
          >
            {locale.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
