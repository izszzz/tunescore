import { z } from 'zod';
import { PullCountOutputTypeSelectObjectSchema } from './PullCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => PullCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict();

export const PullCountOutputTypeArgsObjectSchema = Schema;
