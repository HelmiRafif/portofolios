import { z } from "zod";

export const ProjectSchema = z.object({
  id: z.string().min(1),
  title: z.object({
    en: z.string().min(1),
    id: z.string().min(1),
  }),
  description: z.object({
    en: z.string().min(1),
    id: z.string().min(1),
  }),
  role: z.string().min(1),
  techStack: z.array(z.string().min(1)).default([]),
  highlights: z.object({
    en: z.array(z.string().min(1)).default([]),
    id: z.array(z.string().min(1)).default([]),
  }),
  impact: z.string().optional(),
  links: z
    .object({
      website: z.string().url().optional(),
      repo: z.string().url().optional(),
    })
    .optional(),
  featured: z.boolean(),
  updatedAt: z.string().min(1),
});

export const ProjectsPayloadSchema = z.object({
  projects: z.array(ProjectSchema),
});

export type ProjectsPayload = z.infer<typeof ProjectsPayloadSchema>;
