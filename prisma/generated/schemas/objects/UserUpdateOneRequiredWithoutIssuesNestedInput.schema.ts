import { z } from 'zod';
import { UserCreateWithoutIssuesInputObjectSchema } from './UserCreateWithoutIssuesInput.schema';
import { UserUncheckedCreateWithoutIssuesInputObjectSchema } from './UserUncheckedCreateWithoutIssuesInput.schema';
import { UserCreateOrConnectWithoutIssuesInputObjectSchema } from './UserCreateOrConnectWithoutIssuesInput.schema';
import { UserUpsertWithoutIssuesInputObjectSchema } from './UserUpsertWithoutIssuesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutIssuesInputObjectSchema } from './UserUpdateWithoutIssuesInput.schema';
import { UserUncheckedUpdateWithoutIssuesInputObjectSchema } from './UserUncheckedUpdateWithoutIssuesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutIssuesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutIssuesInputObjectSchema),
          z.lazy(() => UserUncheckedCreateWithoutIssuesInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutIssuesInputObjectSchema)
        .optional(),
      upsert: z.lazy(() => UserUpsertWithoutIssuesInputObjectSchema).optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutIssuesInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutIssuesInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutIssuesNestedInputObjectSchema = Schema;
