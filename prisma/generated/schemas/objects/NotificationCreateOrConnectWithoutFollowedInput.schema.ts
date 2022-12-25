import { z } from 'zod';
import { NotificationWhereUniqueInputObjectSchema } from './NotificationWhereUniqueInput.schema';
import { NotificationCreateWithoutFollowedInputObjectSchema } from './NotificationCreateWithoutFollowedInput.schema';
import { NotificationUncheckedCreateWithoutFollowedInputObjectSchema } from './NotificationUncheckedCreateWithoutFollowedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationCreateOrConnectWithoutFollowedInput> =
  z
    .object({
      where: z.lazy(() => NotificationWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => NotificationCreateWithoutFollowedInputObjectSchema),
        z.lazy(
          () => NotificationUncheckedCreateWithoutFollowedInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const NotificationCreateOrConnectWithoutFollowedInputObjectSchema =
  Schema;
