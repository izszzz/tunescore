import { z } from 'zod';
import { UserUncheckedCreateNestedManyWithoutVotesInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutVotesInput.schema';
import { VoteCreateuserIDsInputObjectSchema } from './VoteCreateuserIDsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoteUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    start: z.date().optional(),
    end: z.date(),
    good: z.number().optional(),
    bad: z.number().optional(),
    pullId: z.string(),
    users: z
      .lazy(() => UserUncheckedCreateNestedManyWithoutVotesInputObjectSchema)
      .optional(),
    userIDs: z
      .union([
        z.lazy(() => VoteCreateuserIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const VoteUncheckedCreateInputObjectSchema = Schema;
