import { z } from 'zod';
import { PointCreateWithoutUserInputObjectSchema } from './PointCreateWithoutUserInput.schema';
import { PointUncheckedCreateWithoutUserInputObjectSchema } from './PointUncheckedCreateWithoutUserInput.schema';
import { PointCreateOrConnectWithoutUserInputObjectSchema } from './PointCreateOrConnectWithoutUserInput.schema';
import { PointUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './PointUpsertWithWhereUniqueWithoutUserInput.schema';
import { PointCreateManyUserInputEnvelopeObjectSchema } from './PointCreateManyUserInputEnvelope.schema';
import { PointWhereUniqueInputObjectSchema } from './PointWhereUniqueInput.schema';
import { PointUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './PointUpdateWithWhereUniqueWithoutUserInput.schema';
import { PointUpdateManyWithWhereWithoutUserInputObjectSchema } from './PointUpdateManyWithWhereWithoutUserInput.schema';
import { PointScalarWhereInputObjectSchema } from './PointScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointUpdateManyWithoutUserNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PointCreateWithoutUserInputObjectSchema),
        z.lazy(() => PointCreateWithoutUserInputObjectSchema).array(),
        z.lazy(() => PointUncheckedCreateWithoutUserInputObjectSchema),
        z.lazy(() => PointUncheckedCreateWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => PointCreateOrConnectWithoutUserInputObjectSchema),
        z.lazy(() => PointCreateOrConnectWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => PointUpsertWithWhereUniqueWithoutUserInputObjectSchema),
        z
          .lazy(() => PointUpsertWithWhereUniqueWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => PointCreateManyUserInputEnvelopeObjectSchema)
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
        z.lazy(() => PointUpdateWithWhereUniqueWithoutUserInputObjectSchema),
        z
          .lazy(() => PointUpdateWithWhereUniqueWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => PointUpdateManyWithWhereWithoutUserInputObjectSchema),
        z
          .lazy(() => PointUpdateManyWithWhereWithoutUserInputObjectSchema)
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

export const PointUpdateManyWithoutUserNestedInputObjectSchema = Schema;
