import { z } from 'zod';
import { RoleMapWhereUniqueInputObjectSchema } from './RoleMapWhereUniqueInput.schema';
import { RoleMapUpdateWithoutParticipationInputObjectSchema } from './RoleMapUpdateWithoutParticipationInput.schema';
import { RoleMapUncheckedUpdateWithoutParticipationInputObjectSchema } from './RoleMapUncheckedUpdateWithoutParticipationInput.schema';
import { RoleMapCreateWithoutParticipationInputObjectSchema } from './RoleMapCreateWithoutParticipationInput.schema';
import { RoleMapUncheckedCreateWithoutParticipationInputObjectSchema } from './RoleMapUncheckedCreateWithoutParticipationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleMapUpsertWithWhereUniqueWithoutParticipationInput> =
  z
    .object({
      where: z.lazy(() => RoleMapWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => RoleMapUpdateWithoutParticipationInputObjectSchema),
        z.lazy(
          () => RoleMapUncheckedUpdateWithoutParticipationInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => RoleMapCreateWithoutParticipationInputObjectSchema),
        z.lazy(
          () => RoleMapUncheckedCreateWithoutParticipationInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const RoleMapUpsertWithWhereUniqueWithoutParticipationInputObjectSchema =
  Schema;
