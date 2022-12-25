import { z } from 'zod';
import { UserCreateWithoutFollowingInputObjectSchema } from './UserCreateWithoutFollowingInput.schema';
import { UserUncheckedCreateWithoutFollowingInputObjectSchema } from './UserUncheckedCreateWithoutFollowingInput.schema';
import { UserCreateOrConnectWithoutFollowingInputObjectSchema } from './UserCreateOrConnectWithoutFollowingInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutFollowingInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutFollowingInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutFollowingInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutFollowingInputObjectSchema)
      .optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutFollowingInputObjectSchema = Schema;
