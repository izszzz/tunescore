import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullScoreCreateInput> = z
  .object({
    original: z.string(),
    changed: z.string(),
  })
  .strict();

export const PullScoreCreateInputObjectSchema = Schema;
