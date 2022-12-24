import { z } from 'zod';
import { BookmarkTypeSchema } from '../enums/BookmarkType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumBookmarkTypeFilter> = z
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
        z.lazy(() => NestedEnumBookmarkTypeFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const NestedEnumBookmarkTypeFilterObjectSchema = Schema;
