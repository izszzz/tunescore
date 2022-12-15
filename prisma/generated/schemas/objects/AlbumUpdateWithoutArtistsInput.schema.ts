import { z } from 'zod';
import { LocalesUpdateEnvelopeInputObjectSchema } from './LocalesUpdateEnvelopeInput.schema';
import { LocalesCreateInputObjectSchema } from './LocalesCreateInput.schema';
import { BandUpdateOneWithoutAlbumsNestedInputObjectSchema } from './BandUpdateOneWithoutAlbumsNestedInput.schema';
import { MusicUpdateManyWithoutAlbumsNestedInputObjectSchema } from './MusicUpdateManyWithoutAlbumsNestedInput.schema';
import { AlbumUpdatemusicIDsInputObjectSchema } from './AlbumUpdatemusicIDsInput.schema';
import { AlbumUpdateartistIDsInputObjectSchema } from './AlbumUpdateartistIDsInput.schema';
import { UserUpdateManyWithoutBookmarkAlbumsNestedInputObjectSchema } from './UserUpdateManyWithoutBookmarkAlbumsNestedInput.schema';
import { AlbumUpdateuserIDsInputObjectSchema } from './AlbumUpdateuserIDsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumUpdateWithoutArtistsInput> = z
  .object({
    title: z
      .union([
        z.lazy(() => LocalesUpdateEnvelopeInputObjectSchema),
        z.lazy(() => LocalesCreateInputObjectSchema),
      ])
      .optional(),
    band: z
      .lazy(() => BandUpdateOneWithoutAlbumsNestedInputObjectSchema)
      .optional(),
    musics: z
      .lazy(() => MusicUpdateManyWithoutAlbumsNestedInputObjectSchema)
      .optional(),
    musicIDs: z
      .union([
        z.lazy(() => AlbumUpdatemusicIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    artistIDs: z
      .union([
        z.lazy(() => AlbumUpdateartistIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    bookmarks: z
      .lazy(() => UserUpdateManyWithoutBookmarkAlbumsNestedInputObjectSchema)
      .optional(),
    userIDs: z
      .union([
        z.lazy(() => AlbumUpdateuserIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const AlbumUpdateWithoutArtistsInputObjectSchema = Schema;
