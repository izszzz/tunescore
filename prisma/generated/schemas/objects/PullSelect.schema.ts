import { z } from 'zod';
import { VoteArgsObjectSchema } from './VoteArgs.schema';
import { MusicArgsObjectSchema } from './MusicArgs.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullSelect> = z
  .object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    body: z.boolean().optional(),
    score: z.boolean().optional(),
    status: z.boolean().optional(),
    vote: z.union([z.boolean(), z.lazy(() => VoteArgsObjectSchema)]).optional(),
    music: z
      .union([z.boolean(), z.lazy(() => MusicArgsObjectSchema)])
      .optional(),
    musicId: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    userId: z.boolean().optional(),
  })
  .strict();

export const PullSelectObjectSchema = Schema;
