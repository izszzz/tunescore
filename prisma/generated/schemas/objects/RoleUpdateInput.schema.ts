import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { RoleMapUpdateManyWithoutRoleNestedInputObjectSchema } from './RoleMapUpdateManyWithoutRoleNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUpdateInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    roleMap: z
      .lazy(() => RoleMapUpdateManyWithoutRoleNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const RoleUpdateInputObjectSchema = Schema;
