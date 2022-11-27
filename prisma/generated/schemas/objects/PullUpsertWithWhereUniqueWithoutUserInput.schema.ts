import { z } from 'zod';
import { PullWhereUniqueInputObjectSchema } from './PullWhereUniqueInput.schema';
import { PullUpdateWithoutUserInputObjectSchema } from './PullUpdateWithoutUserInput.schema';
import { PullUncheckedUpdateWithoutUserInputObjectSchema } from './PullUncheckedUpdateWithoutUserInput.schema';
import { PullCreateWithoutUserInputObjectSchema } from './PullCreateWithoutUserInput.schema';
import { PullUncheckedCreateWithoutUserInputObjectSchema } from './PullUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullUpsertWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => PullWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => PullUpdateWithoutUserInputObjectSchema),
      z.lazy(() => PullUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PullCreateWithoutUserInputObjectSchema),
      z.lazy(() => PullUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const PullUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema;
