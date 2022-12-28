import { z } from 'zod';
import { LocalesUpdateEnvelopeInputObjectSchema } from './LocalesUpdateEnvelopeInput.schema';
import { LocalesCreateInputObjectSchema } from './LocalesCreateInput.schema';
import { LinkListNullableUpdateEnvelopeInputObjectSchema } from './LinkListNullableUpdateEnvelopeInput.schema';
import { LinkListCreateInputObjectSchema } from './LinkListCreateInput.schema';
import { MusicUncheckedUpdateManyWithoutLyristsNestedInputObjectSchema } from './MusicUncheckedUpdateManyWithoutLyristsNestedInput.schema';
import { ArtistUpdatewrittenMusicsIDsInputObjectSchema } from './ArtistUpdatewrittenMusicsIDsInput.schema';
import { ArtistUpdatecomposedMusicsIDsInputObjectSchema } from './ArtistUpdatecomposedMusicsIDsInput.schema';
import { MusicUncheckedUpdateManyWithoutArtistsNestedInputObjectSchema } from './MusicUncheckedUpdateManyWithoutArtistsNestedInput.schema';
import { ArtistUpdatemusicIDsInputObjectSchema } from './ArtistUpdatemusicIDsInput.schema';
import { BandUncheckedUpdateManyWithoutArtistsNestedInputObjectSchema } from './BandUncheckedUpdateManyWithoutArtistsNestedInput.schema';
import { ArtistUpdatebandIDsInputObjectSchema } from './ArtistUpdatebandIDsInput.schema';
import { AlbumUncheckedUpdateManyWithoutArtistsNestedInputObjectSchema } from './AlbumUncheckedUpdateManyWithoutArtistsNestedInput.schema';
import { ArtistUpdatealbumIDsInputObjectSchema } from './ArtistUpdatealbumIDsInput.schema';
import { BookmarkUncheckedUpdateManyWithoutArtistNestedInputObjectSchema } from './BookmarkUncheckedUpdateManyWithoutArtistNestedInput.schema';
import { TagMapUncheckedUpdateManyWithoutArtistNestedInputObjectSchema } from './TagMapUncheckedUpdateManyWithoutArtistNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistUncheckedUpdateWithoutComposedMusicsInput> =
  z
    .object({
      name: z
        .union([
          z.lazy(() => LocalesUpdateEnvelopeInputObjectSchema),
          z.lazy(() => LocalesCreateInputObjectSchema),
        ])
        .optional(),
      link: z
        .union([
          z.lazy(() => LinkListNullableUpdateEnvelopeInputObjectSchema),
          z.lazy(() => LinkListCreateInputObjectSchema),
        ])
        .optional()
        .nullable(),
      writtenMusics: z
        .lazy(
          () => MusicUncheckedUpdateManyWithoutLyristsNestedInputObjectSchema,
        )
        .optional(),
      writtenMusicsIDs: z
        .union([
          z.lazy(() => ArtistUpdatewrittenMusicsIDsInputObjectSchema),
          z.string().array(),
        ])
        .optional(),
      composedMusicsIDs: z
        .union([
          z.lazy(() => ArtistUpdatecomposedMusicsIDsInputObjectSchema),
          z.string().array(),
        ])
        .optional(),
      musics: z
        .lazy(
          () => MusicUncheckedUpdateManyWithoutArtistsNestedInputObjectSchema,
        )
        .optional(),
      musicIDs: z
        .union([
          z.lazy(() => ArtistUpdatemusicIDsInputObjectSchema),
          z.string().array(),
        ])
        .optional(),
      bands: z
        .lazy(
          () => BandUncheckedUpdateManyWithoutArtistsNestedInputObjectSchema,
        )
        .optional(),
      bandIDs: z
        .union([
          z.lazy(() => ArtistUpdatebandIDsInputObjectSchema),
          z.string().array(),
        ])
        .optional(),
      albums: z
        .lazy(
          () => AlbumUncheckedUpdateManyWithoutArtistsNestedInputObjectSchema,
        )
        .optional(),
      albumIDs: z
        .union([
          z.lazy(() => ArtistUpdatealbumIDsInputObjectSchema),
          z.string().array(),
        ])
        .optional(),
      bookmarks: z
        .lazy(
          () => BookmarkUncheckedUpdateManyWithoutArtistNestedInputObjectSchema,
        )
        .optional(),
      tagMaps: z
        .lazy(
          () => TagMapUncheckedUpdateManyWithoutArtistNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const ArtistUncheckedUpdateWithoutComposedMusicsInputObjectSchema =
  Schema;
