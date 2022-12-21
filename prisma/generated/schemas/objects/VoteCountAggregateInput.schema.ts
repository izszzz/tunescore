import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoteCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    start: z.literal(true).optional(),
    end: z.literal(true).optional(),
    good: z.literal(true).optional(),
    bad: z.literal(true).optional(),
    pullId: z.literal(true).optional(),
    userIDs: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const VoteCountAggregateInputObjectSchema = Schema;
