import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutVotesInputObjectSchema } from './UserUpdateWithoutVotesInput.schema';
import { UserUncheckedUpdateWithoutVotesInputObjectSchema } from './UserUncheckedUpdateWithoutVotesInput.schema';
import { UserCreateWithoutVotesInputObjectSchema } from './UserCreateWithoutVotesInput.schema';
import { UserUncheckedCreateWithoutVotesInputObjectSchema } from './UserUncheckedCreateWithoutVotesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutVotesInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => UserUpdateWithoutVotesInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutVotesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutVotesInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutVotesInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithWhereUniqueWithoutVotesInputObjectSchema = Schema;
