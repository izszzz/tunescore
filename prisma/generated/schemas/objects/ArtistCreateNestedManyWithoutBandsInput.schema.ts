import { z } from 'zod';
import { ArtistCreateWithoutBandsInputObjectSchema } from './ArtistCreateWithoutBandsInput.schema';
import { ArtistUncheckedCreateWithoutBandsInputObjectSchema } from './ArtistUncheckedCreateWithoutBandsInput.schema';
import { ArtistCreateOrConnectWithoutBandsInputObjectSchema } from './ArtistCreateOrConnectWithoutBandsInput.schema';
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistCreateNestedManyWithoutBandsInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => ArtistCreateWithoutBandsInputObjectSchema),
            z.lazy(() => ArtistCreateWithoutBandsInputObjectSchema).array(),
            z.lazy(() => ArtistUncheckedCreateWithoutBandsInputObjectSchema),
            z
              .lazy(() => ArtistUncheckedCreateWithoutBandsInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => ArtistCreateOrConnectWithoutBandsInputObjectSchema),
            z
              .lazy(() => ArtistCreateOrConnectWithoutBandsInputObjectSchema)
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

export const ArtistCreateNestedManyWithoutBandsInputObjectSchema = Schema;
