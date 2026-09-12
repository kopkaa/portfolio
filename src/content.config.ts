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
      // `img` is the client logo used as the grid thumbnail, not a social
      // card: the logos are the wrong aspect ratio and some fall under the
      // 300x157 minimum X enforces for summary_large_image. Set `ogImage`
      // only for a purpose-built 1200x630 card; otherwise the page uses the
      // site-wide one.
      ogImage: z.string().optional(),
      description: z.string(),
      tags: z.array(z.string()),
      padding: z.boolean().optional(),
    }),
  }),
};
