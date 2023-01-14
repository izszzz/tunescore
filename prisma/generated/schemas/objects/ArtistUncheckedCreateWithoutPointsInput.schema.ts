import { z } from 'zod';
import { LocaleCreateEnvelopeInputObjectSchema } from './LocaleCreateEnvelopeInput.schema';
import { LocaleCreateInputObjectSchema } from './LocaleCreateInput.schema';
import { LinkListNullableCreateEnvelopeInputObjectSchema } from './LinkListNullableCreateEnvelopeInput.schema';
import { LinkListCreateInputObjectSchema } from './LinkListCreateInput.schema';
import { BandUncheckedCreateNestedManyWithoutArtistsInputObjectSchema } from './BandUncheckedCreateNestedManyWithoutArtistsInput.schema';
import { ArtistCreatebandIDsInputObjectSchema } from './ArtistCreatebandIDsInput.schema';
import { AlbumUncheckedCreateNestedManyWithoutArtistsInputObjectSchema } from './AlbumUncheckedCreateNestedManyWithoutArtistsInput.schema';
import { ArtistCreatealbumIDsInputObjectSchema } from './ArtistCreatealbumIDsInput.schema';
import { ParticipationUncheckedCreateNestedManyWithoutArtistInputObjectSchema } from './ParticipationUncheckedCreateNestedManyWithoutArtistInput.schema';
import { BookmarkUncheckedCreateNestedManyWithoutArtistInputObjectSchema } from './BookmarkUncheckedCreateNestedManyWithoutArtistInput.schema';
import { TagMapUncheckedCreateNestedManyWithoutArtistInputObjectSchema } from './TagMapUncheckedCreateNestedManyWithoutArtistInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistUncheckedCreateWithoutPointsInput> = z
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
    bands: z
      .lazy(() => BandUncheckedCreateNestedManyWithoutArtistsInputObjectSchema)
      .optional(),
    bandIDs: z
      .union([
        z.lazy(() => ArtistCreatebandIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    albums: z
      .lazy(() => AlbumUncheckedCreateNestedManyWithoutArtistsInputObjectSchema)
      .optional(),
    albumIDs: z
      .union([
        z.lazy(() => ArtistCreatealbumIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    participations: z
      .lazy(
        () =>
          ParticipationUncheckedCreateNestedManyWithoutArtistInputObjectSchema,
      )
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

export const ArtistUncheckedCreateWithoutPointsInputObjectSchema = Schema;
