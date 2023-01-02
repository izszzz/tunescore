import { z } from 'zod';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';
import { RoleCreateWithoutRoleMapInputObjectSchema } from './RoleCreateWithoutRoleMapInput.schema';
import { RoleUncheckedCreateWithoutRoleMapInputObjectSchema } from './RoleUncheckedCreateWithoutRoleMapInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleCreateOrConnectWithoutRoleMapInput> = z
  .object({
    where: z.lazy(() => RoleWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => RoleCreateWithoutRoleMapInputObjectSchema),
      z.lazy(() => RoleUncheckedCreateWithoutRoleMapInputObjectSchema),
    ]),
  })
  .strict();

export const RoleCreateOrConnectWithoutRoleMapInputObjectSchema = Schema;
