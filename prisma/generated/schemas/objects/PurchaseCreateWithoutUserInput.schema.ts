import { z } from 'zod';
import { MusicCreateNestedOneWithoutPurchasesInputObjectSchema } from './MusicCreateNestedOneWithoutPurchasesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    music: z.lazy(() => MusicCreateNestedOneWithoutPurchasesInputObjectSchema),
    stripePaymentIntentId: z.string(),
  })
  .strict();

export const PurchaseCreateWithoutUserInputObjectSchema = Schema;
