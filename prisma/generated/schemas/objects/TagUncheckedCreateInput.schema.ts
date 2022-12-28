import { z } from 'zod';
import { TagMapUncheckedCreateNestedManyWithoutTagInputObjectSchema } from './TagMapUncheckedCreateNestedManyWithoutTagInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    tagMap: z
      .lazy(() => TagMapUncheckedCreateNestedManyWithoutTagInputObjectSchema)
      .optional(),
  })
  .strict();

export const TagUncheckedCreateInputObjectSchema = Schema;
