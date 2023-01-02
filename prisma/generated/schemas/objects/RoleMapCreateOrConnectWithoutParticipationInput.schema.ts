import { z } from 'zod';
import { RoleMapWhereUniqueInputObjectSchema } from './RoleMapWhereUniqueInput.schema';
import { RoleMapCreateWithoutParticipationInputObjectSchema } from './RoleMapCreateWithoutParticipationInput.schema';
import { RoleMapUncheckedCreateWithoutParticipationInputObjectSchema } from './RoleMapUncheckedCreateWithoutParticipationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleMapCreateOrConnectWithoutParticipationInput> =
  z
    .object({
      where: z.lazy(() => RoleMapWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => RoleMapCreateWithoutParticipationInputObjectSchema),
        z.lazy(
          () => RoleMapUncheckedCreateWithoutParticipationInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const RoleMapCreateOrConnectWithoutParticipationInputObjectSchema =
  Schema;
