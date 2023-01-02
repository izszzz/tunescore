import { z } from 'zod';
import { LocalesUpdateEnvelopeInputObjectSchema } from './LocalesUpdateEnvelopeInput.schema';
import { LocalesCreateInputObjectSchema } from './LocalesCreateInput.schema';
import { LinkListNullableUpdateEnvelopeInputObjectSchema } from './LinkListNullableUpdateEnvelopeInput.schema';
import { LinkListCreateInputObjectSchema } from './LinkListCreateInput.schema';
import { BandUncheckedUpdateManyWithoutArtistsNestedInputObjectSchema } from './BandUncheckedUpdateManyWithoutArtistsNestedInput.schema';
import { ArtistUpdatebandIDsInputObjectSchema } from './ArtistUpdatebandIDsInput.schema';
import { AlbumUncheckedUpdateManyWithoutArtistsNestedInputObjectSchema } from './AlbumUncheckedUpdateManyWithoutArtistsNestedInput.schema';
import { ArtistUpdatealbumIDsInputObjectSchema } from './ArtistUpdatealbumIDsInput.schema';
import { BookmarkUncheckedUpdateManyWithoutArtistNestedInputObjectSchema } from './BookmarkUncheckedUpdateManyWithoutArtistNestedInput.schema';
import { TagMapUncheckedUpdateManyWithoutArtistNestedInputObjectSchema } from './TagMapUncheckedUpdateManyWithoutArtistNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistUncheckedUpdateWithoutParticipationsInput> =
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

export const ArtistUncheckedUpdateWithoutParticipationsInputObjectSchema =
  Schema;
