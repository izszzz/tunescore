import { z } from 'zod';
import { LocaleUpdateEnvelopeInputObjectSchema } from './LocaleUpdateEnvelopeInput.schema';
import { LocaleCreateInputObjectSchema } from './LocaleCreateInput.schema';
import { LinkListNullableUpdateEnvelopeInputObjectSchema } from './LinkListNullableUpdateEnvelopeInput.schema';
import { LinkListCreateInputObjectSchema } from './LinkListCreateInput.schema';
import { BandUpdateManyWithoutArtistsNestedInputObjectSchema } from './BandUpdateManyWithoutArtistsNestedInput.schema';
import { ArtistUpdatebandIDsInputObjectSchema } from './ArtistUpdatebandIDsInput.schema';
import { AlbumUpdateManyWithoutArtistsNestedInputObjectSchema } from './AlbumUpdateManyWithoutArtistsNestedInput.schema';
import { ArtistUpdatealbumIDsInputObjectSchema } from './ArtistUpdatealbumIDsInput.schema';
import { BookmarkUpdateManyWithoutArtistNestedInputObjectSchema } from './BookmarkUpdateManyWithoutArtistNestedInput.schema';
import { TagMapUpdateManyWithoutArtistNestedInputObjectSchema } from './TagMapUpdateManyWithoutArtistNestedInput.schema';
import { PointUpdateManyWithoutArtistNestedInputObjectSchema } from './PointUpdateManyWithoutArtistNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistUpdateWithoutParticipationsInput> = z
  .object({
    name: z
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
    bands: z
      .lazy(() => BandUpdateManyWithoutArtistsNestedInputObjectSchema)
      .optional(),
    bandIDs: z
      .union([
        z.lazy(() => ArtistUpdatebandIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    albums: z
      .lazy(() => AlbumUpdateManyWithoutArtistsNestedInputObjectSchema)
      .optional(),
    albumIDs: z
      .union([
        z.lazy(() => ArtistUpdatealbumIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    bookmarks: z
      .lazy(() => BookmarkUpdateManyWithoutArtistNestedInputObjectSchema)
      .optional(),
    tagMaps: z
      .lazy(() => TagMapUpdateManyWithoutArtistNestedInputObjectSchema)
      .optional(),
    points: z
      .lazy(() => PointUpdateManyWithoutArtistNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ArtistUpdateWithoutParticipationsInputObjectSchema = Schema;
