import { z } from 'zod';
import { LocaleUpdateEnvelopeInputObjectSchema } from './LocaleUpdateEnvelopeInput.schema';
import { LocaleCreateInputObjectSchema } from './LocaleCreateInput.schema';
import { LinkListNullableUpdateEnvelopeInputObjectSchema } from './LinkListNullableUpdateEnvelopeInput.schema';
import { LinkListCreateInputObjectSchema } from './LinkListCreateInput.schema';
import { ArtistUncheckedUpdateManyWithoutBandsNestedInputObjectSchema } from './ArtistUncheckedUpdateManyWithoutBandsNestedInput.schema';
import { BandUpdateartistIDsInputObjectSchema } from './BandUpdateartistIDsInput.schema';
import { MusicUncheckedUpdateManyWithoutBandNestedInputObjectSchema } from './MusicUncheckedUpdateManyWithoutBandNestedInput.schema';
import { AlbumUncheckedUpdateManyWithoutBandNestedInputObjectSchema } from './AlbumUncheckedUpdateManyWithoutBandNestedInput.schema';
import { BookmarkUncheckedUpdateManyWithoutBandNestedInputObjectSchema } from './BookmarkUncheckedUpdateManyWithoutBandNestedInput.schema';
import { TagMapUncheckedUpdateManyWithoutBandNestedInputObjectSchema } from './TagMapUncheckedUpdateManyWithoutBandNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandUncheckedUpdateInput> = z
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
    artists: z
      .lazy(() => ArtistUncheckedUpdateManyWithoutBandsNestedInputObjectSchema)
      .optional(),
    artistIDs: z
      .union([
        z.lazy(() => BandUpdateartistIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    musics: z
      .lazy(() => MusicUncheckedUpdateManyWithoutBandNestedInputObjectSchema)
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

export const BandUncheckedUpdateInputObjectSchema = Schema;
