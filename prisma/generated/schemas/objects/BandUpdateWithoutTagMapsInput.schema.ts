import { z } from 'zod';
import { LocalesUpdateEnvelopeInputObjectSchema } from './LocalesUpdateEnvelopeInput.schema';
import { LocalesCreateInputObjectSchema } from './LocalesCreateInput.schema';
import { LinkListNullableUpdateEnvelopeInputObjectSchema } from './LinkListNullableUpdateEnvelopeInput.schema';
import { LinkListCreateInputObjectSchema } from './LinkListCreateInput.schema';
import { MusicUpdateManyWithoutBandNestedInputObjectSchema } from './MusicUpdateManyWithoutBandNestedInput.schema';
import { ArtistUpdateManyWithoutBandsNestedInputObjectSchema } from './ArtistUpdateManyWithoutBandsNestedInput.schema';
import { BandUpdateartistIDsInputObjectSchema } from './BandUpdateartistIDsInput.schema';
import { AlbumUpdateManyWithoutBandNestedInputObjectSchema } from './AlbumUpdateManyWithoutBandNestedInput.schema';
import { BookmarkUpdateManyWithoutBandNestedInputObjectSchema } from './BookmarkUpdateManyWithoutBandNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandUpdateWithoutTagMapsInput> = z
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
    artists: z
      .lazy(() => ArtistUpdateManyWithoutBandsNestedInputObjectSchema)
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
  })
  .strict();

export const BandUpdateWithoutTagMapsInputObjectSchema = Schema;