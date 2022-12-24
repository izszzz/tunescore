import { z } from 'zod';
import { PullCreateNestedOneWithoutCommentsInputObjectSchema } from './PullCreateNestedOneWithoutCommentsInput.schema';
import { UserCreateNestedOneWithoutCommentsInputObjectSchema } from './UserCreateNestedOneWithoutCommentsInput.schema';
import { CommentTypeSchema } from '../enums/CommentType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentCreateWithoutIssueInput> = z
  .object({
    id: z.string().optional(),
    body: z.string(),
    pull: z
      .lazy(() => PullCreateNestedOneWithoutCommentsInputObjectSchema)
      .optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutCommentsInputObjectSchema),
    resourceType: z.lazy(() => CommentTypeSchema),
  })
  .strict();

export const CommentCreateWithoutIssueInputObjectSchema = Schema;
