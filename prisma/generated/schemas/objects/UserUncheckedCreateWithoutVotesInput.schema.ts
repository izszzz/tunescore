import { z } from 'zod';
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema';
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema';
import { MusicUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './MusicUncheckedCreateNestedManyWithoutUserInput.schema';
import { IssueUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './IssueUncheckedCreateNestedManyWithoutUserInput.schema';
import { PullUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './PullUncheckedCreateNestedManyWithoutUserInput.schema';
import { CommentUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './CommentUncheckedCreateNestedManyWithoutUserInput.schema';
import { BookmarkUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './BookmarkUncheckedCreateNestedManyWithoutUserInput.schema';
import { NotificationUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './NotificationUncheckedCreateNestedManyWithoutUserInput.schema';
import { CartUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './CartUncheckedCreateNestedManyWithoutUserInput.schema';
import { PurchaseUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './PurchaseUncheckedCreateNestedManyWithoutUserInput.schema';
import { PointUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './PointUncheckedCreateNestedManyWithoutUserInput.schema';
import { UserCreatevoteIDsInputObjectSchema } from './UserCreatevoteIDsInput.schema';
import { FollowUncheckedCreateNestedManyWithoutFollowerInputObjectSchema } from './FollowUncheckedCreateNestedManyWithoutFollowerInput.schema';
import { FollowUncheckedCreateNestedManyWithoutFollowingInputObjectSchema } from './FollowUncheckedCreateNestedManyWithoutFollowingInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutVotesInput> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    emailVerified: z.date().optional().nullable(),
    image: z.string().optional().nullable(),
    stripeCustomerId: z.string().optional().nullable(),
    accounts: z
      .lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    sessions: z
      .lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    musics: z
      .lazy(() => MusicUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    issues: z
      .lazy(() => IssueUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    pulls: z
      .lazy(() => PullUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    comments: z
      .lazy(() => CommentUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    bookmarks: z
      .lazy(() => BookmarkUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    notifications: z
      .lazy(
        () => NotificationUncheckedCreateNestedManyWithoutUserInputObjectSchema,
      )
      .optional(),
    carts: z
      .lazy(() => CartUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    purchases: z
      .lazy(() => PurchaseUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    points: z
      .lazy(() => PointUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    voteIDs: z
      .union([
        z.lazy(() => UserCreatevoteIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    followers: z
      .lazy(
        () => FollowUncheckedCreateNestedManyWithoutFollowerInputObjectSchema,
      )
      .optional(),
    following: z
      .lazy(
        () => FollowUncheckedCreateNestedManyWithoutFollowingInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const UserUncheckedCreateWithoutVotesInputObjectSchema = Schema;
