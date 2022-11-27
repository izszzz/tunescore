import { z } from 'zod';
import { LocalesUpdateEnvelopeInputObjectSchema } from './LocalesUpdateEnvelopeInput.schema';
import { LocalesCreateInputObjectSchema } from './LocalesCreateInput.schema';
import { LinkNullableUpdateEnvelopeInputObjectSchema } from './LinkNullableUpdateEnvelopeInput.schema';
import { LinkCreateInputObjectSchema } from './LinkCreateInput.schema';
import { MusicUpdateManyWithoutLyristsNestedInputObjectSchema } from './MusicUpdateManyWithoutLyristsNestedInput.schema';
import { ArtistUpdatewrittenMusicsIDsInputObjectSchema } from './ArtistUpdatewrittenMusicsIDsInput.schema';
import { ArtistUpdatecomposedMusicsIDsInputObjectSchema } from './ArtistUpdatecomposedMusicsIDsInput.schema';
import { MusicUpdateManyWithoutArtistsNestedInputObjectSchema } from './MusicUpdateManyWithoutArtistsNestedInput.schema';
import { ArtistUpdatemusicIDsInputObjectSchema } from './ArtistUpdatemusicIDsInput.schema';
import { BandUpdateManyWithoutArtistsNestedInputObjectSchema } from './BandUpdateManyWithoutArtistsNestedInput.schema';
import { ArtistUpdatebandIDsInputObjectSchema } from './ArtistUpdatebandIDsInput.schema';
import { UserUpdateManyWithoutBookmarkArtistsNestedInputObjectSchema } from './UserUpdateManyWithoutBookmarkArtistsNestedInput.schema';
import { ArtistUpdateuserIDsInputObjectSchema } from './ArtistUpdateuserIDsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistUpdateWithoutComposedMusicsInput> = z
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
      .lazy(() => MusicUpdateManyWithoutLyristsNestedInputObjectSchema)
      .optional(),
    writtenMusicsIDs: z
      .union([
        z.lazy(() => ArtistUpdatewrittenMusicsIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    composedMusicsIDs: z
      .union([
        z.lazy(() => ArtistUpdatecomposedMusicsIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    musics: z
      .lazy(() => MusicUpdateManyWithoutArtistsNestedInputObjectSchema)
      .optional(),
    musicIDs: z
      .union([
        z.lazy(() => ArtistUpdatemusicIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    bands: z
      .lazy(() => BandUpdateManyWithoutArtistsNestedInputObjectSchema)
      .optional(),
    bandIDs: z
      .union([
        z.lazy(() => ArtistUpdatebandIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    bookmarks: z
      .lazy(() => UserUpdateManyWithoutBookmarkArtistsNestedInputObjectSchema)
      .optional(),
    userIDs: z
      .union([
        z.lazy(() => ArtistUpdateuserIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const ArtistUpdateWithoutComposedMusicsInputObjectSchema = Schema;
