import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    type: z.literal(true).optional(),
    score: z.literal(true).optional(),
    visibility: z.literal(true).optional(),
    image: z.literal(true).optional(),
    price: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    bandId: z.literal(true).optional(),
    albumIDs: z.literal(true).optional(),
    composerIDs: z.literal(true).optional(),
    lyristIDs: z.literal(true).optional(),
    artistIDs: z.literal(true).optional(),
    userIDs: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const MusicCountAggregateInputObjectSchema = Schema;
