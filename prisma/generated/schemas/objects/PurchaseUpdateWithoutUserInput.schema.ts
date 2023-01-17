import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { MusicUpdateOneRequiredWithoutPurchasesNestedInputObjectSchema } from './MusicUpdateOneRequiredWithoutPurchasesNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseUpdateWithoutUserInput> = z
  .object({
    stripePaymentIntentId: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    music: z
      .lazy(() => MusicUpdateOneRequiredWithoutPurchasesNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const PurchaseUpdateWithoutUserInputObjectSchema = Schema;
