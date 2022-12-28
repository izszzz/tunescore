import { z } from 'zod';
import { TagMapWhereInputObjectSchema } from './TagMapWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapListRelationFilter> = z
  .object({
    every: z.lazy(() => TagMapWhereInputObjectSchema).optional(),
    some: z.lazy(() => TagMapWhereInputObjectSchema).optional(),
    none: z.lazy(() => TagMapWhereInputObjectSchema).optional(),
  })
  .strict();

export const TagMapListRelationFilterObjectSchema = Schema;
