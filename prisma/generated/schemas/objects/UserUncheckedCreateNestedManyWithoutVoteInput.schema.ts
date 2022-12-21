import { z } from 'zod';
import { UserCreateWithoutVoteInputObjectSchema } from './UserCreateWithoutVoteInput.schema';
import { UserUncheckedCreateWithoutVoteInputObjectSchema } from './UserUncheckedCreateWithoutVoteInput.schema';
import { UserCreateOrConnectWithoutVoteInputObjectSchema } from './UserCreateOrConnectWithoutVoteInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateNestedManyWithoutVoteInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutVoteInputObjectSchema),
          z.lazy(() => UserCreateWithoutVoteInputObjectSchema).array(),
          z.lazy(() => UserUncheckedCreateWithoutVoteInputObjectSchema),
          z.lazy(() => UserUncheckedCreateWithoutVoteInputObjectSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => UserCreateOrConnectWithoutVoteInputObjectSchema),
          z.lazy(() => UserCreateOrConnectWithoutVoteInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => UserWhereUniqueInputObjectSchema),
          z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const UserUncheckedCreateNestedManyWithoutVoteInputObjectSchema = Schema;
