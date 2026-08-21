import { ENV } from "@/lib/constants/env";
import { ProjectsPayloadSchema } from "./schema";
import type { Project } from "./types";

export type ProjectsFetchResult =
  | { ok: true; projects: Project[]; sourceUrl: string }
  | { ok: false; projects: []; error: string; sourceUrl?: string };

export async function fetchProjects(): Promise<ProjectsFetchResult> {
  const sourceUrl = process.env[ENV.projectsJsonUrl];

  if (!sourceUrl) {
    return {
      ok: false,
      projects: [],
      error: `${ENV.projectsJsonUrl} is not set`,
    };
  }

  const response = await fetch(sourceUrl, {
    // Near real-time updates without redeploy; tune as needed.
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    return {
      ok: false,
      projects: [],
      sourceUrl,
      error: `Failed to fetch projects: ${response.status} ${response.statusText}`,
    };
  }

  const json = (await response.json()) as unknown;
  const parsed = ProjectsPayloadSchema.safeParse(json);

  if (!parsed.success) {
    return {
      ok: false,
      projects: [],
      sourceUrl,
      error: `Invalid projects payload: ${parsed.error.message}`,
    };
  }

  return {
    ok: true,
    projects: parsed.data.projects,
    sourceUrl,
  };
}
