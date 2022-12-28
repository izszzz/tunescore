import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { LocalesCompositeFilterObjectSchema } from './LocalesCompositeFilter.schema';
import { LocalesObjectEqualityInputObjectSchema } from './LocalesObjectEqualityInput.schema';
import { LinkListNullableCompositeFilterObjectSchema } from './LinkListNullableCompositeFilter.schema';
import { LinkListObjectEqualityInputObjectSchema } from './LinkListObjectEqualityInput.schema';
import { MusicListRelationFilterObjectSchema } from './MusicListRelationFilter.schema';
import { ArtistListRelationFilterObjectSchema } from './ArtistListRelationFilter.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { AlbumListRelationFilterObjectSchema } from './AlbumListRelationFilter.schema';
import { BookmarkListRelationFilterObjectSchema } from './BookmarkListRelationFilter.schema';
import { TagMapListRelationFilterObjectSchema } from './TagMapListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => BandWhereInputObjectSchema),
        z.lazy(() => BandWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => BandWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => BandWhereInputObjectSchema),
        z.lazy(() => BandWhereInputObjectSchema).array(),
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
    musics: z.lazy(() => MusicListRelationFilterObjectSchema).optional(),
    artists: z.lazy(() => ArtistListRelationFilterObjectSchema).optional(),
    artistIDs: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    albums: z.lazy(() => AlbumListRelationFilterObjectSchema).optional(),
    bookmarks: z.lazy(() => BookmarkListRelationFilterObjectSchema).optional(),
    tagMaps: z.lazy(() => TagMapListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const BandWhereInputObjectSchema = Schema;
