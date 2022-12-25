import { z } from 'zod';
import { AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema';
import { SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema';
import { MusicCreateNestedManyWithoutUserInputObjectSchema } from './MusicCreateNestedManyWithoutUserInput.schema';
import { IssueCreateNestedManyWithoutUserInputObjectSchema } from './IssueCreateNestedManyWithoutUserInput.schema';
import { PullCreateNestedManyWithoutUserInputObjectSchema } from './PullCreateNestedManyWithoutUserInput.schema';
import { CommentCreateNestedManyWithoutUserInputObjectSchema } from './CommentCreateNestedManyWithoutUserInput.schema';
import { NotificationCreateNestedManyWithoutUserInputObjectSchema } from './NotificationCreateNestedManyWithoutUserInput.schema';
import { VoteCreateNestedManyWithoutUsersInputObjectSchema } from './VoteCreateNestedManyWithoutUsersInput.schema';
import { UserCreatevoteIDsInputObjectSchema } from './UserCreatevoteIDsInput.schema';
import { FollowCreateNestedManyWithoutFollowerInputObjectSchema } from './FollowCreateNestedManyWithoutFollowerInput.schema';
import { FollowCreateNestedManyWithoutFollowingInputObjectSchema } from './FollowCreateNestedManyWithoutFollowingInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateWithoutBookmarksInput> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    emailVerified: z.date().optional().nullable(),
    image: z.string().optional().nullable(),
    accounts: z
      .lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    sessions: z
      .lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    musics: z
      .lazy(() => MusicCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    issues: z
      .lazy(() => IssueCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    pulls: z
      .lazy(() => PullCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    comments: z
      .lazy(() => CommentCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    notifications: z
      .lazy(() => NotificationCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    vote: z
      .lazy(() => VoteCreateNestedManyWithoutUsersInputObjectSchema)
      .optional(),
    voteIDs: z
      .union([
        z.lazy(() => UserCreatevoteIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    followers: z
      .lazy(() => FollowCreateNestedManyWithoutFollowerInputObjectSchema)
      .optional(),
    following: z
      .lazy(() => FollowCreateNestedManyWithoutFollowingInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserCreateWithoutBookmarksInputObjectSchema = Schema;
