import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
  })
  .strict();

export const BandMinAggregateInputObjectSchema = Schema;
