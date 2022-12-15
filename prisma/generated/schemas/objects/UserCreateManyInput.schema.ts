import { z } from 'zod';
import { UserCreatefollowedByIDsInputObjectSchema } from './UserCreatefollowedByIDsInput.schema';
import { UserCreatefollowingIDsInputObjectSchema } from './UserCreatefollowingIDsInput.schema';
import { UserCreatebookmarkMusicIDsInputObjectSchema } from './UserCreatebookmarkMusicIDsInput.schema';
import { UserCreatebookmarkArtistIDsInputObjectSchema } from './UserCreatebookmarkArtistIDsInput.schema';
import { UserCreatebookmarkBandIDsInputObjectSchema } from './UserCreatebookmarkBandIDsInput.schema';
import { UserCreatebookmarkAlbumIDsInputObjectSchema } from './UserCreatebookmarkAlbumIDsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateManyInput> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    emailVerified: z.date().optional().nullable(),
    image: z.string().optional().nullable(),
    followedByIDs: z
      .union([
        z.lazy(() => UserCreatefollowedByIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    followingIDs: z
      .union([
        z.lazy(() => UserCreatefollowingIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    bookmarkMusicIDs: z
      .union([
        z.lazy(() => UserCreatebookmarkMusicIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    bookmarkArtistIDs: z
      .union([
        z.lazy(() => UserCreatebookmarkArtistIDsInputObjectSchema),
        z.string().array(),
      ])
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

export const UserCreateManyInputObjectSchema = Schema;
