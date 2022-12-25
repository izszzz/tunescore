import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkCountOutputTypeSelect> = z
  .object({
    notifications: z.boolean().optional(),
  })
  .strict();

export const BookmarkCountOutputTypeSelectObjectSchema = Schema;
