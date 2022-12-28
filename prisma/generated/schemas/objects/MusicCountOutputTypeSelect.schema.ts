import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicCountOutputTypeSelect> = z
  .object({
    albums: z.boolean().optional(),
    composers: z.boolean().optional(),
    lyrists: z.boolean().optional(),
    artists: z.boolean().optional(),
    issues: z.boolean().optional(),
    pulls: z.boolean().optional(),
    bookmarks: z.boolean().optional(),
    tagMaps: z.boolean().optional(),
  })
  .strict();

export const MusicCountOutputTypeSelectObjectSchema = Schema;
