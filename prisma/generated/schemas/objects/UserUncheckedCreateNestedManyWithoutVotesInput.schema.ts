import { z } from 'zod';
import { UserCreateWithoutVotesInputObjectSchema } from './UserCreateWithoutVotesInput.schema';
import { UserUncheckedCreateWithoutVotesInputObjectSchema } from './UserUncheckedCreateWithoutVotesInput.schema';
import { UserCreateOrConnectWithoutVotesInputObjectSchema } from './UserCreateOrConnectWithoutVotesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateNestedManyWithoutVotesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutVotesInputObjectSchema),
          z.lazy(() => UserCreateWithoutVotesInputObjectSchema).array(),
          z.lazy(() => UserUncheckedCreateWithoutVotesInputObjectSchema),
          z
            .lazy(() => UserUncheckedCreateWithoutVotesInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => UserCreateOrConnectWithoutVotesInputObjectSchema),
          z
            .lazy(() => UserCreateOrConnectWithoutVotesInputObjectSchema)
            .array(),
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

export const UserUncheckedCreateNestedManyWithoutVotesInputObjectSchema =
  Schema;
