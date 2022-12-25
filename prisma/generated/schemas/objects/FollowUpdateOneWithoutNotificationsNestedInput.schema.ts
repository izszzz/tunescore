import { z } from 'zod';
import { FollowCreateWithoutNotificationsInputObjectSchema } from './FollowCreateWithoutNotificationsInput.schema';
import { FollowUncheckedCreateWithoutNotificationsInputObjectSchema } from './FollowUncheckedCreateWithoutNotificationsInput.schema';
import { FollowCreateOrConnectWithoutNotificationsInputObjectSchema } from './FollowCreateOrConnectWithoutNotificationsInput.schema';
import { FollowUpsertWithoutNotificationsInputObjectSchema } from './FollowUpsertWithoutNotificationsInput.schema';
import { FollowWhereUniqueInputObjectSchema } from './FollowWhereUniqueInput.schema';
import { FollowUpdateWithoutNotificationsInputObjectSchema } from './FollowUpdateWithoutNotificationsInput.schema';
import { FollowUncheckedUpdateWithoutNotificationsInputObjectSchema } from './FollowUncheckedUpdateWithoutNotificationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowUpdateOneWithoutNotificationsNestedInput> =
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
      upsert: z
        .lazy(() => FollowUpsertWithoutNotificationsInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => FollowWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => FollowUpdateWithoutNotificationsInputObjectSchema),
          z.lazy(
            () => FollowUncheckedUpdateWithoutNotificationsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const FollowUpdateOneWithoutNotificationsNestedInputObjectSchema =
  Schema;
