import { z } from 'zod';
import { UserCreateWithoutIssuesInputObjectSchema } from './UserCreateWithoutIssuesInput.schema';
import { UserUncheckedCreateWithoutIssuesInputObjectSchema } from './UserUncheckedCreateWithoutIssuesInput.schema';
import { UserCreateOrConnectWithoutIssuesInputObjectSchema } from './UserCreateOrConnectWithoutIssuesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutIssuesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutIssuesInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutIssuesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutIssuesInputObjectSchema)
      .optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutIssuesInputObjectSchema = Schema;
