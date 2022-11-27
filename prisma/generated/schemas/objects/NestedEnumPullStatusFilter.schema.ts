import { z } from 'zod';
import { PullStatusSchema } from '../enums/PullStatus.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumPullStatusFilter> = z
  .object({
    equals: z.lazy(() => PullStatusSchema).optional(),
    in: z
      .lazy(() => PullStatusSchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => PullStatusSchema)
      .array()
      .optional(),
    not: z
      .union([
        z.lazy(() => PullStatusSchema),
        z.lazy(() => NestedEnumPullStatusFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const NestedEnumPullStatusFilterObjectSchema = Schema;
