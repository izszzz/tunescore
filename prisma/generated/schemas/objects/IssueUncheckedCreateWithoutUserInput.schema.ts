import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IssueUncheckedCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    body: z.string(),
    musicId: z.string(),
  })
  .strict();

export const IssueUncheckedCreateWithoutUserInputObjectSchema = Schema;
