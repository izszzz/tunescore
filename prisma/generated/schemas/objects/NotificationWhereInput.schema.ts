import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { BookmarkRelationFilterObjectSchema } from './BookmarkRelationFilter.schema';
import { BookmarkWhereInputObjectSchema } from './BookmarkWhereInput.schema';
import { FollowRelationFilterObjectSchema } from './FollowRelationFilter.schema';
import { FollowWhereInputObjectSchema } from './FollowWhereInput.schema';
import { CommentRelationFilterObjectSchema } from './CommentRelationFilter.schema';
import { CommentWhereInputObjectSchema } from './CommentWhereInput.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { EnumNotificationTypeFilterObjectSchema } from './EnumNotificationTypeFilter.schema';
import { NotificationTypeSchema } from '../enums/NotificationType.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => NotificationWhereInputObjectSchema),
        z.lazy(() => NotificationWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => NotificationWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => NotificationWhereInputObjectSchema),
        z.lazy(() => NotificationWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    bookmarked: z
      .union([
        z.lazy(() => BookmarkRelationFilterObjectSchema),
        z.lazy(() => BookmarkWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    followed: z
      .union([
        z.lazy(() => FollowRelationFilterObjectSchema),
        z.lazy(() => FollowWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    commented: z
      .union([
        z.lazy(() => CommentRelationFilterObjectSchema),
        z.lazy(() => CommentWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    userId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    resourceId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
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
  })
  .strict();

export const NotificationWhereInputObjectSchema = Schema;
