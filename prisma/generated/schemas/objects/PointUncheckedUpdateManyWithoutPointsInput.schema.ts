import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { PointActionTypeSchema } from '../enums/PointActionType.schema';
import { EnumPointActionTypeFieldUpdateOperationsInputObjectSchema } from './EnumPointActionTypeFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointUncheckedUpdateManyWithoutPointsInput> = z
  .object({
    amount: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    actionType: z
      .union([
        z.lazy(() => PointActionTypeSchema),
        z.lazy(() => EnumPointActionTypeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    createdAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const PointUncheckedUpdateManyWithoutPointsInputObjectSchema = Schema;
