import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleMapUpdateManyMutationInput> = z
  .object({})
  .strict();

export const RoleMapUpdateManyMutationInputObjectSchema = Schema;