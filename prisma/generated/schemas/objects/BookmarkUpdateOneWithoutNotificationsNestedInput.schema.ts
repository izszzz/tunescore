import { z } from 'zod';
import { BookmarkCreateWithoutNotificationsInputObjectSchema } from './BookmarkCreateWithoutNotificationsInput.schema';
import { BookmarkUncheckedCreateWithoutNotificationsInputObjectSchema } from './BookmarkUncheckedCreateWithoutNotificationsInput.schema';
import { BookmarkCreateOrConnectWithoutNotificationsInputObjectSchema } from './BookmarkCreateOrConnectWithoutNotificationsInput.schema';
import { BookmarkUpsertWithoutNotificationsInputObjectSchema } from './BookmarkUpsertWithoutNotificationsInput.schema';
import { BookmarkWhereUniqueInputObjectSchema } from './BookmarkWhereUniqueInput.schema';
import { BookmarkUpdateWithoutNotificationsInputObjectSchema } from './BookmarkUpdateWithoutNotificationsInput.schema';
import { BookmarkUncheckedUpdateWithoutNotificationsInputObjectSchema } from './BookmarkUncheckedUpdateWithoutNotificationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkUpdateOneWithoutNotificationsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BookmarkCreateWithoutNotificationsInputObjectSchema),
          z.lazy(
            () => BookmarkUncheckedCreateWithoutNotificationsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => BookmarkCreateOrConnectWithoutNotificationsInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => BookmarkUpsertWithoutNotificationsInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => BookmarkWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => BookmarkUpdateWithoutNotificationsInputObjectSchema),
          z.lazy(
            () => BookmarkUncheckedUpdateWithoutNotificationsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const BookmarkUpdateOneWithoutNotificationsNestedInputObjectSchema =
  Schema;
