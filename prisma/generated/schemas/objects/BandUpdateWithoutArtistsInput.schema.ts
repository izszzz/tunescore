import { z } from 'zod';
import { LocalesUpdateEnvelopeInputObjectSchema } from './LocalesUpdateEnvelopeInput.schema';
import { LocalesCreateInputObjectSchema } from './LocalesCreateInput.schema';
import { LinkListNullableUpdateEnvelopeInputObjectSchema } from './LinkListNullableUpdateEnvelopeInput.schema';
import { LinkListCreateInputObjectSchema } from './LinkListCreateInput.schema';
import { MusicUpdateManyWithoutBandNestedInputObjectSchema } from './MusicUpdateManyWithoutBandNestedInput.schema';
import { BandUpdateartistIDsInputObjectSchema } from './BandUpdateartistIDsInput.schema';
import { AlbumUpdateManyWithoutBandNestedInputObjectSchema } from './AlbumUpdateManyWithoutBandNestedInput.schema';
import { BookmarkUpdateManyWithoutBandNestedInputObjectSchema } from './BookmarkUpdateManyWithoutBandNestedInput.schema';
import { TagMapUpdateManyWithoutBandNestedInputObjectSchema } from './TagMapUpdateManyWithoutBandNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandUpdateWithoutArtistsInput> = z
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
      .lazy(() => MusicUpdateManyWithoutBandNestedInputObjectSchema)
      .optional(),
    artistIDs: z
      .union([
        z.lazy(() => BandUpdateartistIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    albums: z
      .lazy(() => AlbumUpdateManyWithoutBandNestedInputObjectSchema)
      .optional(),
    bookmarks: z
      .lazy(() => BookmarkUpdateManyWithoutBandNestedInputObjectSchema)
      .optional(),
    tagMaps: z
      .lazy(() => TagMapUpdateManyWithoutBandNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const BandUpdateWithoutArtistsInputObjectSchema = Schema;
