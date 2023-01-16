import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseCreateManyUserInput> = z
  .object({
    id: z.string().optional(),
    stripePaymentIntentId: z.string(),
    musicId: z.string(),
  })
  .strict();

export const PurchaseCreateManyUserInputObjectSchema = Schema;
