import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    writtenMusicsIDs: z.literal(true).optional(),
    composedMusicsIDs: z.literal(true).optional(),
    musicIDs: z.literal(true).optional(),
    bandIDs: z.literal(true).optional(),
    albumIDs: z.literal(true).optional(),
    userIDs: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const ArtistCountAggregateInputObjectSchema = Schema;
