import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleMapUncheckedUpdateManyWithoutRoleMapInput> =
  z
    .object({
      roleId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const RoleMapUncheckedUpdateManyWithoutRoleMapInputObjectSchema = Schema;
