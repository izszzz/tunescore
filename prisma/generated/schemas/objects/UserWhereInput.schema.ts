import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { AccountListRelationFilterObjectSchema } from './AccountListRelationFilter.schema';
import { SessionListRelationFilterObjectSchema } from './SessionListRelationFilter.schema';
import { MusicListRelationFilterObjectSchema } from './MusicListRelationFilter.schema';
import { IssueListRelationFilterObjectSchema } from './IssueListRelationFilter.schema';
import { PullListRelationFilterObjectSchema } from './PullListRelationFilter.schema';
import { UserListRelationFilterObjectSchema } from './UserListRelationFilter.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { ArtistListRelationFilterObjectSchema } from './ArtistListRelationFilter.schema';
import { BandListRelationFilterObjectSchema } from './BandListRelationFilter.schema';
import { AlbumListRelationFilterObjectSchema } from './AlbumListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UserWhereInputObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UserWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserWhereInputObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    email: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    emailVerified: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    image: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    accounts: z.lazy(() => AccountListRelationFilterObjectSchema).optional(),
    sessions: z.lazy(() => SessionListRelationFilterObjectSchema).optional(),
    musics: z.lazy(() => MusicListRelationFilterObjectSchema).optional(),
    issues: z.lazy(() => IssueListRelationFilterObjectSchema).optional(),
    pulls: z.lazy(() => PullListRelationFilterObjectSchema).optional(),
    followedBy: z.lazy(() => UserListRelationFilterObjectSchema).optional(),
    followedByIDs: z
      .lazy(() => StringNullableListFilterObjectSchema)
      .optional(),
    following: z.lazy(() => UserListRelationFilterObjectSchema).optional(),
    followingIDs: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    bookmarkMusics: z
      .lazy(() => MusicListRelationFilterObjectSchema)
      .optional(),
    bookmarkMusicIDs: z
      .lazy(() => StringNullableListFilterObjectSchema)
      .optional(),
    bookmarkArtists: z
      .lazy(() => ArtistListRelationFilterObjectSchema)
      .optional(),
    bookmarkArtistIDs: z
      .lazy(() => StringNullableListFilterObjectSchema)
      .optional(),
    bookmarkBands: z.lazy(() => BandListRelationFilterObjectSchema).optional(),
    bookmarkBandIDs: z
      .lazy(() => StringNullableListFilterObjectSchema)
      .optional(),
    bookmarkAlbums: z
      .lazy(() => AlbumListRelationFilterObjectSchema)
      .optional(),
    bookmarkAlbumIDs: z
      .lazy(() => StringNullableListFilterObjectSchema)
      .optional(),
  })
  .strict();

export const UserWhereInputObjectSchema = Schema;
