import { z } from 'zod';
import { LocaleUpdateEnvelopeInputObjectSchema } from './LocaleUpdateEnvelopeInput.schema';
import { LocaleCreateInputObjectSchema } from './LocaleCreateInput.schema';
import { LinkListNullableUpdateEnvelopeInputObjectSchema } from './LinkListNullableUpdateEnvelopeInput.schema';
import { LinkListCreateInputObjectSchema } from './LinkListCreateInput.schema';
import { ArtistUpdatebandIDsInputObjectSchema } from './ArtistUpdatebandIDsInput.schema';
import { AlbumUncheckedUpdateManyWithoutArtistsNestedInputObjectSchema } from './AlbumUncheckedUpdateManyWithoutArtistsNestedInput.schema';
import { ArtistUpdatealbumIDsInputObjectSchema } from './ArtistUpdatealbumIDsInput.schema';
import { ParticipationUncheckedUpdateManyWithoutArtistNestedInputObjectSchema } from './ParticipationUncheckedUpdateManyWithoutArtistNestedInput.schema';
import { BookmarkUncheckedUpdateManyWithoutArtistNestedInputObjectSchema } from './BookmarkUncheckedUpdateManyWithoutArtistNestedInput.schema';
import { TagMapUncheckedUpdateManyWithoutArtistNestedInputObjectSchema } from './TagMapUncheckedUpdateManyWithoutArtistNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistUncheckedUpdateWithoutBandsInput> = z
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
    bandIDs: z
      .union([
        z.lazy(() => ArtistUpdatebandIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    albums: z
      .lazy(() => AlbumUncheckedUpdateManyWithoutArtistsNestedInputObjectSchema)
      .optional(),
    albumIDs: z
      .union([
        z.lazy(() => ArtistUpdatealbumIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    participations: z
      .lazy(
        () =>
          ParticipationUncheckedUpdateManyWithoutArtistNestedInputObjectSchema,
      )
      .optional(),
    bookmarks: z
      .lazy(
        () => BookmarkUncheckedUpdateManyWithoutArtistNestedInputObjectSchema,
      )
      .optional(),
    tagMaps: z
      .lazy(() => TagMapUncheckedUpdateManyWithoutArtistNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ArtistUncheckedUpdateWithoutBandsInputObjectSchema = Schema;
