import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BookmarkTypeSchema } from '../enums/BookmarkType.schema';
import { EnumBookmarkTypeFieldUpdateOperationsInputObjectSchema } from './EnumBookmarkTypeFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkUncheckedUpdateWithoutMusicInput> = z
  .object({
    userId: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    resourceType: z
      .union([
        z.lazy(() => BookmarkTypeSchema),
        z.lazy(() => EnumBookmarkTypeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const BookmarkUncheckedUpdateWithoutMusicInputObjectSchema = Schema;
