import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { TagMapUncheckedUpdateManyWithoutTagNestedInputObjectSchema } from './TagMapUncheckedUpdateManyWithoutTagNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagUncheckedUpdateInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    tagMap: z
      .lazy(() => TagMapUncheckedUpdateManyWithoutTagNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const TagUncheckedUpdateInputObjectSchema = Schema;
