import { z } from 'zod';
import { ArtistWhereInputObjectSchema } from './ArtistWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistListRelationFilter> = z
  .object({
    every: z.lazy(() => ArtistWhereInputObjectSchema).optional(),
    some: z.lazy(() => ArtistWhereInputObjectSchema).optional(),
    none: z.lazy(() => ArtistWhereInputObjectSchema).optional(),
  })
  .strict();

export const ArtistListRelationFilterObjectSchema = Schema;
