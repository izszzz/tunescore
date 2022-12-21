import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoteCountOutputTypeSelect> = z
  .object({
    users: z.boolean().optional(),
  })
  .strict();

export const VoteCountOutputTypeSelectObjectSchema = Schema;
