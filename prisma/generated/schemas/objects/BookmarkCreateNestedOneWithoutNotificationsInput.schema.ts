import { z } from 'zod';
import { BookmarkCreateWithoutNotificationsInputObjectSchema } from './BookmarkCreateWithoutNotificationsInput.schema';
import { BookmarkUncheckedCreateWithoutNotificationsInputObjectSchema } from './BookmarkUncheckedCreateWithoutNotificationsInput.schema';
import { BookmarkCreateOrConnectWithoutNotificationsInputObjectSchema } from './BookmarkCreateOrConnectWithoutNotificationsInput.schema';
import { BookmarkWhereUniqueInputObjectSchema } from './BookmarkWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkCreateNestedOneWithoutNotificationsInput> =
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
      connect: z.lazy(() => BookmarkWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const BookmarkCreateNestedOneWithoutNotificationsInputObjectSchema =
  Schema;
