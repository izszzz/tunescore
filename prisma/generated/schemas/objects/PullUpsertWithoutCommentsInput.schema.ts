import { z } from 'zod';
import { PullUpdateWithoutCommentsInputObjectSchema } from './PullUpdateWithoutCommentsInput.schema';
import { PullUncheckedUpdateWithoutCommentsInputObjectSchema } from './PullUncheckedUpdateWithoutCommentsInput.schema';
import { PullCreateWithoutCommentsInputObjectSchema } from './PullCreateWithoutCommentsInput.schema';
import { PullUncheckedCreateWithoutCommentsInputObjectSchema } from './PullUncheckedCreateWithoutCommentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullUpsertWithoutCommentsInput> = z
  .object({
    update: z.union([
      z.lazy(() => PullUpdateWithoutCommentsInputObjectSchema),
      z.lazy(() => PullUncheckedUpdateWithoutCommentsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PullCreateWithoutCommentsInputObjectSchema),
      z.lazy(() => PullUncheckedCreateWithoutCommentsInputObjectSchema),
    ]),
  })
  .strict();

export const PullUpsertWithoutCommentsInputObjectSchema = Schema;
