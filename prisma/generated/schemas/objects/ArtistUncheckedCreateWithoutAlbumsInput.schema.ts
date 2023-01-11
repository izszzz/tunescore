import { z } from 'zod';
import { LocaleCreateEnvelopeInputObjectSchema } from './LocaleCreateEnvelopeInput.schema';
import { LocaleCreateInputObjectSchema } from './LocaleCreateInput.schema';
import { LinkListNullableCreateEnvelopeInputObjectSchema } from './LinkListNullableCreateEnvelopeInput.schema';
import { LinkListCreateInputObjectSchema } from './LinkListCreateInput.schema';
import { ParticipationUncheckedCreateNestedManyWithoutArtistInputObjectSchema } from './ParticipationUncheckedCreateNestedManyWithoutArtistInput.schema';
import { BandUncheckedCreateNestedManyWithoutArtistsInputObjectSchema } from './BandUncheckedCreateNestedManyWithoutArtistsInput.schema';
import { ArtistCreatebandIDsInputObjectSchema } from './ArtistCreatebandIDsInput.schema';
import { ArtistCreatealbumIDsInputObjectSchema } from './ArtistCreatealbumIDsInput.schema';
import { BookmarkUncheckedCreateNestedManyWithoutArtistInputObjectSchema } from './BookmarkUncheckedCreateNestedManyWithoutArtistInput.schema';
import { TagMapUncheckedCreateNestedManyWithoutArtistInputObjectSchema } from './TagMapUncheckedCreateNestedManyWithoutArtistInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistUncheckedCreateWithoutAlbumsInput> = z
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
    participations: z
      .lazy(
        () =>
          ParticipationUncheckedCreateNestedManyWithoutArtistInputObjectSchema,
      )
      .optional(),
    bands: z
      .lazy(() => BandUncheckedCreateNestedManyWithoutArtistsInputObjectSchema)
      .optional(),
    bandIDs: z
      .union([
        z.lazy(() => ArtistCreatebandIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    albumIDs: z
      .union([
        z.lazy(() => ArtistCreatealbumIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    bookmarks: z
      .lazy(
        () => BookmarkUncheckedCreateNestedManyWithoutArtistInputObjectSchema,
      )
      .optional(),
    tagMaps: z
      .lazy(() => TagMapUncheckedCreateNestedManyWithoutArtistInputObjectSchema)
      .optional(),
  })
  .strict();

export const ArtistUncheckedCreateWithoutAlbumsInputObjectSchema = Schema;
