import { z } from 'zod';
import { LocalesUpdateEnvelopeInputObjectSchema } from './LocalesUpdateEnvelopeInput.schema';
import { LocalesCreateInputObjectSchema } from './LocalesCreateInput.schema';
import { LinkNullableUpdateEnvelopeInputObjectSchema } from './LinkNullableUpdateEnvelopeInput.schema';
import { LinkCreateInputObjectSchema } from './LinkCreateInput.schema';
import { ArtistUncheckedUpdateManyWithoutBandsNestedInputObjectSchema } from './ArtistUncheckedUpdateManyWithoutBandsNestedInput.schema';
import { BandUpdateartistIDsInputObjectSchema } from './BandUpdateartistIDsInput.schema';
import { AlbumUncheckedUpdateManyWithoutBandNestedInputObjectSchema } from './AlbumUncheckedUpdateManyWithoutBandNestedInput.schema';
import { UserUncheckedUpdateManyWithoutBookmarkBandsNestedInputObjectSchema } from './UserUncheckedUpdateManyWithoutBookmarkBandsNestedInput.schema';
import { BandUpdateuserIDsInputObjectSchema } from './BandUpdateuserIDsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandUncheckedUpdateWithoutMusicsInput> = z
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
    artists: z
      .lazy(() => ArtistUncheckedUpdateManyWithoutBandsNestedInputObjectSchema)
      .optional(),
    artistIDs: z
      .union([
        z.lazy(() => BandUpdateartistIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    albums: z
      .lazy(() => AlbumUncheckedUpdateManyWithoutBandNestedInputObjectSchema)
      .optional(),
    bookmarks: z
      .lazy(
        () =>
          UserUncheckedUpdateManyWithoutBookmarkBandsNestedInputObjectSchema,
      )
      .optional(),
    userIDs: z
      .union([
        z.lazy(() => BandUpdateuserIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const BandUncheckedUpdateWithoutMusicsInputObjectSchema = Schema;
