import { z } from 'zod';
import { IssueStatusSchema } from '../enums/IssueStatus.schema';
import { CommentUncheckedCreateNestedManyWithoutIssueInputObjectSchema } from './CommentUncheckedCreateNestedManyWithoutIssueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IssueUncheckedCreateWithoutPointsInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    body: z.string(),
    status: z.lazy(() => IssueStatusSchema).optional(),
    comments: z
      .lazy(() => CommentUncheckedCreateNestedManyWithoutIssueInputObjectSchema)
      .optional(),
    musicId: z.string(),
    userId: z.string(),
  })
  .strict();

export const IssueUncheckedCreateWithoutPointsInputObjectSchema = Schema;
