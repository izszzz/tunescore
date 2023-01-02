import { z } from 'zod';
import { RoleMapCreateWithoutParticipationInputObjectSchema } from './RoleMapCreateWithoutParticipationInput.schema';
import { RoleMapUncheckedCreateWithoutParticipationInputObjectSchema } from './RoleMapUncheckedCreateWithoutParticipationInput.schema';
import { RoleMapCreateOrConnectWithoutParticipationInputObjectSchema } from './RoleMapCreateOrConnectWithoutParticipationInput.schema';
import { RoleMapCreateManyParticipationInputEnvelopeObjectSchema } from './RoleMapCreateManyParticipationInputEnvelope.schema';
import { RoleMapWhereUniqueInputObjectSchema } from './RoleMapWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleMapUncheckedCreateNestedManyWithoutParticipationInput> =
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
      createMany: z
        .lazy(() => RoleMapCreateManyParticipationInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => RoleMapWhereUniqueInputObjectSchema),
          z.lazy(() => RoleMapWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const RoleMapUncheckedCreateNestedManyWithoutParticipationInputObjectSchema =
  Schema;
