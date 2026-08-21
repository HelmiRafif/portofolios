import type { Locale } from "@/lib/i18n/locales";
import type { Dictionary } from "@/lib/i18n/types";
import type { Project } from "@/lib/content/projects/types";

function formatDate(iso: string, locale: Locale) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;

  return new Intl.DateTimeFormat(locale === "id" ? "id-ID" : "en-US", {
    year: "numeric",
    month: "short",
  }).format(date);
}

export function ProjectCard({
  project,
  locale,
  dict,
  index = 0,
}: {
  project: Project;
  locale: Locale;
  dict: Dictionary;
  index?: number;
}) {
  const title = project.title[locale];
  const description = project.description[locale];
  const highlights = project.highlights[locale];

  return (
    <article className="group relative rounded-xl border border-border bg-transparent transition hover:border-accent/60 hover:bg-panel/40">
      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="font-mono text-xs text-accent">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground">
              {title}
            </h3>
            <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted">
              {project.role}
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            {project.featured ? (
              <span className="rounded-full border border-accent/50 px-2 py-1 text-xs text-accent">
                {dict.projects.featuredBadge}
              </span>
            ) : null}
          </div>
        </div>

        <p className="mt-4 max-w-[--measure] text-sm leading-6 text-muted">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border bg-transparent px-2 py-1 font-mono text-xs text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        {highlights.length > 0 ? (
          <ul className="mt-5 space-y-2 text-sm text-muted">
            {highlights.map((h) => (
              <li key={h} className="flex gap-3">
                <span
                  aria-hidden
                  className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                />
                <span className="leading-6">{h}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {project.impact ? (
          <p className="mt-5 text-sm text-foreground">
            <span className="font-medium text-muted">
              {dict.common.impact}:
            </span>{" "}
            <span className="text-muted">{project.impact}</span>
          </p>
        ) : null}

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-4 text-sm">
          {project.links?.website ? (
            <a
              href={project.links.website}
              target="_blank"
              rel="noreferrer"
              className="link-editorial font-medium"
            >
              {dict.common.website}
            </a>
          ) : null}
          {project.links?.repo ? (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noreferrer"
              className="link-editorial font-medium"
            >
              {dict.common.repo}
            </a>
          ) : null}
          <span className="ml-auto text-xs text-muted">
            {dict.common.updated}: {formatDate(project.updatedAt, locale)}
          </span>
        </div>
      </div>
    </article>
  );
}
