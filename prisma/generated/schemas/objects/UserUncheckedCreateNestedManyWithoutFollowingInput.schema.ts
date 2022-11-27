import { z } from 'zod';
import { UserCreateWithoutFollowingInputObjectSchema } from './UserCreateWithoutFollowingInput.schema';
import { UserUncheckedCreateWithoutFollowingInputObjectSchema } from './UserUncheckedCreateWithoutFollowingInput.schema';
import { UserCreateOrConnectWithoutFollowingInputObjectSchema } from './UserCreateOrConnectWithoutFollowingInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateNestedManyWithoutFollowingInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => UserCreateWithoutFollowingInputObjectSchema),
            z.lazy(() => UserCreateWithoutFollowingInputObjectSchema).array(),
            z.lazy(() => UserUncheckedCreateWithoutFollowingInputObjectSchema),
            z
              .lazy(() => UserUncheckedCreateWithoutFollowingInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => UserCreateOrConnectWithoutFollowingInputObjectSchema),
            z
              .lazy(() => UserCreateOrConnectWithoutFollowingInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => UserWhereUniqueInputObjectSchema),
            z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const UserUncheckedCreateNestedManyWithoutFollowingInputObjectSchema =
  Schema;
