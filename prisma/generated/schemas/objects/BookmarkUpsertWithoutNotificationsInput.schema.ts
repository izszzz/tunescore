import { z } from 'zod';
import { BookmarkUpdateWithoutNotificationsInputObjectSchema } from './BookmarkUpdateWithoutNotificationsInput.schema';
import { BookmarkUncheckedUpdateWithoutNotificationsInputObjectSchema } from './BookmarkUncheckedUpdateWithoutNotificationsInput.schema';
import { BookmarkCreateWithoutNotificationsInputObjectSchema } from './BookmarkCreateWithoutNotificationsInput.schema';
import { BookmarkUncheckedCreateWithoutNotificationsInputObjectSchema } from './BookmarkUncheckedCreateWithoutNotificationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkUpsertWithoutNotificationsInput> = z
  .object({
    update: z.union([
      z.lazy(() => BookmarkUpdateWithoutNotificationsInputObjectSchema),
      z.lazy(
        () => BookmarkUncheckedUpdateWithoutNotificationsInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => BookmarkCreateWithoutNotificationsInputObjectSchema),
      z.lazy(
        () => BookmarkUncheckedCreateWithoutNotificationsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const BookmarkUpsertWithoutNotificationsInputObjectSchema = Schema;
