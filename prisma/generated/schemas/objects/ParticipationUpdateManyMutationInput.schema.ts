import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParticipationUpdateManyMutationInput> = z
  .object({})
  .strict();

export const ParticipationUpdateManyMutationInputObjectSchema = Schema;
