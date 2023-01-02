import { z } from 'zod';
import { RoleMapUncheckedCreateNestedManyWithoutRoleInputObjectSchema } from './RoleMapUncheckedCreateNestedManyWithoutRoleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    roleMap: z
      .lazy(() => RoleMapUncheckedCreateNestedManyWithoutRoleInputObjectSchema)
      .optional(),
  })
  .strict();

export const RoleUncheckedCreateInputObjectSchema = Schema;
