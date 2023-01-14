import { z } from 'zod';
import { PullUpdateWithoutPointsInputObjectSchema } from './PullUpdateWithoutPointsInput.schema';
import { PullUncheckedUpdateWithoutPointsInputObjectSchema } from './PullUncheckedUpdateWithoutPointsInput.schema';
import { PullCreateWithoutPointsInputObjectSchema } from './PullCreateWithoutPointsInput.schema';
import { PullUncheckedCreateWithoutPointsInputObjectSchema } from './PullUncheckedCreateWithoutPointsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullUpsertWithoutPointsInput> = z
  .object({
    update: z.union([
      z.lazy(() => PullUpdateWithoutPointsInputObjectSchema),
      z.lazy(() => PullUncheckedUpdateWithoutPointsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PullCreateWithoutPointsInputObjectSchema),
      z.lazy(() => PullUncheckedCreateWithoutPointsInputObjectSchema),
    ]),
  })
  .strict();

export const PullUpsertWithoutPointsInputObjectSchema = Schema;
