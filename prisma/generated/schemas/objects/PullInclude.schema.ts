import { z } from 'zod';
import { VoteArgsObjectSchema } from './VoteArgs.schema';
import { MusicArgsObjectSchema } from './MusicArgs.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullInclude> = z
  .object({
    vote: z.union([z.boolean(), z.lazy(() => VoteArgsObjectSchema)]).optional(),
    music: z
      .union([z.boolean(), z.lazy(() => MusicArgsObjectSchema)])
      .optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  })
  .strict();

export const PullIncludeObjectSchema = Schema;
