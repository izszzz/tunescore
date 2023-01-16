import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseCreateManyMusicInput> = z
  .object({
    id: z.string().optional(),
    stripePaymentIntentId: z.string(),
    userId: z.string(),
  })
  .strict();

export const PurchaseCreateManyMusicInputObjectSchema = Schema;
