import { z } from 'zod';
import { UserCreateNestedManyWithoutVoteInputObjectSchema } from './UserCreateNestedManyWithoutVoteInput.schema';
import { VoteCreateuserIDsInputObjectSchema } from './VoteCreateuserIDsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoteCreateWithoutPullInput> = z
  .object({
    id: z.string().optional(),
    start: z.date().optional(),
    end: z.date(),
    good: z.number().optional(),
    bad: z.number().optional(),
    users: z
      .lazy(() => UserCreateNestedManyWithoutVoteInputObjectSchema)
      .optional(),
    userIDs: z
      .union([
        z.lazy(() => VoteCreateuserIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const VoteCreateWithoutPullInputObjectSchema = Schema;