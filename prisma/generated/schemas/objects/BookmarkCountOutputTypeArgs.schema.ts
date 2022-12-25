import { z } from 'zod';
import { BookmarkCountOutputTypeSelectObjectSchema } from './BookmarkCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => BookmarkCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict();

export const BookmarkCountOutputTypeArgsObjectSchema = Schema;
