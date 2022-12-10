import { z } from 'zod';
import { PullCreateWithoutUserInputObjectSchema } from './PullCreateWithoutUserInput.schema';
import { PullUncheckedCreateWithoutUserInputObjectSchema } from './PullUncheckedCreateWithoutUserInput.schema';
import { PullCreateOrConnectWithoutUserInputObjectSchema } from './PullCreateOrConnectWithoutUserInput.schema';
import { PullUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './PullUpsertWithWhereUniqueWithoutUserInput.schema';
import { PullCreateManyUserInputEnvelopeObjectSchema } from './PullCreateManyUserInputEnvelope.schema';
import { PullWhereUniqueInputObjectSchema } from './PullWhereUniqueInput.schema';
import { PullUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './PullUpdateWithWhereUniqueWithoutUserInput.schema';
import { PullUpdateManyWithWhereWithoutUserInputObjectSchema } from './PullUpdateManyWithWhereWithoutUserInput.schema';
import { PullScalarWhereInputObjectSchema } from './PullScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullUncheckedUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PullCreateWithoutUserInputObjectSchema),
          z.lazy(() => PullCreateWithoutUserInputObjectSchema).array(),
          z.lazy(() => PullUncheckedCreateWithoutUserInputObjectSchema),
          z.lazy(() => PullUncheckedCreateWithoutUserInputObjectSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => PullCreateOrConnectWithoutUserInputObjectSchema),
          z.lazy(() => PullCreateOrConnectWithoutUserInputObjectSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => PullUpsertWithWhereUniqueWithoutUserInputObjectSchema),
          z
            .lazy(() => PullUpsertWithWhereUniqueWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => PullCreateManyUserInputEnvelopeObjectSchema)
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
          z.lazy(() => PullUpdateWithWhereUniqueWithoutUserInputObjectSchema),
          z
            .lazy(() => PullUpdateWithWhereUniqueWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => PullUpdateManyWithWhereWithoutUserInputObjectSchema),
          z
            .lazy(() => PullUpdateManyWithWhereWithoutUserInputObjectSchema)
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

export const PullUncheckedUpdateManyWithoutUserNestedInputObjectSchema = Schema;
