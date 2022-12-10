import { z } from 'zod';
import { UserCreateWithoutBookmarkMusicsInputObjectSchema } from './UserCreateWithoutBookmarkMusicsInput.schema';
import { UserUncheckedCreateWithoutBookmarkMusicsInputObjectSchema } from './UserUncheckedCreateWithoutBookmarkMusicsInput.schema';
import { UserCreateOrConnectWithoutBookmarkMusicsInputObjectSchema } from './UserCreateOrConnectWithoutBookmarkMusicsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateNestedManyWithoutBookmarkMusicsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutBookmarkMusicsInputObjectSchema),
          z
            .lazy(() => UserCreateWithoutBookmarkMusicsInputObjectSchema)
            .array(),
          z.lazy(
            () => UserUncheckedCreateWithoutBookmarkMusicsInputObjectSchema,
          ),
          z
            .lazy(
              () => UserUncheckedCreateWithoutBookmarkMusicsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => UserCreateOrConnectWithoutBookmarkMusicsInputObjectSchema,
          ),
          z
            .lazy(
              () => UserCreateOrConnectWithoutBookmarkMusicsInputObjectSchema,
            )
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

export const UserUncheckedCreateNestedManyWithoutBookmarkMusicsInputObjectSchema =
  Schema;
