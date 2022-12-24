import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { AccountUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './AccountUncheckedUpdateManyWithoutUserNestedInput.schema';
import { SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './SessionUncheckedUpdateManyWithoutUserNestedInput.schema';
import { MusicUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './MusicUncheckedUpdateManyWithoutUserNestedInput.schema';
import { IssueUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './IssueUncheckedUpdateManyWithoutUserNestedInput.schema';
import { PullUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './PullUncheckedUpdateManyWithoutUserNestedInput.schema';
import { CommentUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './CommentUncheckedUpdateManyWithoutUserNestedInput.schema';
import { VoteUncheckedUpdateManyWithoutUsersNestedInputObjectSchema } from './VoteUncheckedUpdateManyWithoutUsersNestedInput.schema';
import { UserUpdatevoteIDsInputObjectSchema } from './UserUpdatevoteIDsInput.schema';
import { UserUncheckedUpdateManyWithoutFollowingNestedInputObjectSchema } from './UserUncheckedUpdateManyWithoutFollowingNestedInput.schema';
import { UserUpdatefollowedByIDsInputObjectSchema } from './UserUpdatefollowedByIDsInput.schema';
import { UserUncheckedUpdateManyWithoutFollowedByNestedInputObjectSchema } from './UserUncheckedUpdateManyWithoutFollowedByNestedInput.schema';
import { UserUpdatefollowingIDsInputObjectSchema } from './UserUpdatefollowingIDsInput.schema';
import { BookmarkUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './BookmarkUncheckedUpdateManyWithoutUserNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedUpdateWithoutNotificationsInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    email: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    emailVerified: z
      .union([
        z.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    image: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    accounts: z
      .lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    sessions: z
      .lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    musics: z
      .lazy(() => MusicUncheckedUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    issues: z
      .lazy(() => IssueUncheckedUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    pulls: z
      .lazy(() => PullUncheckedUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    comments: z
      .lazy(() => CommentUncheckedUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    vote: z
      .lazy(() => VoteUncheckedUpdateManyWithoutUsersNestedInputObjectSchema)
      .optional(),
    voteIDs: z
      .union([
        z.lazy(() => UserUpdatevoteIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    followedBy: z
      .lazy(
        () => UserUncheckedUpdateManyWithoutFollowingNestedInputObjectSchema,
      )
      .optional(),
    followedByIDs: z
      .union([
        z.lazy(() => UserUpdatefollowedByIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    following: z
      .lazy(
        () => UserUncheckedUpdateManyWithoutFollowedByNestedInputObjectSchema,
      )
      .optional(),
    followingIDs: z
      .union([
        z.lazy(() => UserUpdatefollowingIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    bookmarks: z
      .lazy(() => BookmarkUncheckedUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserUncheckedUpdateWithoutNotificationsInputObjectSchema = Schema;
