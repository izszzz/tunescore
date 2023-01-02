import { z } from 'zod';
import { RoleMapWhereInputObjectSchema } from './RoleMapWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleMapListRelationFilter> = z
  .object({
    every: z.lazy(() => RoleMapWhereInputObjectSchema).optional(),
    some: z.lazy(() => RoleMapWhereInputObjectSchema).optional(),
    none: z.lazy(() => RoleMapWhereInputObjectSchema).optional(),
  })
  .strict();

export const RoleMapListRelationFilterObjectSchema = Schema;
