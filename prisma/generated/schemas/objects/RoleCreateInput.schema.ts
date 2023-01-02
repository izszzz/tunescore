import { z } from 'zod';
import { RoleMapCreateNestedManyWithoutRoleInputObjectSchema } from './RoleMapCreateNestedManyWithoutRoleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    roleMap: z
      .lazy(() => RoleMapCreateNestedManyWithoutRoleInputObjectSchema)
      .optional(),
  })
  .strict();

export const RoleCreateInputObjectSchema = Schema;
