import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullScoreWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PullScoreWhereInputObjectSchema),
        z.lazy(() => PullScoreWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PullScoreWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PullScoreWhereInputObjectSchema),
        z.lazy(() => PullScoreWhereInputObjectSchema).array(),
      ])
      .optional(),
    original: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    changed: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const PullScoreWhereInputObjectSchema = Schema;
