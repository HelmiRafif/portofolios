import type { Metadata } from "next";
import Link from "next/link";

import { ChipLink } from "@/components/ui/ChipLink";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { SectionHeading } from "@/components/typography/SectionHeading";
import { fetchProjects } from "@/lib/content/projects/fetchProjects";
import { sortByUpdatedAtDesc } from "@/lib/content/projects/selectors";
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
    path: "/projects",
  });
}

function buildFilterHref(base: string, params: URLSearchParams) {
  const query = params.toString();
  return query ? `${base}?${query}` : base;
}

export default async function ProjectsPage({
  params,
  searchParams,
}: {
  params: Promise<LocaleRouteParams>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const raw = await params;
  const locale = getLocaleFromParams(raw);
  const dict = getDictionary(locale);

  const sp = await searchParams;
  const rawFilter = sp.filter;
  const filter = Array.isArray(rawFilter) ? rawFilter[0] : rawFilter ?? "";
  const normalizedFilter = filter.trim().toLowerCase();

  const base = `/${locale}/projects`;

  const result = await fetchProjects();
  const projects = result.ok ? sortByUpdatedAtDesc(result.projects) : [];

  const allTech = Array.from(
    new Set(projects.flatMap((p) => p.techStack).map((t) => t.toLowerCase())),
  ).sort();

  const filtered = normalizedFilter
    ? projects.filter((p) =>
        p.techStack.some((t) => t.toLowerCase() === normalizedFilter),
      )
    : projects;

  const stats = {
    projects: projects.length,
    roles: new Set(projects.map((p) => p.role)).size,
    tech: allTech.length,
  };

  const paramsFor = (next: string) => {
    const p = new URLSearchParams();
    if (next) p.set("filter", next);
    return buildFilterHref(base, p);
  };

  const hasActiveFilter = Boolean(normalizedFilter);

  return (
    <div className="space-y-12">
      <section id="projects-top" className="scroll-mt-8 space-y-4">
        <p className="kicker">{dict.projects.eyebrow}</p>
        <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {dict.projects.title}
        </h1>
        <p className="max-w-[--measure] text-base leading-7 text-muted">
          {dict.projects.subtitle}
        </p>

        <dl className="flex flex-wrap gap-x-8 gap-y-2 border-t border-border pt-5 text-sm">
          <div className="space-y-1">
            <dt className="kicker">{dict.projects.statsProjects}</dt>
            <dd className="font-mono text-xl text-foreground">{stats.projects}</dd>
          </div>
          <div className="space-y-1">
            <dt className="kicker">{dict.projects.statsRoles}</dt>
            <dd className="font-mono text-xl text-foreground">{stats.roles}</dd>
          </div>
          <div className="space-y-1">
            <dt className="kicker">{dict.projects.statsTech}</dt>
            <dd className="font-mono text-xl text-foreground">{stats.tech}</dd>
          </div>
        </dl>
      </section>

      <section id="filters" className="scroll-mt-8 space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <p className="kicker">{dict.projects.filterTech}</p>
          {hasActiveFilter ? (
            <Link
              href={base}
              className="inline-flex min-h-9 items-center rounded-full border border-border px-3 py-1 text-xs font-medium text-muted hover:border-accent hover:text-foreground"
            >
              {dict.projects.resetFilters}
            </Link>
          ) : null}
        </div>

        <div className="flex flex-wrap gap-2" role="group" aria-label={dict.projects.filterTech}>
          <ChipLink href={base} active={!hasActiveFilter}>
            {dict.projects.any}
          </ChipLink>
          {allTech.map((tech) => (
            <ChipLink
              key={tech}
              href={paramsFor(tech)}
              active={normalizedFilter === tech}
            >
              {tech}
            </ChipLink>
          ))}
        </div>
      </section>

      <section id="projects-list" className="scroll-mt-8 space-y-4">
        <SectionHeading
          eyebrow={dict.projects.eyebrow}
          title={
            hasActiveFilter
              ? `${dict.projects.title} · ${normalizedFilter}`
              : dict.projects.title
          }
        />

        {!result.ok ? (
          <p className="rounded-xl border border-dashed border-border p-6 text-sm text-muted">
            {result.error || dict.projects.missingData}
          </p>
        ) : (
          <ProjectsGrid
            projects={filtered}
            locale={locale}
            dict={dict}
          />
        )}
      </section>
    </div>
  );
}
