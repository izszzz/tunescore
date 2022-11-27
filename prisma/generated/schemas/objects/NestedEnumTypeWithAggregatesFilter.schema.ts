import { z } from 'zod';
import { TypeSchema } from '../enums/Type.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumTypeFilterObjectSchema } from './NestedEnumTypeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumTypeWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => TypeSchema).optional(),
    in: z
      .lazy(() => TypeSchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => TypeSchema)
      .array()
      .optional(),
    not: z
      .union([
        z.lazy(() => TypeSchema),
        z.lazy(() => NestedEnumTypeWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumTypeFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumTypeFilterObjectSchema).optional(),
  })
  .strict();

export const NestedEnumTypeWithAggregatesFilterObjectSchema = Schema;
