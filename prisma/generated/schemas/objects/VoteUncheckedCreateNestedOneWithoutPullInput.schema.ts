import { z } from 'zod';
import { VoteCreateWithoutPullInputObjectSchema } from './VoteCreateWithoutPullInput.schema';
import { VoteUncheckedCreateWithoutPullInputObjectSchema } from './VoteUncheckedCreateWithoutPullInput.schema';
import { VoteCreateOrConnectWithoutPullInputObjectSchema } from './VoteCreateOrConnectWithoutPullInput.schema';
import { VoteWhereUniqueInputObjectSchema } from './VoteWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoteUncheckedCreateNestedOneWithoutPullInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VoteCreateWithoutPullInputObjectSchema),
        z.lazy(() => VoteUncheckedCreateWithoutPullInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => VoteCreateOrConnectWithoutPullInputObjectSchema)
      .optional(),
    connect: z.lazy(() => VoteWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const VoteUncheckedCreateNestedOneWithoutPullInputObjectSchema = Schema;
