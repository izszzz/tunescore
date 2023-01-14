import { z } from 'zod';
import { PointWhereUniqueInputObjectSchema } from './PointWhereUniqueInput.schema';
import { PointCreateWithoutPullInputObjectSchema } from './PointCreateWithoutPullInput.schema';
import { PointUncheckedCreateWithoutPullInputObjectSchema } from './PointUncheckedCreateWithoutPullInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointCreateOrConnectWithoutPullInput> = z
  .object({
    where: z.lazy(() => PointWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PointCreateWithoutPullInputObjectSchema),
      z.lazy(() => PointUncheckedCreateWithoutPullInputObjectSchema),
    ]),
  })
  .strict();

export const PointCreateOrConnectWithoutPullInputObjectSchema = Schema;
