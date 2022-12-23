import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { EnumNotificationTypeFilterObjectSchema } from './EnumNotificationTypeFilter.schema';
import { NotificationTypeSchema } from '../enums/NotificationType.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => NotificationScalarWhereInputObjectSchema),
        z.lazy(() => NotificationScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => NotificationScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => NotificationScalarWhereInputObjectSchema),
        z.lazy(() => NotificationScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    type: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    resourceId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    resurceType: z
      .union([
        z.lazy(() => EnumNotificationTypeFilterObjectSchema),
        z.lazy(() => NotificationTypeSchema),
      ])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    readAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    userId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const NotificationScalarWhereInputObjectSchema = Schema;
