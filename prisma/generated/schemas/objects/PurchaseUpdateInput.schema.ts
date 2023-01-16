import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutPurchasesNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutPurchasesNestedInput.schema';
import { MusicUpdateOneRequiredWithoutPurchasesNestedInputObjectSchema } from './MusicUpdateOneRequiredWithoutPurchasesNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseUpdateInput> = z
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
    music: z
      .lazy(() => MusicUpdateOneRequiredWithoutPurchasesNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const PurchaseUpdateInputObjectSchema = Schema;
