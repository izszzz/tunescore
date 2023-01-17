import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointSumAggregateInputType> = z
  .object({
    amount: z.literal(true).optional(),
  })
  .strict();

export const PointSumAggregateInputObjectSchema = Schema;
