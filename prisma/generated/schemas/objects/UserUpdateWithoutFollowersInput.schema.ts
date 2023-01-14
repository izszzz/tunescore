import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { AccountUpdateManyWithoutUserNestedInputObjectSchema } from './AccountUpdateManyWithoutUserNestedInput.schema';
import { SessionUpdateManyWithoutUserNestedInputObjectSchema } from './SessionUpdateManyWithoutUserNestedInput.schema';
import { MusicUpdateManyWithoutUserNestedInputObjectSchema } from './MusicUpdateManyWithoutUserNestedInput.schema';
import { IssueUpdateManyWithoutUserNestedInputObjectSchema } from './IssueUpdateManyWithoutUserNestedInput.schema';
import { PullUpdateManyWithoutUserNestedInputObjectSchema } from './PullUpdateManyWithoutUserNestedInput.schema';
import { CommentUpdateManyWithoutUserNestedInputObjectSchema } from './CommentUpdateManyWithoutUserNestedInput.schema';
import { BookmarkUpdateManyWithoutUserNestedInputObjectSchema } from './BookmarkUpdateManyWithoutUserNestedInput.schema';
import { NotificationUpdateManyWithoutUserNestedInputObjectSchema } from './NotificationUpdateManyWithoutUserNestedInput.schema';
import { CartUpdateManyWithoutUserNestedInputObjectSchema } from './CartUpdateManyWithoutUserNestedInput.schema';
import { PointUpdateManyWithoutUserNestedInputObjectSchema } from './PointUpdateManyWithoutUserNestedInput.schema';
import { VoteUpdateManyWithoutUsersNestedInputObjectSchema } from './VoteUpdateManyWithoutUsersNestedInput.schema';
import { UserUpdatevoteIDsInputObjectSchema } from './UserUpdatevoteIDsInput.schema';
import { FollowUpdateManyWithoutFollowingNestedInputObjectSchema } from './FollowUpdateManyWithoutFollowingNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateWithoutFollowersInput> = z
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
      .lazy(() => AccountUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    sessions: z
      .lazy(() => SessionUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    musics: z
      .lazy(() => MusicUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    issues: z
      .lazy(() => IssueUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    pulls: z
      .lazy(() => PullUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    comments: z
      .lazy(() => CommentUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    bookmarks: z
      .lazy(() => BookmarkUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    notifications: z
      .lazy(() => NotificationUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    carts: z
      .lazy(() => CartUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    points: z
      .lazy(() => PointUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    votes: z
      .lazy(() => VoteUpdateManyWithoutUsersNestedInputObjectSchema)
      .optional(),
    voteIDs: z
      .union([
        z.lazy(() => UserUpdatevoteIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    following: z
      .lazy(() => FollowUpdateManyWithoutFollowingNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserUpdateWithoutFollowersInputObjectSchema = Schema;
