import { z } from 'zod';
import { IssueStatusSchema } from '../enums/IssueStatus.schema';
import { CommentCreateNestedManyWithoutIssueInputObjectSchema } from './CommentCreateNestedManyWithoutIssueInput.schema';
import { PointCreateNestedManyWithoutIssueInputObjectSchema } from './PointCreateNestedManyWithoutIssueInput.schema';
import { MusicCreateNestedOneWithoutIssuesInputObjectSchema } from './MusicCreateNestedOneWithoutIssuesInput.schema';
import { UserCreateNestedOneWithoutIssuesInputObjectSchema } from './UserCreateNestedOneWithoutIssuesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IssueCreateInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    body: z.string(),
    status: z.lazy(() => IssueStatusSchema).optional(),
    comments: z
      .lazy(() => CommentCreateNestedManyWithoutIssueInputObjectSchema)
      .optional(),
    points: z
      .lazy(() => PointCreateNestedManyWithoutIssueInputObjectSchema)
      .optional(),
    music: z.lazy(() => MusicCreateNestedOneWithoutIssuesInputObjectSchema),
    user: z.lazy(() => UserCreateNestedOneWithoutIssuesInputObjectSchema),
  })
  .strict();

export const IssueCreateInputObjectSchema = Schema;
