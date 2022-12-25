import { z } from 'zod';
import { PullArgsObjectSchema } from './PullArgs.schema';
import { IssueArgsObjectSchema } from './IssueArgs.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { NotificationFindManySchema } from '../findManyNotification.schema';
import { CommentCountOutputTypeArgsObjectSchema } from './CommentCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentInclude> = z
  .object({
    pull: z.union([z.boolean(), z.lazy(() => PullArgsObjectSchema)]).optional(),
    issue: z
      .union([z.boolean(), z.lazy(() => IssueArgsObjectSchema)])
      .optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    notifications: z
      .union([z.boolean(), z.lazy(() => NotificationFindManySchema)])
      .optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => CommentCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const CommentIncludeObjectSchema = Schema;
