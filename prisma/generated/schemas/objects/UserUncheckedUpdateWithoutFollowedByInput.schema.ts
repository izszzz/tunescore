import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { AccountUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './AccountUncheckedUpdateManyWithoutUserNestedInput.schema';
import { SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './SessionUncheckedUpdateManyWithoutUserNestedInput.schema';
import { MusicUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './MusicUncheckedUpdateManyWithoutUserNestedInput.schema';
import { IssueUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './IssueUncheckedUpdateManyWithoutUserNestedInput.schema';
import { PullUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './PullUncheckedUpdateManyWithoutUserNestedInput.schema';
import { UserUpdatefollowedByIDsInputObjectSchema } from './UserUpdatefollowedByIDsInput.schema';
import { UserUncheckedUpdateManyWithoutFollowedByNestedInputObjectSchema } from './UserUncheckedUpdateManyWithoutFollowedByNestedInput.schema';
import { UserUpdatefollowingIDsInputObjectSchema } from './UserUpdatefollowingIDsInput.schema';
import { MusicUncheckedUpdateManyWithoutBookmarksNestedInputObjectSchema } from './MusicUncheckedUpdateManyWithoutBookmarksNestedInput.schema';
import { UserUpdatebookmarkMusicIDsInputObjectSchema } from './UserUpdatebookmarkMusicIDsInput.schema';
import { ArtistUncheckedUpdateManyWithoutBookmarksNestedInputObjectSchema } from './ArtistUncheckedUpdateManyWithoutBookmarksNestedInput.schema';
import { UserUpdatebookmarkArtistIDsInputObjectSchema } from './UserUpdatebookmarkArtistIDsInput.schema';
import { BandUncheckedUpdateManyWithoutBookmarksNestedInputObjectSchema } from './BandUncheckedUpdateManyWithoutBookmarksNestedInput.schema';
import { UserUpdatebookmarkBandIDsInputObjectSchema } from './UserUpdatebookmarkBandIDsInput.schema';
import { AlbumUncheckedUpdateManyWithoutBookmarksNestedInputObjectSchema } from './AlbumUncheckedUpdateManyWithoutBookmarksNestedInput.schema';
import { UserUpdatebookmarkAlbumIDsInputObjectSchema } from './UserUpdatebookmarkAlbumIDsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedUpdateWithoutFollowedByInput> = z
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
    bookmarkMusics: z
      .lazy(
        () => MusicUncheckedUpdateManyWithoutBookmarksNestedInputObjectSchema,
      )
      .optional(),
    bookmarkMusicIDs: z
      .union([
        z.lazy(() => UserUpdatebookmarkMusicIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    bookmarkArtists: z
      .lazy(
        () => ArtistUncheckedUpdateManyWithoutBookmarksNestedInputObjectSchema,
      )
      .optional(),
    bookmarkArtistIDs: z
      .union([
        z.lazy(() => UserUpdatebookmarkArtistIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    bookmarkBands: z
      .lazy(
        () => BandUncheckedUpdateManyWithoutBookmarksNestedInputObjectSchema,
      )
      .optional(),
    bookmarkBandIDs: z
      .union([
        z.lazy(() => UserUpdatebookmarkBandIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    bookmarkAlbums: z
      .lazy(
        () => AlbumUncheckedUpdateManyWithoutBookmarksNestedInputObjectSchema,
      )
      .optional(),
    bookmarkAlbumIDs: z
      .union([
        z.lazy(() => UserUpdatebookmarkAlbumIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const UserUncheckedUpdateWithoutFollowedByInputObjectSchema = Schema;
