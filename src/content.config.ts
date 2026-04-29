import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

export const collections = {
  // work: defineCollection({
  //   loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/work" }),
  //   schema: z.object({
  //     company: z.string(),
  //     description: z.string(),
  //     date: z.string(),
  //   }),
  // }),
  stack: defineCollection({
    loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/stack" }),
    schema: z.object({
      title: z.string(),
      img: z.string(),
      category: z.enum(["languages", "frontend", "backend", "cloud"]),
      order: z.number(),
      featured: z.boolean().optional().default(false),
    }),
  }),
  projects: defineCollection({
    loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/projects" }),
    schema: z.object({
      title: z.string(),
      img: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      padding: z.boolean().optional(),
    }),
  }),
};
