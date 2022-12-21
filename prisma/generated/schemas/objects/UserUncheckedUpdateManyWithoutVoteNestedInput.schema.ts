import { z } from 'zod';
import { UserCreateWithoutVoteInputObjectSchema } from './UserCreateWithoutVoteInput.schema';
import { UserUncheckedCreateWithoutVoteInputObjectSchema } from './UserUncheckedCreateWithoutVoteInput.schema';
import { UserCreateOrConnectWithoutVoteInputObjectSchema } from './UserCreateOrConnectWithoutVoteInput.schema';
import { UserUpsertWithWhereUniqueWithoutVoteInputObjectSchema } from './UserUpsertWithWhereUniqueWithoutVoteInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithWhereUniqueWithoutVoteInputObjectSchema } from './UserUpdateWithWhereUniqueWithoutVoteInput.schema';
import { UserUpdateManyWithWhereWithoutVoteInputObjectSchema } from './UserUpdateManyWithWhereWithoutVoteInput.schema';
import { UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedUpdateManyWithoutVoteNestedInput> =
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
      upsert: z
        .union([
          z.lazy(() => UserUpsertWithWhereUniqueWithoutVoteInputObjectSchema),
          z
            .lazy(() => UserUpsertWithWhereUniqueWithoutVoteInputObjectSchema)
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => UserWhereUniqueInputObjectSchema),
          z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => UserWhereUniqueInputObjectSchema),
          z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => UserWhereUniqueInputObjectSchema),
          z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => UserWhereUniqueInputObjectSchema),
          z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithWhereUniqueWithoutVoteInputObjectSchema),
          z
            .lazy(() => UserUpdateWithWhereUniqueWithoutVoteInputObjectSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => UserUpdateManyWithWhereWithoutVoteInputObjectSchema),
          z
            .lazy(() => UserUpdateManyWithWhereWithoutVoteInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => UserScalarWhereInputObjectSchema),
          z.lazy(() => UserScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const UserUncheckedUpdateManyWithoutVoteNestedInputObjectSchema = Schema;
