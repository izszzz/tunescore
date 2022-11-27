import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IssueUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    body: z.string(),
    musicId: z.string(),
    userId: z.string(),
  })
  .strict();

export const IssueUncheckedCreateInputObjectSchema = Schema;
