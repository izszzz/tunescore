import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutPointsInputObjectSchema } from './UserCreateWithoutPointsInput.schema';
import { UserUncheckedCreateWithoutPointsInputObjectSchema } from './UserUncheckedCreateWithoutPointsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutPointsInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutPointsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutPointsInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutPointsInputObjectSchema = Schema;
