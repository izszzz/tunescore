import { z } from 'zod';
import { UserCreateNestedOneWithoutIssuesInputObjectSchema } from './UserCreateNestedOneWithoutIssuesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IssueCreateWithoutMusicInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    body: z.string(),
    user: z.lazy(() => UserCreateNestedOneWithoutIssuesInputObjectSchema),
  })
  .strict();

export const IssueCreateWithoutMusicInputObjectSchema = Schema;
