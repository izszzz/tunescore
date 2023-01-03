import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleMapUncheckedCreateWithoutRoleInput> = z
  .object({
    id: z.string().optional(),
    participationId: z.string(),
  })
  .strict();

export const RoleMapUncheckedCreateWithoutRoleInputObjectSchema = Schema;