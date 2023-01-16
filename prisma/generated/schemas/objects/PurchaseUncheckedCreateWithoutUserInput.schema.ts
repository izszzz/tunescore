import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseUncheckedCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    musicId: z.string(),
    stripePaymentIntentId: z.string(),
  })
  .strict();

export const PurchaseUncheckedCreateWithoutUserInputObjectSchema = Schema;
