import { z } from 'zod';
import { RoleArgsObjectSchema } from './RoleArgs.schema';
import { ParticipationArgsObjectSchema } from './ParticipationArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleMapSelect> = z
  .object({
    id: z.boolean().optional(),
    role: z.union([z.boolean(), z.lazy(() => RoleArgsObjectSchema)]).optional(),
    roleId: z.boolean().optional(),
    participation: z
      .union([z.boolean(), z.lazy(() => ParticipationArgsObjectSchema)])
      .optional(),
    participationId: z.boolean().optional(),
  })
  .strict();

export const RoleMapSelectObjectSchema = Schema;
