import { z } from 'zod';
import { ArtistWhereInputObjectSchema } from './ArtistWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistRelationFilter> = z
  .object({
    is: z.lazy(() => ArtistWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => ArtistWhereInputObjectSchema).optional(),
  })
  .strict();

export const ArtistRelationFilterObjectSchema = Schema;
