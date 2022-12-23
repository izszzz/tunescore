import { z } from 'zod';
import { MusicCreateNestedOneWithoutIssuesInputObjectSchema } from './MusicCreateNestedOneWithoutIssuesInput.schema';
import { UserCreateNestedOneWithoutIssuesInputObjectSchema } from './UserCreateNestedOneWithoutIssuesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IssueCreateWithoutCommentsInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    body: z.string(),
    music: z.lazy(() => MusicCreateNestedOneWithoutIssuesInputObjectSchema),
    user: z.lazy(() => UserCreateNestedOneWithoutIssuesInputObjectSchema),
  })
  .strict();

export const IssueCreateWithoutCommentsInputObjectSchema = Schema;
