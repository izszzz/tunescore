import { z } from 'zod';
import { VoteWhereUniqueInputObjectSchema } from './VoteWhereUniqueInput.schema';
import { VoteUpdateWithoutUsersInputObjectSchema } from './VoteUpdateWithoutUsersInput.schema';
import { VoteUncheckedUpdateWithoutUsersInputObjectSchema } from './VoteUncheckedUpdateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoteUpdateWithWhereUniqueWithoutUsersInput> = z
  .object({
    where: z.lazy(() => VoteWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => VoteUpdateWithoutUsersInputObjectSchema),
      z.lazy(() => VoteUncheckedUpdateWithoutUsersInputObjectSchema),
    ]),
  })
  .strict();

export const VoteUpdateWithWhereUniqueWithoutUsersInputObjectSchema = Schema;
