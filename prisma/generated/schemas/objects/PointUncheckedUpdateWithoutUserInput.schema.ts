import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { PointActionTypeSchema } from '../enums/PointActionType.schema';
import { EnumPointActionTypeFieldUpdateOperationsInputObjectSchema } from './EnumPointActionTypeFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { PointTypeSchema } from '../enums/PointType.schema';
import { EnumPointTypeFieldUpdateOperationsInputObjectSchema } from './EnumPointTypeFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointUncheckedUpdateWithoutUserInput> = z
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
    resourceId: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    resourceType: z
      .union([
        z.lazy(() => PointTypeSchema),
        z.lazy(() => EnumPointTypeFieldUpdateOperationsInputObjectSchema),
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

export const PointUncheckedUpdateWithoutUserInputObjectSchema = Schema;
