import { z } from 'zod';
import { UserCreateNestedOneWithoutPurchasesInputObjectSchema } from './UserCreateNestedOneWithoutPurchasesInput.schema';
import { MusicCreateNestedOneWithoutPurchasesInputObjectSchema } from './MusicCreateNestedOneWithoutPurchasesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseCreateInput> = z
  .object({
    id: z.string().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutPurchasesInputObjectSchema),
    music: z.lazy(() => MusicCreateNestedOneWithoutPurchasesInputObjectSchema),
    stripePaymentIntentId: z.string(),
  })
  .strict();

export const PurchaseCreateInputObjectSchema = Schema;
