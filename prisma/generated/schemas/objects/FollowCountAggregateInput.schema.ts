import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    followerId: z.literal(true).optional(),
    followingId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const FollowCountAggregateInputObjectSchema = Schema;
