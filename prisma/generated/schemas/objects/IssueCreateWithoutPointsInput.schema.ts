import { z } from 'zod';
import { IssueStatusSchema } from '../enums/IssueStatus.schema';
import { CommentCreateNestedManyWithoutIssueInputObjectSchema } from './CommentCreateNestedManyWithoutIssueInput.schema';
import { MusicCreateNestedOneWithoutIssuesInputObjectSchema } from './MusicCreateNestedOneWithoutIssuesInput.schema';
import { UserCreateNestedOneWithoutIssuesInputObjectSchema } from './UserCreateNestedOneWithoutIssuesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IssueCreateWithoutPointsInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    body: z.string(),
    status: z.lazy(() => IssueStatusSchema).optional(),
    comments: z
      .lazy(() => CommentCreateNestedManyWithoutIssueInputObjectSchema)
      .optional(),
    music: z.lazy(() => MusicCreateNestedOneWithoutIssuesInputObjectSchema),
    user: z.lazy(() => UserCreateNestedOneWithoutIssuesInputObjectSchema),
  })
  .strict();

export const IssueCreateWithoutPointsInputObjectSchema = Schema;