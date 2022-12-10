import { z } from 'zod';
import { UserCreateWithoutPullsInputObjectSchema } from './UserCreateWithoutPullsInput.schema';
import { UserUncheckedCreateWithoutPullsInputObjectSchema } from './UserUncheckedCreateWithoutPullsInput.schema';
import { UserCreateOrConnectWithoutPullsInputObjectSchema } from './UserCreateOrConnectWithoutPullsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutPullsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutPullsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutPullsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutPullsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutPullsInputObjectSchema = Schema;
