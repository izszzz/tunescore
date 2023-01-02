import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleCountOutputTypeSelect> = z
  .object({
    roleMap: z.boolean().optional(),
  })
  .strict();

export const RoleCountOutputTypeSelectObjectSchema = Schema;
