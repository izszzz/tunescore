import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseUncheckedCreateWithoutMusicInput> = z
  .object({
    id: z.string().optional(),
    userId: z.string(),
    stripePaymentIntentId: z.string(),
  })
  .strict();

export const PurchaseUncheckedCreateWithoutMusicInputObjectSchema = Schema;
