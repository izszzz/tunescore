import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutVoteInputObjectSchema } from './UserUpdateWithoutVoteInput.schema';
import { UserUncheckedUpdateWithoutVoteInputObjectSchema } from './UserUncheckedUpdateWithoutVoteInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutVoteInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => UserUpdateWithoutVoteInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutVoteInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpdateWithWhereUniqueWithoutVoteInputObjectSchema = Schema;
