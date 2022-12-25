import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    followerId: z.literal(true).optional(),
    followingId: z.literal(true).optional(),
  })
  .strict();

export const FollowMinAggregateInputObjectSchema = Schema;
