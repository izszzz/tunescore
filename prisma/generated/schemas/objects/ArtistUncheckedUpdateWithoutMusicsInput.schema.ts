import { z } from 'zod';
import { LocalesUpdateEnvelopeInputObjectSchema } from './LocalesUpdateEnvelopeInput.schema';
import { LocalesCreateInputObjectSchema } from './LocalesCreateInput.schema';
import { LinkNullableUpdateEnvelopeInputObjectSchema } from './LinkNullableUpdateEnvelopeInput.schema';
import { LinkCreateInputObjectSchema } from './LinkCreateInput.schema';
import { MusicUncheckedUpdateManyWithoutLyristsNestedInputObjectSchema } from './MusicUncheckedUpdateManyWithoutLyristsNestedInput.schema';
import { ArtistUpdatewrittenMusicsIDsInputObjectSchema } from './ArtistUpdatewrittenMusicsIDsInput.schema';
import { MusicUncheckedUpdateManyWithoutComposersNestedInputObjectSchema } from './MusicUncheckedUpdateManyWithoutComposersNestedInput.schema';
import { ArtistUpdatecomposedMusicsIDsInputObjectSchema } from './ArtistUpdatecomposedMusicsIDsInput.schema';
import { ArtistUpdatemusicIDsInputObjectSchema } from './ArtistUpdatemusicIDsInput.schema';
import { BandUncheckedUpdateManyWithoutArtistsNestedInputObjectSchema } from './BandUncheckedUpdateManyWithoutArtistsNestedInput.schema';
import { ArtistUpdatebandIDsInputObjectSchema } from './ArtistUpdatebandIDsInput.schema';
import { AlbumUncheckedUpdateManyWithoutArtistsNestedInputObjectSchema } from './AlbumUncheckedUpdateManyWithoutArtistsNestedInput.schema';
import { ArtistUpdatealbumIDsInputObjectSchema } from './ArtistUpdatealbumIDsInput.schema';
import { UserUncheckedUpdateManyWithoutBookmarkArtistsNestedInputObjectSchema } from './UserUncheckedUpdateManyWithoutBookmarkArtistsNestedInput.schema';
import { ArtistUpdateuserIDsInputObjectSchema } from './ArtistUpdateuserIDsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistUncheckedUpdateWithoutMusicsInput> = z
  .object({
    name: z
      .union([
        z.lazy(() => LocalesUpdateEnvelopeInputObjectSchema),
        z.lazy(() => LocalesCreateInputObjectSchema),
      ])
      .optional(),
    link: z
      .union([
        z.lazy(() => LinkNullableUpdateEnvelopeInputObjectSchema),
        z.lazy(() => LinkCreateInputObjectSchema),
      ])
      .optional()
      .nullable(),
    writtenMusics: z
      .lazy(() => MusicUncheckedUpdateManyWithoutLyristsNestedInputObjectSchema)
      .optional(),
    writtenMusicsIDs: z
      .union([
        z.lazy(() => ArtistUpdatewrittenMusicsIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    composedMusics: z
      .lazy(
        () => MusicUncheckedUpdateManyWithoutComposersNestedInputObjectSchema,
      )
      .optional(),
    composedMusicsIDs: z
      .union([
        z.lazy(() => ArtistUpdatecomposedMusicsIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    musicIDs: z
      .union([
        z.lazy(() => ArtistUpdatemusicIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    bands: z
      .lazy(() => BandUncheckedUpdateManyWithoutArtistsNestedInputObjectSchema)
      .optional(),
    bandIDs: z
      .union([
        z.lazy(() => ArtistUpdatebandIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    albums: z
      .lazy(() => AlbumUncheckedUpdateManyWithoutArtistsNestedInputObjectSchema)
      .optional(),
    albumIDs: z
      .union([
        z.lazy(() => ArtistUpdatealbumIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    bookmarks: z
      .lazy(
        () =>
          UserUncheckedUpdateManyWithoutBookmarkArtistsNestedInputObjectSchema,
      )
      .optional(),
    userIDs: z
      .union([
        z.lazy(() => ArtistUpdateuserIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const ArtistUncheckedUpdateWithoutMusicsInputObjectSchema = Schema;