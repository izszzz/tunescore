import { z } from 'zod';
import { NotificationWhereUniqueInputObjectSchema } from './NotificationWhereUniqueInput.schema';
import { NotificationUpdateWithoutFollowedInputObjectSchema } from './NotificationUpdateWithoutFollowedInput.schema';
import { NotificationUncheckedUpdateWithoutFollowedInputObjectSchema } from './NotificationUncheckedUpdateWithoutFollowedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationUpdateWithWhereUniqueWithoutFollowedInput> =
  z
    .object({
      where: z.lazy(() => NotificationWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => NotificationUpdateWithoutFollowedInputObjectSchema),
        z.lazy(
          () => NotificationUncheckedUpdateWithoutFollowedInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const NotificationUpdateWithWhereUniqueWithoutFollowedInputObjectSchema =
  Schema;
