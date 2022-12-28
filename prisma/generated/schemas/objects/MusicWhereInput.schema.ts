import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EnumMusicTypeFilterObjectSchema } from './EnumMusicTypeFilter.schema';
import { MusicTypeSchema } from '../enums/MusicType.schema';
import { LocalesCompositeFilterObjectSchema } from './LocalesCompositeFilter.schema';
import { LocalesObjectEqualityInputObjectSchema } from './LocalesObjectEqualityInput.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumVisibilityFilterObjectSchema } from './EnumVisibilityFilter.schema';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { LinkListNullableCompositeFilterObjectSchema } from './LinkListNullableCompositeFilter.schema';
import { LinkListObjectEqualityInputObjectSchema } from './LinkListObjectEqualityInput.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { BandRelationFilterObjectSchema } from './BandRelationFilter.schema';
import { BandWhereInputObjectSchema } from './BandWhereInput.schema';
import { AlbumListRelationFilterObjectSchema } from './AlbumListRelationFilter.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { ArtistListRelationFilterObjectSchema } from './ArtistListRelationFilter.schema';
import { IssueListRelationFilterObjectSchema } from './IssueListRelationFilter.schema';
import { PullListRelationFilterObjectSchema } from './PullListRelationFilter.schema';
import { BookmarkListRelationFilterObjectSchema } from './BookmarkListRelationFilter.schema';
import { TagMapListRelationFilterObjectSchema } from './TagMapListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => MusicWhereInputObjectSchema),
        z.lazy(() => MusicWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => MusicWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => MusicWhereInputObjectSchema),
        z.lazy(() => MusicWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    type: z
      .union([
        z.lazy(() => EnumMusicTypeFilterObjectSchema),
        z.lazy(() => MusicTypeSchema),
      ])
      .optional(),
    title: z
      .union([
        z.lazy(() => LocalesCompositeFilterObjectSchema),
        z.lazy(() => LocalesObjectEqualityInputObjectSchema),
      ])
      .optional(),
    score: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    visibility: z
      .union([
        z.lazy(() => EnumVisibilityFilterObjectSchema),
        z.lazy(() => VisibilitySchema),
      ])
      .optional(),
    price: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    link: z
      .union([
        z.lazy(() => LinkListNullableCompositeFilterObjectSchema),
        z.lazy(() => LinkListObjectEqualityInputObjectSchema),
      ])
      .optional()
      .nullable(),
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    userId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    band: z
      .union([
        z.lazy(() => BandRelationFilterObjectSchema),
        z.lazy(() => BandWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    bandId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    albums: z.lazy(() => AlbumListRelationFilterObjectSchema).optional(),
    albumIDs: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    composers: z.lazy(() => ArtistListRelationFilterObjectSchema).optional(),
    composerIDs: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    lyrists: z.lazy(() => ArtistListRelationFilterObjectSchema).optional(),
    lyristIDs: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    artists: z.lazy(() => ArtistListRelationFilterObjectSchema).optional(),
    artistIDs: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    issues: z.lazy(() => IssueListRelationFilterObjectSchema).optional(),
    pulls: z.lazy(() => PullListRelationFilterObjectSchema).optional(),
    bookmarks: z.lazy(() => BookmarkListRelationFilterObjectSchema).optional(),
    tagMaps: z.lazy(() => TagMapListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const MusicWhereInputObjectSchema = Schema;
