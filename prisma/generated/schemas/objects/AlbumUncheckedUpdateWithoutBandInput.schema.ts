import { z } from 'zod';
import { LocaleUpdateEnvelopeInputObjectSchema } from './LocaleUpdateEnvelopeInput.schema';
import { LocaleCreateInputObjectSchema } from './LocaleCreateInput.schema';
import { LinkListNullableUpdateEnvelopeInputObjectSchema } from './LinkListNullableUpdateEnvelopeInput.schema';
import { LinkListCreateInputObjectSchema } from './LinkListCreateInput.schema';
import { MusicUncheckedUpdateManyWithoutAlbumsNestedInputObjectSchema } from './MusicUncheckedUpdateManyWithoutAlbumsNestedInput.schema';
import { AlbumUpdatemusicIDsInputObjectSchema } from './AlbumUpdatemusicIDsInput.schema';
import { ArtistUncheckedUpdateManyWithoutAlbumsNestedInputObjectSchema } from './ArtistUncheckedUpdateManyWithoutAlbumsNestedInput.schema';
import { AlbumUpdateartistIDsInputObjectSchema } from './AlbumUpdateartistIDsInput.schema';
import { BookmarkUncheckedUpdateManyWithoutAlbumNestedInputObjectSchema } from './BookmarkUncheckedUpdateManyWithoutAlbumNestedInput.schema';
import { TagMapUncheckedUpdateManyWithoutAlbumNestedInputObjectSchema } from './TagMapUncheckedUpdateManyWithoutAlbumNestedInput.schema';
import { PointUncheckedUpdateManyWithoutAlbumNestedInputObjectSchema } from './PointUncheckedUpdateManyWithoutAlbumNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumUncheckedUpdateWithoutBandInput> = z
  .object({
    title: z
      .union([
        z.lazy(() => LocaleUpdateEnvelopeInputObjectSchema),
        z.lazy(() => LocaleCreateInputObjectSchema),
      ])
      .optional(),
    link: z
      .union([
        z.lazy(() => LinkListNullableUpdateEnvelopeInputObjectSchema),
        z.lazy(() => LinkListCreateInputObjectSchema),
      ])
      .optional()
      .nullable(),
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
    points: z
      .lazy(() => PointUncheckedUpdateManyWithoutAlbumNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const AlbumUncheckedUpdateWithoutBandInputObjectSchema = Schema;
