import { z } from 'zod';
import { BookmarkTypeSchema } from '../enums/BookmarkType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkUncheckedCreateWithoutBandInput> = z
  .object({
    id: z.string().optional(),
    userId: z.string(),
    resourceType: z.lazy(() => BookmarkTypeSchema),
  })
  .strict();

export const BookmarkUncheckedCreateWithoutBandInputObjectSchema = Schema;
