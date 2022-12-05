import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistCountOutputTypeSelect> = z
  .object({
    writtenMusics: z.boolean().optional(),
    composedMusics: z.boolean().optional(),
    musics: z.boolean().optional(),
    bands: z.boolean().optional(),
    albums: z.boolean().optional(),
    bookmarks: z.boolean().optional(),
  })
  .strict();

export const ArtistCountOutputTypeSelectObjectSchema = Schema;
