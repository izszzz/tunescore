import { z } from 'zod';
import { PointWhereUniqueInputObjectSchema } from './PointWhereUniqueInput.schema';
import { PointUpdateWithoutUserInputObjectSchema } from './PointUpdateWithoutUserInput.schema';
import { PointUncheckedUpdateWithoutUserInputObjectSchema } from './PointUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointUpdateWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => PointWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => PointUpdateWithoutUserInputObjectSchema),
      z.lazy(() => PointUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const PointUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema;
