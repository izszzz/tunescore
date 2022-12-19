import { z } from 'zod';
import { UserUpdateWithoutNotificationsInputObjectSchema } from './UserUpdateWithoutNotificationsInput.schema';
import { UserUncheckedUpdateWithoutNotificationsInputObjectSchema } from './UserUncheckedUpdateWithoutNotificationsInput.schema';
import { UserCreateWithoutNotificationsInputObjectSchema } from './UserCreateWithoutNotificationsInput.schema';
import { UserUncheckedCreateWithoutNotificationsInputObjectSchema } from './UserUncheckedCreateWithoutNotificationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutNotificationsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutNotificationsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutNotificationsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutNotificationsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutNotificationsInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutNotificationsInputObjectSchema = Schema;
