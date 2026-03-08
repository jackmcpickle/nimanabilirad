import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const films = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/films' }),
  schema: z.object({
    title: z.string(),
    vimeoId: z.string().nullable(),
    youtubeId: z.string().optional(),
    vimeoId2: z.string().optional(),
    description: z.string(),
    imageCount: z.number(),
    imagePath: z.string().nullable(),
    imageExtension: z.string().optional(),
  }),
});

export const collections = { films };
