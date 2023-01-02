import { z } from 'zod';
import { ParticipationCreateWithoutRoleMapInputObjectSchema } from './ParticipationCreateWithoutRoleMapInput.schema';
import { ParticipationUncheckedCreateWithoutRoleMapInputObjectSchema } from './ParticipationUncheckedCreateWithoutRoleMapInput.schema';
import { ParticipationCreateOrConnectWithoutRoleMapInputObjectSchema } from './ParticipationCreateOrConnectWithoutRoleMapInput.schema';
import { ParticipationUpsertWithoutRoleMapInputObjectSchema } from './ParticipationUpsertWithoutRoleMapInput.schema';
import { ParticipationWhereUniqueInputObjectSchema } from './ParticipationWhereUniqueInput.schema';
import { ParticipationUpdateWithoutRoleMapInputObjectSchema } from './ParticipationUpdateWithoutRoleMapInput.schema';
import { ParticipationUncheckedUpdateWithoutRoleMapInputObjectSchema } from './ParticipationUncheckedUpdateWithoutRoleMapInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParticipationUpdateOneRequiredWithoutRoleMapNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ParticipationCreateWithoutRoleMapInputObjectSchema),
          z.lazy(
            () => ParticipationUncheckedCreateWithoutRoleMapInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ParticipationCreateOrConnectWithoutRoleMapInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ParticipationUpsertWithoutRoleMapInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => ParticipationWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(() => ParticipationUpdateWithoutRoleMapInputObjectSchema),
          z.lazy(
            () => ParticipationUncheckedUpdateWithoutRoleMapInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ParticipationUpdateOneRequiredWithoutRoleMapNestedInputObjectSchema =
  Schema;
