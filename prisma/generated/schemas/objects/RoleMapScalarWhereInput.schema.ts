import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleMapScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => RoleMapScalarWhereInputObjectSchema),
        z.lazy(() => RoleMapScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RoleMapScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RoleMapScalarWhereInputObjectSchema),
        z.lazy(() => RoleMapScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    roleId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    participationId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const RoleMapScalarWhereInputObjectSchema = Schema;
