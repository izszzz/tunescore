import { z } from 'zod';
import { LocaleCreateEnvelopeInputObjectSchema } from './LocaleCreateEnvelopeInput.schema';
import { LocaleCreateInputObjectSchema } from './LocaleCreateInput.schema';
import { LinkListNullableCreateEnvelopeInputObjectSchema } from './LinkListNullableCreateEnvelopeInput.schema';
import { LinkListCreateInputObjectSchema } from './LinkListCreateInput.schema';
import { BandCreateartistIDsInputObjectSchema } from './BandCreateartistIDsInput.schema';
import { MusicUncheckedCreateNestedManyWithoutBandInputObjectSchema } from './MusicUncheckedCreateNestedManyWithoutBandInput.schema';
import { AlbumUncheckedCreateNestedManyWithoutBandInputObjectSchema } from './AlbumUncheckedCreateNestedManyWithoutBandInput.schema';
import { BookmarkUncheckedCreateNestedManyWithoutBandInputObjectSchema } from './BookmarkUncheckedCreateNestedManyWithoutBandInput.schema';
import { TagMapUncheckedCreateNestedManyWithoutBandInputObjectSchema } from './TagMapUncheckedCreateNestedManyWithoutBandInput.schema';
import { PointUncheckedCreateNestedManyWithoutBandInputObjectSchema } from './PointUncheckedCreateNestedManyWithoutBandInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandUncheckedCreateWithoutArtistsInput> = z
  .object({
    id: z.string().optional(),
    name: z.union([
      z.lazy(() => LocaleCreateEnvelopeInputObjectSchema),
      z.lazy(() => LocaleCreateInputObjectSchema),
    ]),
    link: z
      .union([
        z.lazy(() => LinkListNullableCreateEnvelopeInputObjectSchema),
        z.lazy(() => LinkListCreateInputObjectSchema),
      ])
      .optional()
      .nullable(),
    artistIDs: z
      .union([
        z.lazy(() => BandCreateartistIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    musics: z
      .lazy(() => MusicUncheckedCreateNestedManyWithoutBandInputObjectSchema)
      .optional(),
    albums: z
      .lazy(() => AlbumUncheckedCreateNestedManyWithoutBandInputObjectSchema)
      .optional(),
    bookmarks: z
      .lazy(() => BookmarkUncheckedCreateNestedManyWithoutBandInputObjectSchema)
      .optional(),
    tagMaps: z
      .lazy(() => TagMapUncheckedCreateNestedManyWithoutBandInputObjectSchema)
      .optional(),
    points: z
      .lazy(() => PointUncheckedCreateNestedManyWithoutBandInputObjectSchema)
      .optional(),
  })
  .strict();

export const BandUncheckedCreateWithoutArtistsInputObjectSchema = Schema;
