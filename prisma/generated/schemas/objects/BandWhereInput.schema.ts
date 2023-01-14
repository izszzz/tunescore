import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { LocaleCompositeFilterObjectSchema } from './LocaleCompositeFilter.schema';
import { LocaleObjectEqualityInputObjectSchema } from './LocaleObjectEqualityInput.schema';
import { LinkListNullableCompositeFilterObjectSchema } from './LinkListNullableCompositeFilter.schema';
import { LinkListObjectEqualityInputObjectSchema } from './LinkListObjectEqualityInput.schema';
import { ArtistListRelationFilterObjectSchema } from './ArtistListRelationFilter.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { MusicListRelationFilterObjectSchema } from './MusicListRelationFilter.schema';
import { AlbumListRelationFilterObjectSchema } from './AlbumListRelationFilter.schema';
import { BookmarkListRelationFilterObjectSchema } from './BookmarkListRelationFilter.schema';
import { TagMapListRelationFilterObjectSchema } from './TagMapListRelationFilter.schema';
import { PointListRelationFilterObjectSchema } from './PointListRelationFilter.schema';

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
        z.lazy(() => LocaleCompositeFilterObjectSchema),
        z.lazy(() => LocaleObjectEqualityInputObjectSchema),
      ])
      .optional(),
    link: z
      .union([
        z.lazy(() => LinkListNullableCompositeFilterObjectSchema),
        z.lazy(() => LinkListObjectEqualityInputObjectSchema),
      ])
      .optional()
      .nullable(),
    artists: z.lazy(() => ArtistListRelationFilterObjectSchema).optional(),
    artistIDs: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    musics: z.lazy(() => MusicListRelationFilterObjectSchema).optional(),
    albums: z.lazy(() => AlbumListRelationFilterObjectSchema).optional(),
    bookmarks: z.lazy(() => BookmarkListRelationFilterObjectSchema).optional(),
    tagMaps: z.lazy(() => TagMapListRelationFilterObjectSchema).optional(),
    points: z.lazy(() => PointListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const BandWhereInputObjectSchema = Schema;
