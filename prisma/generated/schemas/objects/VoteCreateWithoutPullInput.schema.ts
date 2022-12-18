import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoteCreateWithoutPullInput> = z
  .object({
    id: z.string().optional(),
    start: z.date().optional(),
    end: z.date(),
    good: z.number().optional(),
    bad: z.number().optional(),
  })
  .strict();

export const VoteCreateWithoutPullInputObjectSchema = Schema;
