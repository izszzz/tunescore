import { z } from 'zod';
import { LocalesCreateEnvelopeInputObjectSchema } from './LocalesCreateEnvelopeInput.schema';
import { LocalesCreateInputObjectSchema } from './LocalesCreateInput.schema';
import { LinkNullableCreateEnvelopeInputObjectSchema } from './LinkNullableCreateEnvelopeInput.schema';
import { LinkCreateInputObjectSchema } from './LinkCreateInput.schema';
import { MusicCreateNestedManyWithoutBandInputObjectSchema } from './MusicCreateNestedManyWithoutBandInput.schema';
import { BandCreateartistIDsInputObjectSchema } from './BandCreateartistIDsInput.schema';
import { AlbumCreateNestedManyWithoutBandInputObjectSchema } from './AlbumCreateNestedManyWithoutBandInput.schema';
import { UserCreateNestedManyWithoutBookmarkBandsInputObjectSchema } from './UserCreateNestedManyWithoutBookmarkBandsInput.schema';
import { BandCreateuserIDsInputObjectSchema } from './BandCreateuserIDsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandCreateWithoutArtistsInput> = z
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
    musics: z
      .lazy(() => MusicCreateNestedManyWithoutBandInputObjectSchema)
      .optional(),
    artistIDs: z
      .union([
        z.lazy(() => BandCreateartistIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    albums: z
      .lazy(() => AlbumCreateNestedManyWithoutBandInputObjectSchema)
      .optional(),
    bookmarks: z
      .lazy(() => UserCreateNestedManyWithoutBookmarkBandsInputObjectSchema)
      .optional(),
    userIDs: z
      .union([
        z.lazy(() => BandCreateuserIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const BandCreateWithoutArtistsInputObjectSchema = Schema;
