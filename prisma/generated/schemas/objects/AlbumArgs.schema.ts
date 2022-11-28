import { z } from 'zod';
import { AlbumSelectObjectSchema } from './AlbumSelect.schema';
import { AlbumIncludeObjectSchema } from './AlbumInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumArgs> = z
  .object({
    select: z.lazy(() => AlbumSelectObjectSchema).optional(),
    include: z.lazy(() => AlbumIncludeObjectSchema).optional(),
  })
  .strict();

export const AlbumArgsObjectSchema = Schema;
