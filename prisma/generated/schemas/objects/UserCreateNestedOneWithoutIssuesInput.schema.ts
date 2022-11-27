import { z } from 'zod';
import { UserCreateWithoutIssuesInputObjectSchema } from './UserCreateWithoutIssuesInput.schema';
import { UserUncheckedCreateWithoutIssuesInputObjectSchema } from './UserUncheckedCreateWithoutIssuesInput.schema';
import { UserCreateOrConnectWithoutIssuesInputObjectSchema } from './UserCreateOrConnectWithoutIssuesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutIssuesInput> = z.union(
  [
    z
      .object({
        create: z
          .union([
            z.lazy(() => UserCreateWithoutIssuesInputObjectSchema),
            z.lazy(() => UserUncheckedCreateWithoutIssuesInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(() => UserCreateOrConnectWithoutIssuesInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
  ],
);

export const UserCreateNestedOneWithoutIssuesInputObjectSchema = Schema;
