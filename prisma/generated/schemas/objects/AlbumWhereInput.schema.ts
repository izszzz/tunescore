import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { LocalesCompositeFilterObjectSchema } from './LocalesCompositeFilter.schema';
import { LocalesObjectEqualityInputObjectSchema } from './LocalesObjectEqualityInput.schema';
import { BandRelationFilterObjectSchema } from './BandRelationFilter.schema';
import { BandWhereInputObjectSchema } from './BandWhereInput.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { MusicListRelationFilterObjectSchema } from './MusicListRelationFilter.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { ArtistListRelationFilterObjectSchema } from './ArtistListRelationFilter.schema';
import { UserListRelationFilterObjectSchema } from './UserListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => AlbumWhereInputObjectSchema),
        z.lazy(() => AlbumWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AlbumWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AlbumWhereInputObjectSchema),
        z.lazy(() => AlbumWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    title: z
      .union([
        z.lazy(() => LocalesCompositeFilterObjectSchema),
        z.lazy(() => LocalesObjectEqualityInputObjectSchema),
      ])
      .optional(),
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
    musics: z.lazy(() => MusicListRelationFilterObjectSchema).optional(),
    musicIDs: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    artists: z.lazy(() => ArtistListRelationFilterObjectSchema).optional(),
    artistIDs: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    bookmarks: z.lazy(() => UserListRelationFilterObjectSchema).optional(),
    userIDs: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  })
  .strict();

export const AlbumWhereInputObjectSchema = Schema;