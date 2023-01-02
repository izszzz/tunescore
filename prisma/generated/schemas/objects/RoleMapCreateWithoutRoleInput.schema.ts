import { z } from 'zod';
import { ParticipationCreateNestedOneWithoutRoleMapInputObjectSchema } from './ParticipationCreateNestedOneWithoutRoleMapInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleMapCreateWithoutRoleInput> = z
  .object({
    id: z.string().optional(),
    participation: z.lazy(
      () => ParticipationCreateNestedOneWithoutRoleMapInputObjectSchema,
    ),
  })
  .strict();

export const RoleMapCreateWithoutRoleInputObjectSchema = Schema;
