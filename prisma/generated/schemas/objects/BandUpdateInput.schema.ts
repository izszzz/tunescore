import { z } from 'zod';
import { LocalesUpdateEnvelopeInputObjectSchema } from './LocalesUpdateEnvelopeInput.schema';
import { LocalesCreateInputObjectSchema } from './LocalesCreateInput.schema';
import { LinkNullableUpdateEnvelopeInputObjectSchema } from './LinkNullableUpdateEnvelopeInput.schema';
import { LinkCreateInputObjectSchema } from './LinkCreateInput.schema';
import { MusicUpdateManyWithoutBandNestedInputObjectSchema } from './MusicUpdateManyWithoutBandNestedInput.schema';
import { ArtistUpdateManyWithoutBandsNestedInputObjectSchema } from './ArtistUpdateManyWithoutBandsNestedInput.schema';
import { BandUpdateartistIDsInputObjectSchema } from './BandUpdateartistIDsInput.schema';
import { AlbumUpdateManyWithoutBandNestedInputObjectSchema } from './AlbumUpdateManyWithoutBandNestedInput.schema';
import { UserUpdateManyWithoutBookmarkBandsNestedInputObjectSchema } from './UserUpdateManyWithoutBookmarkBandsNestedInput.schema';
import { BandUpdateuserIDsInputObjectSchema } from './BandUpdateuserIDsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandUpdateInput> = z
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
    musics: z
      .lazy(() => MusicUpdateManyWithoutBandNestedInputObjectSchema)
      .optional(),
    artists: z
      .lazy(() => ArtistUpdateManyWithoutBandsNestedInputObjectSchema)
      .optional(),
    artistIDs: z
      .union([
        z.lazy(() => BandUpdateartistIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    albums: z
      .lazy(() => AlbumUpdateManyWithoutBandNestedInputObjectSchema)
      .optional(),
    bookmarks: z
      .lazy(() => UserUpdateManyWithoutBookmarkBandsNestedInputObjectSchema)
      .optional(),
    userIDs: z
      .union([
        z.lazy(() => BandUpdateuserIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const BandUpdateInputObjectSchema = Schema;
