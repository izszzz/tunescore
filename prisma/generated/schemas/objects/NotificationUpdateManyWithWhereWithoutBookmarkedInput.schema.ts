import { z } from 'zod';
import { NotificationScalarWhereInputObjectSchema } from './NotificationScalarWhereInput.schema';
import { NotificationUpdateManyMutationInputObjectSchema } from './NotificationUpdateManyMutationInput.schema';
import { NotificationUncheckedUpdateManyWithoutNotificationsInputObjectSchema } from './NotificationUncheckedUpdateManyWithoutNotificationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationUpdateManyWithWhereWithoutBookmarkedInput> =
  z
    .object({
      where: z.lazy(() => NotificationScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => NotificationUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            NotificationUncheckedUpdateManyWithoutNotificationsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const NotificationUpdateManyWithWhereWithoutBookmarkedInputObjectSchema =
  Schema;
