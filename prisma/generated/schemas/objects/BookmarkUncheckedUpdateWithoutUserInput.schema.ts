import { z } from 'zod';
import { NotificationUncheckedUpdateManyWithoutBookmarkedNestedInputObjectSchema } from './NotificationUncheckedUpdateManyWithoutBookmarkedNestedInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BookmarkTypeSchema } from '../enums/BookmarkType.schema';
import { EnumBookmarkTypeFieldUpdateOperationsInputObjectSchema } from './EnumBookmarkTypeFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkUncheckedUpdateWithoutUserInput> = z
  .object({
    notifications: z
      .lazy(
        () =>
          NotificationUncheckedUpdateManyWithoutBookmarkedNestedInputObjectSchema,
      )
      .optional(),
    resourceId: z
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

export const BookmarkUncheckedUpdateWithoutUserInputObjectSchema = Schema;
