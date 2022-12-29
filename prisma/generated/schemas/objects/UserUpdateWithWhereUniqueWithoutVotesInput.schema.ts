import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutVotesInputObjectSchema } from './UserUpdateWithoutVotesInput.schema';
import { UserUncheckedUpdateWithoutVotesInputObjectSchema } from './UserUncheckedUpdateWithoutVotesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutVotesInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => UserUpdateWithoutVotesInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutVotesInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpdateWithWhereUniqueWithoutVotesInputObjectSchema = Schema;
