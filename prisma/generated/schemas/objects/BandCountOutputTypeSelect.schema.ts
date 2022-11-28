import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandCountOutputTypeSelect> = z
  .object({
    musics: z.boolean().optional(),
    artists: z.boolean().optional(),
    albums: z.boolean().optional(),
    bookmarks: z.boolean().optional(),
  })
  .strict();

export const BandCountOutputTypeSelectObjectSchema = Schema;
