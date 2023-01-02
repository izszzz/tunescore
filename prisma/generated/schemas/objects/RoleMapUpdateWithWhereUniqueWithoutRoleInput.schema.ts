import { z } from 'zod';
import { RoleMapWhereUniqueInputObjectSchema } from './RoleMapWhereUniqueInput.schema';
import { RoleMapUpdateWithoutRoleInputObjectSchema } from './RoleMapUpdateWithoutRoleInput.schema';
import { RoleMapUncheckedUpdateWithoutRoleInputObjectSchema } from './RoleMapUncheckedUpdateWithoutRoleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleMapUpdateWithWhereUniqueWithoutRoleInput> = z
  .object({
    where: z.lazy(() => RoleMapWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => RoleMapUpdateWithoutRoleInputObjectSchema),
      z.lazy(() => RoleMapUncheckedUpdateWithoutRoleInputObjectSchema),
    ]),
  })
  .strict();

export const RoleMapUpdateWithWhereUniqueWithoutRoleInputObjectSchema = Schema;
