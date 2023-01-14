import { z } from 'zod';
import { PullWhereUniqueInputObjectSchema } from './PullWhereUniqueInput.schema';
import { PullCreateWithoutPointsInputObjectSchema } from './PullCreateWithoutPointsInput.schema';
import { PullUncheckedCreateWithoutPointsInputObjectSchema } from './PullUncheckedCreateWithoutPointsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullCreateOrConnectWithoutPointsInput> = z
  .object({
    where: z.lazy(() => PullWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PullCreateWithoutPointsInputObjectSchema),
      z.lazy(() => PullUncheckedCreateWithoutPointsInputObjectSchema),
    ]),
  })
  .strict();

export const PullCreateOrConnectWithoutPointsInputObjectSchema = Schema;
