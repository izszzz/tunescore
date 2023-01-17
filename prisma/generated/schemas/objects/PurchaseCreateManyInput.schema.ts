import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseCreateManyInput> = z
  .object({
    id: z.string().optional(),
    stripePaymentIntentId: z.string(),
    userId: z.string(),
    musicId: z.string(),
  })
  .strict();

export const PurchaseCreateManyInputObjectSchema = Schema;
