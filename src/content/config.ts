import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    layout: z.string().default('../../../layouts/PostLayout.astro'),
    title: z.string(),
    date: z.coerce.date(), // Validates that 'date' is in a date format
    description: z.string(),
    lang: z.string().default('ru'), // Defaults to 'en' if not provided
    tags: z.array(z.string()).default([]), // Defaults to an empty array if not provided
    image: z.string().optional(),
    alt: z.string().optional(),
  }),
});

export const collections = {
  'posts': blogCollection,
};