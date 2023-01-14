import { z } from 'zod';
import { PointCreateWithoutBandInputObjectSchema } from './PointCreateWithoutBandInput.schema';
import { PointUncheckedCreateWithoutBandInputObjectSchema } from './PointUncheckedCreateWithoutBandInput.schema';
import { PointCreateOrConnectWithoutBandInputObjectSchema } from './PointCreateOrConnectWithoutBandInput.schema';
import { PointUpsertWithWhereUniqueWithoutBandInputObjectSchema } from './PointUpsertWithWhereUniqueWithoutBandInput.schema';
import { PointCreateManyBandInputEnvelopeObjectSchema } from './PointCreateManyBandInputEnvelope.schema';
import { PointWhereUniqueInputObjectSchema } from './PointWhereUniqueInput.schema';
import { PointUpdateWithWhereUniqueWithoutBandInputObjectSchema } from './PointUpdateWithWhereUniqueWithoutBandInput.schema';
import { PointUpdateManyWithWhereWithoutBandInputObjectSchema } from './PointUpdateManyWithWhereWithoutBandInput.schema';
import { PointScalarWhereInputObjectSchema } from './PointScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointUncheckedUpdateManyWithoutBandNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PointCreateWithoutBandInputObjectSchema),
          z.lazy(() => PointCreateWithoutBandInputObjectSchema).array(),
          z.lazy(() => PointUncheckedCreateWithoutBandInputObjectSchema),
          z
            .lazy(() => PointUncheckedCreateWithoutBandInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => PointCreateOrConnectWithoutBandInputObjectSchema),
          z
            .lazy(() => PointCreateOrConnectWithoutBandInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => PointUpsertWithWhereUniqueWithoutBandInputObjectSchema),
          z
            .lazy(() => PointUpsertWithWhereUniqueWithoutBandInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => PointCreateManyBandInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => PointWhereUniqueInputObjectSchema),
          z.lazy(() => PointWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => PointWhereUniqueInputObjectSchema),
          z.lazy(() => PointWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => PointWhereUniqueInputObjectSchema),
          z.lazy(() => PointWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => PointWhereUniqueInputObjectSchema),
          z.lazy(() => PointWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => PointUpdateWithWhereUniqueWithoutBandInputObjectSchema),
          z
            .lazy(() => PointUpdateWithWhereUniqueWithoutBandInputObjectSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => PointUpdateManyWithWhereWithoutBandInputObjectSchema),
          z
            .lazy(() => PointUpdateManyWithWhereWithoutBandInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => PointScalarWhereInputObjectSchema),
          z.lazy(() => PointScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PointUncheckedUpdateManyWithoutBandNestedInputObjectSchema =
  Schema;
