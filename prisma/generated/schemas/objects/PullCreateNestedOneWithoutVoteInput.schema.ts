import { z } from 'zod';
import { PullCreateWithoutVoteInputObjectSchema } from './PullCreateWithoutVoteInput.schema';
import { PullUncheckedCreateWithoutVoteInputObjectSchema } from './PullUncheckedCreateWithoutVoteInput.schema';
import { PullCreateOrConnectWithoutVoteInputObjectSchema } from './PullCreateOrConnectWithoutVoteInput.schema';
import { PullWhereUniqueInputObjectSchema } from './PullWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullCreateNestedOneWithoutVoteInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PullCreateWithoutVoteInputObjectSchema),
        z.lazy(() => PullUncheckedCreateWithoutVoteInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => PullCreateOrConnectWithoutVoteInputObjectSchema)
      .optional(),
    connect: z.lazy(() => PullWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const PullCreateNestedOneWithoutVoteInputObjectSchema = Schema;
