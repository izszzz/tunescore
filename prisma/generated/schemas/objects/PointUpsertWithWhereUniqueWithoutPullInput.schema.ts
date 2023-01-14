import { z } from 'zod';
import { PointWhereUniqueInputObjectSchema } from './PointWhereUniqueInput.schema';
import { PointUpdateWithoutPullInputObjectSchema } from './PointUpdateWithoutPullInput.schema';
import { PointUncheckedUpdateWithoutPullInputObjectSchema } from './PointUncheckedUpdateWithoutPullInput.schema';
import { PointCreateWithoutPullInputObjectSchema } from './PointCreateWithoutPullInput.schema';
import { PointUncheckedCreateWithoutPullInputObjectSchema } from './PointUncheckedCreateWithoutPullInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointUpsertWithWhereUniqueWithoutPullInput> = z
  .object({
    where: z.lazy(() => PointWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => PointUpdateWithoutPullInputObjectSchema),
      z.lazy(() => PointUncheckedUpdateWithoutPullInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PointCreateWithoutPullInputObjectSchema),
      z.lazy(() => PointUncheckedCreateWithoutPullInputObjectSchema),
    ]),
  })
  .strict();

export const PointUpsertWithWhereUniqueWithoutPullInputObjectSchema = Schema;
