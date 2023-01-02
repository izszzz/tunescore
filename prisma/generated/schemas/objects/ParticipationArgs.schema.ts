import { z } from 'zod';
import { ParticipationSelectObjectSchema } from './ParticipationSelect.schema';
import { ParticipationIncludeObjectSchema } from './ParticipationInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParticipationArgs> = z
  .object({
    select: z.lazy(() => ParticipationSelectObjectSchema).optional(),
    include: z.lazy(() => ParticipationIncludeObjectSchema).optional(),
  })
  .strict();

export const ParticipationArgsObjectSchema = Schema;
