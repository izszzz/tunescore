import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointAvgAggregateInputType> = z
  .object({
    amount: z.literal(true).optional(),
  })
  .strict();

export const PointAvgAggregateInputObjectSchema = Schema;
