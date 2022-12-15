import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { AccountUpdateManyWithoutUserNestedInputObjectSchema } from './AccountUpdateManyWithoutUserNestedInput.schema';
import { SessionUpdateManyWithoutUserNestedInputObjectSchema } from './SessionUpdateManyWithoutUserNestedInput.schema';
import { MusicUpdateManyWithoutUserNestedInputObjectSchema } from './MusicUpdateManyWithoutUserNestedInput.schema';
import { IssueUpdateManyWithoutUserNestedInputObjectSchema } from './IssueUpdateManyWithoutUserNestedInput.schema';
import { UserUpdateManyWithoutFollowingNestedInputObjectSchema } from './UserUpdateManyWithoutFollowingNestedInput.schema';
import { UserUpdatefollowedByIDsInputObjectSchema } from './UserUpdatefollowedByIDsInput.schema';
import { UserUpdateManyWithoutFollowedByNestedInputObjectSchema } from './UserUpdateManyWithoutFollowedByNestedInput.schema';
import { UserUpdatefollowingIDsInputObjectSchema } from './UserUpdatefollowingIDsInput.schema';
import { MusicUpdateManyWithoutBookmarksNestedInputObjectSchema } from './MusicUpdateManyWithoutBookmarksNestedInput.schema';
import { UserUpdatebookmarkMusicIDsInputObjectSchema } from './UserUpdatebookmarkMusicIDsInput.schema';
import { ArtistUpdateManyWithoutBookmarksNestedInputObjectSchema } from './ArtistUpdateManyWithoutBookmarksNestedInput.schema';
import { UserUpdatebookmarkArtistIDsInputObjectSchema } from './UserUpdatebookmarkArtistIDsInput.schema';
import { BandUpdateManyWithoutBookmarksNestedInputObjectSchema } from './BandUpdateManyWithoutBookmarksNestedInput.schema';
import { UserUpdatebookmarkBandIDsInputObjectSchema } from './UserUpdatebookmarkBandIDsInput.schema';
import { AlbumUpdateManyWithoutBookmarksNestedInputObjectSchema } from './AlbumUpdateManyWithoutBookmarksNestedInput.schema';
import { UserUpdatebookmarkAlbumIDsInputObjectSchema } from './UserUpdatebookmarkAlbumIDsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateWithoutPullsInput> = z
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
    followedBy: z
      .lazy(() => UserUpdateManyWithoutFollowingNestedInputObjectSchema)
      .optional(),
    followedByIDs: z
      .union([
        z.lazy(() => UserUpdatefollowedByIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    following: z
      .lazy(() => UserUpdateManyWithoutFollowedByNestedInputObjectSchema)
      .optional(),
    followingIDs: z
      .union([
        z.lazy(() => UserUpdatefollowingIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    bookmarkMusics: z
      .lazy(() => MusicUpdateManyWithoutBookmarksNestedInputObjectSchema)
      .optional(),
    bookmarkMusicIDs: z
      .union([
        z.lazy(() => UserUpdatebookmarkMusicIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    bookmarkArtists: z
      .lazy(() => ArtistUpdateManyWithoutBookmarksNestedInputObjectSchema)
      .optional(),
    bookmarkArtistIDs: z
      .union([
        z.lazy(() => UserUpdatebookmarkArtistIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    bookmarkBands: z
      .lazy(() => BandUpdateManyWithoutBookmarksNestedInputObjectSchema)
      .optional(),
    bookmarkBandIDs: z
      .union([
        z.lazy(() => UserUpdatebookmarkBandIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    bookmarkAlbums: z
      .lazy(() => AlbumUpdateManyWithoutBookmarksNestedInputObjectSchema)
      .optional(),
    bookmarkAlbumIDs: z
      .union([
        z.lazy(() => UserUpdatebookmarkAlbumIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const UserUpdateWithoutPullsInputObjectSchema = Schema;
