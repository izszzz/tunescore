import { z } from 'zod';
import { RoleMapCreateWithoutRoleInputObjectSchema } from './RoleMapCreateWithoutRoleInput.schema';
import { RoleMapUncheckedCreateWithoutRoleInputObjectSchema } from './RoleMapUncheckedCreateWithoutRoleInput.schema';
import { RoleMapCreateOrConnectWithoutRoleInputObjectSchema } from './RoleMapCreateOrConnectWithoutRoleInput.schema';
import { RoleMapCreateManyRoleInputEnvelopeObjectSchema } from './RoleMapCreateManyRoleInputEnvelope.schema';
import { RoleMapWhereUniqueInputObjectSchema } from './RoleMapWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleMapUncheckedCreateNestedManyWithoutRoleInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RoleMapCreateWithoutRoleInputObjectSchema),
          z.lazy(() => RoleMapCreateWithoutRoleInputObjectSchema).array(),
          z.lazy(() => RoleMapUncheckedCreateWithoutRoleInputObjectSchema),
          z
            .lazy(() => RoleMapUncheckedCreateWithoutRoleInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => RoleMapCreateOrConnectWithoutRoleInputObjectSchema),
          z
            .lazy(() => RoleMapCreateOrConnectWithoutRoleInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => RoleMapCreateManyRoleInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => RoleMapWhereUniqueInputObjectSchema),
          z.lazy(() => RoleMapWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const RoleMapUncheckedCreateNestedManyWithoutRoleInputObjectSchema =
  Schema;
