import { z } from 'zod';
import { BandCreateWithoutArtistsInputObjectSchema } from './BandCreateWithoutArtistsInput.schema';
import { BandUncheckedCreateWithoutArtistsInputObjectSchema } from './BandUncheckedCreateWithoutArtistsInput.schema';
import { BandCreateOrConnectWithoutArtistsInputObjectSchema } from './BandCreateOrConnectWithoutArtistsInput.schema';
import { BandWhereUniqueInputObjectSchema } from './BandWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandUncheckedCreateNestedManyWithoutArtistsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BandCreateWithoutArtistsInputObjectSchema),
          z.lazy(() => BandCreateWithoutArtistsInputObjectSchema).array(),
          z.lazy(() => BandUncheckedCreateWithoutArtistsInputObjectSchema),
          z
            .lazy(() => BandUncheckedCreateWithoutArtistsInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => BandCreateOrConnectWithoutArtistsInputObjectSchema),
          z
            .lazy(() => BandCreateOrConnectWithoutArtistsInputObjectSchema)
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => BandWhereUniqueInputObjectSchema),
          z.lazy(() => BandWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const BandUncheckedCreateNestedManyWithoutArtistsInputObjectSchema =
  Schema;
