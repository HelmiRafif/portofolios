import type { Project } from "./types";

export function sortByUpdatedAtDesc(projects: Project[]) {
  return [...projects].sort((a, b) =>
    String(b.updatedAt).localeCompare(String(a.updatedAt)),
  );
}

export function featuredOnly(projects: Project[]) {
  return projects.filter((p) => p.featured);
}
