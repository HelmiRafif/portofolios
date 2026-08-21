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
    path: "/about",
    title: dict.about.title,
    description: dict.about.metaDescription,
  });
}

export default async function AboutPage({
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
        <p className="kicker">{dict.about.eyebrow}</p>
        <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {dict.about.title}
        </h1>
        <p className="max-w-[--measure] text-lg leading-8 text-foreground">
          {dict.about.lead}
        </p>
      </section>

      <div className="space-y-4 text-sm leading-7 text-muted">
        {dict.about.body.map((paragraph) => (
          <p key={paragraph} className="max-w-[--measure]">
            {paragraph}
          </p>
        ))}
      </div>

      <section className="space-y-6">
        <SectionHeading
          eyebrow={dict.about.eyebrow}
          title={dict.about.principlesTitle}
        />
        <ul className="divide-y divide-border border-y border-border">
          {dict.about.principles.map((principle) => (
            <li
              key={principle.title}
              className="grid gap-1 py-4 sm:grid-cols-[200px_1fr] sm:gap-6"
            >
              <h3 className="text-sm font-semibold text-foreground">
                {principle.title}
              </h3>
              <p className="text-sm leading-6 text-muted">{principle.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-6">
        <SectionHeading eyebrow={dict.about.eyebrow} title={dict.about.focusTitle} />
        <ul className="space-y-3">
          {dict.about.focus.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-6 text-muted">
              <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow={dict.about.eyebrow}
          title={dict.about.skillsTitle}
        />
        <dl className="divide-y divide-border border-y border-border">
          {dict.about.skills.map((group) => (
            <div key={group.group} className="grid gap-1 py-3 sm:grid-cols-[200px_1fr] sm:gap-6">
              <dt className="text-sm font-semibold text-foreground">
                {group.group}
              </dt>
              <dd className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border px-2 py-1 font-mono text-xs text-muted"
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow={dict.about.eyebrow}
          title={dict.about.educationTitle}
        />
        <ul className="divide-y divide-border border-y border-border">
          {dict.about.education.map((edu) => (
            <li key={edu.school} className="grid gap-1 py-4 sm:grid-cols-[200px_1fr] sm:gap-6">
              <h3 className="text-sm font-semibold text-foreground">{edu.school}</h3>
              <div className="space-y-1">
                <p className="text-sm leading-6 text-muted">{edu.degree}</p>
                <p className="text-xs text-muted">{edu.period}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow={dict.about.eyebrow}
          title={dict.about.languagesTitle}
        />
        <ul className="flex flex-wrap gap-x-8 gap-y-2">
          {dict.about.languages.map((lang) => (
            <li key={lang.name} className="space-y-1">
              <p className="text-sm font-semibold text-foreground">{lang.name}</p>
              <p className="text-xs text-muted">{lang.level}</p>
            </li>
          ))}
        </ul>
      </section>

      <p className="rounded-xl border border-border bg-panel/40 p-6 text-sm leading-6 text-muted">
        {dict.about.contactCta}
      </p>
    </div>
  );
}
