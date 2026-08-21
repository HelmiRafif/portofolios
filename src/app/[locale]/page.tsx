import type { Metadata } from "next";
import Link from "next/link";

import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionHeading } from "@/components/typography/SectionHeading";
import { TextLink } from "@/components/typography/TextLink";
import { fetchProjects } from "@/lib/content/projects/fetchProjects";
import { featuredOnly, sortByUpdatedAtDesc } from "@/lib/content/projects/selectors";
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
    path: "/",
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<LocaleRouteParams>;
}) {
  const raw = await params;
  const locale = getLocaleFromParams(raw);
  const dict = getDictionary(locale);

  const result = await fetchProjects();
  const featured = result.ok ? featuredOnly(sortByUpdatedAtDesc(result.projects)) : [];

  const base = `/${locale}`;

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Overview */}
      <section id="overview" className="scroll-mt-8 space-y-8">
        <div className="space-y-4">
          <p className="kicker">{dict.home.kicker}</p>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {dict.home.headline}
          </h1>
          <p className="max-w-[--measure] text-base leading-7 text-muted">
            {dict.home.subheadline}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href={`${base}/projects`}
            className="inline-flex min-h-11 items-center rounded-full border border-accent bg-accent px-5 py-2 text-sm font-semibold text-accent-ink hover:bg-accent/90"
          >
            {dict.home.ctaProjects}
          </Link>
          <Link
            href={`${base}/about`}
            className="inline-flex min-h-11 items-center rounded-full border border-border px-5 py-2 text-sm font-medium text-muted hover:border-accent hover:text-foreground"
          >
            {dict.home.ctaContact}
          </Link>
        </div>

        <div className="space-y-3 border-t border-border pt-6">
          <p className="kicker">{dict.home.proofLabel}</p>
          <ul className="flex flex-wrap gap-2">
            {dict.home.proof.map((item) => (
              <li
                key={item}
                className="rounded-md border border-border px-2 py-1 font-mono text-xs text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
            {dict.home.principlesTitle}
          </h2>
          <ul className="space-y-3">
            {dict.home.principles.map((principle) => (
              <li key={principle} className="flex gap-3 text-sm leading-6 text-muted">
                <span
                  aria-hidden
                  className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                />
                {principle}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Featured projects */}
      <section id="featured" className="scroll-mt-8 space-y-6">
        <SectionHeading
          eyebrow={dict.home.sections.featuredEyebrow}
          title={dict.home.featuredProjects}
          description={dict.home.featuredDescription}
          actions={
            <TextLink href={`${base}/projects`}>{dict.home.viewAllProjects}</TextLink>
          }
        />

        {!result.ok ? (
          <p className="rounded-xl border border-dashed border-border p-6 text-sm text-muted">
            {result.error || dict.projects.missingData}
          </p>
        ) : featured.length === 0 ? (
          <p className="text-sm text-muted">{dict.home.noFeatured}</p>
        ) : (
          <div className="space-y-4">
            {featured.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                locale={locale}
                dict={dict}
                index={index}
              />
            ))}
          </div>
        )}
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-8 space-y-6">
        <SectionHeading
          eyebrow={dict.home.sections.contactEyebrow}
          title={dict.home.contactTitle}
          description={dict.home.contactDescription}
        />

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a href={dict.home.contactEmailHref} className="link-editorial font-medium">
            {dict.home.contactEmailLabel}
          </a>
          {dict.home.contactLinkedInHref ? (
            <a
              href={dict.home.contactLinkedInHref}
              target="_blank"
              rel="noreferrer"
              className="link-editorial font-medium"
            >
              {dict.home.contactLinkedInLabel}
            </a>
          ) : null}
          {dict.home.contactGitHubHref ? (
            <a
              href={dict.home.contactGitHubHref}
              target="_blank"
              rel="noreferrer"
              className="link-editorial font-medium"
            >
              {dict.home.contactGitHubLabel}
            </a>
          ) : null}
        </div>
      </section>
    </div>
  );
}
