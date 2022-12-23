import { z } from 'zod';
import { CommentTypeSchema } from '../enums/CommentType.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumCommentTypeFilterObjectSchema } from './NestedEnumCommentTypeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumCommentTypeWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => CommentTypeSchema).optional(),
    in: z
      .lazy(() => CommentTypeSchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => CommentTypeSchema)
      .array()
      .optional(),
    not: z
      .union([
        z.lazy(() => CommentTypeSchema),
        z.lazy(() => NestedEnumCommentTypeWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumCommentTypeFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumCommentTypeFilterObjectSchema).optional(),
  })
  .strict();

export const NestedEnumCommentTypeWithAggregatesFilterObjectSchema = Schema;
