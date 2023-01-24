import { z } from 'zod';
import { UserCreateNestedOneWithoutPurchasesInputObjectSchema } from './UserCreateNestedOneWithoutPurchasesInput.schema';
import { MusicCreateNestedOneWithoutPurchasesInputObjectSchema } from './MusicCreateNestedOneWithoutPurchasesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseCreateInput> = z
  .object({
    id: z.string().optional(),
    stripePaymentIntentId: z.string(),
    user: z.lazy(() => UserCreateNestedOneWithoutPurchasesInputObjectSchema),
    music: z.lazy(() => MusicCreateNestedOneWithoutPurchasesInputObjectSchema),
  })
  .strict();

export const PurchaseCreateInputObjectSchema = Schema;
