import { z } from 'zod';
import { PointWhereUniqueInputObjectSchema } from './PointWhereUniqueInput.schema';
import { PointUpdateWithoutUserInputObjectSchema } from './PointUpdateWithoutUserInput.schema';
import { PointUncheckedUpdateWithoutUserInputObjectSchema } from './PointUncheckedUpdateWithoutUserInput.schema';
import { PointCreateWithoutUserInputObjectSchema } from './PointCreateWithoutUserInput.schema';
import { PointUncheckedCreateWithoutUserInputObjectSchema } from './PointUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointUpsertWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => PointWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => PointUpdateWithoutUserInputObjectSchema),
      z.lazy(() => PointUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PointCreateWithoutUserInputObjectSchema),
      z.lazy(() => PointUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const PointUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema;
