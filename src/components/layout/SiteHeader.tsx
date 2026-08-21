import Link from "next/link";

import type { Locale } from "@/lib/i18n/locales";
import type { Dictionary } from "@/lib/i18n/types";
import { LocaleSwitcher } from "@/components/ui/LocaleSwitcher";
import { ActiveNav } from "@/components/layout/ActiveNav";
import { SectionNav } from "@/components/layout/SectionNav";

export function SiteHeader({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const base = `/${locale}`;

  return (
    <header className="space-y-8">
      <div className="space-y-3">
        <Link
          href={base}
          className="inline-flex items-baseline gap-2 text-2xl font-semibold tracking-tight text-foreground hover:text-accent"
        >
          <span>{dict.meta.siteName}</span>
        </Link>

        <p className="kicker">{dict.home.kicker}</p>

        <p className="text-sm font-medium text-foreground">
          {dict.home.headline}
        </p>

        <p className="flex items-center gap-2 text-xs text-muted">
          <span
            aria-hidden
            className="inline-block h-2 w-2 rounded-full bg-accent"
          />
          {dict.home.status}
        </p>
      </div>

      <div className="space-y-6">
        <ActiveNav locale={locale} dict={dict} />

        <SectionNav locale={locale} dict={dict} />

        <div className="flex items-center justify-between gap-4">
          <LocaleSwitcher currentLocale={locale} />
          <span className="text-xs text-muted">/{locale}</span>
        </div>
      </div>
    </header>
  );
}
