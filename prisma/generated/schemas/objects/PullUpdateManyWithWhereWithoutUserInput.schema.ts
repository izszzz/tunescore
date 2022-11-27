import { z } from 'zod';
import { PullScalarWhereInputObjectSchema } from './PullScalarWhereInput.schema';
import { PullUpdateManyMutationInputObjectSchema } from './PullUpdateManyMutationInput.schema';
import { PullUncheckedUpdateManyWithoutPullsInputObjectSchema } from './PullUncheckedUpdateManyWithoutPullsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullUpdateManyWithWhereWithoutUserInput> = z
  .object({
    where: z.lazy(() => PullScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => PullUpdateManyMutationInputObjectSchema),
      z.lazy(() => PullUncheckedUpdateManyWithoutPullsInputObjectSchema),
    ]),
  })
  .strict();

export const PullUpdateManyWithWhereWithoutUserInputObjectSchema = Schema;
