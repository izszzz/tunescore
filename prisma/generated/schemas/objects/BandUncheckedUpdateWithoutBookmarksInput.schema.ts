import { z } from 'zod';
import { LocalesUpdateEnvelopeInputObjectSchema } from './LocalesUpdateEnvelopeInput.schema';
import { LocalesCreateInputObjectSchema } from './LocalesCreateInput.schema';
import { LinkListNullableUpdateEnvelopeInputObjectSchema } from './LinkListNullableUpdateEnvelopeInput.schema';
import { LinkListCreateInputObjectSchema } from './LinkListCreateInput.schema';
import { MusicUncheckedUpdateManyWithoutBandNestedInputObjectSchema } from './MusicUncheckedUpdateManyWithoutBandNestedInput.schema';
import { ArtistUncheckedUpdateManyWithoutBandsNestedInputObjectSchema } from './ArtistUncheckedUpdateManyWithoutBandsNestedInput.schema';
import { BandUpdateartistIDsInputObjectSchema } from './BandUpdateartistIDsInput.schema';
import { AlbumUncheckedUpdateManyWithoutBandNestedInputObjectSchema } from './AlbumUncheckedUpdateManyWithoutBandNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandUncheckedUpdateWithoutBookmarksInput> = z
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
    musics: z
      .lazy(() => MusicUncheckedUpdateManyWithoutBandNestedInputObjectSchema)
      .optional(),
    artists: z
      .lazy(() => ArtistUncheckedUpdateManyWithoutBandsNestedInputObjectSchema)
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
  })
  .strict();

export const BandUncheckedUpdateWithoutBookmarksInputObjectSchema = Schema;
