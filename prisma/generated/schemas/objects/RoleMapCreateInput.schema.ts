import { z } from 'zod';
import { RoleCreateNestedOneWithoutRoleMapInputObjectSchema } from './RoleCreateNestedOneWithoutRoleMapInput.schema';
import { ParticipationCreateNestedOneWithoutRoleMapInputObjectSchema } from './ParticipationCreateNestedOneWithoutRoleMapInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleMapCreateInput> = z
  .object({
    id: z.string().optional(),
    role: z.lazy(() => RoleCreateNestedOneWithoutRoleMapInputObjectSchema),
    participation: z.lazy(
      () => ParticipationCreateNestedOneWithoutRoleMapInputObjectSchema,
    ),
  })
  .strict();

export const RoleMapCreateInputObjectSchema = Schema;
