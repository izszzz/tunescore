import { z } from 'zod';
import { RoleMapWhereUniqueInputObjectSchema } from './RoleMapWhereUniqueInput.schema';
import { RoleMapCreateWithoutRoleInputObjectSchema } from './RoleMapCreateWithoutRoleInput.schema';
import { RoleMapUncheckedCreateWithoutRoleInputObjectSchema } from './RoleMapUncheckedCreateWithoutRoleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleMapCreateOrConnectWithoutRoleInput> = z
  .object({
    where: z.lazy(() => RoleMapWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => RoleMapCreateWithoutRoleInputObjectSchema),
      z.lazy(() => RoleMapUncheckedCreateWithoutRoleInputObjectSchema),
    ]),
  })
  .strict();

export const RoleMapCreateOrConnectWithoutRoleInputObjectSchema = Schema;
