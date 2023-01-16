import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    stripePaymentIntentId: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    musicId: z.literal(true).optional(),
  })
  .strict();

export const PurchaseMinAggregateInputObjectSchema = Schema;
