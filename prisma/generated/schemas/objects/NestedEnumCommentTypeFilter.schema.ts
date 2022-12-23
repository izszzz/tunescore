import { z } from 'zod';
import { CommentTypeSchema } from '../enums/CommentType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumCommentTypeFilter> = z
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
        z.lazy(() => NestedEnumCommentTypeFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const NestedEnumCommentTypeFilterObjectSchema = Schema;
