import { z } from 'zod';
import { RoleMapWhereUniqueInputObjectSchema } from './RoleMapWhereUniqueInput.schema';
import { RoleMapUpdateWithoutParticipationInputObjectSchema } from './RoleMapUpdateWithoutParticipationInput.schema';
import { RoleMapUncheckedUpdateWithoutParticipationInputObjectSchema } from './RoleMapUncheckedUpdateWithoutParticipationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleMapUpdateWithWhereUniqueWithoutParticipationInput> =
  z
    .object({
      where: z.lazy(() => RoleMapWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => RoleMapUpdateWithoutParticipationInputObjectSchema),
        z.lazy(
          () => RoleMapUncheckedUpdateWithoutParticipationInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const RoleMapUpdateWithWhereUniqueWithoutParticipationInputObjectSchema =
  Schema;
