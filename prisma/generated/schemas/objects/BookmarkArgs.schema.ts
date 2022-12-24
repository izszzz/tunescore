import { z } from 'zod';
import { BookmarkSelectObjectSchema } from './BookmarkSelect.schema';
import { BookmarkIncludeObjectSchema } from './BookmarkInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkArgs> = z
  .object({
    select: z.lazy(() => BookmarkSelectObjectSchema).optional(),
    include: z.lazy(() => BookmarkIncludeObjectSchema).optional(),
  })
  .strict();

export const BookmarkArgsObjectSchema = Schema;
