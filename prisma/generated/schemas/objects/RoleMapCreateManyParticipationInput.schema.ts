import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleMapCreateManyParticipationInput> = z
  .object({
    id: z.string().optional(),
    roleId: z.string(),
  })
  .strict();

export const RoleMapCreateManyParticipationInputObjectSchema = Schema;
