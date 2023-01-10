import { z } from 'zod';
import { BookmarkCreateNestedOneWithoutNotificationsInputObjectSchema } from './BookmarkCreateNestedOneWithoutNotificationsInput.schema';
import { CommentCreateNestedOneWithoutNotificationsInputObjectSchema } from './CommentCreateNestedOneWithoutNotificationsInput.schema';
import { UserCreateNestedOneWithoutNotificationsInputObjectSchema } from './UserCreateNestedOneWithoutNotificationsInput.schema';
import { NotificationTypeSchema } from '../enums/NotificationType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationCreateWithoutFollowedInput> = z
  .object({
    id: z.string().optional(),
    bookmarked: z
      .lazy(() => BookmarkCreateNestedOneWithoutNotificationsInputObjectSchema)
      .optional(),
    commented: z
      .lazy(() => CommentCreateNestedOneWithoutNotificationsInputObjectSchema)
      .optional(),
    user: z.lazy(
      () => UserCreateNestedOneWithoutNotificationsInputObjectSchema,
    ),
    resourceType: z.lazy(() => NotificationTypeSchema),
    createdAt: z.date().optional(),
    readAt: z.date().optional(),
  })
  .strict();

export const NotificationCreateWithoutFollowedInputObjectSchema = Schema;
