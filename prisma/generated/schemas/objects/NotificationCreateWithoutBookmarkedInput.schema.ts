import { z } from 'zod';
import { FollowCreateNestedOneWithoutNotificationsInputObjectSchema } from './FollowCreateNestedOneWithoutNotificationsInput.schema';
import { CommentCreateNestedOneWithoutNotificationsInputObjectSchema } from './CommentCreateNestedOneWithoutNotificationsInput.schema';
import { UserCreateNestedOneWithoutNotificationsInputObjectSchema } from './UserCreateNestedOneWithoutNotificationsInput.schema';
import { NotificationTypeSchema } from '../enums/NotificationType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationCreateWithoutBookmarkedInput> = z
  .object({
    id: z.string().optional(),
    followed: z
      .lazy(() => FollowCreateNestedOneWithoutNotificationsInputObjectSchema)
      .optional(),
    commented: z
      .lazy(() => CommentCreateNestedOneWithoutNotificationsInputObjectSchema)
      .optional(),
    user: z.lazy(
      () => UserCreateNestedOneWithoutNotificationsInputObjectSchema,
    ),
    resurceType: z.lazy(() => NotificationTypeSchema),
    createdAt: z.date().optional(),
    readAt: z.date().optional(),
  })
  .strict();

export const NotificationCreateWithoutBookmarkedInputObjectSchema = Schema;
