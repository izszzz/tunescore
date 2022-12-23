import { z } from 'zod';
import { NotificationTypeSchema } from '../enums/NotificationType.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumNotificationTypeFilterObjectSchema } from './NestedEnumNotificationTypeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumNotificationTypeWithAggregatesFilter> =
  z
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
          z.lazy(
            () => NestedEnumNotificationTypeWithAggregatesFilterObjectSchema,
          ),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
      _min: z
        .lazy(() => NestedEnumNotificationTypeFilterObjectSchema)
        .optional(),
      _max: z
        .lazy(() => NestedEnumNotificationTypeFilterObjectSchema)
        .optional(),
    })
    .strict();

export const NestedEnumNotificationTypeWithAggregatesFilterObjectSchema =
  Schema;
