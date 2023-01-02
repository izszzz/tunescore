import { z } from 'zod';
import { RoleMapCreateWithoutParticipationInputObjectSchema } from './RoleMapCreateWithoutParticipationInput.schema';
import { RoleMapUncheckedCreateWithoutParticipationInputObjectSchema } from './RoleMapUncheckedCreateWithoutParticipationInput.schema';
import { RoleMapCreateOrConnectWithoutParticipationInputObjectSchema } from './RoleMapCreateOrConnectWithoutParticipationInput.schema';
import { RoleMapUpsertWithWhereUniqueWithoutParticipationInputObjectSchema } from './RoleMapUpsertWithWhereUniqueWithoutParticipationInput.schema';
import { RoleMapCreateManyParticipationInputEnvelopeObjectSchema } from './RoleMapCreateManyParticipationInputEnvelope.schema';
import { RoleMapWhereUniqueInputObjectSchema } from './RoleMapWhereUniqueInput.schema';
import { RoleMapUpdateWithWhereUniqueWithoutParticipationInputObjectSchema } from './RoleMapUpdateWithWhereUniqueWithoutParticipationInput.schema';
import { RoleMapUpdateManyWithWhereWithoutParticipationInputObjectSchema } from './RoleMapUpdateManyWithWhereWithoutParticipationInput.schema';
import { RoleMapScalarWhereInputObjectSchema } from './RoleMapScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleMapUncheckedUpdateManyWithoutParticipationNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RoleMapCreateWithoutParticipationInputObjectSchema),
          z
            .lazy(() => RoleMapCreateWithoutParticipationInputObjectSchema)
            .array(),
          z.lazy(
            () => RoleMapUncheckedCreateWithoutParticipationInputObjectSchema,
          ),
          z
            .lazy(
              () => RoleMapUncheckedCreateWithoutParticipationInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => RoleMapCreateOrConnectWithoutParticipationInputObjectSchema,
          ),
          z
            .lazy(
              () => RoleMapCreateOrConnectWithoutParticipationInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              RoleMapUpsertWithWhereUniqueWithoutParticipationInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RoleMapUpsertWithWhereUniqueWithoutParticipationInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => RoleMapCreateManyParticipationInputEnvelopeObjectSchema)
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
            () =>
              RoleMapUpdateWithWhereUniqueWithoutParticipationInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RoleMapUpdateWithWhereUniqueWithoutParticipationInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              RoleMapUpdateManyWithWhereWithoutParticipationInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RoleMapUpdateManyWithWhereWithoutParticipationInputObjectSchema,
            )
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

export const RoleMapUncheckedUpdateManyWithoutParticipationNestedInputObjectSchema =
  Schema;
