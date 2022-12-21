import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { UserUpdatevoteIDsInputObjectSchema } from './UserUpdatevoteIDsInput.schema';
import { UserUpdatefollowedByIDsInputObjectSchema } from './UserUpdatefollowedByIDsInput.schema';
import { UserUpdatefollowingIDsInputObjectSchema } from './UserUpdatefollowingIDsInput.schema';
import { UserUpdatebookmarkMusicIDsInputObjectSchema } from './UserUpdatebookmarkMusicIDsInput.schema';
import { UserUpdatebookmarkArtistIDsInputObjectSchema } from './UserUpdatebookmarkArtistIDsInput.schema';
import { UserUpdatebookmarkBandIDsInputObjectSchema } from './UserUpdatebookmarkBandIDsInput.schema';
import { UserUpdatebookmarkAlbumIDsInputObjectSchema } from './UserUpdatebookmarkAlbumIDsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateManyMutationInput> = z
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
    voteIDs: z
      .union([
        z.lazy(() => UserUpdatevoteIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    followedByIDs: z
      .union([
        z.lazy(() => UserUpdatefollowedByIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    followingIDs: z
      .union([
        z.lazy(() => UserUpdatefollowingIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    bookmarkMusicIDs: z
      .union([
        z.lazy(() => UserUpdatebookmarkMusicIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    bookmarkArtistIDs: z
      .union([
        z.lazy(() => UserUpdatebookmarkArtistIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    bookmarkBandIDs: z
      .union([
        z.lazy(() => UserUpdatebookmarkBandIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    bookmarkAlbumIDs: z
      .union([
        z.lazy(() => UserUpdatebookmarkAlbumIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const UserUpdateManyMutationInputObjectSchema = Schema;
