import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutPurchasesNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutPurchasesNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseUpdateWithoutMusicInput> = z
  .object({
    stripePaymentIntentId: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutPurchasesNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const PurchaseUpdateWithoutMusicInputObjectSchema = Schema;
