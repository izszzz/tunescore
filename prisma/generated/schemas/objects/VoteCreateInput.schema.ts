import { z } from 'zod';
import { PullCreateNestedOneWithoutVoteInputObjectSchema } from './PullCreateNestedOneWithoutVoteInput.schema';
import { UserCreateNestedManyWithoutVotesInputObjectSchema } from './UserCreateNestedManyWithoutVotesInput.schema';
import { VoteCreateuserIDsInputObjectSchema } from './VoteCreateuserIDsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoteCreateInput> = z
  .object({
    id: z.string().optional(),
    start: z.date().optional(),
    end: z.date(),
    good: z.number().optional(),
    bad: z.number().optional(),
    pull: z.lazy(() => PullCreateNestedOneWithoutVoteInputObjectSchema),
    users: z
      .lazy(() => UserCreateNestedManyWithoutVotesInputObjectSchema)
      .optional(),
    userIDs: z
      .union([
        z.lazy(() => VoteCreateuserIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const VoteCreateInputObjectSchema = Schema;
