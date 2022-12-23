import { z } from 'zod';
import { CommentSelectObjectSchema } from './CommentSelect.schema';
import { CommentIncludeObjectSchema } from './CommentInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentArgs> = z
  .object({
    select: z.lazy(() => CommentSelectObjectSchema).optional(),
    include: z.lazy(() => CommentIncludeObjectSchema).optional(),
  })
  .strict();

export const CommentArgsObjectSchema = Schema;
