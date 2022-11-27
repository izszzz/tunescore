import { z } from 'zod';
import { PullWhereUniqueInputObjectSchema } from './PullWhereUniqueInput.schema';
import { PullUpdateWithoutUserInputObjectSchema } from './PullUpdateWithoutUserInput.schema';
import { PullUncheckedUpdateWithoutUserInputObjectSchema } from './PullUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullUpdateWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => PullWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => PullUpdateWithoutUserInputObjectSchema),
      z.lazy(() => PullUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const PullUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema;
