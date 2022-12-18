import { z } from 'zod';
import { PullArgsObjectSchema } from './PullArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoteInclude> = z
  .object({
    pull: z.union([z.boolean(), z.lazy(() => PullArgsObjectSchema)]).optional(),
  })
  .strict();

export const VoteIncludeObjectSchema = Schema;
