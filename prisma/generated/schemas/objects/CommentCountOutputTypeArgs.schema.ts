import { z } from 'zod';
import { CommentCountOutputTypeSelectObjectSchema } from './CommentCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => CommentCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict();

export const CommentCountOutputTypeArgsObjectSchema = Schema;
