import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumCountOutputTypeSelect> = z
  .object({
    musics: z.boolean().optional(),
    artists: z.boolean().optional(),
    bookmarks: z.boolean().optional(),
  })
  .strict();

export const AlbumCountOutputTypeSelectObjectSchema = Schema;
