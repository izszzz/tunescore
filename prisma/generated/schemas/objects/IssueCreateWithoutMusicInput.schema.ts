import { z } from 'zod';
import { CommentCreateNestedManyWithoutIssueInputObjectSchema } from './CommentCreateNestedManyWithoutIssueInput.schema';
import { UserCreateNestedOneWithoutIssuesInputObjectSchema } from './UserCreateNestedOneWithoutIssuesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IssueCreateWithoutMusicInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    body: z.string(),
    comments: z
      .lazy(() => CommentCreateNestedManyWithoutIssueInputObjectSchema)
      .optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutIssuesInputObjectSchema),
  })
  .strict();

export const IssueCreateWithoutMusicInputObjectSchema = Schema;
