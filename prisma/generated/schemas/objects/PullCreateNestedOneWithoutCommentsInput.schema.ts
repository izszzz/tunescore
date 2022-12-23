import { z } from 'zod';
import { PullCreateWithoutCommentsInputObjectSchema } from './PullCreateWithoutCommentsInput.schema';
import { PullUncheckedCreateWithoutCommentsInputObjectSchema } from './PullUncheckedCreateWithoutCommentsInput.schema';
import { PullCreateOrConnectWithoutCommentsInputObjectSchema } from './PullCreateOrConnectWithoutCommentsInput.schema';
import { PullWhereUniqueInputObjectSchema } from './PullWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullCreateNestedOneWithoutCommentsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PullCreateWithoutCommentsInputObjectSchema),
        z.lazy(() => PullUncheckedCreateWithoutCommentsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => PullCreateOrConnectWithoutCommentsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => PullWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const PullCreateNestedOneWithoutCommentsInputObjectSchema = Schema;
