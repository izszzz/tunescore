import { z } from 'zod';
import { RoleUpdateOneRequiredWithoutRoleMapNestedInputObjectSchema } from './RoleUpdateOneRequiredWithoutRoleMapNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleMapUpdateWithoutParticipationInput> = z
  .object({
    role: z
      .lazy(() => RoleUpdateOneRequiredWithoutRoleMapNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const RoleMapUpdateWithoutParticipationInputObjectSchema = Schema;
