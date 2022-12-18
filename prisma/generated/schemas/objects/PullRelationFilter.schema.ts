import { z } from 'zod';
import { PullWhereInputObjectSchema } from './PullWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullRelationFilter> = z
  .object({
    is: z.lazy(() => PullWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => PullWhereInputObjectSchema).optional(),
  })
  .strict();

export const PullRelationFilterObjectSchema = Schema;
