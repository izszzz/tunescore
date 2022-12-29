import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AccountOrderByRelationAggregateInputObjectSchema } from './AccountOrderByRelationAggregateInput.schema';
import { SessionOrderByRelationAggregateInputObjectSchema } from './SessionOrderByRelationAggregateInput.schema';
import { MusicOrderByRelationAggregateInputObjectSchema } from './MusicOrderByRelationAggregateInput.schema';
import { IssueOrderByRelationAggregateInputObjectSchema } from './IssueOrderByRelationAggregateInput.schema';
import { PullOrderByRelationAggregateInputObjectSchema } from './PullOrderByRelationAggregateInput.schema';
import { CommentOrderByRelationAggregateInputObjectSchema } from './CommentOrderByRelationAggregateInput.schema';
import { BookmarkOrderByRelationAggregateInputObjectSchema } from './BookmarkOrderByRelationAggregateInput.schema';
import { NotificationOrderByRelationAggregateInputObjectSchema } from './NotificationOrderByRelationAggregateInput.schema';
import { VoteOrderByRelationAggregateInputObjectSchema } from './VoteOrderByRelationAggregateInput.schema';
import { FollowOrderByRelationAggregateInputObjectSchema } from './FollowOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    emailVerified: z.lazy(() => SortOrderSchema).optional(),
    image: z.lazy(() => SortOrderSchema).optional(),
    theme: z.lazy(() => SortOrderSchema).optional(),
    accounts: z
      .lazy(() => AccountOrderByRelationAggregateInputObjectSchema)
      .optional(),
    sessions: z
      .lazy(() => SessionOrderByRelationAggregateInputObjectSchema)
      .optional(),
    musics: z
      .lazy(() => MusicOrderByRelationAggregateInputObjectSchema)
      .optional(),
    issues: z
      .lazy(() => IssueOrderByRelationAggregateInputObjectSchema)
      .optional(),
    pulls: z
      .lazy(() => PullOrderByRelationAggregateInputObjectSchema)
      .optional(),
    comments: z
      .lazy(() => CommentOrderByRelationAggregateInputObjectSchema)
      .optional(),
    bookmarks: z
      .lazy(() => BookmarkOrderByRelationAggregateInputObjectSchema)
      .optional(),
    notifications: z
      .lazy(() => NotificationOrderByRelationAggregateInputObjectSchema)
      .optional(),
    votes: z
      .lazy(() => VoteOrderByRelationAggregateInputObjectSchema)
      .optional(),
    voteIDs: z.lazy(() => SortOrderSchema).optional(),
    followers: z
      .lazy(() => FollowOrderByRelationAggregateInputObjectSchema)
      .optional(),
    following: z
      .lazy(() => FollowOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserOrderByWithRelationInputObjectSchema = Schema;
