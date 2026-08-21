import type { Metadata } from "next";

import { SectionHeading } from "@/components/typography/SectionHeading";
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
    path: "/notes",
    title: dict.notes.title,
    description: dict.notes.metaDescription,
  });
}

export default async function NotesPage({
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
        <p className="kicker">{dict.notes.eyebrow}</p>
        <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {dict.notes.title}
        </h1>
        <p className="max-w-[--measure] text-base leading-7 text-muted">
          {dict.notes.subtitle}
        </p>
      </section>

      <section className="space-y-6">
        <SectionHeading eyebrow={dict.notes.eyebrow} title={dict.notes.topicsTitle} />
        <ul className="divide-y divide-border border-y border-border">
          {dict.notes.topics.map((topic) => (
            <li key={topic.title} className="py-4">
              <h2 className="text-sm font-semibold text-foreground">{topic.title}</h2>
              <p className="mt-1 max-w-[--measure] text-sm leading-6 text-muted">
                {topic.summary}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <p className="rounded-xl border border-dashed border-border p-6 text-sm leading-6 text-muted">
        {dict.notes.comingNext}
      </p>
    </div>
  );
}
