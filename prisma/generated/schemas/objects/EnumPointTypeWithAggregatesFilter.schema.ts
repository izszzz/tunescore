import { z } from 'zod';
import { PointTypeSchema } from '../enums/PointType.schema';
import { NestedEnumPointTypeWithAggregatesFilterObjectSchema } from './NestedEnumPointTypeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumPointTypeFilterObjectSchema } from './NestedEnumPointTypeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumPointTypeWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => PointTypeSchema).optional(),
    in: z
      .lazy(() => PointTypeSchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => PointTypeSchema)
      .array()
      .optional(),
    not: z
      .union([
        z.lazy(() => PointTypeSchema),
        z.lazy(() => NestedEnumPointTypeWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumPointTypeFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumPointTypeFilterObjectSchema).optional(),
  })
  .strict();

export const EnumPointTypeWithAggregatesFilterObjectSchema = Schema;
