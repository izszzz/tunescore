import { z } from 'zod';
import { NotificationUncheckedCreateNestedManyWithoutBookmarkedInputObjectSchema } from './NotificationUncheckedCreateNestedManyWithoutBookmarkedInput.schema';
import { ResourceTypeSchema } from '../enums/ResourceType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkUncheckedCreateWithoutBandInput> = z
  .object({
    id: z.string().optional(),
    notifications: z
      .lazy(
        () =>
          NotificationUncheckedCreateNestedManyWithoutBookmarkedInputObjectSchema,
      )
      .optional(),
    userId: z.string(),
    resourceType: z.lazy(() => ResourceTypeSchema),
  })
  .strict();

export const BookmarkUncheckedCreateWithoutBandInputObjectSchema = Schema;
