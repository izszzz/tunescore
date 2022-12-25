import { z } from 'zod';
import { BookmarkWhereUniqueInputObjectSchema } from './BookmarkWhereUniqueInput.schema';
import { BookmarkCreateWithoutNotificationsInputObjectSchema } from './BookmarkCreateWithoutNotificationsInput.schema';
import { BookmarkUncheckedCreateWithoutNotificationsInputObjectSchema } from './BookmarkUncheckedCreateWithoutNotificationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkCreateOrConnectWithoutNotificationsInput> =
  z
    .object({
      where: z.lazy(() => BookmarkWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => BookmarkCreateWithoutNotificationsInputObjectSchema),
        z.lazy(
          () => BookmarkUncheckedCreateWithoutNotificationsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BookmarkCreateOrConnectWithoutNotificationsInputObjectSchema =
  Schema;
