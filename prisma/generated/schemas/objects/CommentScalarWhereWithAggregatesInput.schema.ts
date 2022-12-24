import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumCommentTypeWithAggregatesFilterObjectSchema } from './EnumCommentTypeWithAggregatesFilter.schema';
import { CommentTypeSchema } from '../enums/CommentType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => CommentScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => CommentScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => CommentScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => CommentScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => CommentScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    body: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    userId: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    resourceId: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    resourceType: z
      .union([
        z.lazy(() => EnumCommentTypeWithAggregatesFilterObjectSchema),
        z.lazy(() => CommentTypeSchema),
      ])
      .optional(),
  })
  .strict();

export const CommentScalarWhereWithAggregatesInputObjectSchema = Schema;
