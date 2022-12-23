import { z } from 'zod';
import { IssueCountOutputTypeSelectObjectSchema } from './IssueCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IssueCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => IssueCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict();

export const IssueCountOutputTypeArgsObjectSchema = Schema;
