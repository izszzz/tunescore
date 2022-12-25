import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutFollowersInputObjectSchema } from './UserCreateWithoutFollowersInput.schema';
import { UserUncheckedCreateWithoutFollowersInputObjectSchema } from './UserUncheckedCreateWithoutFollowersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutFollowersInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutFollowersInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutFollowersInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutFollowersInputObjectSchema = Schema;
