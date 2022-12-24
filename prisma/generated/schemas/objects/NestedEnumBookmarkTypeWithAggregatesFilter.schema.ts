import { z } from 'zod';
import { BookmarkTypeSchema } from '../enums/BookmarkType.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumBookmarkTypeFilterObjectSchema } from './NestedEnumBookmarkTypeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumBookmarkTypeWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => BookmarkTypeSchema).optional(),
    in: z
      .lazy(() => BookmarkTypeSchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => BookmarkTypeSchema)
      .array()
      .optional(),
    not: z
      .union([
        z.lazy(() => BookmarkTypeSchema),
        z.lazy(() => NestedEnumBookmarkTypeWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumBookmarkTypeFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumBookmarkTypeFilterObjectSchema).optional(),
  })
  .strict();

export const NestedEnumBookmarkTypeWithAggregatesFilterObjectSchema = Schema;
