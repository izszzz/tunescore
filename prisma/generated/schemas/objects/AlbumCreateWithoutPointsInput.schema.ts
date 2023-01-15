import { z } from 'zod';
import { LocaleCreateEnvelopeInputObjectSchema } from './LocaleCreateEnvelopeInput.schema';
import { LocaleCreateInputObjectSchema } from './LocaleCreateInput.schema';
import { LinkListNullableCreateEnvelopeInputObjectSchema } from './LinkListNullableCreateEnvelopeInput.schema';
import { LinkListCreateInputObjectSchema } from './LinkListCreateInput.schema';
import { BandCreateNestedOneWithoutAlbumsInputObjectSchema } from './BandCreateNestedOneWithoutAlbumsInput.schema';
import { MusicCreateNestedManyWithoutAlbumsInputObjectSchema } from './MusicCreateNestedManyWithoutAlbumsInput.schema';
import { AlbumCreatemusicIDsInputObjectSchema } from './AlbumCreatemusicIDsInput.schema';
import { ArtistCreateNestedManyWithoutAlbumsInputObjectSchema } from './ArtistCreateNestedManyWithoutAlbumsInput.schema';
import { AlbumCreateartistIDsInputObjectSchema } from './AlbumCreateartistIDsInput.schema';
import { BookmarkCreateNestedManyWithoutAlbumInputObjectSchema } from './BookmarkCreateNestedManyWithoutAlbumInput.schema';
import { TagMapCreateNestedManyWithoutAlbumInputObjectSchema } from './TagMapCreateNestedManyWithoutAlbumInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumCreateWithoutPointsInput> = z
  .object({
    id: z.string().optional(),
    title: z.union([
      z.lazy(() => LocaleCreateEnvelopeInputObjectSchema),
      z.lazy(() => LocaleCreateInputObjectSchema),
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
    artists: z
      .lazy(() => ArtistCreateNestedManyWithoutAlbumsInputObjectSchema)
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

export const AlbumCreateWithoutPointsInputObjectSchema = Schema;