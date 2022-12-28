import { z } from 'zod';
import { LocalesUpdateEnvelopeInputObjectSchema } from './LocalesUpdateEnvelopeInput.schema';
import { LocalesCreateInputObjectSchema } from './LocalesCreateInput.schema';
import { MusicUncheckedUpdateManyWithoutAlbumsNestedInputObjectSchema } from './MusicUncheckedUpdateManyWithoutAlbumsNestedInput.schema';
import { AlbumUpdatemusicIDsInputObjectSchema } from './AlbumUpdatemusicIDsInput.schema';
import { ArtistUncheckedUpdateManyWithoutAlbumsNestedInputObjectSchema } from './ArtistUncheckedUpdateManyWithoutAlbumsNestedInput.schema';
import { AlbumUpdateartistIDsInputObjectSchema } from './AlbumUpdateartistIDsInput.schema';
import { BookmarkUncheckedUpdateManyWithoutAlbumNestedInputObjectSchema } from './BookmarkUncheckedUpdateManyWithoutAlbumNestedInput.schema';
import { TagMapUncheckedUpdateManyWithoutAlbumNestedInputObjectSchema } from './TagMapUncheckedUpdateManyWithoutAlbumNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumUncheckedUpdateWithoutBandInput> = z
  .object({
    title: z
      .union([
        z.lazy(() => LocalesUpdateEnvelopeInputObjectSchema),
        z.lazy(() => LocalesCreateInputObjectSchema),
      ])
      .optional(),
    musics: z
      .lazy(() => MusicUncheckedUpdateManyWithoutAlbumsNestedInputObjectSchema)
      .optional(),
    musicIDs: z
      .union([
        z.lazy(() => AlbumUpdatemusicIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    artists: z
      .lazy(() => ArtistUncheckedUpdateManyWithoutAlbumsNestedInputObjectSchema)
      .optional(),
    artistIDs: z
      .union([
        z.lazy(() => AlbumUpdateartistIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    bookmarks: z
      .lazy(
        () => BookmarkUncheckedUpdateManyWithoutAlbumNestedInputObjectSchema,
      )
      .optional(),
    tagMaps: z
      .lazy(() => TagMapUncheckedUpdateManyWithoutAlbumNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const AlbumUncheckedUpdateWithoutBandInputObjectSchema = Schema;
