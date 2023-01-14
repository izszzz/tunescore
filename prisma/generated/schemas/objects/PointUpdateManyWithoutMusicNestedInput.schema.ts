import { z } from 'zod';
import { PointCreateWithoutMusicInputObjectSchema } from './PointCreateWithoutMusicInput.schema';
import { PointUncheckedCreateWithoutMusicInputObjectSchema } from './PointUncheckedCreateWithoutMusicInput.schema';
import { PointCreateOrConnectWithoutMusicInputObjectSchema } from './PointCreateOrConnectWithoutMusicInput.schema';
import { PointUpsertWithWhereUniqueWithoutMusicInputObjectSchema } from './PointUpsertWithWhereUniqueWithoutMusicInput.schema';
import { PointCreateManyMusicInputEnvelopeObjectSchema } from './PointCreateManyMusicInputEnvelope.schema';
import { PointWhereUniqueInputObjectSchema } from './PointWhereUniqueInput.schema';
import { PointUpdateWithWhereUniqueWithoutMusicInputObjectSchema } from './PointUpdateWithWhereUniqueWithoutMusicInput.schema';
import { PointUpdateManyWithWhereWithoutMusicInputObjectSchema } from './PointUpdateManyWithWhereWithoutMusicInput.schema';
import { PointScalarWhereInputObjectSchema } from './PointScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointUpdateManyWithoutMusicNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PointCreateWithoutMusicInputObjectSchema),
        z.lazy(() => PointCreateWithoutMusicInputObjectSchema).array(),
        z.lazy(() => PointUncheckedCreateWithoutMusicInputObjectSchema),
        z.lazy(() => PointUncheckedCreateWithoutMusicInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => PointCreateOrConnectWithoutMusicInputObjectSchema),
        z.lazy(() => PointCreateOrConnectWithoutMusicInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => PointUpsertWithWhereUniqueWithoutMusicInputObjectSchema),
        z
          .lazy(() => PointUpsertWithWhereUniqueWithoutMusicInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => PointCreateManyMusicInputEnvelopeObjectSchema)
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
        z.lazy(() => PointUpdateWithWhereUniqueWithoutMusicInputObjectSchema),
        z
          .lazy(() => PointUpdateWithWhereUniqueWithoutMusicInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => PointUpdateManyWithWhereWithoutMusicInputObjectSchema),
        z
          .lazy(() => PointUpdateManyWithWhereWithoutMusicInputObjectSchema)
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

export const PointUpdateManyWithoutMusicNestedInputObjectSchema = Schema;
