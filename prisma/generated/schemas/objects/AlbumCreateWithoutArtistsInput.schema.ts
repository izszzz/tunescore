import { z } from 'zod';
import { LocalesCreateEnvelopeInputObjectSchema } from './LocalesCreateEnvelopeInput.schema';
import { LocalesCreateInputObjectSchema } from './LocalesCreateInput.schema';
import { BandCreateNestedOneWithoutAlbumsInputObjectSchema } from './BandCreateNestedOneWithoutAlbumsInput.schema';
import { MusicCreateNestedManyWithoutAlbumsInputObjectSchema } from './MusicCreateNestedManyWithoutAlbumsInput.schema';
import { AlbumCreatemusicIDsInputObjectSchema } from './AlbumCreatemusicIDsInput.schema';
import { AlbumCreateartistIDsInputObjectSchema } from './AlbumCreateartistIDsInput.schema';
import { UserCreateNestedManyWithoutBookmarkAlbumsInputObjectSchema } from './UserCreateNestedManyWithoutBookmarkAlbumsInput.schema';
import { AlbumCreateuserIDsInputObjectSchema } from './AlbumCreateuserIDsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumCreateWithoutArtistsInput> = z
  .object({
    id: z.string().optional(),
    title: z.union([
      z.lazy(() => LocalesCreateEnvelopeInputObjectSchema),
      z.lazy(() => LocalesCreateInputObjectSchema),
    ]),
    band: z
      .lazy(() => BandCreateNestedOneWithoutAlbumsInputObjectSchema)
      .optional(),
    musics: z
      .lazy(() => MusicCreateNestedManyWithoutAlbumsInputObjectSchema)
      .optional(),
    musicIDs: z
      .union([
        z.lazy(() => AlbumCreatemusicIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    artistIDs: z
      .union([
        z.lazy(() => AlbumCreateartistIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    bookmarks: z
      .lazy(() => UserCreateNestedManyWithoutBookmarkAlbumsInputObjectSchema)
      .optional(),
    userIDs: z
      .union([
        z.lazy(() => AlbumCreateuserIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const AlbumCreateWithoutArtistsInputObjectSchema = Schema;
