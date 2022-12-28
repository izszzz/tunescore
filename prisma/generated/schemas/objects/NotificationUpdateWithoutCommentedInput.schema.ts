import { z } from 'zod';
import { BookmarkUpdateOneWithoutNotificationsNestedInputObjectSchema } from './BookmarkUpdateOneWithoutNotificationsNestedInput.schema';
import { FollowUpdateOneWithoutNotificationsNestedInputObjectSchema } from './FollowUpdateOneWithoutNotificationsNestedInput.schema';
import { UserUpdateOneRequiredWithoutNotificationsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutNotificationsNestedInput.schema';
import { NotificationTypeSchema } from '../enums/NotificationType.schema';
import { EnumNotificationTypeFieldUpdateOperationsInputObjectSchema } from './EnumNotificationTypeFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationUpdateWithoutCommentedInput> = z
  .object({
    bookmarked: z
      .lazy(() => BookmarkUpdateOneWithoutNotificationsNestedInputObjectSchema)
      .optional(),
    followed: z
      .lazy(() => FollowUpdateOneWithoutNotificationsNestedInputObjectSchema)
      .optional(),
    user: z
      .lazy(
        () => UserUpdateOneRequiredWithoutNotificationsNestedInputObjectSchema,
      )
      .optional(),
    resurceType: z
      .union([
        z.lazy(() => NotificationTypeSchema),
        z.lazy(
          () => EnumNotificationTypeFieldUpdateOperationsInputObjectSchema,
        ),
      ])
      .optional(),
    createdAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    readAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const NotificationUpdateWithoutCommentedInputObjectSchema = Schema;