import { z } from 'zod';
import { VoteWhereUniqueInputObjectSchema } from './VoteWhereUniqueInput.schema';
import { VoteCreateWithoutUsersInputObjectSchema } from './VoteCreateWithoutUsersInput.schema';
import { VoteUncheckedCreateWithoutUsersInputObjectSchema } from './VoteUncheckedCreateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoteCreateOrConnectWithoutUsersInput> = z
  .object({
    where: z.lazy(() => VoteWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => VoteCreateWithoutUsersInputObjectSchema),
      z.lazy(() => VoteUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
  })
  .strict();

export const VoteCreateOrConnectWithoutUsersInputObjectSchema = Schema;
