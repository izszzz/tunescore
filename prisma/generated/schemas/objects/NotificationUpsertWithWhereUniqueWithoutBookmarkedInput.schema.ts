import { z } from 'zod';
import { NotificationWhereUniqueInputObjectSchema } from './NotificationWhereUniqueInput.schema';
import { NotificationUpdateWithoutBookmarkedInputObjectSchema } from './NotificationUpdateWithoutBookmarkedInput.schema';
import { NotificationUncheckedUpdateWithoutBookmarkedInputObjectSchema } from './NotificationUncheckedUpdateWithoutBookmarkedInput.schema';
import { NotificationCreateWithoutBookmarkedInputObjectSchema } from './NotificationCreateWithoutBookmarkedInput.schema';
import { NotificationUncheckedCreateWithoutBookmarkedInputObjectSchema } from './NotificationUncheckedCreateWithoutBookmarkedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationUpsertWithWhereUniqueWithoutBookmarkedInput> =
  z
    .object({
      where: z.lazy(() => NotificationWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => NotificationUpdateWithoutBookmarkedInputObjectSchema),
        z.lazy(
          () => NotificationUncheckedUpdateWithoutBookmarkedInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => NotificationCreateWithoutBookmarkedInputObjectSchema),
        z.lazy(
          () => NotificationUncheckedCreateWithoutBookmarkedInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const NotificationUpsertWithWhereUniqueWithoutBookmarkedInputObjectSchema =
  Schema;
