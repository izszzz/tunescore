import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    type: z.literal(true).optional(),
    resourceId: z.literal(true).optional(),
    resurceType: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    readAt: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const NotificationCountAggregateInputObjectSchema = Schema;
