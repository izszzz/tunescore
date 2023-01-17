import { z } from 'zod';
import { PointWhereInputObjectSchema } from './PointWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointListRelationFilter> = z
  .object({
    every: z.lazy(() => PointWhereInputObjectSchema).optional(),
    some: z.lazy(() => PointWhereInputObjectSchema).optional(),
    none: z.lazy(() => PointWhereInputObjectSchema).optional(),
  })
  .strict();

export const PointListRelationFilterObjectSchema = Schema;
