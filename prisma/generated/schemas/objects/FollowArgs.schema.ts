import { z } from 'zod';
import { FollowSelectObjectSchema } from './FollowSelect.schema';
import { FollowIncludeObjectSchema } from './FollowInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowArgs> = z
  .object({
    select: z.lazy(() => FollowSelectObjectSchema).optional(),
    include: z.lazy(() => FollowIncludeObjectSchema).optional(),
  })
  .strict();

export const FollowArgsObjectSchema = Schema;
