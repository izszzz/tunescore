import { z } from 'zod';
import { LocaleUpdateEnvelopeInputObjectSchema } from './LocaleUpdateEnvelopeInput.schema';
import { LocaleCreateInputObjectSchema } from './LocaleCreateInput.schema';
import { LinkListNullableUpdateEnvelopeInputObjectSchema } from './LinkListNullableUpdateEnvelopeInput.schema';
import { LinkListCreateInputObjectSchema } from './LinkListCreateInput.schema';
import { MusicUncheckedUpdateManyWithoutBandNestedInputObjectSchema } from './MusicUncheckedUpdateManyWithoutBandNestedInput.schema';
import { BandUpdateartistIDsInputObjectSchema } from './BandUpdateartistIDsInput.schema';
import { AlbumUncheckedUpdateManyWithoutBandNestedInputObjectSchema } from './AlbumUncheckedUpdateManyWithoutBandNestedInput.schema';
import { BookmarkUncheckedUpdateManyWithoutBandNestedInputObjectSchema } from './BookmarkUncheckedUpdateManyWithoutBandNestedInput.schema';
import { TagMapUncheckedUpdateManyWithoutBandNestedInputObjectSchema } from './TagMapUncheckedUpdateManyWithoutBandNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandUncheckedUpdateWithoutArtistsInput> = z
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
    musics: z
      .lazy(() => MusicUncheckedUpdateManyWithoutBandNestedInputObjectSchema)
      .optional(),
    artistIDs: z
      .union([
        z.lazy(() => BandUpdateartistIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    albums: z
      .lazy(() => AlbumUncheckedUpdateManyWithoutBandNestedInputObjectSchema)
      .optional(),
    bookmarks: z
      .lazy(() => BookmarkUncheckedUpdateManyWithoutBandNestedInputObjectSchema)
      .optional(),
    tagMaps: z
      .lazy(() => TagMapUncheckedUpdateManyWithoutBandNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const BandUncheckedUpdateWithoutArtistsInputObjectSchema = Schema;
