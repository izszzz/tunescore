import { z } from 'zod';
import { LocalesCreateEnvelopeInputObjectSchema } from './LocalesCreateEnvelopeInput.schema';
import { LocalesCreateInputObjectSchema } from './LocalesCreateInput.schema';
import { LinkNullableCreateEnvelopeInputObjectSchema } from './LinkNullableCreateEnvelopeInput.schema';
import { LinkCreateInputObjectSchema } from './LinkCreateInput.schema';
import { MusicCreateNestedManyWithoutLyristsInputObjectSchema } from './MusicCreateNestedManyWithoutLyristsInput.schema';
import { ArtistCreatewrittenMusicsIDsInputObjectSchema } from './ArtistCreatewrittenMusicsIDsInput.schema';
import { MusicCreateNestedManyWithoutComposersInputObjectSchema } from './MusicCreateNestedManyWithoutComposersInput.schema';
import { ArtistCreatecomposedMusicsIDsInputObjectSchema } from './ArtistCreatecomposedMusicsIDsInput.schema';
import { MusicCreateNestedManyWithoutArtistsInputObjectSchema } from './MusicCreateNestedManyWithoutArtistsInput.schema';
import { ArtistCreatemusicIDsInputObjectSchema } from './ArtistCreatemusicIDsInput.schema';
import { ArtistCreatebandIDsInputObjectSchema } from './ArtistCreatebandIDsInput.schema';
import { AlbumCreateNestedManyWithoutArtistsInputObjectSchema } from './AlbumCreateNestedManyWithoutArtistsInput.schema';
import { ArtistCreatealbumIDsInputObjectSchema } from './ArtistCreatealbumIDsInput.schema';
import { UserCreateNestedManyWithoutBookmarkArtistsInputObjectSchema } from './UserCreateNestedManyWithoutBookmarkArtistsInput.schema';
import { ArtistCreateuserIDsInputObjectSchema } from './ArtistCreateuserIDsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistCreateWithoutBandsInput> = z
  .object({
    id: z.string().optional(),
    name: z.union([
      z.lazy(() => LocalesCreateEnvelopeInputObjectSchema),
      z.lazy(() => LocalesCreateInputObjectSchema),
    ]),
    link: z
      .union([
        z.lazy(() => LinkNullableCreateEnvelopeInputObjectSchema),
        z.lazy(() => LinkCreateInputObjectSchema),
      ])
      .optional()
      .nullable(),
    writtenMusics: z
      .lazy(() => MusicCreateNestedManyWithoutLyristsInputObjectSchema)
      .optional(),
    writtenMusicsIDs: z
      .union([
        z.lazy(() => ArtistCreatewrittenMusicsIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    composedMusics: z
      .lazy(() => MusicCreateNestedManyWithoutComposersInputObjectSchema)
      .optional(),
    composedMusicsIDs: z
      .union([
        z.lazy(() => ArtistCreatecomposedMusicsIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    musics: z
      .lazy(() => MusicCreateNestedManyWithoutArtistsInputObjectSchema)
      .optional(),
    musicIDs: z
      .union([
        z.lazy(() => ArtistCreatemusicIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    bandIDs: z
      .union([
        z.lazy(() => ArtistCreatebandIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    albums: z
      .lazy(() => AlbumCreateNestedManyWithoutArtistsInputObjectSchema)
      .optional(),
    albumIDs: z
      .union([
        z.lazy(() => ArtistCreatealbumIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    bookmarks: z
      .lazy(() => UserCreateNestedManyWithoutBookmarkArtistsInputObjectSchema)
      .optional(),
    userIDs: z
      .union([
        z.lazy(() => ArtistCreateuserIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const ArtistCreateWithoutBandsInputObjectSchema = Schema;
