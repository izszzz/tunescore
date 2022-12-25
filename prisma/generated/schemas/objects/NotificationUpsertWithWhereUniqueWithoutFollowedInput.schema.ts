import { z } from 'zod';
import { NotificationWhereUniqueInputObjectSchema } from './NotificationWhereUniqueInput.schema';
import { NotificationUpdateWithoutFollowedInputObjectSchema } from './NotificationUpdateWithoutFollowedInput.schema';
import { NotificationUncheckedUpdateWithoutFollowedInputObjectSchema } from './NotificationUncheckedUpdateWithoutFollowedInput.schema';
import { NotificationCreateWithoutFollowedInputObjectSchema } from './NotificationCreateWithoutFollowedInput.schema';
import { NotificationUncheckedCreateWithoutFollowedInputObjectSchema } from './NotificationUncheckedCreateWithoutFollowedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationUpsertWithWhereUniqueWithoutFollowedInput> =
  z
    .object({
      where: z.lazy(() => NotificationWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => NotificationUpdateWithoutFollowedInputObjectSchema),
        z.lazy(
          () => NotificationUncheckedUpdateWithoutFollowedInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => NotificationCreateWithoutFollowedInputObjectSchema),
        z.lazy(
          () => NotificationUncheckedCreateWithoutFollowedInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const NotificationUpsertWithWhereUniqueWithoutFollowedInputObjectSchema =
  Schema;
