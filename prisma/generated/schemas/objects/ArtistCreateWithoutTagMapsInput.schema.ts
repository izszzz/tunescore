import { z } from 'zod';
import { LocalesCreateEnvelopeInputObjectSchema } from './LocalesCreateEnvelopeInput.schema';
import { LocalesCreateInputObjectSchema } from './LocalesCreateInput.schema';
import { LinkListNullableCreateEnvelopeInputObjectSchema } from './LinkListNullableCreateEnvelopeInput.schema';
import { LinkListCreateInputObjectSchema } from './LinkListCreateInput.schema';
import { MusicCreateNestedManyWithoutLyristsInputObjectSchema } from './MusicCreateNestedManyWithoutLyristsInput.schema';
import { ArtistCreatewrittenMusicsIDsInputObjectSchema } from './ArtistCreatewrittenMusicsIDsInput.schema';
import { MusicCreateNestedManyWithoutComposersInputObjectSchema } from './MusicCreateNestedManyWithoutComposersInput.schema';
import { ArtistCreatecomposedMusicsIDsInputObjectSchema } from './ArtistCreatecomposedMusicsIDsInput.schema';
import { MusicCreateNestedManyWithoutArtistsInputObjectSchema } from './MusicCreateNestedManyWithoutArtistsInput.schema';
import { ArtistCreatemusicIDsInputObjectSchema } from './ArtistCreatemusicIDsInput.schema';
import { BandCreateNestedManyWithoutArtistsInputObjectSchema } from './BandCreateNestedManyWithoutArtistsInput.schema';
import { ArtistCreatebandIDsInputObjectSchema } from './ArtistCreatebandIDsInput.schema';
import { AlbumCreateNestedManyWithoutArtistsInputObjectSchema } from './AlbumCreateNestedManyWithoutArtistsInput.schema';
import { ArtistCreatealbumIDsInputObjectSchema } from './ArtistCreatealbumIDsInput.schema';
import { BookmarkCreateNestedManyWithoutArtistInputObjectSchema } from './BookmarkCreateNestedManyWithoutArtistInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistCreateWithoutTagMapsInput> = z
  .object({
    id: z.string().optional(),
    name: z.union([
      z.lazy(() => LocalesCreateEnvelopeInputObjectSchema),
      z.lazy(() => LocalesCreateInputObjectSchema),
    ]),
    link: z
      .union([
        z.lazy(() => LinkListNullableCreateEnvelopeInputObjectSchema),
        z.lazy(() => LinkListCreateInputObjectSchema),
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
    bands: z
      .lazy(() => BandCreateNestedManyWithoutArtistsInputObjectSchema)
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
      .lazy(() => BookmarkCreateNestedManyWithoutArtistInputObjectSchema)
      .optional(),
  })
  .strict();

export const ArtistCreateWithoutTagMapsInputObjectSchema = Schema;
