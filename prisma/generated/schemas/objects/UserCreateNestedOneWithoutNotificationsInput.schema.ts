import { z } from 'zod';
import { UserCreateWithoutNotificationsInputObjectSchema } from './UserCreateWithoutNotificationsInput.schema';
import { UserUncheckedCreateWithoutNotificationsInputObjectSchema } from './UserUncheckedCreateWithoutNotificationsInput.schema';
import { UserCreateOrConnectWithoutNotificationsInputObjectSchema } from './UserCreateOrConnectWithoutNotificationsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutNotificationsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutNotificationsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutNotificationsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutNotificationsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutNotificationsInputObjectSchema = Schema;
