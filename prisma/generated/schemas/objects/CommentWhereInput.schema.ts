import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { PullRelationFilterObjectSchema } from './PullRelationFilter.schema';
import { PullWhereInputObjectSchema } from './PullWhereInput.schema';
import { IssueRelationFilterObjectSchema } from './IssueRelationFilter.schema';
import { IssueWhereInputObjectSchema } from './IssueWhereInput.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { NotificationListRelationFilterObjectSchema } from './NotificationListRelationFilter.schema';
import { EnumCommentTypeFilterObjectSchema } from './EnumCommentTypeFilter.schema';
import { CommentTypeSchema } from '../enums/CommentType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => CommentWhereInputObjectSchema),
        z.lazy(() => CommentWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => CommentWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => CommentWhereInputObjectSchema),
        z.lazy(() => CommentWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    body: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    pull: z
      .union([
        z.lazy(() => PullRelationFilterObjectSchema),
        z.lazy(() => PullWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    issue: z
      .union([
        z.lazy(() => IssueRelationFilterObjectSchema),
        z.lazy(() => IssueWhereInputObjectSchema),
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
    notifications: z
      .lazy(() => NotificationListRelationFilterObjectSchema)
      .optional(),
    resourceId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    resourceType: z
      .union([
        z.lazy(() => EnumCommentTypeFilterObjectSchema),
        z.lazy(() => CommentTypeSchema),
      ])
      .optional(),
  })
  .strict();

export const CommentWhereInputObjectSchema = Schema;
