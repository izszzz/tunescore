import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationAvgAggregateInputType> = z
  .object({
    resourceId: z.literal(true).optional(),
  })
  .strict();

export const NotificationAvgAggregateInputObjectSchema = Schema;
