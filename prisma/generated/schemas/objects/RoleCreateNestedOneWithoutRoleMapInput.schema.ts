import { z } from 'zod';
import { RoleCreateWithoutRoleMapInputObjectSchema } from './RoleCreateWithoutRoleMapInput.schema';
import { RoleUncheckedCreateWithoutRoleMapInputObjectSchema } from './RoleUncheckedCreateWithoutRoleMapInput.schema';
import { RoleCreateOrConnectWithoutRoleMapInputObjectSchema } from './RoleCreateOrConnectWithoutRoleMapInput.schema';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleCreateNestedOneWithoutRoleMapInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => RoleCreateWithoutRoleMapInputObjectSchema),
        z.lazy(() => RoleUncheckedCreateWithoutRoleMapInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => RoleCreateOrConnectWithoutRoleMapInputObjectSchema)
      .optional(),
    connect: z.lazy(() => RoleWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const RoleCreateNestedOneWithoutRoleMapInputObjectSchema = Schema;
