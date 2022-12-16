import { z } from 'zod';
import { LocalesCreateEnvelopeInputObjectSchema } from './LocalesCreateEnvelopeInput.schema';
import { LocalesCreateInputObjectSchema } from './LocalesCreateInput.schema';
import { LinkNullableCreateEnvelopeInputObjectSchema } from './LinkNullableCreateEnvelopeInput.schema';
import { LinkCreateInputObjectSchema } from './LinkCreateInput.schema';
import { ArtistCreatewrittenMusicsIDsInputObjectSchema } from './ArtistCreatewrittenMusicsIDsInput.schema';
import { MusicUncheckedCreateNestedManyWithoutComposersInputObjectSchema } from './MusicUncheckedCreateNestedManyWithoutComposersInput.schema';
import { ArtistCreatecomposedMusicsIDsInputObjectSchema } from './ArtistCreatecomposedMusicsIDsInput.schema';
import { MusicUncheckedCreateNestedManyWithoutArtistsInputObjectSchema } from './MusicUncheckedCreateNestedManyWithoutArtistsInput.schema';
import { ArtistCreatemusicIDsInputObjectSchema } from './ArtistCreatemusicIDsInput.schema';
import { BandUncheckedCreateNestedManyWithoutArtistsInputObjectSchema } from './BandUncheckedCreateNestedManyWithoutArtistsInput.schema';
import { ArtistCreatebandIDsInputObjectSchema } from './ArtistCreatebandIDsInput.schema';
import { AlbumUncheckedCreateNestedManyWithoutArtistsInputObjectSchema } from './AlbumUncheckedCreateNestedManyWithoutArtistsInput.schema';
import { ArtistCreatealbumIDsInputObjectSchema } from './ArtistCreatealbumIDsInput.schema';
import { UserUncheckedCreateNestedManyWithoutBookmarkArtistsInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutBookmarkArtistsInput.schema';
import { ArtistCreateuserIDsInputObjectSchema } from './ArtistCreateuserIDsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistUncheckedCreateWithoutWrittenMusicsInput> =
  z
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
      writtenMusicsIDs: z
        .union([
          z.lazy(() => ArtistCreatewrittenMusicsIDsInputObjectSchema),
          z.string().array(),
        ])
        .optional(),
      composedMusics: z
        .lazy(
          () => MusicUncheckedCreateNestedManyWithoutComposersInputObjectSchema,
        )
        .optional(),
      composedMusicsIDs: z
        .union([
          z.lazy(() => ArtistCreatecomposedMusicsIDsInputObjectSchema),
          z.string().array(),
        ])
        .optional(),
      musics: z
        .lazy(
          () => MusicUncheckedCreateNestedManyWithoutArtistsInputObjectSchema,
        )
        .optional(),
      musicIDs: z
        .union([
          z.lazy(() => ArtistCreatemusicIDsInputObjectSchema),
          z.string().array(),
        ])
        .optional(),
      bands: z
        .lazy(
          () => BandUncheckedCreateNestedManyWithoutArtistsInputObjectSchema,
        )
        .optional(),
      bandIDs: z
        .union([
          z.lazy(() => ArtistCreatebandIDsInputObjectSchema),
          z.string().array(),
        ])
        .optional(),
      albums: z
        .lazy(
          () => AlbumUncheckedCreateNestedManyWithoutArtistsInputObjectSchema,
        )
        .optional(),
      albumIDs: z
        .union([
          z.lazy(() => ArtistCreatealbumIDsInputObjectSchema),
          z.string().array(),
        ])
        .optional(),
      bookmarks: z
        .lazy(
          () =>
            UserUncheckedCreateNestedManyWithoutBookmarkArtistsInputObjectSchema,
        )
        .optional(),
      userIDs: z
        .union([
          z.lazy(() => ArtistCreateuserIDsInputObjectSchema),
          z.string().array(),
        ])
        .optional(),
    })
    .strict();

export const ArtistUncheckedCreateWithoutWrittenMusicsInputObjectSchema =
  Schema;