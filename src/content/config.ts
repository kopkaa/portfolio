import { defineCollection, z } from 'astro:content';

export const collections = {
	work: defineCollection({
		type: 'content',
		schema: z.object({
			company: z.string(),
			description: z.string(),
			date: z.string(),
		}),
	}),
	stack: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			img: z.string()
		}),
	}),
	projects: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			img: z.string(),
			padding: z.boolean().optional(),
		}),
	}),
};
