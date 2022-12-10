import { z } from 'zod';
import { UserCreateWithoutBookmarkBandsInputObjectSchema } from './UserCreateWithoutBookmarkBandsInput.schema';
import { UserUncheckedCreateWithoutBookmarkBandsInputObjectSchema } from './UserUncheckedCreateWithoutBookmarkBandsInput.schema';
import { UserCreateOrConnectWithoutBookmarkBandsInputObjectSchema } from './UserCreateOrConnectWithoutBookmarkBandsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateNestedManyWithoutBookmarkBandsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutBookmarkBandsInputObjectSchema),
          z.lazy(() => UserCreateWithoutBookmarkBandsInputObjectSchema).array(),
          z.lazy(
            () => UserUncheckedCreateWithoutBookmarkBandsInputObjectSchema,
          ),
          z
            .lazy(
              () => UserUncheckedCreateWithoutBookmarkBandsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => UserCreateOrConnectWithoutBookmarkBandsInputObjectSchema,
          ),
          z
            .lazy(
              () => UserCreateOrConnectWithoutBookmarkBandsInputObjectSchema,
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

export const UserUncheckedCreateNestedManyWithoutBookmarkBandsInputObjectSchema =
  Schema;
