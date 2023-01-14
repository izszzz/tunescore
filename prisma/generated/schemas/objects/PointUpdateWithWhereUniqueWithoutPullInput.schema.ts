import { z } from 'zod';
import { PointWhereUniqueInputObjectSchema } from './PointWhereUniqueInput.schema';
import { PointUpdateWithoutPullInputObjectSchema } from './PointUpdateWithoutPullInput.schema';
import { PointUncheckedUpdateWithoutPullInputObjectSchema } from './PointUncheckedUpdateWithoutPullInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointUpdateWithWhereUniqueWithoutPullInput> = z
  .object({
    where: z.lazy(() => PointWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => PointUpdateWithoutPullInputObjectSchema),
      z.lazy(() => PointUncheckedUpdateWithoutPullInputObjectSchema),
    ]),
  })
  .strict();

export const PointUpdateWithWhereUniqueWithoutPullInputObjectSchema = Schema;
