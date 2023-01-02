import { z } from 'zod';
import { RoleMapWhereUniqueInputObjectSchema } from './RoleMapWhereUniqueInput.schema';
import { RoleMapUpdateWithoutRoleInputObjectSchema } from './RoleMapUpdateWithoutRoleInput.schema';
import { RoleMapUncheckedUpdateWithoutRoleInputObjectSchema } from './RoleMapUncheckedUpdateWithoutRoleInput.schema';
import { RoleMapCreateWithoutRoleInputObjectSchema } from './RoleMapCreateWithoutRoleInput.schema';
import { RoleMapUncheckedCreateWithoutRoleInputObjectSchema } from './RoleMapUncheckedCreateWithoutRoleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleMapUpsertWithWhereUniqueWithoutRoleInput> = z
  .object({
    where: z.lazy(() => RoleMapWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => RoleMapUpdateWithoutRoleInputObjectSchema),
      z.lazy(() => RoleMapUncheckedUpdateWithoutRoleInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => RoleMapCreateWithoutRoleInputObjectSchema),
      z.lazy(() => RoleMapUncheckedCreateWithoutRoleInputObjectSchema),
    ]),
  })
  .strict();

export const RoleMapUpsertWithWhereUniqueWithoutRoleInputObjectSchema = Schema;
