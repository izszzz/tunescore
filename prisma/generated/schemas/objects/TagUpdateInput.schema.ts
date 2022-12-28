import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { TagMapUpdateManyWithoutTagNestedInputObjectSchema } from './TagMapUpdateManyWithoutTagNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagUpdateInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    tagMap: z
      .lazy(() => TagMapUpdateManyWithoutTagNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const TagUpdateInputObjectSchema = Schema;
