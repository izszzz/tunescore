import { z } from 'zod';
import { RoleMapScalarWhereInputObjectSchema } from './RoleMapScalarWhereInput.schema';
import { RoleMapUpdateManyMutationInputObjectSchema } from './RoleMapUpdateManyMutationInput.schema';
import { RoleMapUncheckedUpdateManyWithoutRoleMapInputObjectSchema } from './RoleMapUncheckedUpdateManyWithoutRoleMapInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleMapUpdateManyWithWhereWithoutRoleInput> = z
  .object({
    where: z.lazy(() => RoleMapScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => RoleMapUpdateManyMutationInputObjectSchema),
      z.lazy(() => RoleMapUncheckedUpdateManyWithoutRoleMapInputObjectSchema),
    ]),
  })
  .strict();

export const RoleMapUpdateManyWithWhereWithoutRoleInputObjectSchema = Schema;
