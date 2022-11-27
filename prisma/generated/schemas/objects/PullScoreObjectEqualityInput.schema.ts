import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullScoreObjectEqualityInput> = z
  .object({
    original: z.string(),
    changed: z.string(),
  })
  .strict();

export const PullScoreObjectEqualityInputObjectSchema = Schema;
