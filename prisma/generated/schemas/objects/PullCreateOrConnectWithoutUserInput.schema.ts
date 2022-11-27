import { z } from 'zod';
import { PullWhereUniqueInputObjectSchema } from './PullWhereUniqueInput.schema';
import { PullCreateWithoutUserInputObjectSchema } from './PullCreateWithoutUserInput.schema';
import { PullUncheckedCreateWithoutUserInputObjectSchema } from './PullUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => PullWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PullCreateWithoutUserInputObjectSchema),
      z.lazy(() => PullUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const PullCreateOrConnectWithoutUserInputObjectSchema = Schema;
