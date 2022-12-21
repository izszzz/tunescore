import { z } from 'zod';
import { UserUncheckedCreateNestedManyWithoutVoteInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutVoteInput.schema';
import { VoteCreateuserIDsInputObjectSchema } from './VoteCreateuserIDsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoteUncheckedCreateWithoutPullInput> = z
  .object({
    id: z.string().optional(),
    start: z.date().optional(),
    end: z.date(),
    good: z.number().optional(),
    bad: z.number().optional(),
    users: z
      .lazy(() => UserUncheckedCreateNestedManyWithoutVoteInputObjectSchema)
      .optional(),
    userIDs: z
      .union([
        z.lazy(() => VoteCreateuserIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const VoteUncheckedCreateWithoutPullInputObjectSchema = Schema;
