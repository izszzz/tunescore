import { z } from 'zod';
import { CommentFindManySchema } from '../findManyComment.schema';
import { PointFindManySchema } from '../findManyPoint.schema';
import { MusicArgsObjectSchema } from './MusicArgs.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { IssueCountOutputTypeArgsObjectSchema } from './IssueCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IssueSelect> = z
  .object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    body: z.boolean().optional(),
    status: z.boolean().optional(),
    comments: z
      .union([z.boolean(), z.lazy(() => CommentFindManySchema)])
      .optional(),
    points: z
      .union([z.boolean(), z.lazy(() => PointFindManySchema)])
      .optional(),
    music: z
      .union([z.boolean(), z.lazy(() => MusicArgsObjectSchema)])
      .optional(),
    musicId: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    userId: z.boolean().optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => IssueCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const IssueSelectObjectSchema = Schema;
