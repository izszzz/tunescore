import { z } from 'zod';
import { AlbumWhereInputObjectSchema } from './AlbumWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumListRelationFilter> = z
  .object({
    every: z.lazy(() => AlbumWhereInputObjectSchema).optional(),
    some: z.lazy(() => AlbumWhereInputObjectSchema).optional(),
    none: z.lazy(() => AlbumWhereInputObjectSchema).optional(),
  })
  .strict();

export const AlbumListRelationFilterObjectSchema = Schema;
