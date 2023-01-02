import { z } from 'zod';
import { RoleMapCreateWithoutRoleInputObjectSchema } from './RoleMapCreateWithoutRoleInput.schema';
import { RoleMapUncheckedCreateWithoutRoleInputObjectSchema } from './RoleMapUncheckedCreateWithoutRoleInput.schema';
import { RoleMapCreateOrConnectWithoutRoleInputObjectSchema } from './RoleMapCreateOrConnectWithoutRoleInput.schema';
import { RoleMapUpsertWithWhereUniqueWithoutRoleInputObjectSchema } from './RoleMapUpsertWithWhereUniqueWithoutRoleInput.schema';
import { RoleMapCreateManyRoleInputEnvelopeObjectSchema } from './RoleMapCreateManyRoleInputEnvelope.schema';
import { RoleMapWhereUniqueInputObjectSchema } from './RoleMapWhereUniqueInput.schema';
import { RoleMapUpdateWithWhereUniqueWithoutRoleInputObjectSchema } from './RoleMapUpdateWithWhereUniqueWithoutRoleInput.schema';
import { RoleMapUpdateManyWithWhereWithoutRoleInputObjectSchema } from './RoleMapUpdateManyWithWhereWithoutRoleInput.schema';
import { RoleMapScalarWhereInputObjectSchema } from './RoleMapScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleMapUncheckedUpdateManyWithoutRoleNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () => RoleMapUpsertWithWhereUniqueWithoutRoleInputObjectSchema,
          ),
          z
            .lazy(
              () => RoleMapUpsertWithWhereUniqueWithoutRoleInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => RoleMapCreateManyRoleInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => RoleMapWhereUniqueInputObjectSchema),
          z.lazy(() => RoleMapWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => RoleMapWhereUniqueInputObjectSchema),
          z.lazy(() => RoleMapWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => RoleMapWhereUniqueInputObjectSchema),
          z.lazy(() => RoleMapWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => RoleMapWhereUniqueInputObjectSchema),
          z.lazy(() => RoleMapWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => RoleMapUpdateWithWhereUniqueWithoutRoleInputObjectSchema,
          ),
          z
            .lazy(
              () => RoleMapUpdateWithWhereUniqueWithoutRoleInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => RoleMapUpdateManyWithWhereWithoutRoleInputObjectSchema),
          z
            .lazy(() => RoleMapUpdateManyWithWhereWithoutRoleInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => RoleMapScalarWhereInputObjectSchema),
          z.lazy(() => RoleMapScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const RoleMapUncheckedUpdateManyWithoutRoleNestedInputObjectSchema =
  Schema;
