import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EnumCommentTypeFilterObjectSchema } from './EnumCommentTypeFilter.schema';
import { CommentTypeSchema } from '../enums/CommentType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => CommentScalarWhereInputObjectSchema),
        z.lazy(() => CommentScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => CommentScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => CommentScalarWhereInputObjectSchema),
        z.lazy(() => CommentScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    body: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    resourceId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    resurceType: z
      .union([
        z.lazy(() => EnumCommentTypeFilterObjectSchema),
        z.lazy(() => CommentTypeSchema),
      ])
      .optional(),
  })
  .strict();

export const CommentScalarWhereInputObjectSchema = Schema;
