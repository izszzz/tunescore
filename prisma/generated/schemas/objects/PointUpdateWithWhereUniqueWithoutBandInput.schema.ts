import { z } from 'zod';
import { PointWhereUniqueInputObjectSchema } from './PointWhereUniqueInput.schema';
import { PointUpdateWithoutBandInputObjectSchema } from './PointUpdateWithoutBandInput.schema';
import { PointUncheckedUpdateWithoutBandInputObjectSchema } from './PointUncheckedUpdateWithoutBandInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointUpdateWithWhereUniqueWithoutBandInput> = z
  .object({
    where: z.lazy(() => PointWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => PointUpdateWithoutBandInputObjectSchema),
      z.lazy(() => PointUncheckedUpdateWithoutBandInputObjectSchema),
    ]),
  })
  .strict();

export const PointUpdateWithWhereUniqueWithoutBandInputObjectSchema = Schema;
