import { z } from 'zod';
import { FollowCreateWithoutNotificationsInputObjectSchema } from './FollowCreateWithoutNotificationsInput.schema';
import { FollowUncheckedCreateWithoutNotificationsInputObjectSchema } from './FollowUncheckedCreateWithoutNotificationsInput.schema';
import { FollowCreateOrConnectWithoutNotificationsInputObjectSchema } from './FollowCreateOrConnectWithoutNotificationsInput.schema';
import { FollowWhereUniqueInputObjectSchema } from './FollowWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowCreateNestedOneWithoutNotificationsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FollowCreateWithoutNotificationsInputObjectSchema),
          z.lazy(
            () => FollowUncheckedCreateWithoutNotificationsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => FollowCreateOrConnectWithoutNotificationsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => FollowWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const FollowCreateNestedOneWithoutNotificationsInputObjectSchema =
  Schema;
