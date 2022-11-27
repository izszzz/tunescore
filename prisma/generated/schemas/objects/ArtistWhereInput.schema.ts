import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { LocalesCompositeFilterObjectSchema } from './LocalesCompositeFilter.schema';
import { LocalesObjectEqualityInputObjectSchema } from './LocalesObjectEqualityInput.schema';
import { LinkNullableCompositeFilterObjectSchema } from './LinkNullableCompositeFilter.schema';
import { LinkObjectEqualityInputObjectSchema } from './LinkObjectEqualityInput.schema';
import { MusicListRelationFilterObjectSchema } from './MusicListRelationFilter.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { BandListRelationFilterObjectSchema } from './BandListRelationFilter.schema';
import { UserListRelationFilterObjectSchema } from './UserListRelationFilter.schema';

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
        z.lazy(() => LinkNullableCompositeFilterObjectSchema),
        z.lazy(() => LinkObjectEqualityInputObjectSchema),
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
    bookmarks: z.lazy(() => UserListRelationFilterObjectSchema).optional(),
    userIDs: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  })
  .strict();

export const ArtistWhereInputObjectSchema = Schema;
