import { z } from 'zod';
import { ArtistCreateWithoutAlbumsInputObjectSchema } from './ArtistCreateWithoutAlbumsInput.schema';
import { ArtistUncheckedCreateWithoutAlbumsInputObjectSchema } from './ArtistUncheckedCreateWithoutAlbumsInput.schema';
import { ArtistCreateOrConnectWithoutAlbumsInputObjectSchema } from './ArtistCreateOrConnectWithoutAlbumsInput.schema';
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistUncheckedCreateNestedManyWithoutAlbumsInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => ArtistCreateWithoutAlbumsInputObjectSchema),
            z.lazy(() => ArtistCreateWithoutAlbumsInputObjectSchema).array(),
            z.lazy(() => ArtistUncheckedCreateWithoutAlbumsInputObjectSchema),
            z
              .lazy(() => ArtistUncheckedCreateWithoutAlbumsInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => ArtistCreateOrConnectWithoutAlbumsInputObjectSchema),
            z
              .lazy(() => ArtistCreateOrConnectWithoutAlbumsInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => ArtistWhereUniqueInputObjectSchema),
            z.lazy(() => ArtistWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const ArtistUncheckedCreateNestedManyWithoutAlbumsInputObjectSchema =
  Schema;
