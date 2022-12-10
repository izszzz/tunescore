import { z } from 'zod';
import { UserCreateWithoutMusicsInputObjectSchema } from './UserCreateWithoutMusicsInput.schema';
import { UserUncheckedCreateWithoutMusicsInputObjectSchema } from './UserUncheckedCreateWithoutMusicsInput.schema';
import { UserCreateOrConnectWithoutMusicsInputObjectSchema } from './UserCreateOrConnectWithoutMusicsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutMusicsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutMusicsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutMusicsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutMusicsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutMusicsInputObjectSchema = Schema;
