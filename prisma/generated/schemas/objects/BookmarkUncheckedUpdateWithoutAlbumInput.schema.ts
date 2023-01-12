import { z } from 'zod';
import { NotificationUncheckedUpdateManyWithoutBookmarkedNestedInputObjectSchema } from './NotificationUncheckedUpdateManyWithoutBookmarkedNestedInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ResourceTypeSchema } from '../enums/ResourceType.schema';
import { EnumResourceTypeFieldUpdateOperationsInputObjectSchema } from './EnumResourceTypeFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkUncheckedUpdateWithoutAlbumInput> = z
  .object({
    notifications: z
      .lazy(
        () =>
          NotificationUncheckedUpdateManyWithoutBookmarkedNestedInputObjectSchema,
      )
      .optional(),
    userId: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    resourceType: z
      .union([
        z.lazy(() => ResourceTypeSchema),
        z.lazy(() => EnumResourceTypeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const BookmarkUncheckedUpdateWithoutAlbumInputObjectSchema = Schema;
