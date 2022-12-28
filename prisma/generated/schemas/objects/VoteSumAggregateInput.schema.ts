import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoteSumAggregateInputType> = z
  .object({
    good: z.literal(true).optional(),
    bad: z.literal(true).optional(),
  })
  .strict();

export const VoteSumAggregateInputObjectSchema = Schema;