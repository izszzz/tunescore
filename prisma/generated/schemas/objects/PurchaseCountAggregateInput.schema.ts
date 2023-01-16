import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    musicId: z.literal(true).optional(),
    stripePaymentIntentId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const PurchaseCountAggregateInputObjectSchema = Schema;
