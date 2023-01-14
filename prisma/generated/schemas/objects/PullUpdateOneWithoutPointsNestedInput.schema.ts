import { z } from 'zod';
import { PullCreateWithoutPointsInputObjectSchema } from './PullCreateWithoutPointsInput.schema';
import { PullUncheckedCreateWithoutPointsInputObjectSchema } from './PullUncheckedCreateWithoutPointsInput.schema';
import { PullCreateOrConnectWithoutPointsInputObjectSchema } from './PullCreateOrConnectWithoutPointsInput.schema';
import { PullUpsertWithoutPointsInputObjectSchema } from './PullUpsertWithoutPointsInput.schema';
import { PullWhereUniqueInputObjectSchema } from './PullWhereUniqueInput.schema';
import { PullUpdateWithoutPointsInputObjectSchema } from './PullUpdateWithoutPointsInput.schema';
import { PullUncheckedUpdateWithoutPointsInputObjectSchema } from './PullUncheckedUpdateWithoutPointsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullUpdateOneWithoutPointsNestedInput> = z
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
    upsert: z.lazy(() => PullUpsertWithoutPointsInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => PullWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => PullUpdateWithoutPointsInputObjectSchema),
        z.lazy(() => PullUncheckedUpdateWithoutPointsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const PullUpdateOneWithoutPointsNestedInputObjectSchema = Schema;
