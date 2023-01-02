import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { RoleRelationFilterObjectSchema } from './RoleRelationFilter.schema';
import { RoleWhereInputObjectSchema } from './RoleWhereInput.schema';
import { ParticipationRelationFilterObjectSchema } from './ParticipationRelationFilter.schema';
import { ParticipationWhereInputObjectSchema } from './ParticipationWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleMapWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => RoleMapWhereInputObjectSchema),
        z.lazy(() => RoleMapWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RoleMapWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RoleMapWhereInputObjectSchema),
        z.lazy(() => RoleMapWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    role: z
      .union([
        z.lazy(() => RoleRelationFilterObjectSchema),
        z.lazy(() => RoleWhereInputObjectSchema),
      ])
      .optional(),
    roleId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    participation: z
      .union([
        z.lazy(() => ParticipationRelationFilterObjectSchema),
        z.lazy(() => ParticipationWhereInputObjectSchema),
      ])
      .optional(),
    participationId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const RoleMapWhereInputObjectSchema = Schema;
