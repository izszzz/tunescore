import { z } from 'zod';
import { PullCreateWithoutUserInputObjectSchema } from './PullCreateWithoutUserInput.schema';
import { PullUncheckedCreateWithoutUserInputObjectSchema } from './PullUncheckedCreateWithoutUserInput.schema';
import { PullCreateOrConnectWithoutUserInputObjectSchema } from './PullCreateOrConnectWithoutUserInput.schema';
import { PullCreateManyUserInputEnvelopeObjectSchema } from './PullCreateManyUserInputEnvelope.schema';
import { PullWhereUniqueInputObjectSchema } from './PullWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullUncheckedCreateNestedManyWithoutUserInput> =
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
      createMany: z
        .lazy(() => PullCreateManyUserInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => PullWhereUniqueInputObjectSchema),
          z.lazy(() => PullWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PullUncheckedCreateNestedManyWithoutUserInputObjectSchema = Schema;
