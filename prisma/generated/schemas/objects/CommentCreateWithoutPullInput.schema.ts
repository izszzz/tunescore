import { z } from 'zod';
import { IssueCreateNestedOneWithoutCommentsInputObjectSchema } from './IssueCreateNestedOneWithoutCommentsInput.schema';
import { CommentTypeSchema } from '../enums/CommentType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentCreateWithoutPullInput> = z
  .object({
    id: z.string().optional(),
    body: z.string(),
    issue: z
      .lazy(() => IssueCreateNestedOneWithoutCommentsInputObjectSchema)
      .optional(),
    resurceType: z.lazy(() => CommentTypeSchema),
  })
  .strict();

export const CommentCreateWithoutPullInputObjectSchema = Schema;
