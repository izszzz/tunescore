import { z } from 'zod';
import { PullWhereInputObjectSchema } from './PullWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullListRelationFilter> = z
  .object({
    every: z.lazy(() => PullWhereInputObjectSchema).optional(),
    some: z.lazy(() => PullWhereInputObjectSchema).optional(),
    none: z.lazy(() => PullWhereInputObjectSchema).optional(),
  })
  .strict();

export const PullListRelationFilterObjectSchema = Schema;
