import { z } from 'zod';
import { RoleCreateWithoutRoleMapInputObjectSchema } from './RoleCreateWithoutRoleMapInput.schema';
import { RoleUncheckedCreateWithoutRoleMapInputObjectSchema } from './RoleUncheckedCreateWithoutRoleMapInput.schema';
import { RoleCreateOrConnectWithoutRoleMapInputObjectSchema } from './RoleCreateOrConnectWithoutRoleMapInput.schema';
import { RoleUpsertWithoutRoleMapInputObjectSchema } from './RoleUpsertWithoutRoleMapInput.schema';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';
import { RoleUpdateWithoutRoleMapInputObjectSchema } from './RoleUpdateWithoutRoleMapInput.schema';
import { RoleUncheckedUpdateWithoutRoleMapInputObjectSchema } from './RoleUncheckedUpdateWithoutRoleMapInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUpdateOneRequiredWithoutRoleMapNestedInput> =
  z
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
      upsert: z
        .lazy(() => RoleUpsertWithoutRoleMapInputObjectSchema)
        .optional(),
      connect: z.lazy(() => RoleWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => RoleUpdateWithoutRoleMapInputObjectSchema),
          z.lazy(() => RoleUncheckedUpdateWithoutRoleMapInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const RoleUpdateOneRequiredWithoutRoleMapNestedInputObjectSchema =
  Schema;
