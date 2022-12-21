import { z } from 'zod';
import { PullArgsObjectSchema } from './PullArgs.schema';
import { UserFindManySchema } from '../findManyUser.schema';
import { VoteCountOutputTypeArgsObjectSchema } from './VoteCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoteInclude> = z
  .object({
    pull: z.union([z.boolean(), z.lazy(() => PullArgsObjectSchema)]).optional(),
    users: z.union([z.boolean(), z.lazy(() => UserFindManySchema)]).optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => VoteCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const VoteIncludeObjectSchema = Schema;
