import { z } from 'zod';
import { FollowWhereUniqueInputObjectSchema } from './FollowWhereUniqueInput.schema';
import { FollowCreateWithoutNotificationsInputObjectSchema } from './FollowCreateWithoutNotificationsInput.schema';
import { FollowUncheckedCreateWithoutNotificationsInputObjectSchema } from './FollowUncheckedCreateWithoutNotificationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowCreateOrConnectWithoutNotificationsInput> =
  z
    .object({
      where: z.lazy(() => FollowWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => FollowCreateWithoutNotificationsInputObjectSchema),
        z.lazy(
          () => FollowUncheckedCreateWithoutNotificationsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const FollowCreateOrConnectWithoutNotificationsInputObjectSchema =
  Schema;
