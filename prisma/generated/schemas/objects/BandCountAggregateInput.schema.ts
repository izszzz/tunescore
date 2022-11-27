import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    artistIDs: z.literal(true).optional(),
    userIDs: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const BandCountAggregateInputObjectSchema = Schema;
