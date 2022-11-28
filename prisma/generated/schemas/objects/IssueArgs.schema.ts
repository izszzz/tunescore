import { z } from 'zod';
import { IssueSelectObjectSchema } from './IssueSelect.schema';
import { IssueIncludeObjectSchema } from './IssueInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IssueArgs> = z
  .object({
    select: z.lazy(() => IssueSelectObjectSchema).optional(),
    include: z.lazy(() => IssueIncludeObjectSchema).optional(),
  })
  .strict();

export const IssueArgsObjectSchema = Schema;
