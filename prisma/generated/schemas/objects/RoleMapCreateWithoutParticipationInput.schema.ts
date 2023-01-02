import { z } from 'zod';
import { RoleCreateNestedOneWithoutRoleMapInputObjectSchema } from './RoleCreateNestedOneWithoutRoleMapInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleMapCreateWithoutParticipationInput> = z
  .object({
    id: z.string().optional(),
    role: z.lazy(() => RoleCreateNestedOneWithoutRoleMapInputObjectSchema),
  })
  .strict();

export const RoleMapCreateWithoutParticipationInputObjectSchema = Schema;
