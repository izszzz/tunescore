import { z } from 'zod';
import { BookmarkArgsObjectSchema } from './BookmarkArgs.schema';
import { FollowArgsObjectSchema } from './FollowArgs.schema';
import { CommentArgsObjectSchema } from './CommentArgs.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationInclude> = z
  .object({
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
  })
  .strict();

export const NotificationIncludeObjectSchema = Schema;
