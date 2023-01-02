import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleMapUncheckedCreateWithoutParticipationInput> =
  z
    .object({
      id: z.string().optional(),
      roleId: z.string(),
    })
    .strict();

export const RoleMapUncheckedCreateWithoutParticipationInputObjectSchema =
  Schema;
