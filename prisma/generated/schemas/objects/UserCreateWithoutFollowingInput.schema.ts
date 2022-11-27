import { z } from 'zod';
import { AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema';
import { SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema';
import { MusicCreateNestedManyWithoutUserInputObjectSchema } from './MusicCreateNestedManyWithoutUserInput.schema';
import { IssueCreateNestedManyWithoutUserInputObjectSchema } from './IssueCreateNestedManyWithoutUserInput.schema';
import { PullCreateNestedManyWithoutUserInputObjectSchema } from './PullCreateNestedManyWithoutUserInput.schema';
import { UserCreateNestedManyWithoutFollowingInputObjectSchema } from './UserCreateNestedManyWithoutFollowingInput.schema';
import { UserCreatefollowedByIDsInputObjectSchema } from './UserCreatefollowedByIDsInput.schema';
import { UserCreatefollowingIDsInputObjectSchema } from './UserCreatefollowingIDsInput.schema';
import { MusicCreateNestedManyWithoutBookmarksInputObjectSchema } from './MusicCreateNestedManyWithoutBookmarksInput.schema';
import { UserCreatebookmarkMusicIDsInputObjectSchema } from './UserCreatebookmarkMusicIDsInput.schema';
import { ArtistCreateNestedManyWithoutBookmarksInputObjectSchema } from './ArtistCreateNestedManyWithoutBookmarksInput.schema';
import { UserCreatebookmarkArtistIDsInputObjectSchema } from './UserCreatebookmarkArtistIDsInput.schema';
import { BandCreateNestedManyWithoutBookmarksInputObjectSchema } from './BandCreateNestedManyWithoutBookmarksInput.schema';
import { UserCreatebookmarkBandIDsInputObjectSchema } from './UserCreatebookmarkBandIDsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateWithoutFollowingInput> = z
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
    followedBy: z
      .lazy(() => UserCreateNestedManyWithoutFollowingInputObjectSchema)
      .optional(),
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
    bookmarkMusics: z
      .lazy(() => MusicCreateNestedManyWithoutBookmarksInputObjectSchema)
      .optional(),
    bookmarkMusicIDs: z
      .union([
        z.lazy(() => UserCreatebookmarkMusicIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    bookmarkArtists: z
      .lazy(() => ArtistCreateNestedManyWithoutBookmarksInputObjectSchema)
      .optional(),
    bookmarkArtistIDs: z
      .union([
        z.lazy(() => UserCreatebookmarkArtistIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    bookmarkBands: z
      .lazy(() => BandCreateNestedManyWithoutBookmarksInputObjectSchema)
      .optional(),
    bookmarkBandIDs: z
      .union([
        z.lazy(() => UserCreatebookmarkBandIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const UserCreateWithoutFollowingInputObjectSchema = Schema;
