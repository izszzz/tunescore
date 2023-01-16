import { z } from 'zod';
import { AccountFindManySchema } from '../findManyAccount.schema';
import { SessionFindManySchema } from '../findManySession.schema';
import { MusicFindManySchema } from '../findManyMusic.schema';
import { IssueFindManySchema } from '../findManyIssue.schema';
import { PullFindManySchema } from '../findManyPull.schema';
import { CommentFindManySchema } from '../findManyComment.schema';
import { BookmarkFindManySchema } from '../findManyBookmark.schema';
import { NotificationFindManySchema } from '../findManyNotification.schema';
import { CartFindManySchema } from '../findManyCart.schema';
import { PurchaseFindManySchema } from '../findManyPurchase.schema';
import { PointFindManySchema } from '../findManyPoint.schema';
import { VoteFindManySchema } from '../findManyVote.schema';
import { FollowFindManySchema } from '../findManyFollow.schema';
import { UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserInclude> = z
  .object({
    accounts: z
      .union([z.boolean(), z.lazy(() => AccountFindManySchema)])
      .optional(),
    sessions: z
      .union([z.boolean(), z.lazy(() => SessionFindManySchema)])
      .optional(),
    musics: z
      .union([z.boolean(), z.lazy(() => MusicFindManySchema)])
      .optional(),
    issues: z
      .union([z.boolean(), z.lazy(() => IssueFindManySchema)])
      .optional(),
    pulls: z.union([z.boolean(), z.lazy(() => PullFindManySchema)]).optional(),
    comments: z
      .union([z.boolean(), z.lazy(() => CommentFindManySchema)])
      .optional(),
    bookmarks: z
      .union([z.boolean(), z.lazy(() => BookmarkFindManySchema)])
      .optional(),
    notifications: z
      .union([z.boolean(), z.lazy(() => NotificationFindManySchema)])
      .optional(),
    carts: z.union([z.boolean(), z.lazy(() => CartFindManySchema)]).optional(),
    purchases: z
      .union([z.boolean(), z.lazy(() => PurchaseFindManySchema)])
      .optional(),
    points: z
      .union([z.boolean(), z.lazy(() => PointFindManySchema)])
      .optional(),
    votes: z.union([z.boolean(), z.lazy(() => VoteFindManySchema)]).optional(),
    followers: z
      .union([z.boolean(), z.lazy(() => FollowFindManySchema)])
      .optional(),
    following: z
      .union([z.boolean(), z.lazy(() => FollowFindManySchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const UserIncludeObjectSchema = Schema;
