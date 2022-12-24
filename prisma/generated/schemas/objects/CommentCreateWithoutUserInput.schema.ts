import { z } from 'zod';
import { PullCreateNestedOneWithoutCommentsInputObjectSchema } from './PullCreateNestedOneWithoutCommentsInput.schema';
import { IssueCreateNestedOneWithoutCommentsInputObjectSchema } from './IssueCreateNestedOneWithoutCommentsInput.schema';
import { CommentTypeSchema } from '../enums/CommentType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    body: z.string(),
    pull: z
      .lazy(() => PullCreateNestedOneWithoutCommentsInputObjectSchema)
      .optional(),
    issue: z
      .lazy(() => IssueCreateNestedOneWithoutCommentsInputObjectSchema)
      .optional(),
    resourceType: z.lazy(() => CommentTypeSchema),
  })
  .strict();

export const CommentCreateWithoutUserInputObjectSchema = Schema;
