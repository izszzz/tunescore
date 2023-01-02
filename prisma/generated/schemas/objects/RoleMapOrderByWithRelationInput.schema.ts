import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RoleOrderByWithRelationInputObjectSchema } from './RoleOrderByWithRelationInput.schema';
import { ParticipationOrderByWithRelationInputObjectSchema } from './ParticipationOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleMapOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    role: z.lazy(() => RoleOrderByWithRelationInputObjectSchema).optional(),
    roleId: z.lazy(() => SortOrderSchema).optional(),
    participation: z
      .lazy(() => ParticipationOrderByWithRelationInputObjectSchema)
      .optional(),
    participationId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const RoleMapOrderByWithRelationInputObjectSchema = Schema;
