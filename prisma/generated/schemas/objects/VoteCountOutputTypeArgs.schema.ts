import { z } from 'zod';
import { VoteCountOutputTypeSelectObjectSchema } from './VoteCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoteCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => VoteCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict();

export const VoteCountOutputTypeArgsObjectSchema = Schema;
