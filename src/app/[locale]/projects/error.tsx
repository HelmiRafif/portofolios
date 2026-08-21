"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import { getDictionary } from "@/lib/i18n/getDictionary";
import { isLocale } from "@/lib/i18n/locales";

export default function ProjectsError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const rawParams = useParams();
  const rawLocale = Array.isArray(rawParams.locale)
    ? rawParams.locale[0]
    : rawParams.locale;
  const locale = typeof rawLocale === "string" && isLocale(rawLocale) ? rawLocale : "en";

  const dict = getDictionary(locale);

  return (
    <div className="space-y-6 rounded-xl border border-dashed border-border p-8 text-center">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground">
        {dict.common.errorTitle}
      </h1>
      <p className="mx-auto max-w-md text-sm leading-6 text-muted">
        {dict.common.errorDescription}
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex min-h-11 items-center rounded-full border border-accent bg-accent px-5 py-2 text-sm font-semibold text-accent-ink hover:bg-accent/90"
        >
          {dict.common.retry}
        </button>
        <Link
          href={`/${locale}`}
          className="inline-flex min-h-11 items-center rounded-full border border-border px-5 py-2 text-sm font-medium text-muted hover:border-accent hover:text-foreground"
        >
          {dict.common.backHome}
        </Link>
      </div>
    </div>
  );
}
