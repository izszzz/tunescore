import { z } from 'zod';
import { BandCreateWithoutArtistsInputObjectSchema } from './BandCreateWithoutArtistsInput.schema';
import { BandUncheckedCreateWithoutArtistsInputObjectSchema } from './BandUncheckedCreateWithoutArtistsInput.schema';
import { BandCreateOrConnectWithoutArtistsInputObjectSchema } from './BandCreateOrConnectWithoutArtistsInput.schema';
import { BandUpsertWithWhereUniqueWithoutArtistsInputObjectSchema } from './BandUpsertWithWhereUniqueWithoutArtistsInput.schema';
import { BandWhereUniqueInputObjectSchema } from './BandWhereUniqueInput.schema';
import { BandUpdateWithWhereUniqueWithoutArtistsInputObjectSchema } from './BandUpdateWithWhereUniqueWithoutArtistsInput.schema';
import { BandUpdateManyWithWhereWithoutArtistsInputObjectSchema } from './BandUpdateManyWithWhereWithoutArtistsInput.schema';
import { BandScalarWhereInputObjectSchema } from './BandScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandUncheckedUpdateManyWithoutArtistsNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () => BandUpsertWithWhereUniqueWithoutArtistsInputObjectSchema,
          ),
          z
            .lazy(
              () => BandUpsertWithWhereUniqueWithoutArtistsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => BandWhereUniqueInputObjectSchema),
          z.lazy(() => BandWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => BandWhereUniqueInputObjectSchema),
          z.lazy(() => BandWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => BandWhereUniqueInputObjectSchema),
          z.lazy(() => BandWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => BandWhereUniqueInputObjectSchema),
          z.lazy(() => BandWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => BandUpdateWithWhereUniqueWithoutArtistsInputObjectSchema,
          ),
          z
            .lazy(
              () => BandUpdateWithWhereUniqueWithoutArtistsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => BandUpdateManyWithWhereWithoutArtistsInputObjectSchema),
          z
            .lazy(() => BandUpdateManyWithWhereWithoutArtistsInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => BandScalarWhereInputObjectSchema),
          z.lazy(() => BandScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const BandUncheckedUpdateManyWithoutArtistsNestedInputObjectSchema =
  Schema;
