import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
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

const timeline = defineCollection({
  type: "content",
  schema: z.object({
    date: z.coerce.date(),
    title: z.string(),
    category: z.string(),
    image: z.string().optional(),
    relatedProject: z.string().optional(),
  }),
});

const certificates = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    organisation: z.string(),
    date: z.coerce.date(),
    description: z.string(),

    image: z.string().optional(),
    verificationLink: z.string().url().optional(),
  }),
});

export const collections = {
  projects,
  timeline,
  certificates,
};
