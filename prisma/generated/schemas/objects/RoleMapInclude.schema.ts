import { z } from 'zod';
import { RoleArgsObjectSchema } from './RoleArgs.schema';
import { ParticipationArgsObjectSchema } from './ParticipationArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleMapInclude> = z
  .object({
    role: z.union([z.boolean(), z.lazy(() => RoleArgsObjectSchema)]).optional(),
    participation: z
      .union([z.boolean(), z.lazy(() => ParticipationArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const RoleMapIncludeObjectSchema = Schema;
