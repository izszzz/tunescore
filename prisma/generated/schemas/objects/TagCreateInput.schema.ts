import { z } from 'zod';
import { TagMapCreateNestedManyWithoutTagInputObjectSchema } from './TagMapCreateNestedManyWithoutTagInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    tagMap: z
      .lazy(() => TagMapCreateNestedManyWithoutTagInputObjectSchema)
      .optional(),
  })
  .strict();

export const TagCreateInputObjectSchema = Schema;
