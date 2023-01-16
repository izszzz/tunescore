import { z } from 'zod';
import { CommentFindManySchema } from '../findManyComment.schema';
import { MusicArgsObjectSchema } from './MusicArgs.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { IssueCountOutputTypeArgsObjectSchema } from './IssueCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IssueInclude> = z
  .object({
    comments: z
      .union([z.boolean(), z.lazy(() => CommentFindManySchema)])
      .optional(),
    music: z
      .union([z.boolean(), z.lazy(() => MusicArgsObjectSchema)])
      .optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => IssueCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const IssueIncludeObjectSchema = Schema;
