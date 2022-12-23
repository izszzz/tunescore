import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullCountOutputTypeSelect> = z
  .object({
    comments: z.boolean().optional(),
  })
  .strict();

export const PullCountOutputTypeSelectObjectSchema = Schema;
