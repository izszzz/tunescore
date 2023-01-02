import { z } from 'zod';
import { RoleUpdateWithoutRoleMapInputObjectSchema } from './RoleUpdateWithoutRoleMapInput.schema';
import { RoleUncheckedUpdateWithoutRoleMapInputObjectSchema } from './RoleUncheckedUpdateWithoutRoleMapInput.schema';
import { RoleCreateWithoutRoleMapInputObjectSchema } from './RoleCreateWithoutRoleMapInput.schema';
import { RoleUncheckedCreateWithoutRoleMapInputObjectSchema } from './RoleUncheckedCreateWithoutRoleMapInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUpsertWithoutRoleMapInput> = z
  .object({
    update: z.union([
      z.lazy(() => RoleUpdateWithoutRoleMapInputObjectSchema),
      z.lazy(() => RoleUncheckedUpdateWithoutRoleMapInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => RoleCreateWithoutRoleMapInputObjectSchema),
      z.lazy(() => RoleUncheckedCreateWithoutRoleMapInputObjectSchema),
    ]),
  })
  .strict();

export const RoleUpsertWithoutRoleMapInputObjectSchema = Schema;
