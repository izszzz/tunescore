import { z } from 'zod';
import { LocalesCreateEnvelopeInputObjectSchema } from './LocalesCreateEnvelopeInput.schema';
import { LocalesCreateInputObjectSchema } from './LocalesCreateInput.schema';
import { LinkListNullableCreateEnvelopeInputObjectSchema } from './LinkListNullableCreateEnvelopeInput.schema';
import { LinkListCreateInputObjectSchema } from './LinkListCreateInput.schema';
import { BandCreateNestedOneWithoutAlbumsInputObjectSchema } from './BandCreateNestedOneWithoutAlbumsInput.schema';
import { MusicCreateNestedManyWithoutAlbumsInputObjectSchema } from './MusicCreateNestedManyWithoutAlbumsInput.schema';
import { AlbumCreatemusicIDsInputObjectSchema } from './AlbumCreatemusicIDsInput.schema';
import { AlbumCreateartistIDsInputObjectSchema } from './AlbumCreateartistIDsInput.schema';
import { BookmarkCreateNestedManyWithoutAlbumInputObjectSchema } from './BookmarkCreateNestedManyWithoutAlbumInput.schema';
import { TagMapCreateNestedManyWithoutAlbumInputObjectSchema } from './TagMapCreateNestedManyWithoutAlbumInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumCreateWithoutArtistsInput> = z
  .object({
    id: z.string().optional(),
    title: z.union([
      z.lazy(() => LocalesCreateEnvelopeInputObjectSchema),
      z.lazy(() => LocalesCreateInputObjectSchema),
    ]),
    link: z
      .union([
        z.lazy(() => LinkListNullableCreateEnvelopeInputObjectSchema),
        z.lazy(() => LinkListCreateInputObjectSchema),
      ])
      .optional()
      .nullable(),
    band: z
      .lazy(() => BandCreateNestedOneWithoutAlbumsInputObjectSchema)
      .optional(),
    musics: z
      .lazy(() => MusicCreateNestedManyWithoutAlbumsInputObjectSchema)
      .optional(),
    musicIDs: z
      .union([
        z.lazy(() => AlbumCreatemusicIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    artistIDs: z
      .union([
        z.lazy(() => AlbumCreateartistIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    bookmarks: z
      .lazy(() => BookmarkCreateNestedManyWithoutAlbumInputObjectSchema)
      .optional(),
    tagMaps: z
      .lazy(() => TagMapCreateNestedManyWithoutAlbumInputObjectSchema)
      .optional(),
  })
  .strict();

export const AlbumCreateWithoutArtistsInputObjectSchema = Schema;
