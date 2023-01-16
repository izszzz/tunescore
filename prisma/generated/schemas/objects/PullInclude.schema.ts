import { z } from 'zod';
import { VoteArgsObjectSchema } from './VoteArgs.schema';
import { CommentFindManySchema } from '../findManyComment.schema';
import { MusicArgsObjectSchema } from './MusicArgs.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { PullCountOutputTypeArgsObjectSchema } from './PullCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullInclude> = z
  .object({
    vote: z.union([z.boolean(), z.lazy(() => VoteArgsObjectSchema)]).optional(),
    comments: z
      .union([z.boolean(), z.lazy(() => CommentFindManySchema)])
      .optional(),
    music: z
      .union([z.boolean(), z.lazy(() => MusicArgsObjectSchema)])
      .optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => PullCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const PullIncludeObjectSchema = Schema;
