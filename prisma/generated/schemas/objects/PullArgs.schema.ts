import { z } from 'zod';
import { PullSelectObjectSchema } from './PullSelect.schema';
import { PullIncludeObjectSchema } from './PullInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullArgs> = z
  .object({
    select: z.lazy(() => PullSelectObjectSchema).optional(),
    include: z.lazy(() => PullIncludeObjectSchema).optional(),
  })
  .strict();

export const PullArgsObjectSchema = Schema;
