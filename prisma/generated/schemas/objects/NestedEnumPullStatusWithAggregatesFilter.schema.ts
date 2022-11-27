import { z } from 'zod';
import { PullStatusSchema } from '../enums/PullStatus.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumPullStatusFilterObjectSchema } from './NestedEnumPullStatusFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumPullStatusWithAggregatesFilter> = z
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
        z.lazy(() => NestedEnumPullStatusWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumPullStatusFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumPullStatusFilterObjectSchema).optional(),
  })
  .strict();

export const NestedEnumPullStatusWithAggregatesFilterObjectSchema = Schema;
