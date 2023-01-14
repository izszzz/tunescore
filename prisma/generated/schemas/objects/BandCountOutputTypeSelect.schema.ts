import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandCountOutputTypeSelect> = z
  .object({
    artists: z.boolean().optional(),
    musics: z.boolean().optional(),
    albums: z.boolean().optional(),
    bookmarks: z.boolean().optional(),
    tagMaps: z.boolean().optional(),
    points: z.boolean().optional(),
  })
  .strict();

export const BandCountOutputTypeSelectObjectSchema = Schema;
