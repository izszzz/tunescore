import { z } from 'zod';
import { NotificationWhereUniqueInputObjectSchema } from './NotificationWhereUniqueInput.schema';
import { NotificationUpdateWithoutBookmarkedInputObjectSchema } from './NotificationUpdateWithoutBookmarkedInput.schema';
import { NotificationUncheckedUpdateWithoutBookmarkedInputObjectSchema } from './NotificationUncheckedUpdateWithoutBookmarkedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationUpdateWithWhereUniqueWithoutBookmarkedInput> =
  z
    .object({
      where: z.lazy(() => NotificationWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => NotificationUpdateWithoutBookmarkedInputObjectSchema),
        z.lazy(
          () => NotificationUncheckedUpdateWithoutBookmarkedInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const NotificationUpdateWithWhereUniqueWithoutBookmarkedInputObjectSchema =
  Schema;
