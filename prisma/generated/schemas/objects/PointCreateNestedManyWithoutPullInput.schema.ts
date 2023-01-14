import { z } from 'zod';
import { PointCreateWithoutPullInputObjectSchema } from './PointCreateWithoutPullInput.schema';
import { PointUncheckedCreateWithoutPullInputObjectSchema } from './PointUncheckedCreateWithoutPullInput.schema';
import { PointCreateOrConnectWithoutPullInputObjectSchema } from './PointCreateOrConnectWithoutPullInput.schema';
import { PointCreateManyPullInputEnvelopeObjectSchema } from './PointCreateManyPullInputEnvelope.schema';
import { PointWhereUniqueInputObjectSchema } from './PointWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointCreateNestedManyWithoutPullInput> = z
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
    createMany: z
      .lazy(() => PointCreateManyPullInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => PointWhereUniqueInputObjectSchema),
        z.lazy(() => PointWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const PointCreateNestedManyWithoutPullInputObjectSchema = Schema;
