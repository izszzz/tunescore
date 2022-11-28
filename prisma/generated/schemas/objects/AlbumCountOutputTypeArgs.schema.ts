import { z } from 'zod';
import { AlbumCountOutputTypeSelectObjectSchema } from './AlbumCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => AlbumCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict();

export const AlbumCountOutputTypeArgsObjectSchema = Schema;
