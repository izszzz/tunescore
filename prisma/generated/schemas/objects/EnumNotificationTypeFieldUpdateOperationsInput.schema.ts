import { z } from 'zod';
import { NotificationTypeSchema } from '../enums/NotificationType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumNotificationTypeFieldUpdateOperationsInput> =
  z
    .object({
      set: z.lazy(() => NotificationTypeSchema).optional(),
    })
    .strict();

export const EnumNotificationTypeFieldUpdateOperationsInputObjectSchema =
  Schema;
