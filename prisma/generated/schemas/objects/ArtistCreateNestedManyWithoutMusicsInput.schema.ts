import { z } from 'zod';
import { ArtistCreateWithoutMusicsInputObjectSchema } from './ArtistCreateWithoutMusicsInput.schema';
import { ArtistUncheckedCreateWithoutMusicsInputObjectSchema } from './ArtistUncheckedCreateWithoutMusicsInput.schema';
import { ArtistCreateOrConnectWithoutMusicsInputObjectSchema } from './ArtistCreateOrConnectWithoutMusicsInput.schema';
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistCreateNestedManyWithoutMusicsInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => ArtistCreateWithoutMusicsInputObjectSchema),
            z.lazy(() => ArtistCreateWithoutMusicsInputObjectSchema).array(),
            z.lazy(() => ArtistUncheckedCreateWithoutMusicsInputObjectSchema),
            z
              .lazy(() => ArtistUncheckedCreateWithoutMusicsInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => ArtistCreateOrConnectWithoutMusicsInputObjectSchema),
            z
              .lazy(() => ArtistCreateOrConnectWithoutMusicsInputObjectSchema)
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

export const ArtistCreateNestedManyWithoutMusicsInputObjectSchema = Schema;
