import { z } from 'zod';
import { RoleUpdateOneRequiredWithoutRoleMapNestedInputObjectSchema } from './RoleUpdateOneRequiredWithoutRoleMapNestedInput.schema';
import { ParticipationUpdateOneRequiredWithoutRoleMapNestedInputObjectSchema } from './ParticipationUpdateOneRequiredWithoutRoleMapNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleMapUpdateInput> = z
  .object({
    role: z
      .lazy(() => RoleUpdateOneRequiredWithoutRoleMapNestedInputObjectSchema)
      .optional(),
    participation: z
      .lazy(
        () =>
          ParticipationUpdateOneRequiredWithoutRoleMapNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const RoleMapUpdateInputObjectSchema = Schema;
