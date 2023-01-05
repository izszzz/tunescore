import { z } from 'zod';
import { LocalesCreateEnvelopeInputObjectSchema } from './LocalesCreateEnvelopeInput.schema';
import { LocalesCreateInputObjectSchema } from './LocalesCreateInput.schema';
import { LinkListNullableCreateEnvelopeInputObjectSchema } from './LinkListNullableCreateEnvelopeInput.schema';
import { LinkListCreateInputObjectSchema } from './LinkListCreateInput.schema';
import { MusicUncheckedCreateNestedManyWithoutAlbumsInputObjectSchema } from './MusicUncheckedCreateNestedManyWithoutAlbumsInput.schema';
import { AlbumCreatemusicIDsInputObjectSchema } from './AlbumCreatemusicIDsInput.schema';
import { ArtistUncheckedCreateNestedManyWithoutAlbumsInputObjectSchema } from './ArtistUncheckedCreateNestedManyWithoutAlbumsInput.schema';
import { AlbumCreateartistIDsInputObjectSchema } from './AlbumCreateartistIDsInput.schema';
import { BookmarkUncheckedCreateNestedManyWithoutAlbumInputObjectSchema } from './BookmarkUncheckedCreateNestedManyWithoutAlbumInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumUncheckedCreateWithoutTagMapsInput> = z
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
    bandId: z.string().optional().nullable(),
    musics: z
      .lazy(() => MusicUncheckedCreateNestedManyWithoutAlbumsInputObjectSchema)
      .optional(),
    musicIDs: z
      .union([
        z.lazy(() => AlbumCreatemusicIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    artists: z
      .lazy(() => ArtistUncheckedCreateNestedManyWithoutAlbumsInputObjectSchema)
      .optional(),
    artistIDs: z
      .union([
        z.lazy(() => AlbumCreateartistIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    bookmarks: z
      .lazy(
        () => BookmarkUncheckedCreateNestedManyWithoutAlbumInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const AlbumUncheckedCreateWithoutTagMapsInputObjectSchema = Schema;
