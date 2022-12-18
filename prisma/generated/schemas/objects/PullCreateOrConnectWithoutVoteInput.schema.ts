import { z } from 'zod';
import { PullWhereUniqueInputObjectSchema } from './PullWhereUniqueInput.schema';
import { PullCreateWithoutVoteInputObjectSchema } from './PullCreateWithoutVoteInput.schema';
import { PullUncheckedCreateWithoutVoteInputObjectSchema } from './PullUncheckedCreateWithoutVoteInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullCreateOrConnectWithoutVoteInput> = z
  .object({
    where: z.lazy(() => PullWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PullCreateWithoutVoteInputObjectSchema),
      z.lazy(() => PullUncheckedCreateWithoutVoteInputObjectSchema),
    ]),
  })
  .strict();

export const PullCreateOrConnectWithoutVoteInputObjectSchema = Schema;
