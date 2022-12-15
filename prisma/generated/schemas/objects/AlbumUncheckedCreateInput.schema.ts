import { z } from 'zod';
import { LocalesCreateEnvelopeInputObjectSchema } from './LocalesCreateEnvelopeInput.schema';
import { LocalesCreateInputObjectSchema } from './LocalesCreateInput.schema';
import { MusicUncheckedCreateNestedManyWithoutAlbumsInputObjectSchema } from './MusicUncheckedCreateNestedManyWithoutAlbumsInput.schema';
import { AlbumCreatemusicIDsInputObjectSchema } from './AlbumCreatemusicIDsInput.schema';
import { ArtistUncheckedCreateNestedManyWithoutAlbumsInputObjectSchema } from './ArtistUncheckedCreateNestedManyWithoutAlbumsInput.schema';
import { AlbumCreateartistIDsInputObjectSchema } from './AlbumCreateartistIDsInput.schema';
import { UserUncheckedCreateNestedManyWithoutBookmarkAlbumsInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutBookmarkAlbumsInput.schema';
import { AlbumCreateuserIDsInputObjectSchema } from './AlbumCreateuserIDsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    title: z.union([
      z.lazy(() => LocalesCreateEnvelopeInputObjectSchema),
      z.lazy(() => LocalesCreateInputObjectSchema),
    ]),
    bandId: z.string().optional().nullable(),
    musics: z
      .lazy(() => MusicUncheckedCreateNestedManyWithoutAlbumsInputObjectSchema)
      .optional(),
    musicIDs: z
      .union([
        z.lazy(() => AlbumCreatemusicIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    artists: z
      .lazy(() => ArtistUncheckedCreateNestedManyWithoutAlbumsInputObjectSchema)
      .optional(),
    artistIDs: z
      .union([
        z.lazy(() => AlbumCreateartistIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    bookmarks: z
      .lazy(
        () =>
          UserUncheckedCreateNestedManyWithoutBookmarkAlbumsInputObjectSchema,
      )
      .optional(),
    userIDs: z
      .union([
        z.lazy(() => AlbumCreateuserIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const AlbumUncheckedCreateInputObjectSchema = Schema;
