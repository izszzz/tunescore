import { z } from 'zod';
import { PullWhereUniqueInputObjectSchema } from './PullWhereUniqueInput.schema';
import { PullCreateWithoutCommentsInputObjectSchema } from './PullCreateWithoutCommentsInput.schema';
import { PullUncheckedCreateWithoutCommentsInputObjectSchema } from './PullUncheckedCreateWithoutCommentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullCreateOrConnectWithoutCommentsInput> = z
  .object({
    where: z.lazy(() => PullWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PullCreateWithoutCommentsInputObjectSchema),
      z.lazy(() => PullUncheckedCreateWithoutCommentsInputObjectSchema),
    ]),
  })
  .strict();

export const PullCreateOrConnectWithoutCommentsInputObjectSchema = Schema;
