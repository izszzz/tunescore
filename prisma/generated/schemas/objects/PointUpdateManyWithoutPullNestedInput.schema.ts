import { z } from 'zod';
import { PointCreateWithoutPullInputObjectSchema } from './PointCreateWithoutPullInput.schema';
import { PointUncheckedCreateWithoutPullInputObjectSchema } from './PointUncheckedCreateWithoutPullInput.schema';
import { PointCreateOrConnectWithoutPullInputObjectSchema } from './PointCreateOrConnectWithoutPullInput.schema';
import { PointUpsertWithWhereUniqueWithoutPullInputObjectSchema } from './PointUpsertWithWhereUniqueWithoutPullInput.schema';
import { PointCreateManyPullInputEnvelopeObjectSchema } from './PointCreateManyPullInputEnvelope.schema';
import { PointWhereUniqueInputObjectSchema } from './PointWhereUniqueInput.schema';
import { PointUpdateWithWhereUniqueWithoutPullInputObjectSchema } from './PointUpdateWithWhereUniqueWithoutPullInput.schema';
import { PointUpdateManyWithWhereWithoutPullInputObjectSchema } from './PointUpdateManyWithWhereWithoutPullInput.schema';
import { PointScalarWhereInputObjectSchema } from './PointScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointUpdateManyWithoutPullNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PointCreateWithoutPullInputObjectSchema),
        z.lazy(() => PointCreateWithoutPullInputObjectSchema).array(),
        z.lazy(() => PointUncheckedCreateWithoutPullInputObjectSchema),
        z.lazy(() => PointUncheckedCreateWithoutPullInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => PointCreateOrConnectWithoutPullInputObjectSchema),
        z.lazy(() => PointCreateOrConnectWithoutPullInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => PointUpsertWithWhereUniqueWithoutPullInputObjectSchema),
        z
          .lazy(() => PointUpsertWithWhereUniqueWithoutPullInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => PointCreateManyPullInputEnvelopeObjectSchema)
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
        z.lazy(() => PointUpdateWithWhereUniqueWithoutPullInputObjectSchema),
        z
          .lazy(() => PointUpdateWithWhereUniqueWithoutPullInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => PointUpdateManyWithWhereWithoutPullInputObjectSchema),
        z
          .lazy(() => PointUpdateManyWithWhereWithoutPullInputObjectSchema)
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

export const PointUpdateManyWithoutPullNestedInputObjectSchema = Schema;
