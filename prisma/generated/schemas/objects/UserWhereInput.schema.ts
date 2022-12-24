import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { AccountListRelationFilterObjectSchema } from './AccountListRelationFilter.schema';
import { SessionListRelationFilterObjectSchema } from './SessionListRelationFilter.schema';
import { MusicListRelationFilterObjectSchema } from './MusicListRelationFilter.schema';
import { IssueListRelationFilterObjectSchema } from './IssueListRelationFilter.schema';
import { PullListRelationFilterObjectSchema } from './PullListRelationFilter.schema';
import { CommentListRelationFilterObjectSchema } from './CommentListRelationFilter.schema';
import { BookmarkListRelationFilterObjectSchema } from './BookmarkListRelationFilter.schema';
import { NotificationListRelationFilterObjectSchema } from './NotificationListRelationFilter.schema';
import { VoteListRelationFilterObjectSchema } from './VoteListRelationFilter.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { UserListRelationFilterObjectSchema } from './UserListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UserWhereInputObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UserWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserWhereInputObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    email: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    emailVerified: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    image: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    accounts: z.lazy(() => AccountListRelationFilterObjectSchema).optional(),
    sessions: z.lazy(() => SessionListRelationFilterObjectSchema).optional(),
    musics: z.lazy(() => MusicListRelationFilterObjectSchema).optional(),
    issues: z.lazy(() => IssueListRelationFilterObjectSchema).optional(),
    pulls: z.lazy(() => PullListRelationFilterObjectSchema).optional(),
    comments: z.lazy(() => CommentListRelationFilterObjectSchema).optional(),
    bookmarks: z.lazy(() => BookmarkListRelationFilterObjectSchema).optional(),
    notifications: z
      .lazy(() => NotificationListRelationFilterObjectSchema)
      .optional(),
    vote: z.lazy(() => VoteListRelationFilterObjectSchema).optional(),
    voteIDs: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    followedBy: z.lazy(() => UserListRelationFilterObjectSchema).optional(),
    followedByIDs: z
      .lazy(() => StringNullableListFilterObjectSchema)
      .optional(),
    following: z.lazy(() => UserListRelationFilterObjectSchema).optional(),
    followingIDs: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  })
  .strict();

export const UserWhereInputObjectSchema = Schema;
