import { z } from 'zod';
import { UserCreateWithoutNotificationsInputObjectSchema } from './UserCreateWithoutNotificationsInput.schema';
import { UserUncheckedCreateWithoutNotificationsInputObjectSchema } from './UserUncheckedCreateWithoutNotificationsInput.schema';
import { UserCreateOrConnectWithoutNotificationsInputObjectSchema } from './UserCreateOrConnectWithoutNotificationsInput.schema';
import { UserUpsertWithoutNotificationsInputObjectSchema } from './UserUpsertWithoutNotificationsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutNotificationsInputObjectSchema } from './UserUpdateWithoutNotificationsInput.schema';
import { UserUncheckedUpdateWithoutNotificationsInputObjectSchema } from './UserUncheckedUpdateWithoutNotificationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutNotificationsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutNotificationsInputObjectSchema),
          z.lazy(
            () => UserUncheckedCreateWithoutNotificationsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutNotificationsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutNotificationsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutNotificationsInputObjectSchema),
          z.lazy(
            () => UserUncheckedUpdateWithoutNotificationsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutNotificationsNestedInputObjectSchema =
  Schema;
