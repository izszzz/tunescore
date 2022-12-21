import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutVoteInputObjectSchema } from './UserCreateWithoutVoteInput.schema';
import { UserUncheckedCreateWithoutVoteInputObjectSchema } from './UserUncheckedCreateWithoutVoteInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutVoteInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutVoteInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutVoteInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutVoteInputObjectSchema = Schema;
