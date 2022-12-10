import { z } from 'zod';
import { MusicCreateWithoutLyristsInputObjectSchema } from './MusicCreateWithoutLyristsInput.schema';
import { MusicUncheckedCreateWithoutLyristsInputObjectSchema } from './MusicUncheckedCreateWithoutLyristsInput.schema';
import { MusicCreateOrConnectWithoutLyristsInputObjectSchema } from './MusicCreateOrConnectWithoutLyristsInput.schema';
import { MusicUpsertWithWhereUniqueWithoutLyristsInputObjectSchema } from './MusicUpsertWithWhereUniqueWithoutLyristsInput.schema';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';
import { MusicUpdateWithWhereUniqueWithoutLyristsInputObjectSchema } from './MusicUpdateWithWhereUniqueWithoutLyristsInput.schema';
import { MusicUpdateManyWithWhereWithoutLyristsInputObjectSchema } from './MusicUpdateManyWithWhereWithoutLyristsInput.schema';
import { MusicScalarWhereInputObjectSchema } from './MusicScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUpdateManyWithoutLyristsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => MusicCreateWithoutLyristsInputObjectSchema),
        z.lazy(() => MusicCreateWithoutLyristsInputObjectSchema).array(),
        z.lazy(() => MusicUncheckedCreateWithoutLyristsInputObjectSchema),
        z
          .lazy(() => MusicUncheckedCreateWithoutLyristsInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => MusicCreateOrConnectWithoutLyristsInputObjectSchema),
        z
          .lazy(() => MusicCreateOrConnectWithoutLyristsInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => MusicUpsertWithWhereUniqueWithoutLyristsInputObjectSchema),
        z
          .lazy(() => MusicUpsertWithWhereUniqueWithoutLyristsInputObjectSchema)
          .array(),
      ])
      .optional(),
    set: z
      .union([
        z.lazy(() => MusicWhereUniqueInputObjectSchema),
        z.lazy(() => MusicWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => MusicWhereUniqueInputObjectSchema),
        z.lazy(() => MusicWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => MusicWhereUniqueInputObjectSchema),
        z.lazy(() => MusicWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => MusicWhereUniqueInputObjectSchema),
        z.lazy(() => MusicWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => MusicUpdateWithWhereUniqueWithoutLyristsInputObjectSchema),
        z
          .lazy(() => MusicUpdateWithWhereUniqueWithoutLyristsInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => MusicUpdateManyWithWhereWithoutLyristsInputObjectSchema),
        z
          .lazy(() => MusicUpdateManyWithWhereWithoutLyristsInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => MusicScalarWhereInputObjectSchema),
        z.lazy(() => MusicScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const MusicUpdateManyWithoutLyristsNestedInputObjectSchema = Schema;
