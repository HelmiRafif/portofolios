import type { Metadata } from "next";

import { getDictionary } from "@/lib/i18n/getDictionary";
import { getLocaleFromParams, type LocaleRouteParams } from "@/lib/i18n/params";
import { buildLocalizedMetadata } from "@/lib/seo/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<LocaleRouteParams>;
}): Promise<Metadata> {
  const raw = await params;
  const locale = getLocaleFromParams(raw);
  const dict = getDictionary(locale);

  return buildLocalizedMetadata({
    locale,
    dict,
    path: "/work",
    title: dict.work.title,
    description: dict.work.metaDescription,
  });
}

export default async function WorkPage({
  params,
}: {
  params: Promise<LocaleRouteParams>;
}) {
  const raw = await params;
  const locale = getLocaleFromParams(raw);
  const dict = getDictionary(locale);

  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <p className="kicker">{dict.work.eyebrow}</p>
        <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {dict.work.title}
        </h1>
        <p className="max-w-[--measure] text-base leading-7 text-muted">
          {dict.work.intro}
        </p>
      </section>

      <section className="space-y-6">
        <p className="kicker">{dict.work.rolesTitle}</p>
        <ol className="space-y-4">
          {dict.work.roles.map((role, index) => (
            <li
              key={`${role.company}-${index}`}
              className="rounded-xl border border-border bg-transparent p-5 transition hover:border-accent/60 hover:bg-panel/40 sm:p-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="space-y-1">
                  <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
                    {role.role}
                  </h2>
                  <p className="text-sm font-medium text-accent">{role.company}</p>
                </div>
                <span className="rounded-full border border-border px-2 py-1 font-mono text-xs text-muted">
                  {role.period}
                </span>
              </div>

              {role.scope ? (
                <p className="mt-2 text-xs font-medium uppercase tracking-wide text-muted">
                  {role.scope}
                </p>
              ) : null}
              <p className="mt-2 max-w-[--measure] text-sm leading-6 text-muted">
                {role.summary}
              </p>

              {role.points.length > 0 ? (
                <ul className="mt-4 space-y-2 border-t border-border pt-4 text-sm text-muted">
                  {role.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                      />
                      <span className="leading-6">{point}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ol>
      </section>

      <p className="border-t border-border pt-4 text-xs leading-5 text-muted">
        {dict.work.note}
      </p>
    </div>
  );
}
