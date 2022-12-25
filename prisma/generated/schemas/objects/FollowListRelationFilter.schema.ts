import { z } from 'zod';
import { FollowWhereInputObjectSchema } from './FollowWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowListRelationFilter> = z
  .object({
    every: z.lazy(() => FollowWhereInputObjectSchema).optional(),
    some: z.lazy(() => FollowWhereInputObjectSchema).optional(),
    none: z.lazy(() => FollowWhereInputObjectSchema).optional(),
  })
  .strict();

export const FollowListRelationFilterObjectSchema = Schema;
