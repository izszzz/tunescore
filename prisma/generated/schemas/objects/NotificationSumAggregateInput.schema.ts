import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationSumAggregateInputType> = z
  .object({
    resourceId: z.literal(true).optional(),
  })
  .strict();

export const NotificationSumAggregateInputObjectSchema = Schema;
