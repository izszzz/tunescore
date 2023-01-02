import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleMapCreateManyRoleInput> = z
  .object({
    id: z.string().optional(),
    participationId: z.string(),
  })
  .strict();

export const RoleMapCreateManyRoleInputObjectSchema = Schema;
