import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    layout: z.string().default('../../../layouts/PostLayout.astro'),
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    lang: z.string().default('ru'),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    alt: z.string().optional(),
  }),
});

export const collections = {
  'posts': blogCollection,
};