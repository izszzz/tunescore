import { z } from 'zod';
import { BookmarkCreateNestedOneWithoutNotificationsInputObjectSchema } from './BookmarkCreateNestedOneWithoutNotificationsInput.schema';
import { FollowCreateNestedOneWithoutNotificationsInputObjectSchema } from './FollowCreateNestedOneWithoutNotificationsInput.schema';
import { CommentCreateNestedOneWithoutNotificationsInputObjectSchema } from './CommentCreateNestedOneWithoutNotificationsInput.schema';
import { NotificationTypeSchema } from '../enums/NotificationType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    bookmarked: z
      .lazy(() => BookmarkCreateNestedOneWithoutNotificationsInputObjectSchema)
      .optional(),
    followed: z
      .lazy(() => FollowCreateNestedOneWithoutNotificationsInputObjectSchema)
      .optional(),
    commented: z
      .lazy(() => CommentCreateNestedOneWithoutNotificationsInputObjectSchema)
      .optional(),
    resourceType: z.lazy(() => NotificationTypeSchema),
    createdAt: z.date().optional(),
    readAt: z.date().optional(),
  })
  .strict();

export const NotificationCreateWithoutUserInputObjectSchema = Schema;
