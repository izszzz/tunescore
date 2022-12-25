import { z } from 'zod';
import { BookmarkArgsObjectSchema } from './BookmarkArgs.schema';
import { FollowArgsObjectSchema } from './FollowArgs.schema';
import { CommentArgsObjectSchema } from './CommentArgs.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationSelect> = z
  .object({
    id: z.boolean().optional(),
    bookmarked: z
      .union([z.boolean(), z.lazy(() => BookmarkArgsObjectSchema)])
      .optional(),
    followed: z
      .union([z.boolean(), z.lazy(() => FollowArgsObjectSchema)])
      .optional(),
    commented: z
      .union([z.boolean(), z.lazy(() => CommentArgsObjectSchema)])
      .optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    userId: z.boolean().optional(),
    resourceId: z.boolean().optional(),
    resurceType: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    readAt: z.boolean().optional(),
  })
  .strict();

export const NotificationSelectObjectSchema = Schema;
