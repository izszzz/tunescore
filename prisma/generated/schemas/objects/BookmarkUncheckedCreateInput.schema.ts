import { z } from 'zod';
import { NotificationUncheckedCreateNestedManyWithoutBookmarkedInputObjectSchema } from './NotificationUncheckedCreateNestedManyWithoutBookmarkedInput.schema';
import { BookmarkTypeSchema } from '../enums/BookmarkType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    notifications: z
      .lazy(
        () =>
          NotificationUncheckedCreateNestedManyWithoutBookmarkedInputObjectSchema,
      )
      .optional(),
    userId: z.string(),
    resourceId: z.string(),
    resourceType: z.lazy(() => BookmarkTypeSchema),
  })
  .strict();

export const BookmarkUncheckedCreateInputObjectSchema = Schema;
