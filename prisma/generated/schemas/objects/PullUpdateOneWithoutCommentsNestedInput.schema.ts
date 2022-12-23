import { z } from 'zod';
import { PullCreateWithoutCommentsInputObjectSchema } from './PullCreateWithoutCommentsInput.schema';
import { PullUncheckedCreateWithoutCommentsInputObjectSchema } from './PullUncheckedCreateWithoutCommentsInput.schema';
import { PullCreateOrConnectWithoutCommentsInputObjectSchema } from './PullCreateOrConnectWithoutCommentsInput.schema';
import { PullUpsertWithoutCommentsInputObjectSchema } from './PullUpsertWithoutCommentsInput.schema';
import { PullWhereUniqueInputObjectSchema } from './PullWhereUniqueInput.schema';
import { PullUpdateWithoutCommentsInputObjectSchema } from './PullUpdateWithoutCommentsInput.schema';
import { PullUncheckedUpdateWithoutCommentsInputObjectSchema } from './PullUncheckedUpdateWithoutCommentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullUpdateOneWithoutCommentsNestedInput> = z
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
    upsert: z.lazy(() => PullUpsertWithoutCommentsInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => PullWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => PullUpdateWithoutCommentsInputObjectSchema),
        z.lazy(() => PullUncheckedUpdateWithoutCommentsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const PullUpdateOneWithoutCommentsNestedInputObjectSchema = Schema;
