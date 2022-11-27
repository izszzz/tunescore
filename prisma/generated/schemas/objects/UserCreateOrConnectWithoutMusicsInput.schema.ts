import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutMusicsInputObjectSchema } from './UserCreateWithoutMusicsInput.schema';
import { UserUncheckedCreateWithoutMusicsInputObjectSchema } from './UserUncheckedCreateWithoutMusicsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutMusicsInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutMusicsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutMusicsInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutMusicsInputObjectSchema = Schema;
