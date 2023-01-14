import { z } from 'zod';
import { PointScalarWhereInputObjectSchema } from './PointScalarWhereInput.schema';
import { PointUpdateManyMutationInputObjectSchema } from './PointUpdateManyMutationInput.schema';
import { PointUncheckedUpdateManyWithoutPointsInputObjectSchema } from './PointUncheckedUpdateManyWithoutPointsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointUpdateManyWithWhereWithoutUserInput> = z
  .object({
    where: z.lazy(() => PointScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => PointUpdateManyMutationInputObjectSchema),
      z.lazy(() => PointUncheckedUpdateManyWithoutPointsInputObjectSchema),
    ]),
  })
  .strict();

export const PointUpdateManyWithWhereWithoutUserInputObjectSchema = Schema;
