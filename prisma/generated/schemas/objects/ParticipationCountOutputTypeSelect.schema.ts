import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParticipationCountOutputTypeSelect> = z
  .object({
    roleMap: z.boolean().optional(),
  })
  .strict();

export const ParticipationCountOutputTypeSelectObjectSchema = Schema;
