import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { LocalesCompositeFilterObjectSchema } from './LocalesCompositeFilter.schema';
import { LocalesObjectEqualityInputObjectSchema } from './LocalesObjectEqualityInput.schema';
import { LinkListNullableCompositeFilterObjectSchema } from './LinkListNullableCompositeFilter.schema';
import { LinkListObjectEqualityInputObjectSchema } from './LinkListObjectEqualityInput.schema';
import { MusicListRelationFilterObjectSchema } from './MusicListRelationFilter.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { BandListRelationFilterObjectSchema } from './BandListRelationFilter.schema';
import { AlbumListRelationFilterObjectSchema } from './AlbumListRelationFilter.schema';
import { BookmarkListRelationFilterObjectSchema } from './BookmarkListRelationFilter.schema';
import { TagMapListRelationFilterObjectSchema } from './TagMapListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ArtistWhereInputObjectSchema),
        z.lazy(() => ArtistWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ArtistWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ArtistWhereInputObjectSchema),
        z.lazy(() => ArtistWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([
        z.lazy(() => LocalesCompositeFilterObjectSchema),
        z.lazy(() => LocalesObjectEqualityInputObjectSchema),
      ])
      .optional(),
    link: z
      .union([
        z.lazy(() => LinkListNullableCompositeFilterObjectSchema),
        z.lazy(() => LinkListObjectEqualityInputObjectSchema),
      ])
      .optional()
      .nullable(),
    writtenMusics: z.lazy(() => MusicListRelationFilterObjectSchema).optional(),
    writtenMusicsIDs: z
      .lazy(() => StringNullableListFilterObjectSchema)
      .optional(),
    composedMusics: z
      .lazy(() => MusicListRelationFilterObjectSchema)
      .optional(),
    composedMusicsIDs: z
      .lazy(() => StringNullableListFilterObjectSchema)
      .optional(),
    musics: z.lazy(() => MusicListRelationFilterObjectSchema).optional(),
    musicIDs: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    bands: z.lazy(() => BandListRelationFilterObjectSchema).optional(),
    bandIDs: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    albums: z.lazy(() => AlbumListRelationFilterObjectSchema).optional(),
    albumIDs: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    bookmarks: z.lazy(() => BookmarkListRelationFilterObjectSchema).optional(),
    tagMaps: z.lazy(() => TagMapListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const ArtistWhereInputObjectSchema = Schema;
