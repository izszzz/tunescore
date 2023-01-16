import { z } from 'zod';
import { MusicCreateNestedOneWithoutPurchasesInputObjectSchema } from './MusicCreateNestedOneWithoutPurchasesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    stripePaymentIntentId: z.string(),
    music: z.lazy(() => MusicCreateNestedOneWithoutPurchasesInputObjectSchema),
  })
  .strict();

export const PurchaseCreateWithoutUserInputObjectSchema = Schema;
