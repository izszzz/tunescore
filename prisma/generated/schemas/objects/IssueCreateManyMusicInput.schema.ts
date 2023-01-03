import { z } from 'zod';
import { IssueStatusSchema } from '../enums/IssueStatus.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IssueCreateManyMusicInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    body: z.string(),
    status: z.lazy(() => IssueStatusSchema).optional(),
    userId: z.string(),
  })
  .strict();

export const IssueCreateManyMusicInputObjectSchema = Schema;
