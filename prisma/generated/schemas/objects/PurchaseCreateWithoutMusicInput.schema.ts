import { z } from 'zod';
import { UserCreateNestedOneWithoutPurchasesInputObjectSchema } from './UserCreateNestedOneWithoutPurchasesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseCreateWithoutMusicInput> = z
  .object({
    id: z.string().optional(),
    stripePaymentIntentId: z.string(),
    user: z.lazy(() => UserCreateNestedOneWithoutPurchasesInputObjectSchema),
  })
  .strict();

export const PurchaseCreateWithoutMusicInputObjectSchema = Schema;
