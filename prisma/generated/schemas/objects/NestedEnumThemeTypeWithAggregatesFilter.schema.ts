import { z } from 'zod';
import { ThemeTypeSchema } from '../enums/ThemeType.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumThemeTypeFilterObjectSchema } from './NestedEnumThemeTypeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumThemeTypeWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => ThemeTypeSchema).optional(),
    in: z
      .lazy(() => ThemeTypeSchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => ThemeTypeSchema)
      .array()
      .optional(),
    not: z
      .union([
        z.lazy(() => ThemeTypeSchema),
        z.lazy(() => NestedEnumThemeTypeWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumThemeTypeFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumThemeTypeFilterObjectSchema).optional(),
  })
  .strict();

export const NestedEnumThemeTypeWithAggregatesFilterObjectSchema = Schema;
