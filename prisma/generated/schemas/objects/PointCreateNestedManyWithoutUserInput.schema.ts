import { z } from 'zod';
import { PointCreateWithoutUserInputObjectSchema } from './PointCreateWithoutUserInput.schema';
import { PointUncheckedCreateWithoutUserInputObjectSchema } from './PointUncheckedCreateWithoutUserInput.schema';
import { PointCreateOrConnectWithoutUserInputObjectSchema } from './PointCreateOrConnectWithoutUserInput.schema';
import { PointCreateManyUserInputEnvelopeObjectSchema } from './PointCreateManyUserInputEnvelope.schema';
import { PointWhereUniqueInputObjectSchema } from './PointWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointCreateNestedManyWithoutUserInput> = z
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
    createMany: z
      .lazy(() => PointCreateManyUserInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => PointWhereUniqueInputObjectSchema),
        z.lazy(() => PointWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const PointCreateNestedManyWithoutUserInputObjectSchema = Schema;
