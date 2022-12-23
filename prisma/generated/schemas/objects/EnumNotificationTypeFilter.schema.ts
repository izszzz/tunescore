import { z } from 'zod';
import { NotificationTypeSchema } from '../enums/NotificationType.schema';
import { NestedEnumNotificationTypeFilterObjectSchema } from './NestedEnumNotificationTypeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumNotificationTypeFilter> = z
  .object({
    equals: z.lazy(() => NotificationTypeSchema).optional(),
    in: z
      .lazy(() => NotificationTypeSchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => NotificationTypeSchema)
      .array()
      .optional(),
    not: z
      .union([
        z.lazy(() => NotificationTypeSchema),
        z.lazy(() => NestedEnumNotificationTypeFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const EnumNotificationTypeFilterObjectSchema = Schema;
