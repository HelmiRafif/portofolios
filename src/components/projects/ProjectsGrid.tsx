import type { Locale } from "@/lib/i18n/locales";
import type { Dictionary } from "@/lib/i18n/types";
import type { Project } from "@/lib/content/projects/types";
import { ProjectCard } from "./ProjectCard";

export function ProjectsGrid({
  projects,
  locale,
  dict,
}: {
  projects: Project[];
  locale: Locale;
  dict: Dictionary;
}) {
  if (projects.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-border p-8 text-center">
        <p className="text-sm text-muted">{dict.projects.empty}</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          locale={locale}
          dict={dict}
          index={index}
        />
      ))}
    </div>
  );
}
