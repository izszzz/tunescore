import { z } from 'zod';
import { PointActionTypeSchema } from '../enums/PointActionType.schema';
import { NestedEnumPointActionTypeWithAggregatesFilterObjectSchema } from './NestedEnumPointActionTypeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumPointActionTypeFilterObjectSchema } from './NestedEnumPointActionTypeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumPointActionTypeWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => PointActionTypeSchema).optional(),
    in: z
      .lazy(() => PointActionTypeSchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => PointActionTypeSchema)
      .array()
      .optional(),
    not: z
      .union([
        z.lazy(() => PointActionTypeSchema),
        z.lazy(() => NestedEnumPointActionTypeWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumPointActionTypeFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumPointActionTypeFilterObjectSchema).optional(),
  })
  .strict();

export const EnumPointActionTypeWithAggregatesFilterObjectSchema = Schema;
