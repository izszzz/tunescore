import { z } from 'zod';
import { RoleWhereInputObjectSchema } from './RoleWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleRelationFilter> = z
  .object({
    is: z.lazy(() => RoleWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => RoleWhereInputObjectSchema).optional(),
  })
  .strict();

export const RoleRelationFilterObjectSchema = Schema;
