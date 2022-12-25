import { z } from 'zod';
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema';
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema';
import { MusicUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './MusicUncheckedCreateNestedManyWithoutUserInput.schema';
import { PullUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './PullUncheckedCreateNestedManyWithoutUserInput.schema';
import { CommentUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './CommentUncheckedCreateNestedManyWithoutUserInput.schema';
import { BookmarkUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './BookmarkUncheckedCreateNestedManyWithoutUserInput.schema';
import { NotificationUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './NotificationUncheckedCreateNestedManyWithoutUserInput.schema';
import { VoteUncheckedCreateNestedManyWithoutUsersInputObjectSchema } from './VoteUncheckedCreateNestedManyWithoutUsersInput.schema';
import { UserCreatevoteIDsInputObjectSchema } from './UserCreatevoteIDsInput.schema';
import { FollowUncheckedCreateNestedManyWithoutFollowerInputObjectSchema } from './FollowUncheckedCreateNestedManyWithoutFollowerInput.schema';
import { FollowUncheckedCreateNestedManyWithoutFollowingInputObjectSchema } from './FollowUncheckedCreateNestedManyWithoutFollowingInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutIssuesInput> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    emailVerified: z.date().optional().nullable(),
    image: z.string().optional().nullable(),
    accounts: z
      .lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    sessions: z
      .lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    musics: z
      .lazy(() => MusicUncheckedCreateNestedManyWithoutUserInputObjectSchema)
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
    vote: z
      .lazy(() => VoteUncheckedCreateNestedManyWithoutUsersInputObjectSchema)
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

export const UserUncheckedCreateWithoutIssuesInputObjectSchema = Schema;
