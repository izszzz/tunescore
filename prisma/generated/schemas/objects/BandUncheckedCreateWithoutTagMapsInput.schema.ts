import { z } from 'zod';
import { LocaleCreateEnvelopeInputObjectSchema } from './LocaleCreateEnvelopeInput.schema';
import { LocaleCreateInputObjectSchema } from './LocaleCreateInput.schema';
import { LinkListNullableCreateEnvelopeInputObjectSchema } from './LinkListNullableCreateEnvelopeInput.schema';
import { LinkListCreateInputObjectSchema } from './LinkListCreateInput.schema';
import { ArtistUncheckedCreateNestedManyWithoutBandsInputObjectSchema } from './ArtistUncheckedCreateNestedManyWithoutBandsInput.schema';
import { BandCreateartistIDsInputObjectSchema } from './BandCreateartistIDsInput.schema';
import { MusicUncheckedCreateNestedManyWithoutBandInputObjectSchema } from './MusicUncheckedCreateNestedManyWithoutBandInput.schema';
import { AlbumUncheckedCreateNestedManyWithoutBandInputObjectSchema } from './AlbumUncheckedCreateNestedManyWithoutBandInput.schema';
import { BookmarkUncheckedCreateNestedManyWithoutBandInputObjectSchema } from './BookmarkUncheckedCreateNestedManyWithoutBandInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandUncheckedCreateWithoutTagMapsInput> = z
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
      .lazy(() => ArtistUncheckedCreateNestedManyWithoutBandsInputObjectSchema)
      .optional(),
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
  })
  .strict();

export const BandUncheckedCreateWithoutTagMapsInputObjectSchema = Schema;
