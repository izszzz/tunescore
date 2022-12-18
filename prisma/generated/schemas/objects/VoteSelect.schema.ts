import { z } from 'zod';
import { PullArgsObjectSchema } from './PullArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoteSelect> = z
  .object({
    id: z.boolean().optional(),
    start: z.boolean().optional(),
    end: z.boolean().optional(),
    good: z.boolean().optional(),
    bad: z.boolean().optional(),
    pull: z.union([z.boolean(), z.lazy(() => PullArgsObjectSchema)]).optional(),
    pullId: z.boolean().optional(),
  })
  .strict();

export const VoteSelectObjectSchema = Schema;
