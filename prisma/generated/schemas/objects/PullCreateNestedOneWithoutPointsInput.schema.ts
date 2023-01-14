import { z } from 'zod';
import { PullCreateWithoutPointsInputObjectSchema } from './PullCreateWithoutPointsInput.schema';
import { PullUncheckedCreateWithoutPointsInputObjectSchema } from './PullUncheckedCreateWithoutPointsInput.schema';
import { PullCreateOrConnectWithoutPointsInputObjectSchema } from './PullCreateOrConnectWithoutPointsInput.schema';
import { PullWhereUniqueInputObjectSchema } from './PullWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullCreateNestedOneWithoutPointsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PullCreateWithoutPointsInputObjectSchema),
        z.lazy(() => PullUncheckedCreateWithoutPointsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => PullCreateOrConnectWithoutPointsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => PullWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const PullCreateNestedOneWithoutPointsInputObjectSchema = Schema;
