import { z } from 'zod';
import { BandCreateWithoutPointsInputObjectSchema } from './BandCreateWithoutPointsInput.schema';
import { BandUncheckedCreateWithoutPointsInputObjectSchema } from './BandUncheckedCreateWithoutPointsInput.schema';
import { BandCreateOrConnectWithoutPointsInputObjectSchema } from './BandCreateOrConnectWithoutPointsInput.schema';
import { BandWhereUniqueInputObjectSchema } from './BandWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandCreateNestedOneWithoutPointsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => BandCreateWithoutPointsInputObjectSchema),
        z.lazy(() => BandUncheckedCreateWithoutPointsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => BandCreateOrConnectWithoutPointsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => BandWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const BandCreateNestedOneWithoutPointsInputObjectSchema = Schema;
