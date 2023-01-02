import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleMapCreateManyInput> = z
  .object({
    id: z.string().optional(),
    roleId: z.string(),
    participationId: z.string(),
  })
  .strict();

export const RoleMapCreateManyInputObjectSchema = Schema;
