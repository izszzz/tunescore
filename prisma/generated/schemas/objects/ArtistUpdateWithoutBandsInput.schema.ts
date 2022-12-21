import { z } from 'zod';
import { LocalesUpdateEnvelopeInputObjectSchema } from './LocalesUpdateEnvelopeInput.schema';
import { LocalesCreateInputObjectSchema } from './LocalesCreateInput.schema';
import { LinkListNullableUpdateEnvelopeInputObjectSchema } from './LinkListNullableUpdateEnvelopeInput.schema';
import { LinkListCreateInputObjectSchema } from './LinkListCreateInput.schema';
import { MusicUpdateManyWithoutLyristsNestedInputObjectSchema } from './MusicUpdateManyWithoutLyristsNestedInput.schema';
import { ArtistUpdatewrittenMusicsIDsInputObjectSchema } from './ArtistUpdatewrittenMusicsIDsInput.schema';
import { MusicUpdateManyWithoutComposersNestedInputObjectSchema } from './MusicUpdateManyWithoutComposersNestedInput.schema';
import { ArtistUpdatecomposedMusicsIDsInputObjectSchema } from './ArtistUpdatecomposedMusicsIDsInput.schema';
import { MusicUpdateManyWithoutArtistsNestedInputObjectSchema } from './MusicUpdateManyWithoutArtistsNestedInput.schema';
import { ArtistUpdatemusicIDsInputObjectSchema } from './ArtistUpdatemusicIDsInput.schema';
import { ArtistUpdatebandIDsInputObjectSchema } from './ArtistUpdatebandIDsInput.schema';
import { AlbumUpdateManyWithoutArtistsNestedInputObjectSchema } from './AlbumUpdateManyWithoutArtistsNestedInput.schema';
import { ArtistUpdatealbumIDsInputObjectSchema } from './ArtistUpdatealbumIDsInput.schema';
import { UserUpdateManyWithoutBookmarkArtistsNestedInputObjectSchema } from './UserUpdateManyWithoutBookmarkArtistsNestedInput.schema';
import { ArtistUpdateuserIDsInputObjectSchema } from './ArtistUpdateuserIDsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistUpdateWithoutBandsInput> = z
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
    writtenMusics: z
      .lazy(() => MusicUpdateManyWithoutLyristsNestedInputObjectSchema)
      .optional(),
    writtenMusicsIDs: z
      .union([
        z.lazy(() => ArtistUpdatewrittenMusicsIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    composedMusics: z
      .lazy(() => MusicUpdateManyWithoutComposersNestedInputObjectSchema)
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
    bandIDs: z
      .union([
        z.lazy(() => ArtistUpdatebandIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    albums: z
      .lazy(() => AlbumUpdateManyWithoutArtistsNestedInputObjectSchema)
      .optional(),
    albumIDs: z
      .union([
        z.lazy(() => ArtistUpdatealbumIDsInputObjectSchema),
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

export const ArtistUpdateWithoutBandsInputObjectSchema = Schema;
