import { z } from 'zod';
import { LocalesCreateEnvelopeInputObjectSchema } from './LocalesCreateEnvelopeInput.schema';
import { LocalesCreateInputObjectSchema } from './LocalesCreateInput.schema';
import { LinkListNullableCreateEnvelopeInputObjectSchema } from './LinkListNullableCreateEnvelopeInput.schema';
import { LinkListCreateInputObjectSchema } from './LinkListCreateInput.schema';
import { MusicUncheckedCreateNestedManyWithoutBandInputObjectSchema } from './MusicUncheckedCreateNestedManyWithoutBandInput.schema';
import { ArtistUncheckedCreateNestedManyWithoutBandsInputObjectSchema } from './ArtistUncheckedCreateNestedManyWithoutBandsInput.schema';
import { BandCreateartistIDsInputObjectSchema } from './BandCreateartistIDsInput.schema';
import { UserUncheckedCreateNestedManyWithoutBookmarkBandsInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutBookmarkBandsInput.schema';
import { BandCreateuserIDsInputObjectSchema } from './BandCreateuserIDsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandUncheckedCreateWithoutAlbumsInput> = z
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
    musics: z
      .lazy(() => MusicUncheckedCreateNestedManyWithoutBandInputObjectSchema)
      .optional(),
    artists: z
      .lazy(() => ArtistUncheckedCreateNestedManyWithoutBandsInputObjectSchema)
      .optional(),
    artistIDs: z
      .union([
        z.lazy(() => BandCreateartistIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    bookmarks: z
      .lazy(
        () =>
          UserUncheckedCreateNestedManyWithoutBookmarkBandsInputObjectSchema,
      )
      .optional(),
    userIDs: z
      .union([
        z.lazy(() => BandCreateuserIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const BandUncheckedCreateWithoutAlbumsInputObjectSchema = Schema;
