import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseCreateManyInput> = z
  .object({
    id: z.string().optional(),
    userId: z.string(),
    musicId: z.string(),
    stripePaymentIntentId: z.string(),
  })
  .strict();

export const PurchaseCreateManyInputObjectSchema = Schema;
