import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    bandId: z.literal(true).optional(),
    musicIDs: z.literal(true).optional(),
    artistIDs: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const AlbumCountAggregateInputObjectSchema = Schema;
