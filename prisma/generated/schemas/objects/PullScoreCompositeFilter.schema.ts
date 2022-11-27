import { z } from 'zod';
import { PullScoreObjectEqualityInputObjectSchema } from './PullScoreObjectEqualityInput.schema';
import { PullScoreWhereInputObjectSchema } from './PullScoreWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullScoreCompositeFilter> = z
  .object({
    equals: z.lazy(() => PullScoreObjectEqualityInputObjectSchema).optional(),
    is: z.lazy(() => PullScoreWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => PullScoreWhereInputObjectSchema).optional(),
  })
  .strict();

export const PullScoreCompositeFilterObjectSchema = Schema;
