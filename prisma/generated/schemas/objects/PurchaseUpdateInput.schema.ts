import { z } from 'zod';
import { UserUpdateOneRequiredWithoutPurchasesNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutPurchasesNestedInput.schema';
import { MusicUpdateOneRequiredWithoutPurchasesNestedInputObjectSchema } from './MusicUpdateOneRequiredWithoutPurchasesNestedInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseUpdateInput> = z
  .object({
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutPurchasesNestedInputObjectSchema)
      .optional(),
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

export const PurchaseUpdateInputObjectSchema = Schema;
