import { z } from 'zod';
import { UserUpdateOneRequiredWithoutPurchasesNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutPurchasesNestedInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseUpdateWithoutMusicInput> = z
  .object({
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutPurchasesNestedInputObjectSchema)
      .optional(),
    stripePaymentIntentId: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const PurchaseUpdateWithoutMusicInputObjectSchema = Schema;
