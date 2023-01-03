import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleMapMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    roleId: z.literal(true).optional(),
    participationId: z.literal(true).optional(),
  })
  .strict();

export const RoleMapMinAggregateInputObjectSchema = Schema;