import { z } from 'zod';
import { BookmarkTypeSchema } from '../enums/BookmarkType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumBookmarkTypeFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => BookmarkTypeSchema).optional(),
  })
  .strict();

export const EnumBookmarkTypeFieldUpdateOperationsInputObjectSchema = Schema;
