import { z } from 'zod';
import { UserCreateWithoutFollowersInputObjectSchema } from './UserCreateWithoutFollowersInput.schema';
import { UserUncheckedCreateWithoutFollowersInputObjectSchema } from './UserUncheckedCreateWithoutFollowersInput.schema';
import { UserCreateOrConnectWithoutFollowersInputObjectSchema } from './UserCreateOrConnectWithoutFollowersInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutFollowersInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutFollowersInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutFollowersInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutFollowersInputObjectSchema)
      .optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutFollowersInputObjectSchema = Schema;
