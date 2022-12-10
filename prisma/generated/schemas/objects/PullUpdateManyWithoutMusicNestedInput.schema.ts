import { z } from 'zod';
import { PullCreateWithoutMusicInputObjectSchema } from './PullCreateWithoutMusicInput.schema';
import { PullUncheckedCreateWithoutMusicInputObjectSchema } from './PullUncheckedCreateWithoutMusicInput.schema';
import { PullCreateOrConnectWithoutMusicInputObjectSchema } from './PullCreateOrConnectWithoutMusicInput.schema';
import { PullUpsertWithWhereUniqueWithoutMusicInputObjectSchema } from './PullUpsertWithWhereUniqueWithoutMusicInput.schema';
import { PullCreateManyMusicInputEnvelopeObjectSchema } from './PullCreateManyMusicInputEnvelope.schema';
import { PullWhereUniqueInputObjectSchema } from './PullWhereUniqueInput.schema';
import { PullUpdateWithWhereUniqueWithoutMusicInputObjectSchema } from './PullUpdateWithWhereUniqueWithoutMusicInput.schema';
import { PullUpdateManyWithWhereWithoutMusicInputObjectSchema } from './PullUpdateManyWithWhereWithoutMusicInput.schema';
import { PullScalarWhereInputObjectSchema } from './PullScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullUpdateManyWithoutMusicNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PullCreateWithoutMusicInputObjectSchema),
        z.lazy(() => PullCreateWithoutMusicInputObjectSchema).array(),
        z.lazy(() => PullUncheckedCreateWithoutMusicInputObjectSchema),
        z.lazy(() => PullUncheckedCreateWithoutMusicInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => PullCreateOrConnectWithoutMusicInputObjectSchema),
        z.lazy(() => PullCreateOrConnectWithoutMusicInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => PullUpsertWithWhereUniqueWithoutMusicInputObjectSchema),
        z
          .lazy(() => PullUpsertWithWhereUniqueWithoutMusicInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => PullCreateManyMusicInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => PullWhereUniqueInputObjectSchema),
        z.lazy(() => PullWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => PullWhereUniqueInputObjectSchema),
        z.lazy(() => PullWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => PullWhereUniqueInputObjectSchema),
        z.lazy(() => PullWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => PullWhereUniqueInputObjectSchema),
        z.lazy(() => PullWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => PullUpdateWithWhereUniqueWithoutMusicInputObjectSchema),
        z
          .lazy(() => PullUpdateWithWhereUniqueWithoutMusicInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => PullUpdateManyWithWhereWithoutMusicInputObjectSchema),
        z
          .lazy(() => PullUpdateManyWithWhereWithoutMusicInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => PullScalarWhereInputObjectSchema),
        z.lazy(() => PullScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const PullUpdateManyWithoutMusicNestedInputObjectSchema = Schema;
