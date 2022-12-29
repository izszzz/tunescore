import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutVotesInputObjectSchema } from './UserCreateWithoutVotesInput.schema';
import { UserUncheckedCreateWithoutVotesInputObjectSchema } from './UserUncheckedCreateWithoutVotesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutVotesInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutVotesInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutVotesInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutVotesInputObjectSchema = Schema;
