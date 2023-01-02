import { z } from 'zod';
import { ParticipationUpdateOneRequiredWithoutRoleMapNestedInputObjectSchema } from './ParticipationUpdateOneRequiredWithoutRoleMapNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleMapUpdateWithoutRoleInput> = z
  .object({
    participation: z
      .lazy(
        () =>
          ParticipationUpdateOneRequiredWithoutRoleMapNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const RoleMapUpdateWithoutRoleInputObjectSchema = Schema;
