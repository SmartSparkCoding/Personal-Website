import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/projects",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    year: z.number(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    status: z.enum(["Active", "Completed", "Archived", "In Development"]),
    featured: z.boolean().default(false),

    category: z.enum([
      "Web",
      "AI",
      "Game",
      "Hardware",
      "Mobile",
      "School",
      "Other",
    ]),

    technologies: z.array(z.string()),

    github: z.string().url().optional(),
    live: z.string().url().optional(),
    otherLink: z.string().url().optional(),

    image: z.string().optional(),
    screenshots: z.array(z.string()).default([]),

    role: z.string().optional(),
    challenges: z.string().optional(),
    learned: z.string().optional(),
  }),
});

export const collections = {
  projects,
};
