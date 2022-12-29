import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { ThemeTypeSchema } from '../enums/ThemeType.schema';
import { EnumThemeTypeFieldUpdateOperationsInputObjectSchema } from './EnumThemeTypeFieldUpdateOperationsInput.schema';
import { AccountUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './AccountUncheckedUpdateManyWithoutUserNestedInput.schema';
import { SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './SessionUncheckedUpdateManyWithoutUserNestedInput.schema';
import { MusicUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './MusicUncheckedUpdateManyWithoutUserNestedInput.schema';
import { IssueUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './IssueUncheckedUpdateManyWithoutUserNestedInput.schema';
import { CommentUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './CommentUncheckedUpdateManyWithoutUserNestedInput.schema';
import { BookmarkUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './BookmarkUncheckedUpdateManyWithoutUserNestedInput.schema';
import { NotificationUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './NotificationUncheckedUpdateManyWithoutUserNestedInput.schema';
import { VoteUncheckedUpdateManyWithoutUsersNestedInputObjectSchema } from './VoteUncheckedUpdateManyWithoutUsersNestedInput.schema';
import { UserUpdatevoteIDsInputObjectSchema } from './UserUpdatevoteIDsInput.schema';
import { FollowUncheckedUpdateManyWithoutFollowerNestedInputObjectSchema } from './FollowUncheckedUpdateManyWithoutFollowerNestedInput.schema';
import { FollowUncheckedUpdateManyWithoutFollowingNestedInputObjectSchema } from './FollowUncheckedUpdateManyWithoutFollowingNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedUpdateWithoutPullsInput> = z
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
    theme: z
      .union([
        z.lazy(() => ThemeTypeSchema),
        z.lazy(() => EnumThemeTypeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
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
    comments: z
      .lazy(() => CommentUncheckedUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    bookmarks: z
      .lazy(() => BookmarkUncheckedUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    notifications: z
      .lazy(
        () => NotificationUncheckedUpdateManyWithoutUserNestedInputObjectSchema,
      )
      .optional(),
    votes: z
      .lazy(() => VoteUncheckedUpdateManyWithoutUsersNestedInputObjectSchema)
      .optional(),
    voteIDs: z
      .union([
        z.lazy(() => UserUpdatevoteIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    followers: z
      .lazy(
        () => FollowUncheckedUpdateManyWithoutFollowerNestedInputObjectSchema,
      )
      .optional(),
    following: z
      .lazy(
        () => FollowUncheckedUpdateManyWithoutFollowingNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const UserUncheckedUpdateWithoutPullsInputObjectSchema = Schema;
