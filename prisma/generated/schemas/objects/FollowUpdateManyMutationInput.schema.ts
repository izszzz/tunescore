import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowUpdateManyMutationInput> = z
  .object({})
  .strict();

export const FollowUpdateManyMutationInputObjectSchema = Schema;
