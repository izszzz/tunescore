import { z } from 'zod';
import { PointWhereUniqueInputObjectSchema } from './PointWhereUniqueInput.schema';
import { PointCreateWithoutBandInputObjectSchema } from './PointCreateWithoutBandInput.schema';
import { PointUncheckedCreateWithoutBandInputObjectSchema } from './PointUncheckedCreateWithoutBandInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointCreateOrConnectWithoutBandInput> = z
  .object({
    where: z.lazy(() => PointWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PointCreateWithoutBandInputObjectSchema),
      z.lazy(() => PointUncheckedCreateWithoutBandInputObjectSchema),
    ]),
  })
  .strict();

export const PointCreateOrConnectWithoutBandInputObjectSchema = Schema;
