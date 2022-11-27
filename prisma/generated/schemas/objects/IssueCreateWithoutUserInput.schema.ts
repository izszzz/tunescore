import { z } from 'zod';
import { MusicCreateNestedOneWithoutIssuesInputObjectSchema } from './MusicCreateNestedOneWithoutIssuesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IssueCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    body: z.string(),
    music: z.lazy(() => MusicCreateNestedOneWithoutIssuesInputObjectSchema),
  })
  .strict();

export const IssueCreateWithoutUserInputObjectSchema = Schema;
