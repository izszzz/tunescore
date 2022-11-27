import { z } from 'zod';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { NestedEnumVisibilityWithAggregatesFilterObjectSchema } from './NestedEnumVisibilityWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumVisibilityFilterObjectSchema } from './NestedEnumVisibilityFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumVisibilityWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => VisibilitySchema).optional(),
    in: z
      .lazy(() => VisibilitySchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => VisibilitySchema)
      .array()
      .optional(),
    not: z
      .union([
        z.lazy(() => VisibilitySchema),
        z.lazy(() => NestedEnumVisibilityWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumVisibilityFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumVisibilityFilterObjectSchema).optional(),
  })
  .strict();

export const EnumVisibilityWithAggregatesFilterObjectSchema = Schema;
