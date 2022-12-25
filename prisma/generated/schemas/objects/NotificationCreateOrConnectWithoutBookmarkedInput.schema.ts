import { z } from 'zod';
import { NotificationWhereUniqueInputObjectSchema } from './NotificationWhereUniqueInput.schema';
import { NotificationCreateWithoutBookmarkedInputObjectSchema } from './NotificationCreateWithoutBookmarkedInput.schema';
import { NotificationUncheckedCreateWithoutBookmarkedInputObjectSchema } from './NotificationUncheckedCreateWithoutBookmarkedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationCreateOrConnectWithoutBookmarkedInput> =
  z
    .object({
      where: z.lazy(() => NotificationWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => NotificationCreateWithoutBookmarkedInputObjectSchema),
        z.lazy(
          () => NotificationUncheckedCreateWithoutBookmarkedInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const NotificationCreateOrConnectWithoutBookmarkedInputObjectSchema =
  Schema;
