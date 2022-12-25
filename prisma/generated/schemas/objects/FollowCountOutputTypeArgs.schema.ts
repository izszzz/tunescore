import { z } from 'zod';
import { FollowCountOutputTypeSelectObjectSchema } from './FollowCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => FollowCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict();

export const FollowCountOutputTypeArgsObjectSchema = Schema;
