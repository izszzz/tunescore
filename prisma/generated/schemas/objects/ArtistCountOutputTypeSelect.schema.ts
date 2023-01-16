import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistCountOutputTypeSelect> = z
  .object({
    bands: z.boolean().optional(),
    albums: z.boolean().optional(),
    participations: z.boolean().optional(),
    bookmarks: z.boolean().optional(),
    tagMaps: z.boolean().optional(),
  })
  .strict();

export const ArtistCountOutputTypeSelectObjectSchema = Schema;
