import { z } from 'zod';
import { MusicUpdateOneRequiredWithoutPurchasesNestedInputObjectSchema } from './MusicUpdateOneRequiredWithoutPurchasesNestedInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseUpdateWithoutUserInput> = z
  .object({
    music: z
      .lazy(() => MusicUpdateOneRequiredWithoutPurchasesNestedInputObjectSchema)
      .optional(),
    stripePaymentIntentId: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const PurchaseUpdateWithoutUserInputObjectSchema = Schema;
