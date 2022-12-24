import { z } from 'zod';
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema';
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema';
import { MusicUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './MusicUncheckedCreateNestedManyWithoutUserInput.schema';
import { IssueUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './IssueUncheckedCreateNestedManyWithoutUserInput.schema';
import { PullUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './PullUncheckedCreateNestedManyWithoutUserInput.schema';
import { CommentUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './CommentUncheckedCreateNestedManyWithoutUserInput.schema';
import { NotificationUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './NotificationUncheckedCreateNestedManyWithoutUserInput.schema';
import { VoteUncheckedCreateNestedManyWithoutUsersInputObjectSchema } from './VoteUncheckedCreateNestedManyWithoutUsersInput.schema';
import { UserCreatevoteIDsInputObjectSchema } from './UserCreatevoteIDsInput.schema';
import { UserUncheckedCreateNestedManyWithoutFollowingInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutFollowingInput.schema';
import { UserCreatefollowedByIDsInputObjectSchema } from './UserCreatefollowedByIDsInput.schema';
import { UserUncheckedCreateNestedManyWithoutFollowedByInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutFollowedByInput.schema';
import { UserCreatefollowingIDsInputObjectSchema } from './UserCreatefollowingIDsInput.schema';
import { MusicUncheckedCreateNestedManyWithoutBookmarksInputObjectSchema } from './MusicUncheckedCreateNestedManyWithoutBookmarksInput.schema';
import { UserCreatebookmarkMusicIDsInputObjectSchema } from './UserCreatebookmarkMusicIDsInput.schema';
import { ArtistUncheckedCreateNestedManyWithoutBookmarksInputObjectSchema } from './ArtistUncheckedCreateNestedManyWithoutBookmarksInput.schema';
import { UserCreatebookmarkArtistIDsInputObjectSchema } from './UserCreatebookmarkArtistIDsInput.schema';
import { BandUncheckedCreateNestedManyWithoutBookmarksInputObjectSchema } from './BandUncheckedCreateNestedManyWithoutBookmarksInput.schema';
import { UserCreatebookmarkBandIDsInputObjectSchema } from './UserCreatebookmarkBandIDsInput.schema';
import { UserCreatebookmarkAlbumIDsInputObjectSchema } from './UserCreatebookmarkAlbumIDsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutBookmarkAlbumsInput> =
  z
    .object({
      id: z.string().optional(),
      name: z.string().optional().nullable(),
      email: z.string().optional().nullable(),
      emailVerified: z.date().optional().nullable(),
      image: z.string().optional().nullable(),
      accounts: z
        .lazy(
          () => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema,
        )
        .optional(),
      sessions: z
        .lazy(
          () => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema,
        )
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
        .lazy(
          () => CommentUncheckedCreateNestedManyWithoutUserInputObjectSchema,
        )
        .optional(),
      notifications: z
        .lazy(
          () =>
            NotificationUncheckedCreateNestedManyWithoutUserInputObjectSchema,
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
      followedBy: z
        .lazy(
          () => UserUncheckedCreateNestedManyWithoutFollowingInputObjectSchema,
        )
        .optional(),
      followedByIDs: z
        .union([
          z.lazy(() => UserCreatefollowedByIDsInputObjectSchema),
          z.string().array(),
        ])
        .optional(),
      following: z
        .lazy(
          () => UserUncheckedCreateNestedManyWithoutFollowedByInputObjectSchema,
        )
        .optional(),
      followingIDs: z
        .union([
          z.lazy(() => UserCreatefollowingIDsInputObjectSchema),
          z.string().array(),
        ])
        .optional(),
      bookmarkMusics: z
        .lazy(
          () => MusicUncheckedCreateNestedManyWithoutBookmarksInputObjectSchema,
        )
        .optional(),
      bookmarkMusicIDs: z
        .union([
          z.lazy(() => UserCreatebookmarkMusicIDsInputObjectSchema),
          z.string().array(),
        ])
        .optional(),
      bookmarkArtists: z
        .lazy(
          () =>
            ArtistUncheckedCreateNestedManyWithoutBookmarksInputObjectSchema,
        )
        .optional(),
      bookmarkArtistIDs: z
        .union([
          z.lazy(() => UserCreatebookmarkArtistIDsInputObjectSchema),
          z.string().array(),
        ])
        .optional(),
      bookmarkBands: z
        .lazy(
          () => BandUncheckedCreateNestedManyWithoutBookmarksInputObjectSchema,
        )
        .optional(),
      bookmarkBandIDs: z
        .union([
          z.lazy(() => UserCreatebookmarkBandIDsInputObjectSchema),
          z.string().array(),
        ])
        .optional(),
      bookmarkAlbumIDs: z
        .union([
          z.lazy(() => UserCreatebookmarkAlbumIDsInputObjectSchema),
          z.string().array(),
        ])
        .optional(),
    })
    .strict();

export const UserUncheckedCreateWithoutBookmarkAlbumsInputObjectSchema = Schema;
