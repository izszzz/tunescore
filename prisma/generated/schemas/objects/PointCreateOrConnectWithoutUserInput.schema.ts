import { z } from 'zod';
import { PointWhereUniqueInputObjectSchema } from './PointWhereUniqueInput.schema';
import { PointCreateWithoutUserInputObjectSchema } from './PointCreateWithoutUserInput.schema';
import { PointUncheckedCreateWithoutUserInputObjectSchema } from './PointUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => PointWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PointCreateWithoutUserInputObjectSchema),
      z.lazy(() => PointUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const PointCreateOrConnectWithoutUserInputObjectSchema = Schema;
