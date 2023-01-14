import { z } from 'zod';
import { LocaleCreateEnvelopeInputObjectSchema } from './LocaleCreateEnvelopeInput.schema';
import { LocaleCreateInputObjectSchema } from './LocaleCreateInput.schema';
import { LinkListNullableCreateEnvelopeInputObjectSchema } from './LinkListNullableCreateEnvelopeInput.schema';
import { LinkListCreateInputObjectSchema } from './LinkListCreateInput.schema';
import { ArtistCreateNestedManyWithoutBandsInputObjectSchema } from './ArtistCreateNestedManyWithoutBandsInput.schema';
import { BandCreateartistIDsInputObjectSchema } from './BandCreateartistIDsInput.schema';
import { AlbumCreateNestedManyWithoutBandInputObjectSchema } from './AlbumCreateNestedManyWithoutBandInput.schema';
import { BookmarkCreateNestedManyWithoutBandInputObjectSchema } from './BookmarkCreateNestedManyWithoutBandInput.schema';
import { TagMapCreateNestedManyWithoutBandInputObjectSchema } from './TagMapCreateNestedManyWithoutBandInput.schema';
import { PointCreateNestedManyWithoutBandInputObjectSchema } from './PointCreateNestedManyWithoutBandInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandCreateWithoutMusicsInput> = z
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
    artists: z
      .lazy(() => ArtistCreateNestedManyWithoutBandsInputObjectSchema)
      .optional(),
    artistIDs: z
      .union([
        z.lazy(() => BandCreateartistIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    albums: z
      .lazy(() => AlbumCreateNestedManyWithoutBandInputObjectSchema)
      .optional(),
    bookmarks: z
      .lazy(() => BookmarkCreateNestedManyWithoutBandInputObjectSchema)
      .optional(),
    tagMaps: z
      .lazy(() => TagMapCreateNestedManyWithoutBandInputObjectSchema)
      .optional(),
    points: z
      .lazy(() => PointCreateNestedManyWithoutBandInputObjectSchema)
      .optional(),
  })
  .strict();

export const BandCreateWithoutMusicsInputObjectSchema = Schema;
