import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    type: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    readAt: z.literal(true).optional(),
    userId: z.literal(true).optional(),
  })
  .strict();

export const NotificationMaxAggregateInputObjectSchema = Schema;
