import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { LocaleCompositeFilterObjectSchema } from './LocaleCompositeFilter.schema';
import { LocaleObjectEqualityInputObjectSchema } from './LocaleObjectEqualityInput.schema';
import { LinkListNullableCompositeFilterObjectSchema } from './LinkListNullableCompositeFilter.schema';
import { LinkListObjectEqualityInputObjectSchema } from './LinkListObjectEqualityInput.schema';
import { ParticipationListRelationFilterObjectSchema } from './ParticipationListRelationFilter.schema';
import { BandListRelationFilterObjectSchema } from './BandListRelationFilter.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
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
    participations: z
      .lazy(() => ParticipationListRelationFilterObjectSchema)
      .optional(),
    bands: z.lazy(() => BandListRelationFilterObjectSchema).optional(),
    bandIDs: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    albums: z.lazy(() => AlbumListRelationFilterObjectSchema).optional(),
    albumIDs: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    bookmarks: z.lazy(() => BookmarkListRelationFilterObjectSchema).optional(),
    tagMaps: z.lazy(() => TagMapListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const ArtistWhereInputObjectSchema = Schema;
