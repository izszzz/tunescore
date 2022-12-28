import { z } from 'zod';
import { TagTypeSchema } from '../enums/TagType.schema';
import { NestedEnumTagTypeWithAggregatesFilterObjectSchema } from './NestedEnumTagTypeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumTagTypeFilterObjectSchema } from './NestedEnumTagTypeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumTagTypeWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => TagTypeSchema).optional(),
    in: z
      .lazy(() => TagTypeSchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => TagTypeSchema)
      .array()
      .optional(),
    not: z
      .union([
        z.lazy(() => TagTypeSchema),
        z.lazy(() => NestedEnumTagTypeWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumTagTypeFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumTagTypeFilterObjectSchema).optional(),
  })
  .strict();

export const EnumTagTypeWithAggregatesFilterObjectSchema = Schema;
