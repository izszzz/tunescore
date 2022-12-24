import { z } from 'zod';
import { PullArgsObjectSchema } from './PullArgs.schema';
import { IssueArgsObjectSchema } from './IssueArgs.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentSelect> = z
  .object({
    id: z.boolean().optional(),
    body: z.boolean().optional(),
    pull: z.union([z.boolean(), z.lazy(() => PullArgsObjectSchema)]).optional(),
    issue: z
      .union([z.boolean(), z.lazy(() => IssueArgsObjectSchema)])
      .optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    userId: z.boolean().optional(),
    resourceId: z.boolean().optional(),
    resourceType: z.boolean().optional(),
  })
  .strict();

export const CommentSelectObjectSchema = Schema;
