import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { RoleMapUncheckedUpdateManyWithoutRoleNestedInputObjectSchema } from './RoleMapUncheckedUpdateManyWithoutRoleNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUncheckedUpdateInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    roleMap: z
      .lazy(() => RoleMapUncheckedUpdateManyWithoutRoleNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const RoleUncheckedUpdateInputObjectSchema = Schema;
