import { z } from 'zod';
import { UserCreateWithoutVotesInputObjectSchema } from './UserCreateWithoutVotesInput.schema';
import { UserUncheckedCreateWithoutVotesInputObjectSchema } from './UserUncheckedCreateWithoutVotesInput.schema';
import { UserCreateOrConnectWithoutVotesInputObjectSchema } from './UserCreateOrConnectWithoutVotesInput.schema';
import { UserUpsertWithWhereUniqueWithoutVotesInputObjectSchema } from './UserUpsertWithWhereUniqueWithoutVotesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithWhereUniqueWithoutVotesInputObjectSchema } from './UserUpdateWithWhereUniqueWithoutVotesInput.schema';
import { UserUpdateManyWithWhereWithoutVotesInputObjectSchema } from './UserUpdateManyWithWhereWithoutVotesInput.schema';
import { UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateManyWithoutVotesNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutVotesInputObjectSchema),
        z.lazy(() => UserCreateWithoutVotesInputObjectSchema).array(),
        z.lazy(() => UserUncheckedCreateWithoutVotesInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutVotesInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => UserCreateOrConnectWithoutVotesInputObjectSchema),
        z.lazy(() => UserCreateOrConnectWithoutVotesInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => UserUpsertWithWhereUniqueWithoutVotesInputObjectSchema),
        z
          .lazy(() => UserUpsertWithWhereUniqueWithoutVotesInputObjectSchema)
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
        z.lazy(() => UserUpdateWithWhereUniqueWithoutVotesInputObjectSchema),
        z
          .lazy(() => UserUpdateWithWhereUniqueWithoutVotesInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => UserUpdateManyWithWhereWithoutVotesInputObjectSchema),
        z
          .lazy(() => UserUpdateManyWithWhereWithoutVotesInputObjectSchema)
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

export const UserUpdateManyWithoutVotesNestedInputObjectSchema = Schema;
