import { z } from 'zod';
import { PointCreateWithoutBandInputObjectSchema } from './PointCreateWithoutBandInput.schema';
import { PointUncheckedCreateWithoutBandInputObjectSchema } from './PointUncheckedCreateWithoutBandInput.schema';
import { PointCreateOrConnectWithoutBandInputObjectSchema } from './PointCreateOrConnectWithoutBandInput.schema';
import { PointCreateManyBandInputEnvelopeObjectSchema } from './PointCreateManyBandInputEnvelope.schema';
import { PointWhereUniqueInputObjectSchema } from './PointWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointUncheckedCreateNestedManyWithoutBandInput> =
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
      createMany: z
        .lazy(() => PointCreateManyBandInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => PointWhereUniqueInputObjectSchema),
          z.lazy(() => PointWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PointUncheckedCreateNestedManyWithoutBandInputObjectSchema =
  Schema;
