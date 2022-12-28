import { z } from 'zod';
import { TagMapSelectObjectSchema } from './TagMapSelect.schema';
import { TagMapIncludeObjectSchema } from './TagMapInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapArgs> = z
  .object({
    select: z.lazy(() => TagMapSelectObjectSchema).optional(),
    include: z.lazy(() => TagMapIncludeObjectSchema).optional(),
  })
  .strict();

export const TagMapArgsObjectSchema = Schema;
