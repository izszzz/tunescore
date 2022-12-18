import { z } from 'zod';
import { VoteWhereUniqueInputObjectSchema } from './VoteWhereUniqueInput.schema';
import { VoteCreateWithoutPullInputObjectSchema } from './VoteCreateWithoutPullInput.schema';
import { VoteUncheckedCreateWithoutPullInputObjectSchema } from './VoteUncheckedCreateWithoutPullInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoteCreateOrConnectWithoutPullInput> = z
  .object({
    where: z.lazy(() => VoteWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => VoteCreateWithoutPullInputObjectSchema),
      z.lazy(() => VoteUncheckedCreateWithoutPullInputObjectSchema),
    ]),
  })
  .strict();

export const VoteCreateOrConnectWithoutPullInputObjectSchema = Schema;
