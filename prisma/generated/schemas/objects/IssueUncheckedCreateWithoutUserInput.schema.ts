import { z } from 'zod';
import { CommentUncheckedCreateNestedManyWithoutIssueInputObjectSchema } from './CommentUncheckedCreateNestedManyWithoutIssueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IssueUncheckedCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    body: z.string(),
    comments: z
      .lazy(() => CommentUncheckedCreateNestedManyWithoutIssueInputObjectSchema)
      .optional(),
    musicId: z.string(),
  })
  .strict();

export const IssueUncheckedCreateWithoutUserInputObjectSchema = Schema;
