import { z } from 'zod';
import { VoteWhereUniqueInputObjectSchema } from './VoteWhereUniqueInput.schema';
import { VoteUpdateWithoutUsersInputObjectSchema } from './VoteUpdateWithoutUsersInput.schema';
import { VoteUncheckedUpdateWithoutUsersInputObjectSchema } from './VoteUncheckedUpdateWithoutUsersInput.schema';
import { VoteCreateWithoutUsersInputObjectSchema } from './VoteCreateWithoutUsersInput.schema';
import { VoteUncheckedCreateWithoutUsersInputObjectSchema } from './VoteUncheckedCreateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoteUpsertWithWhereUniqueWithoutUsersInput> = z
  .object({
    where: z.lazy(() => VoteWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => VoteUpdateWithoutUsersInputObjectSchema),
      z.lazy(() => VoteUncheckedUpdateWithoutUsersInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => VoteCreateWithoutUsersInputObjectSchema),
      z.lazy(() => VoteUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
  })
  .strict();

export const VoteUpsertWithWhereUniqueWithoutUsersInputObjectSchema = Schema;
