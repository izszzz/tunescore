import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { RoleMapListRelationFilterObjectSchema } from './RoleMapListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => RoleWhereInputObjectSchema),
        z.lazy(() => RoleWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RoleWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RoleWhereInputObjectSchema),
        z.lazy(() => RoleWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    roleMap: z.lazy(() => RoleMapListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const RoleWhereInputObjectSchema = Schema;
